import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';

@Component({
  selector: 'rr-sigmoid-volvolus',
  templateUrl: './sigmoid-volvulus.component.html',
  styleUrls: ['./sigmoid-volvulus.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SigmoidVolvolusComponent {
  @Input() model: RectumFindingUiModel;
}
