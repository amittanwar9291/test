import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissuesFindingUiModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-mass-inflammation',
  templateUrl: './mass-inflammation.component.html',
  styleUrls: ['./mass-inflammation.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassInflammationComponent {
  @Input() model: SoftTissuesFindingUiModel;
  @Input() isCMReinforced: boolean;
  @Input() differentialDiagnosis1OptionsOptions: DropdownModel[];
  @Input() differentialDiagnosis2OptionsOptions: DropdownModel[];
  @Input() orientationAxialOptions: DropdownModel[];
  @Input() shapeDifferentialDiagnosisOptions: DropdownModel[];
  @Input() contrastEnhancementDistributionOptions: DropdownModel[];
  @Input() isDWI: boolean;
}
