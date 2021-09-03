import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-congenital',
  templateUrl: './congenital.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class CongenitalComponent {
  @Input() model: BonesFindingUiModel;
}
