import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
@Component({
  selector: 'rr-diffuse-parenchymal-changes',
  templateUrl: './diffuse-parenchymal-changes.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseParenchymalChangesComponent {
  @Input() model: LiverFindingUiModel;
  @Input() diffuseParenchymalChangesDDOptions: DropdownModel[];
}
