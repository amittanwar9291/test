import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PriorInterventionsFindingUiModel } from '@models/angiographyCT/ui/anamnesis/prior-interventions-finding-ui.model';
import { AorticValveTypeEnum, MitralValveTypeEnum } from '@enums/angiographyCT/anamnesis';

@Component({
  selector: 'rr-valve',
  templateUrl: 'valve.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ValveComponent {
  @Input() model: PriorInterventionsFindingUiModel;
  aorticValve = AorticValveTypeEnum;
  mitralValve = MitralValveTypeEnum;
}
