import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { LocalizationSagittalTypeEnum } from '@enums/spineMRT/bones';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { Subscription } from 'rxjs';
import { BonesHelperService } from '../bones-helper.service';
import { SpineBonesLocalizerConfig } from '@models/spineMRT/ui/bones/spine-bones-localizer-config.model';
import { compact } from 'lodash';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-posttherapeutic-change',
  templateUrl: './posttherapeutic-change.component.html',
  styleUrls: ['./posttherapeutic-change.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PosttherapeuticChangeComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  localizationSagittalTypeEnum = LocalizationSagittalTypeEnum;
  logicTypeEnum = SpineLocationLogicTypeEnum;

  largeLocalizerSubscription: Subscription;
  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(
    private validationHelperService: ValidationHelperService,
    private bonesHelperService: BonesHelperService,
    private spineHelperService: SpineHelperService
  ) {}

  ngOnInit() {
    this.largeLocalizerSubscription = this.bonesHelperService.largeLocalizerOpenConfig.subscribe(value => {
      if (!value) {
        if (compact(Object.values(this.model.spineLocation)).length !== 0) {
          this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocation));
        }
        if (compact(Object.values(this.model.spineLocation2)).length !== 0) {
          this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocation2));
        }
        if (compact(Object.values(this.model.spineLocation3)).length !== 0) {
          this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocation3));
        }
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

  openLargeLocalizer(localizerModel: string, logicType: SpineLocationLogicTypeEnum, localizationDescription: string) {
    this.bonesHelperService.largeLocalizerOpenConfig.next(
      new SpineBonesLocalizerConfig(localizerModel, logicType, localizationDescription)
    );
  }

  clearLocalizer(field: string) {
    this.model[field] = new SpineLocation();
    this.validationHelperService.removeError(field);
  }
}
