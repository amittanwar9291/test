import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PriorInterventionsFindingUiModel } from '@models/angiographyCT/ui/anamnesis/prior-interventions-finding-ui.model';
import { PriorInterventionsFindingTypeEnum } from '@enums/angiographyCT/anamnesis';

@Component({
  selector: 'rr-pta-lysis-thoracotomy-pacemakerk',
  templateUrl: 'pta.lysis.thoracotomy.pacemaker.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PtaLysisThoracotomyPacemakerComponent {
  @Input() model: PriorInterventionsFindingUiModel;
  priorInterventionsFindingType = PriorInterventionsFindingTypeEnum;
}
