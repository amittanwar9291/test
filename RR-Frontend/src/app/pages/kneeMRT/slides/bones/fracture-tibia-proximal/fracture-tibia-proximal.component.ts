import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import {
  AvulsionFractureTypeEnum,
  FractureTypeEnum,
  EvaluationFractureTypeEnum,
  FractureDistTypeEnum,
  MetaphysealMultifragmentaryTypeEnum,
  RatingFractureDetailsTypeEnum,
  TibiaExtraarticularTypeEnum,
  MetaphysealOneFragmentTypeEnum,
  TibiaPartiallyArticularTypeEnum,
  ImpressionTypeEnum,
  TibiaArticularTypeEnum,
  SimplyArticulateTypeEnum
} from '@enums/kneeMRT/bones';

import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';

@Component({
  selector: 'rr-fracture-tibia-proximal',
  templateUrl: './fracture-tibia-proximal.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureTibiaAndFibulaFindingComponent implements OnInit {
  @Input() model: KneeBonesFindingUiModel;
  evaluationFractureTypePreviousValue: EvaluationFractureTypeEnum;

  tibiaExtraarticularType: typeof TibiaExtraarticularTypeEnum;
  metaphysealOneFragmentType: typeof MetaphysealOneFragmentTypeEnum;
  metaphysealMultifragmentaryType: typeof MetaphysealMultifragmentaryTypeEnum;
  multifragmentaryFractureType: typeof FractureTypeEnum;
  ratingFractureDetailsType: typeof RatingFractureDetailsTypeEnum;
  avulsionFractureType: typeof AvulsionFractureTypeEnum;
  tibiaPartiallyArticularType: typeof TibiaPartiallyArticularTypeEnum;
  fissionFractureType: typeof FractureTypeEnum;
  impressionType: typeof ImpressionTypeEnum;
  fissionAndImpressionFractureType: typeof FractureTypeEnum;
  tibiaArticularType: typeof TibiaArticularTypeEnum;
  evaluationFractureType: typeof EvaluationFractureTypeEnum;
  fractureDistType: typeof FractureDistTypeEnum;
  simplyArticulateType: typeof SimplyArticulateTypeEnum;

  constructor() {
    this.tibiaExtraarticularType = TibiaExtraarticularTypeEnum;
    this.metaphysealOneFragmentType = MetaphysealOneFragmentTypeEnum;
    this.metaphysealMultifragmentaryType = MetaphysealMultifragmentaryTypeEnum;
    this.multifragmentaryFractureType = FractureTypeEnum;
    this.ratingFractureDetailsType = RatingFractureDetailsTypeEnum;
    this.avulsionFractureType = AvulsionFractureTypeEnum;
    this.tibiaPartiallyArticularType = TibiaPartiallyArticularTypeEnum;
    this.fissionFractureType = FractureTypeEnum;
    this.impressionType = ImpressionTypeEnum;
    this.fissionAndImpressionFractureType = FractureTypeEnum;
    this.tibiaArticularType = TibiaArticularTypeEnum;
    this.evaluationFractureType = EvaluationFractureTypeEnum;
    this.fractureDistType = FractureDistTypeEnum;
    this.simplyArticulateType = SimplyArticulateTypeEnum;
  }

  ngOnInit() {
    this.evaluationFractureTypePreviousValue = this.model.evaluationFractureType;
  }

  resetModel(...args: string[]) {
    if (this.evaluationFractureTypePreviousValue === this.model.evaluationFractureType) {
      return;
    }

    if (args.includes('tibiaExtraarticularType')) {
      this.model.tibiaExtraarticularType = TibiaExtraarticularTypeEnum.None;
      this.model.avulsionFractureType = AvulsionFractureTypeEnum.None;
      this.model.metaphysealOneFragmentType = MetaphysealOneFragmentTypeEnum.None;
      this.model.metaphysealMultifragmentaryType = MetaphysealMultifragmentaryTypeEnum.None;
      this.model.ratingFractureDetailsType = RatingFractureDetailsTypeEnum.None;
    }

    if (args.includes('tibiaPartiallyArticularType')) {
      this.model.tibiaPartiallyArticularType = TibiaPartiallyArticularTypeEnum.None;
      this.model.fissionFractureType = FractureTypeEnum.None;
      this.model.impressionType = ImpressionTypeEnum.None;
      this.model.tibiaPartiallyArticularType = TibiaPartiallyArticularTypeEnum.None;
      this.model.ratingFractureDetailsType = RatingFractureDetailsTypeEnum.None;
      this.model.fissionAndImpressionFractureType = FractureTypeEnum.None;
      this.model.lateralImpressionFractureDepthInMm = null;
      this.model.medialImpressionFractureDepthInMm = null;
      this.model.obliqueImpressionFractureDepthInMm = null;
    }

    if (args.includes('tibiaArticularType')) {
      this.model.tibiaArticularType = TibiaArticularTypeEnum.None;
      this.model.simplyArticulateType = SimplyArticulateTypeEnum.None;
      this.model.multifragmentaryFractureType = FractureTypeEnum.None;
      this.model.ratingFractureDetailsType = RatingFractureDetailsTypeEnum.None;
    }

    if (args.includes('fractureDistType')) {
      this.model.fractureDistType = FractureDistTypeEnum.None;
    }
    this.evaluationFractureTypePreviousValue = this.model.evaluationFractureType;
  }
}
