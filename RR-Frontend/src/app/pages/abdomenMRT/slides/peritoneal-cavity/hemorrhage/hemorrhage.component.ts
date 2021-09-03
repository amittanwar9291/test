import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-hemorrhage',
  templateUrl: './hemorrhage.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class HemorrhageComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  @Input() isMale: boolean;
  @Input() isFemale: boolean;
  @Input() isDWI: boolean;
}
