import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  AoClassificationTypeEnum,
  FractureFormDetailsTypeEnum,
  FractureFormTypeEnum,
  NotFurtherSpecifiedTypeEnum
} from '@enums/elbowMRT/bones';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-proximal-ulna',
  templateUrl: './proximal-ulna.component.html',
  styleUrls: ['./proximal-ulna.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ProximalUlnaComponent {
  @Input() model: BonesFindingUiModel;

  aoClassificationTypeEnum = AoClassificationTypeEnum;
  notFurtherSpecifiedTypeEnum = NotFurtherSpecifiedTypeEnum;
  fractureFormTypeEnum = FractureFormTypeEnum;
  fractureFormDetailsTypeEnum = FractureFormDetailsTypeEnum;

  clearAOClassificationTypeDetails(value: AoClassificationTypeEnum): string {
    return this.model.aoClassificationType !== value
      ? 'ProximalUlnarFractureNotFurtherSpecified-block fractureFormType-block fractureFormDetailsType-block'
      : '';
  }
}
