import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { PhaseTypeEnum } from '@enums/pelvisMRT/pelvic-floor/phase-type.enum';

@Component({
  selector: 'rr-cul-de-sac',
  templateUrl: './cul-de-sac.component.html',
  styleUrls: ['./cul-de-sac.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CulDeSacComponent {
  @Input() model: PelvicFloorFindingUiModel;
  @Input() isDynamicOnLocalization: boolean;
  phaseType = PhaseTypeEnum;
}
