import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  AoClassificationTypeEnum,
  FractureFormDetailsTypeEnum,
  FractureFormSubTypeEnum,
  FractureFormTypeEnum,
  NotFurtherSpecifiedTypeEnum
} from '@enums/elbowMRT/bones';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-distal-humerus',
  templateUrl: './distal-humerus.component.html',
  styleUrls: ['./distal-humerus.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DistalHumerusComponent {
  @Input() model: BonesFindingUiModel;

  aoClassificationTypeEnum = AoClassificationTypeEnum;
  notFurtherSpecifiedTypeEnum = NotFurtherSpecifiedTypeEnum;
  fractureFormTypeEnum = FractureFormTypeEnum;
  fractureFormSubTypeEnum = FractureFormSubTypeEnum;
  fractureFormDetailsTypeEnum = FractureFormDetailsTypeEnum;

  clearAOClassificationTypeDetails(value: AoClassificationTypeEnum): string {
    return this.model.aoClassificationType !== value
      ? 'aoClassificationTypeDetails-block fractureFormSubType-block DistalHumeralFractureNotFurtherSpecified-block'
      : '';
  }
}
