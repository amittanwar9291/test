import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-peritoneal-mass',
  templateUrl: './peritoneal-mass.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PeritonealMassComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  @Input() ddW047: DropdownGroupedModel[];
  @Input() ddW048: DropdownGroupedModel[];
  @Input() isMale: boolean;
  @Input() isFemale: boolean;
  @Input() isContrastEnhanced: boolean;
  @Input() isDWI: boolean;
}
