import { Component, Input } from '@angular/core';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-accessory-carpal-bones',
  templateUrl: './accessory-carpal-bones.component.html',
  styleUrls: ['./accessory-carpal-bones.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AccessoryCarpalBonesComponent {
  @Input() model: BonesFindingUiModel;
}
