import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';

@Component({
  selector: 'rr-jaw-teeth',
  templateUrl: './jaw-teeth.component.html',
  styleUrls: ['./jaw-teeth.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class JawTeethComponent {
  @Input() model: FacialSkullFindingUiModel;
}
