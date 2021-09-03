import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  DistalTibiaFractureTypeEnum,
  FractureClassificationTypeEnum,
  FractureFormSubTypeEnum,
  FractureTypeTypeEnum
} from '@enums/feetMRT/bones/fracture';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-talus',
  templateUrl: './talus.component.html',
  styleUrls: ['./talus.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TalusComponent {
  @Input() model: BonesFindingUiModel;

  fractureClassificationType: typeof FractureClassificationTypeEnum;
  distalTibiaFractureType: typeof DistalTibiaFractureTypeEnum;
  fractureTypeType: typeof FractureTypeTypeEnum;
  fractureFormSubType: typeof FractureFormSubTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums() {
    this.fractureClassificationType = FractureClassificationTypeEnum;
    this.distalTibiaFractureType = DistalTibiaFractureTypeEnum;
    this.fractureTypeType = FractureTypeTypeEnum;
    this.fractureFormSubType = FractureFormSubTypeEnum;
  }

  clearFractureFormSubType() {
    this.model.fractureFormSubType = this.fractureFormSubType.None;
  }

  clearFractureForm() {
    this.model.fractureTypeType = this.fractureTypeType.None;
    this.clearFractureFormSubType();
  }

  isFractureClassificatioNotFurtherOrNone(): boolean {
    return [this.fractureClassificationType.TalusFractureNotFurtherSpecified, this.fractureClassificationType.None].includes(
      this.model.fractureClassificationType
    );
  }
}
