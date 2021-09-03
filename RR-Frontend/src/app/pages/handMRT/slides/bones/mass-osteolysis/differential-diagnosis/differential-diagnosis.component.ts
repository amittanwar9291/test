import { Component, Input } from '@angular/core';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DifferentialDiagnoseTypeEnum } from '@enums/handMRT/bones/';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

@Component({
  selector: 'rr-handmrt-tumor-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  differentialDiagnoseTypeEnum = DifferentialDiagnoseTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  @Input() model: BonesFindingUiModel;
  @Input() tumorDifferentialDiagnoseType: DropdownModel[];
  @Input() tumorDifferentialDiagnoseType2: DropdownModel[];

  resetDependenciesDifferentialDiagnose1D() {
    this.model.isDifferentialDiagnosisSuspected = false;
    this.resetDependenciesDifferentialDiagnose2D();
  }

  resetDependenciesDifferentialDiagnose2D() {
    this.model.isSecondary = false;
  }
}
