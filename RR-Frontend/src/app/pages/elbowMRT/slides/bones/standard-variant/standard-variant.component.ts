import { Component, Input } from '@angular/core';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-standard-variant',
  templateUrl: './standard-variant.component.html',
  styleUrls: ['./standard-variant.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class StandardVariantComponent {
  @Input() model: BonesFindingUiModel;
}
