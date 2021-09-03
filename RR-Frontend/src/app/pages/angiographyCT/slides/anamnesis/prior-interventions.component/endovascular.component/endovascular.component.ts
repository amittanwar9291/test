import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PriorInterventionsFindingUiModel } from '@models/angiographyCT/ui/anamnesis/prior-interventions-finding-ui.model';

@Component({
  selector: 'rr-endovascular',
  templateUrl: 'endovascular.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EndovascularComponent {
  @Input() model: PriorInterventionsFindingUiModel;
}
