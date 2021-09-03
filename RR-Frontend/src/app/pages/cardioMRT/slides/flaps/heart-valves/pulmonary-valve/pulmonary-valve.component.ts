import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HeartValvesFindingUiModel } from '@models/cardioMRT/ui/flaps/heart-valves-finding-ui.model';

@Component({
  selector: 'rr-pulmonary-valve',
  templateUrl: './pulmonary-valve.component.html',
  styleUrls: ['../../flaps.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PulmonaryValveComponent {
  @Input() model: HeartValvesFindingUiModel;
}
