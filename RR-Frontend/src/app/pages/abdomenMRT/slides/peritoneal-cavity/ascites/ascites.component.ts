import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';

@Component({
  selector: 'rr-ascites',
  templateUrl: './ascites.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AscitesComponent {
  @Input() model: PeritonealCavityFindingUiModel;
  @Input() isMale: boolean;
  @Input() isFemale: boolean;
  @Input() isContrastEnhanced: boolean;
  @Input() isDWI: boolean;
}
