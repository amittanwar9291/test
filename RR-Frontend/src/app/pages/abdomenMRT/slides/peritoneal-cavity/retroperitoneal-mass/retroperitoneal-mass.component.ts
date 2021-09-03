import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-retroperitoneal-mass',
  templateUrl: './retroperitoneal-mass.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class RetroperitonealMassComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  @Input() ddW049: DropdownGroupedModel[];
  @Input() ddW050: DropdownGroupedModel[];
  @Input() isDWI: boolean;
  @Input() isContrastEnhanced: boolean;
}
