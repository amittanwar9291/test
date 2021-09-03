import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  DorsomedialDrugTypeEnum,
  FractureClassificationTypeEnum,
  FractureFormNotSpecifiedTypeEnum,
  FractureFormSubTypeEnum,
  FractureFormTypeEnum
} from '@enums/handMRT/bones';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-distaler-radius',
  templateUrl: './distaler-radius.component.html',
  styleUrls: ['./distaler-radius.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DistalerRadiusComponent {
  @Input() model: BonesFindingUiModel;

  fractureClassificationTypeEnum = FractureClassificationTypeEnum;
  fractureFormTypeEnum = FractureFormTypeEnum;
  fractureFormSubTypeEnum = FractureFormSubTypeEnum;
  fractureNotSpecifiedTypeEnum = FractureFormNotSpecifiedTypeEnum;
  dorsomedialDrugTypeEnum = DorsomedialDrugTypeEnum;

  clearDetails(value: FractureClassificationTypeEnum): string {
    return this.model.fractureClassificationType !== value ? 'fractureForm-block fractureFormDetails-block' : '';
  }
}
