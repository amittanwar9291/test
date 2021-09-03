import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-pelvismrt-penis-mass-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  @Input() model: MaleSexFindingUiModel;
  @Input() penisDifferentialDiagnosisType: DropdownModel[];

  resetSubordinated() {
    this.model.isSubordinate = false;
  }
}
