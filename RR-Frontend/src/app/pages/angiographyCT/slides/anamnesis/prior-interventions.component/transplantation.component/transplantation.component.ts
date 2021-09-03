import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PriorInterventionsFindingUiModel } from '@models/angiographyCT/ui/anamnesis/prior-interventions-finding-ui.model';
import { AfterTransplantationTypeEnum } from '@enums/angiographyCT/anamnesis';

@Component({
  selector: 'rr-transplantation',
  templateUrl: 'transplantation.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TransplantationComponent {
  @Input() model: PriorInterventionsFindingUiModel;
  afterTransplantation = AfterTransplantationTypeEnum;
}
