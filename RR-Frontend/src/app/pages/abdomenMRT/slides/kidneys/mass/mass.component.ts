import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-mass',
  templateUrl: './mass.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassComponent {
  @Input() model: KidneysFindingUiModel;
  @Input() differentialDiagnosis1: DropdownModel[];
  @Input() differentialDiagnosis2An3: DropdownModel[];
  @Input() bosniakClassification: DropdownModel[];
  @Input() extensionOptions: DropdownModel[];
  @Input() isCMReinforced: boolean;
  @Input() isDWI: boolean;
}
