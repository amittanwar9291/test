import { Component, Input } from '@angular/core';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { GrowthPatternsTypeEnum } from '@enums/abdomenMRT/peritoneal-cavity/peritoneal-mass';

@Component({
  selector: 'rr-peritoneal-mass-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  @Input() isDWI: boolean;
  growthPatternsType = GrowthPatternsTypeEnum;
}
