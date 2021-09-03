import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-acute-pancreatitis',
  templateUrl: './acute-pancreatitis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AcutePancreatitisComponent {
  @Input() model: PancreasFindingUiModel;
  @Input() acutePancreatitisOptions: DropdownModel[];
}
