import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SellarRegionFindingUiModel } from '@models/headCT/ui/sellar-region/sellar-region-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SellarRegionDiagnosisTypeEnum } from '@enums/headCT/sellar-region';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  @Input() model: SellarRegionFindingUiModel;
  @Input() differentialDiagnoseW48: DropdownGroupedModel[];
  @Input() differentialDiagnoseW49: DropdownGroupedModel[];

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
