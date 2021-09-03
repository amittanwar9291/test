import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PriorInterventionsFindingUiModel } from '@models/angiographyCT/ui/anamnesis/prior-interventions-finding-ui.model';
import { LowerLimbTypeEnum } from '@enums/angiographyCT/anamnesis/bypass/lower-limb-type.enum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';

@Component({
  selector: 'rr-bypass',
  templateUrl: 'bypass.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BypassComponent {
  @Input() model: PriorInterventionsFindingUiModel;
  lowerLimb = LowerLimbTypeEnum;
  cruralSide = LocationTypeEnum;
}
