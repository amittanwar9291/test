import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';

@Component({
  selector: 'rr-pleural-space-requirement',
  templateUrl: './pleural-space-requirement.component.html',
  styleUrls: ['./pleural-space-requirement.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PleuralSpaceRequirementComponent {
  @Input() diagnosisDropDownList: DropdownModel[];
  @Input() findings: SoftPartsFindingUiModel[];
  @Input() model: SoftPartsFindingUiModel;
}
