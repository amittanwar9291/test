import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';

@Component({
  selector: 'rr-standard-variant',
  templateUrl: './standard-variant.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class StandardVariantComponent {
  @Input() model: KneeBonesFindingUiModel;
}
