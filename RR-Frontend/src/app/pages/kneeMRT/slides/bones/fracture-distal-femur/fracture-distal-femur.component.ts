import { Component, Input, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import {
  FemurExtraarticularTypeEnum,
  SimpleFractureTypeEnum,
  WedgeFractureTypeEnum,
  FemurPartiallyArticularTypeEnum,
  CoronaryFractureTypeEnum,
  FemurArticularTypeEnum,
  ArticularOneFractureLineTypeEnum,
  ArticularMultipleFractureLinesTypeEnum,
  FractureDistTypeEnum,
  EvaluationFractureTypeEnum,
  SimpleLateralMedialFractureTypeEnum
} from '@enums/kneeMRT/bones/';

import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';

@Component({
  selector: 'rr-fracture-distal-femur',
  templateUrl: './fracture-distal-femur.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureDistalFemurFindingComponent {
  @Input() model: KneeBonesFindingUiModel;
  @ViewChild('autosaveForm', { static: true }) ngForm: NgForm;

  evaluationFractureType: typeof EvaluationFractureTypeEnum;
  fractureDistType: typeof FractureDistTypeEnum;
  femurExtraarticularType: typeof FemurExtraarticularTypeEnum;
  simpleFractureType: typeof SimpleFractureTypeEnum;
  wedgeFractureType: typeof WedgeFractureTypeEnum;
  femurPartiallyArticularType: typeof FemurPartiallyArticularTypeEnum;
  simpleLateralFractureType: typeof SimpleLateralMedialFractureTypeEnum;
  simpleMedialFractureType: typeof SimpleLateralMedialFractureTypeEnum;
  coronaryFractureType: typeof CoronaryFractureTypeEnum;
  femurArticularType: typeof FemurArticularTypeEnum;
  articularOneFractureLineType: typeof ArticularOneFractureLineTypeEnum;
  articularMultipleFractureLinesType: typeof ArticularMultipleFractureLinesTypeEnum;

  constructor() {
    this.evaluationFractureType = EvaluationFractureTypeEnum;
    this.fractureDistType = FractureDistTypeEnum;
    this.femurExtraarticularType = FemurExtraarticularTypeEnum;
    this.simpleFractureType = SimpleFractureTypeEnum;
    this.wedgeFractureType = WedgeFractureTypeEnum;
    this.femurPartiallyArticularType = FemurPartiallyArticularTypeEnum;
    this.simpleLateralFractureType = SimpleLateralMedialFractureTypeEnum;
    this.simpleMedialFractureType = SimpleLateralMedialFractureTypeEnum;
    this.coronaryFractureType = CoronaryFractureTypeEnum;
    this.femurArticularType = FemurArticularTypeEnum;
    this.articularOneFractureLineType = ArticularOneFractureLineTypeEnum;
    this.articularMultipleFractureLinesType = ArticularMultipleFractureLinesTypeEnum;
  }

  resetModel(...args: string[]) {
    if (args.includes('femurExtraarticularType')) {
      this.model.femurExtraarticularType = FemurExtraarticularTypeEnum.None;
      this.model.wedgeFractureType = WedgeFractureTypeEnum.None;
      this.model.simpleFractureType = SimpleFractureTypeEnum.None;
    }

    if (args.includes('femurPartiallyArticularType')) {
      this.model.femurPartiallyArticularType = FemurPartiallyArticularTypeEnum.None;
      this.model.simpleLateralFractureType = SimpleLateralMedialFractureTypeEnum.None;
      this.model.simpleMedialFractureType = SimpleLateralMedialFractureTypeEnum.None;
      this.model.coronaryFractureType = CoronaryFractureTypeEnum.None;
    }

    if (args.includes('femurArticularType')) {
      this.model.femurArticularType = FemurArticularTypeEnum.None;
      this.model.articularOneFractureLineType = ArticularOneFractureLineTypeEnum.None;
      this.model.articularMultipleFractureLinesType = ArticularMultipleFractureLinesTypeEnum.None;
    }

    if (args.includes('fractureDistType')) {
      this.model.fractureDistType = FractureDistTypeEnum.None;
    }
  }
}
