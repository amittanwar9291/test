import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-diffuse-parenchymal-changes',
  templateUrl: './diffuse-parenchymal-changes.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseParenchymalChangesComponent {
  @Input() model: PancreasFindingUiModel;
  @Input() isCMReinforced: boolean;
  @Input() isDWI: boolean;
  @Input() diffuseParenchymaOptions: DropdownModel[];
  @Input() contrastEnhancementDistributionDropdown: DropdownModel[];
  @Input() diffuseParenchymalDifferentialDiagnosis1Options: DropdownModel[];
}
