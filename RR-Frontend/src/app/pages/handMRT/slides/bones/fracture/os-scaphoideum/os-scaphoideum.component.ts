import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FractureClassificationTypeEnum, FractureFormNotSpecifiedTypeEnum, FractureFormScaphoideumTypeEnum } from '@enums/handMRT/bones';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-os-scaphoideum',
  templateUrl: './os-scaphoideum.component.html',
  styleUrls: ['./os-scaphoideum.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsScaphoideumComponent {
  @Input() model: BonesFindingUiModel;
  fractureClassificationTypeEnum = FractureClassificationTypeEnum;
  fractureFormNotSpecifiedTypeEnum = FractureFormNotSpecifiedTypeEnum;
  fractureFormScaphoideumTypeEnum = FractureFormScaphoideumTypeEnum;

  clearClassificationDetails(value: FractureClassificationTypeEnum): string {
    return this.model.fractureClassificationType !== value ? 'fractureClassificationDetails-block' : '';
  }
}
