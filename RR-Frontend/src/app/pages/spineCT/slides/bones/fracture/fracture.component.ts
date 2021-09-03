import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/spineCT/ui/bones/bones-finding-ui.model';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { BonesLargeLocalizerConfig } from '@models/spineCT/ui/bones/bones-large-localizer-config.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { Subscription } from 'rxjs';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { BonesHelperService } from '../bones-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';
import { nameof } from 'ts-simple-nameof';
import { omit } from 'lodash';

@Component({
  selector: 'rr-spine-ct-fracture',
  templateUrl: './fracture.component.html',
  styleUrls: ['./fracture.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  currentSelected: string;
  selectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;
  subscriptions: Subscription[] = [];
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(
    private spineHelperService: SpineCtHelperService,
    private bonesHelperService: BonesHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.spineHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v)),
      this.bonesHelperService.largeLocalizerConfig.subscribe(() => this.onLocalizerClosed())
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerConfig.next(
      new BonesLargeLocalizerConfig(
        this.model.spineLocation,
        SpineLocationLogicTypeEnum.OneVertebre,
        SpineSelectionAccessibilityModeEnum.C0toOsCoccygis,
        'spineCT.bones.localization.value',
        'spineCT.bones.pleaseSelectAVertebraSingleChoice.value'
      )
    );
    this.bonesHelperService.previousSpineLocalizerSelection = this.enumMapper.mapToString(this.model.spineLocation);
  }

  onLocalizerClosed() {
    if (
      this.bonesHelperService.previousSpineLocalizerSelection &&
      this.bonesHelperService.previousSpineLocalizerSelection !== this.enumMapper.mapToString(this.model.spineLocation)
    ) {
      const omittedProperties = [...findingBaseProperties, nameof<BonesFindingUiModel>(p => p.spineLocation)];
      Object.assign(this.model, omit(new BonesFindingUiModel(), omittedProperties));
      this.validationHelperService.removeAllErrorsInFinding(this.model.validationId);
    }
    this.bonesHelperService.previousSpineLocalizerSelection = null;
  }

  checkWhichSelected(): string {
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
        this.currentSelected = 'OS Sacrum';
        return this.currentSelected;
      case this.model.spineLocation.osCoccygis:
        this.currentSelected = 'OS Coccygis';
        return this.currentSelected;
      default:
        for (const vertebre in this.model.spineLocation) {
          if (this.model.spineLocation[vertebre] === true) {
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
