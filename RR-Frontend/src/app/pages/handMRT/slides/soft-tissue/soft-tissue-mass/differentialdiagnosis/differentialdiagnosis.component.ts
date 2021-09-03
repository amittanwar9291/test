import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftTissueDifferentialDiagnosisTypeEnum } from '@enums/handMRT/soft-tissue/soft-tissue-differential-diagnosis-type.enum';

@Component({
  selector: 'rr-differentialdiagnosis',
  templateUrl: './differentialdiagnosis.component.html',
  styleUrls: ['./differentialdiagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialdiagnosisComponent {
  @Input() model: SoftTissueFindingUiModel;
  @Input() w018: DropdownModel[];
  @Input() w019: DropdownModel[];

  descriptionTypeEnum = DescriptionTypeEnum;
  softTissueDifferentialDiagnosisTypeEnum = SoftTissueDifferentialDiagnosisTypeEnum;

  resetDependenciesDifferentialDiagnose1D() {
    this.model.isSuspected = false;
    this.resetDependenciesDifferentialDiagnose2D();
  }

  resetDependenciesDifferentialDiagnose2D() {
    this.model.isSecondary = false;
  }
}
