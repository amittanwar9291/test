import { Component, Input } from '@angular/core';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-seminal-vesicles-mass-differential-diagnosis',
  templateUrl: './seminal-vesicles-mass-differential-diagnosis.component.html',
  styleUrls: ['./seminal-vesicles-mass-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SeminalVesiclesMassDifferentialDiagnosisComponent {
  @Input() model: MaleSexFindingUiModel;
  @Input() seminalVesiclesMassDifferentialDiagnosisType: DropdownModel[];

  resetSubordinated() {
    this.model.isSubordinate = false;
  }
}
