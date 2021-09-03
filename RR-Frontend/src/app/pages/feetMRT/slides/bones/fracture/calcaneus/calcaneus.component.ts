import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DistalTibiaFractureTypeEnum } from '@enums/feetMRT/bones/fracture/distal-tibia-fracture-type.enum';
import { FractureClassificationTypeEnum } from '@enums/feetMRT/bones/fracture/fracture-classification-type.enum';
import { FractureFormSubTypeEnum } from '@enums/feetMRT/bones/fracture/fracture-form-sub-type.enum';
import { FractureTypeTypeEnum } from '@enums/feetMRT/bones/fracture/fracture-type-type.enum';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-calcaneus',
  templateUrl: './calcaneus.component.html',
  styleUrls: ['./calcaneus.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CalcaneusComponent {
  @Input() model: BonesFindingUiModel;

  fractureTypeType: typeof FractureTypeTypeEnum;
  fractureFormSubType: typeof FractureFormSubTypeEnum;
  distalTibiaFractureType: typeof DistalTibiaFractureTypeEnum;
  fractureClassificationType: typeof FractureClassificationTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  private initializeEnums() {
    this.fractureTypeType = FractureTypeTypeEnum;
    this.fractureFormSubType = FractureFormSubTypeEnum;
    this.distalTibiaFractureType = DistalTibiaFractureTypeEnum;
    this.fractureClassificationType = FractureClassificationTypeEnum;
  }

  clearFractureForm() {
    this.model.fractureTypeType = FractureTypeTypeEnum.None;
  }
}
