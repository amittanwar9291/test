import { Component, Input } from '@angular/core';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DifferentialDiagnosisScrotumMassTypeEnum } from '@enums/pelvisMRT/male-sex/differential-diagnosis-scrotum-mass-type.enum';

@Component({
  selector: 'rr-differential-diagnosis-scrotum',
  templateUrl: './differential-diagnosis-scrotum.component.html',
  styleUrls: ['./differential-diagnosis-scrotum.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisScrotumComponent {
  @Input() model: MaleSexFindingUiModel;
  @Input() scrotumDifferentialDiagnosisType: DropdownModel[];
  differentialDiagnosisScrotumMassType = DifferentialDiagnosisScrotumMassTypeEnum;

  differentialDiagnosis01Change() {
    this.model.isSpermaticCordLipoma01 = false;
    this.model.isScrotalPearl01 = false;
    this.differentialDiagnosis02Change();
  }

  differentialDiagnosis02Change() {
    this.model.isSpermaticCordLipoma02 = false;
    this.model.isScrotalPearl02 = false;
    this.resetSubordinated();
  }

  resetSubordinated() {
    this.model.isSubordinate = false;
  }

  isDifferentialDiagnosis() {
    const compareArray = [DifferentialDiagnosisScrotumMassTypeEnum.Lipoma, DifferentialDiagnosisScrotumMassTypeEnum.FibrousPseudotumour];

    return compareArray.includes(this.model.differentialDiagnosisScrotumMassType01);
  }

  isDifferentialDiagnosis2Visible() {
    const compareArray = [DifferentialDiagnosisScrotumMassTypeEnum.Lipoma, DifferentialDiagnosisScrotumMassTypeEnum.FibrousPseudotumour];

    return compareArray.includes(this.model.differentialDiagnosisScrotumMassType02);
  }
}
