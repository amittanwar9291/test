import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { BonesHelperService } from '../bones-helper.service';
import { SpineBonesLocalizerConfig } from '@models/spineMRT/ui/bones/spine-bones-localizer-config.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';
import { omit, compact } from 'lodash';

@Component({
  selector: 'rr-spine-mrt-bones-fracture',
  templateUrl: './fracture.component.html',
  styleUrls: ['./fracture.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  currentSelected: string;

  largeLocalizerSubscription: Subscription;
  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(
    private bonesHelperService: BonesHelperService,
    private spineHelperService: SpineHelperService,
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper
  ) {}

  ngOnInit() {
    this.largeLocalizerSubscription = this.bonesHelperService.largeLocalizerOpenConfig.subscribe(value => {
      if (!value) {
        this.onLocalizerCloseChange();
      }
    });
    this.spineLocalizerPermittedSelectionSubscription = this.spineHelperService.spineLocalizerPermittedSelection.subscribe(
      v => (this.spineLocalizerPermittedSelection = v)
    );
  }

  ngOnDestroy() {
    this.largeLocalizerSubscription.unsubscribe();
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerOpenConfig.next(
      new SpineBonesLocalizerConfig(
        nameof<BonesFindingUiModel>(m => m.spineLocation),
        SpineLocationLogicTypeEnum.OneVertebre,
        'spineMRT.bones.selectVertebraSingle.value'
      )
    );
    this.bonesHelperService.previousSpineLocalizerSelection = this.enumMapper.mapToString(this.model.spineLocation);
  }

  private onLocalizerCloseChange(): void {
    if (compact(Object.values(this.model.spineLocation)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocation));
    }
    if (
      this.bonesHelperService.previousSpineLocalizerSelection &&
      this.bonesHelperService.previousSpineLocalizerSelection !== this.enumMapper.mapToString(this.model.spineLocation)
    ) {
      this.clearAllFindingData();
      this.clearAllFindingErrorsExceptLocalizer();
      this.bonesHelperService.previousSpineLocalizerSelection = null;
    }
  }

  private clearAllFindingData(): void {
    const omittedProperties = [...findingBaseProperties, nameof<BonesFindingUiModel>(m => m.spineLocation)];
    Object.assign(this.model, omit(new BonesFindingUiModel(), omittedProperties));
  }

  private clearAllFindingErrorsExceptLocalizer(): void {
    Object.keys(this.model).forEach(modelProp => {
      if (modelProp !== nameof<BonesFindingUiModel>(m => m.spineLocation)) {
        this.validationHelperService.removeError(modelProp);
      }
    });
  }

  checkWhichLocationSelected(): string {
    switch (true) {
      case this.model.spineLocation.c0:
        this.currentSelected = 'C0';
        return this.currentSelected;
      case this.model.spineLocation.c1:
        this.currentSelected = 'C1';
        return this.currentSelected;
      case this.model.spineLocation.c2:
        this.currentSelected = 'C2';
        return this.currentSelected;
      case this.model.spineLocation.osSacrum:
        this.currentSelected = 'Os sacrum';
        return this.currentSelected;
      case this.model.spineLocation.osCoccygis:
        this.currentSelected = 'Os coccygis';
        return this.currentSelected;
      default:
        for (const vertebre in this.model.spineLocation) {
          if (this.model.spineLocation[vertebre]) {
            this.currentSelected = vertebre.toUpperCase();
            return 'other';
          }
        }
        break;
    }
    this.currentSelected = 'none';
    return 'none';
  }
}
