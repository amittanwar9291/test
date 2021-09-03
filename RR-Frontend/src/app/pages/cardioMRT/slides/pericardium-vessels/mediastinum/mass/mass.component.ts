import { Component, Input } from '@angular/core';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';
import { TechnologyUiModel } from '@models/cardioMRT/ui/technology/technology-ui.model';

@Component({
  selector: 'rr-mass',
  templateUrl: './mass.component.html'
})
export class MassComponent {
  @Input() model: PericardiumVesselsFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;
}
