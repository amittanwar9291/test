import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import {
  ClassificationArcusVertebraeInjuryTypeEnum,
  LocalizationSideTypeEnum,
  LocalizationVertebralArchTypeEnum
} from '@enums/spineMRT/bones';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { BonesHelperService } from '../bones-helper.service';
import { SpineBonesLocalizerConfig } from '@models/spineMRT/ui/bones/spine-bones-localizer-config.model';
import { compact } from 'lodash';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-vertebral-arch-pathology',
  templateUrl: './vertebral-arch-pathology.component.html',
  styleUrls: ['./vertebral-arch-pathology.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VertebralArchPathologyComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  localizationSideTypeEnum = LocalizationSideTypeEnum;
  localizationVertebralArchTypeEnum = LocalizationVertebralArchTypeEnum;
  classificationArcusVertebraeInjuryTypeEnum = ClassificationArcusVertebraeInjuryTypeEnum;

  largeLocalizerSubscription: Subscription;
  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(
    private bonesHelperService: BonesHelperService,
    private spineHelperService: SpineHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit() {
    this.largeLocalizerSubscription = this.bonesHelperService.largeLocalizerOpenConfig.subscribe(value => {
      if (!value && compact(Object.values(this.model.spineLocation)).length !== 0) {
        this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocation));
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
        SpineLocationLogicTypeEnum.VertebreEach,
        'spineMRT.bones.selectVertebraMultiple.value'
      )
    );
  }

  isPediculolysis(): boolean {
    return this.model.localizationInTheVertebralArchType === this.localizationVertebralArchTypeEnum.Pediculolysis;
  }

  isPediculolysisOrSpondylolysis(): boolean {
    return [this.localizationVertebralArchTypeEnum.Pediculolysis, this.localizationVertebralArchTypeEnum.Spondylolysis].includes(
      this.model.localizationInTheVertebralArchType
    );
  }

  isGrade(value: ClassificationArcusVertebraeInjuryTypeEnum): boolean {
    return this.model.classificationArcusVertebraeInjuryType === value;
  }

  clearClassification(value: LocalizationVertebralArchTypeEnum): string {
    return this.model.localizationInTheVertebralArchType === value ? '' : 'classification-block classification-Details';
  }
}
