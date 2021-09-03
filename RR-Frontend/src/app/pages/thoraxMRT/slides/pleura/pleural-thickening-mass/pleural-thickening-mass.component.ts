import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';

@Component({
  selector: 'rr-pleural-thickening-mass',
  templateUrl: './pleural-thickening-mass.component.html',
  styleUrls: ['./pleural-thickening-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PleuralThickeningMassComponent {
  @Input() diagnosisDropDownList: DropdownModel[];
  @Input() findings: PleuraFindingUiModel[];
  @Input() model: PleuraFindingUiModel;
}
