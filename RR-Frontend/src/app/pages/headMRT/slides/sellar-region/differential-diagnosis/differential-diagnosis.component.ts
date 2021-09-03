import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SellarRegionFindingUiModel } from '@models/headMRT/ui/sellar-region/sellar-region-finding-ui.model';
import { SellarRegionDiagnosisTypeEnum } from '@enums/headMRT/sellar-region/sellar-region-diagnosis-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  @Input() model: SellarRegionFindingUiModel;
  @Input() differentialDiagnoseW38: DropdownGroupedModel[];
  @Input() differentialDiagnoseW39: DropdownGroupedModel[];
  descriptionType = DescriptionTypeEnum;
  sellarRegionDiagnosisType = SellarRegionDiagnosisTypeEnum;

  dd1Change() {
    this.model.isSuspicionOf = false;
    this.dd2Change();
  }

  dd2Change() {
    this.model.isSubordinate = false;
  }

  disable2DD() {
    return (
      this.model.sellarRegionDiagnosis1Type === this.sellarRegionDiagnosisType.None &&
      this.model.sellarRegionDiagnosisLocalizationType === this.sellarRegionDiagnosisType.None
    );
  }
}
