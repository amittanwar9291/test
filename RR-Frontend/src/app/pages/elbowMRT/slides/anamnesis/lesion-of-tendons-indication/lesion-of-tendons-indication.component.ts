import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { AnamnesisFindingUiModel } from '@models/elbowMRT/ui/anamnesis/anamnesis-finding-ui.model';

@Component({
  selector: 'rr-lesion-of-tendons-indication',
  templateUrl: './lesion-of-tendons-indication.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class LesionOfTendonsIndicationComponent {
  @Input() model: AnamnesisFindingUiModel;
  @Input() header: string;
}
