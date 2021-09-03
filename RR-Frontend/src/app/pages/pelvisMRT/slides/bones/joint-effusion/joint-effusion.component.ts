import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import { QuantityTypeEnum } from '@enums/pelvisMRT/bones/joint-effusion';

@Component({
  selector: 'rr-joint-effusion',
  templateUrl: './joint-effusion.component.html',
  styleUrls: ['./../bones.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class JointEffusionComponent {
  @Input() model: BonesFindingUiModel;

  quantityType: typeof QuantityTypeEnum;

  constructor() {
    this.quantityType = QuantityTypeEnum;
  }
}
