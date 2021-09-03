import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { AnamnesisFindingUiModel } from '@models/elbowMRT/ui/anamnesis/anamnesis-finding-ui.model';

@Component({
  selector: 'rr-simple-indication',
  templateUrl: './simple-indication.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class SimpleIndicationComponent {
  @Input() model: AnamnesisFindingUiModel;
  @Input() header: string;
  @Input() headerRrId: string;
}
