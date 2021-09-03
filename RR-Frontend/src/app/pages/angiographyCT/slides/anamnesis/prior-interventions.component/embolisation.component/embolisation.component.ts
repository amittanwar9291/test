import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PriorInterventionsFindingUiModel } from '@models/angiographyCT/ui/anamnesis/prior-interventions-finding-ui.model';

@Component({
  selector: 'rr-embolisation',
  templateUrl: 'embolisation.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EmbolisationComponent {
  @Input() model: PriorInterventionsFindingUiModel;
}
