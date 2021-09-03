import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-osteitis-pubis',
  templateUrl: './osteitis-pubis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsteitisPubisComponent {
  @Input() model: BonesFindingUiModel;
}
