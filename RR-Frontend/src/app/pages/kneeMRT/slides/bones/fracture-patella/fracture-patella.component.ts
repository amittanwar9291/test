import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { AvulsionFractureTypeEnum, EvaluationFractureTypeEnum, FractureDistTypeEnum } from '@enums/kneeMRT/bones';

import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';

import {
  PatellaFractureBTypeEnum,
  PatellaFractureCTypeEnum,
  PatellaFractureDetailsTypeEnum,
  HorizontalFractureTypeEnum
} from '@enums/kneeMRT/bones/';

@Component({
  selector: 'rr-fracture-patella',
  templateUrl: './fracture-patella.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FracturePatellaComponent {
  @Input() model: KneeBonesFindingUiModel;

  evaluationFractureType: typeof EvaluationFractureTypeEnum;
  fractureDistType: typeof FractureDistTypeEnum;
  avulsionFractureType: typeof AvulsionFractureTypeEnum;
  patellaFractureBType: typeof PatellaFractureBTypeEnum;
  patellaFractureCType: typeof PatellaFractureCTypeEnum;
  patellaFractureDetailsType: typeof PatellaFractureDetailsTypeEnum;
  horizontalFractureType: typeof HorizontalFractureTypeEnum;

  constructor() {
    this.evaluationFractureType = EvaluationFractureTypeEnum;
    this.fractureDistType = FractureDistTypeEnum;
    this.avulsionFractureType = AvulsionFractureTypeEnum;
    this.patellaFractureBType = PatellaFractureBTypeEnum;
    this.patellaFractureCType = PatellaFractureCTypeEnum;
    this.patellaFractureDetailsType = PatellaFractureDetailsTypeEnum;
    this.horizontalFractureType = HorizontalFractureTypeEnum;
  }
}
