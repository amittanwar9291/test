import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-bone-marrow-edema',
  templateUrl: './bone-marrow-edema.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class BoneMarrowEdemaComponent {
  @Input() model: BonesFindingUiModel;
}
