import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

@Component({
  selector: 'rr-pericardium',
  templateUrl: './pericardium.component.html',
  providers: [MakeProvider(PericardiumComponent)],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PericardiumComponent {
  @Input() model: PericardiumVesselsFindingUiModel;
}
