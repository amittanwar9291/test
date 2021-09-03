import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  FractureClassificationTypeEnum,
  FractureFormNotSpecifiedTypeEnum,
  FractureFormSubTypeEnum,
  FractureFormTypeEnum
} from '@enums/handMRT/bones';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-distal-ulna',
  templateUrl: './distal-ulna.component.html',
  styleUrls: ['./distal-ulna.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DistalUlnaComponent {
  @Input() model: BonesFindingUiModel;

  fractureClassificationTypeEnum = FractureClassificationTypeEnum;
  fractureFormTypeEnum = FractureFormTypeEnum;
  fractureFormSubTypeEnum = FractureFormSubTypeEnum;
  fractureNotSpecifiedTypeEnum = FractureFormNotSpecifiedTypeEnum;

  clearDetails(value: FractureClassificationTypeEnum): string {
    return this.model.fractureClassificationType !== value ? 'fractureForm-block fractureFormDetails-block' : '';
  }
}
