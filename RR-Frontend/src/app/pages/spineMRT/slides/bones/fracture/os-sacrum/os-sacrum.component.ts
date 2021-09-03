import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { NoSpecTypeEnum, OsSacrumFractureFormTypeEnum, OsSacrumFractureTypeEnum } from '@enums/spineMRT/bones';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-os-sacrum',
  templateUrl: './os-sacrum.component.html',
  styleUrls: ['./os-sacrum.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsSacrumComponent {
  @Input() model: BonesFindingUiModel;

  osSacrumFractureTypeEnum = OsSacrumFractureTypeEnum;
  osSacrumFractureFormTypeEnum = OsSacrumFractureFormTypeEnum;
  noSpecTypeEnum = NoSpecTypeEnum;
}
