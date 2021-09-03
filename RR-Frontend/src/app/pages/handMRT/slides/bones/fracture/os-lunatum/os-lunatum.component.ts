import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FractureClassificationTypeEnum, FractureFormNotSpecifiedTypeEnum } from '@enums/handMRT/bones';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-os-lunatum',
  templateUrl: './os-lunatum.component.html',
  styleUrls: ['./os-lunatum.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsLunatumComponent {
  @Input() model: BonesFindingUiModel;

  fractureClassificationTypeEnum = FractureClassificationTypeEnum;
  fractureFormNotSpecifiedTypeEnum = FractureFormNotSpecifiedTypeEnum;

  resetFractureNotSpecified(value: FractureClassificationTypeEnum): string {
    return this.model.fractureClassificationType !== value ? 'fractureFormNotSpecifiedType-block' : '';
  }
}
