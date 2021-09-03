import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DistalTibiaFractureTypeEnum, FractureFormSubTypeEnum, FractureTypeTypeEnum } from '@enums/feetMRT/bones/fracture';
import { FractureClassificationTypeEnum } from '@enums/feetMRT/bones/fracture/fracture-classification-type.enum';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-fibula',
  templateUrl: './fibula.component.html',
  styleUrls: ['./fibula.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FibulaComponent {
  @Input() model: BonesFindingUiModel;

  fractureClassificationTypeEnum: typeof FractureClassificationTypeEnum;
  distalTibiaFractureType: typeof DistalTibiaFractureTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums() {
    this.fractureClassificationTypeEnum = FractureClassificationTypeEnum;
    this.distalTibiaFractureType = DistalTibiaFractureTypeEnum;
  }
}
