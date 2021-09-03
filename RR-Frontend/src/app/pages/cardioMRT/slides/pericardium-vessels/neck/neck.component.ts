import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

@Component({
  selector: 'rr-neck',
  templateUrl: './neck.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NeckComponent {
  @Input() model: PericardiumVesselsFindingUiModel;
}
