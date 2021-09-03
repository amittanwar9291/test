import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FractureClassificationTypeEnum, FractureFormNotSpecifiedTypeEnum } from '@enums/handMRT/bones';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-os-triquetrum',
  templateUrl: './os-triquetrum.component.html',
  styleUrls: ['./os-triquetrum.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsTriquetrumComponent {
  @Input() model: BonesFindingUiModel;

  fractureClassificationTypeEnum = FractureClassificationTypeEnum;
  fractureFormNotSpecifiedTypeEnum = FractureFormNotSpecifiedTypeEnum;
}
