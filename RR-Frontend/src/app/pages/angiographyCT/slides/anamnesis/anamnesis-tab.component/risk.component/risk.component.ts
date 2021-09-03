import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IndicationFindingUiModel } from '@models/angiographyCT/ui/anamnesis/indication-finding-ui.model';

@Component({
  selector: 'rr-risk',
  templateUrl: 'risk.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RiskComponent {
  @Input() model: IndicationFindingUiModel;
}
