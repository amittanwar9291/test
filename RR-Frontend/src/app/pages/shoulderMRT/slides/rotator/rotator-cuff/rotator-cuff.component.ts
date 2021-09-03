import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { AppConfig } from 'app/app.config';

import { RotatorFindingUiModel } from '@models/shoulderMRT/ui/rotator/rotator-finding-ui.model';

import {
  AtrophyClassificationTypeEnum,
  BayneClassificationTypeEnum,
  BursaSideTypeEnum,
  ClassificationAccGoutallierTypeEnum,
  ClassificationAccZanettiTypeEnum,
  CrossTypeEnum,
  InsertionOrFootprintTypeEnum,
  LafosseClassificationTypeEnum,
  LengthwiseTypeEnum,
  LesionTypeEnum,
  MorphologyTypeEnum,
  PartialLesionLocationTypeEnum,
  PartialLesionUpperThirdTypeEnum,
  PartialRuptureTypeEnum,
  PatteClassificationTypeEnum,
  RotatorCuffClassificationTypeEnum,
  SnyderClassificationTypeEnum,
  TendonPartTypeEnum,
  TendonRetractionBayneClassificationTypeEnum,
  TendonRetractionClassificationByPatentTypeEnum,
  TendonRetractionClassificationTypeEnum
} from '@enums/shoulderMRT/rotator/rotator-cuff';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-rotator-cuff',
  templateUrl: './rotator-cuff.component.html',
  styleUrls: ['./../rotator.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class RotatorCuffComponent {
  @Input() model: RotatorFindingUiModel;
  @Input() localizationPatteVersion: string;

  atrophyClassificationType: typeof AtrophyClassificationTypeEnum;
  lesionType: typeof LesionTypeEnum;
  previousPatteClassificationType: PatteClassificationTypeEnum;
  patteClassificationType: typeof PatteClassificationTypeEnum;
  tendonRetractionClassificationType: typeof TendonRetractionClassificationTypeEnum;
  tendonRetractionBayneClassificationType: typeof TendonRetractionBayneClassificationTypeEnum;
  tendonRetractionClassificationByPatentType: typeof TendonRetractionClassificationByPatentTypeEnum;
  classificationAccGoutallierType: typeof ClassificationAccGoutallierTypeEnum;
  classificationAccZanettiType: typeof ClassificationAccZanettiTypeEnum;
  partialLesionLocationType: typeof PartialLesionLocationTypeEnum;
  tendonPartType: typeof TendonPartTypeEnum;
  partialRuptureType: typeof PartialRuptureTypeEnum;
  crossType: typeof CrossTypeEnum;
  lengthwiseType: typeof LengthwiseTypeEnum;
  insertionOrFootprintType: typeof InsertionOrFootprintTypeEnum;
  rotatorCuffClassificationType: typeof RotatorCuffClassificationTypeEnum;
  bayneClassificationType: typeof BayneClassificationTypeEnum;
  snyderClassificationType: typeof SnyderClassificationTypeEnum;
  lafosseClassificationType: typeof LafosseClassificationTypeEnum;
  morphologyType: typeof MorphologyTypeEnum;
  partialLesionUpperThirdType: typeof PartialLesionUpperThirdTypeEnum;
  bursaSideType: typeof BursaSideTypeEnum;

  constructor(private validationHelperService: ValidationHelperService) {
    this.atrophyClassificationType = AtrophyClassificationTypeEnum;
    this.lesionType = LesionTypeEnum;
    this.patteClassificationType = PatteClassificationTypeEnum;
    this.tendonRetractionClassificationType = TendonRetractionClassificationTypeEnum;
    this.tendonRetractionBayneClassificationType = TendonRetractionBayneClassificationTypeEnum;
    this.tendonRetractionClassificationByPatentType = TendonRetractionClassificationByPatentTypeEnum;
    this.classificationAccGoutallierType = ClassificationAccGoutallierTypeEnum;
    this.classificationAccZanettiType = ClassificationAccZanettiTypeEnum;
    this.partialLesionLocationType = PartialLesionLocationTypeEnum;
    this.tendonPartType = TendonPartTypeEnum;
    this.partialRuptureType = PartialRuptureTypeEnum;
    this.crossType = CrossTypeEnum;
    this.lengthwiseType = LengthwiseTypeEnum;
    this.insertionOrFootprintType = InsertionOrFootprintTypeEnum;
    this.rotatorCuffClassificationType = RotatorCuffClassificationTypeEnum;
    this.bayneClassificationType = BayneClassificationTypeEnum;
    this.snyderClassificationType = SnyderClassificationTypeEnum;
    this.lafosseClassificationType = LafosseClassificationTypeEnum;
    this.morphologyType = MorphologyTypeEnum;
    this.partialLesionUpperThirdType = PartialLesionUpperThirdTypeEnum;
    this.bursaSideType = BursaSideTypeEnum;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.shoulderMRT.rotator.fileUpload;
  }

  clearPartialRuptureType(): void {
    if (
      this.model.partialLesionLocationType !== PartialLesionLocationTypeEnum.Supraspinatus &&
      this.model.tendonPartType === TendonPartTypeEnum.PartialThicknessTear
    ) {
      this.model.partialRuptureType = PartialRuptureTypeEnum.None;
    }
  }

  clearTendonReactionAndAtrophyBlock(): void {
    if (this.previousPatteClassificationType !== this.model.patteClassificationType) {
      this.model.isTendonRetraction = false;
      this.model.isAccordingToBayneAndBateman = false;
      this.model.tendonRetractionBayneClassificationType = TendonRetractionBayneClassificationTypeEnum.None;
      this.model.tendonRetractionClassificationByPatentType = TendonRetractionClassificationByPatentTypeEnum.None;
      this.model.tendonRetractionClassificationType = TendonRetractionClassificationTypeEnum.None;
      this.model.lengthwise = LengthwiseTypeEnum.None;

      this.model.isAtrophy = false;
      this.model.isAccordingToGoutallier = false;
      this.model.classificationAccGoutallierType = ClassificationAccGoutallierTypeEnum.None;
      this.model.atrophyClassificationType = AtrophyClassificationTypeEnum.None;
      this.model.classificationAccZanettiType = ClassificationAccZanettiTypeEnum.None;

      this.clearClassificationValidationErrors();
    }

    this.previousPatteClassificationType = this.model.patteClassificationType;
  }

  clearClassificationValidationErrors(): void {
    this.validationHelperService.removeError(nameof<RotatorFindingUiModel>(m => m.tendonRetractionClassificationByPatentType));
    this.validationHelperService.removeError(nameof<RotatorFindingUiModel>(m => m.tendonRetractionBayneClassificationType));
    this.validationHelperService.removeError(nameof<RotatorFindingUiModel>(m => m.classificationAccGoutallierType));
    this.validationHelperService.removeError(nameof<RotatorFindingUiModel>(m => m.classificationAccZanettiType));
  }

  get isInsertionOrFootprintTypeDisabled(): boolean {
    return !(
      this.model.crossType === CrossTypeEnum.SnyderA &&
      (this.model.lengthwise === LengthwiseTypeEnum.InsertionOrFootprint || this.model.lengthwise === LengthwiseTypeEnum.Proximal)
    );
  }

  get isPatteClassSegmentOneToFourSelected(): boolean {
    return (
      this.model.patteClassificationType === PatteClassificationTypeEnum.Segment1 ||
      this.model.patteClassificationType === PatteClassificationTypeEnum.Segment2
    );
  }

  get isPatteClassSegmentFiveToSixSelected(): boolean {
    return (
      this.model.patteClassificationType === PatteClassificationTypeEnum.Segment3 ||
      this.model.patteClassificationType === PatteClassificationTypeEnum.Segment4 ||
      this.model.patteClassificationType === PatteClassificationTypeEnum.Segment5 ||
      this.model.patteClassificationType === PatteClassificationTypeEnum.Segment6
    );
  }
}
