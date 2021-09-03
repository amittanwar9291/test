import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CortexFindingUiModel } from '@models/headCT/ui/cortex/cortex-finding-ui-model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DifferentialDiagnosisTypeEnum } from '@enums/headCT/cortex/differential-diagnosis-type.enum';
import { ClassificationAdamsTypeEnum } from '@enums/shared/head/cortex/diffuse/classification-adams-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { CortexFindingTypeEnum } from '@enums/shared/head/cortex';
import { ClassificationWHOTypeEnum } from '@enums/shared/head/cortex/focal';
import { CortexHelperService } from '../../cortex-helper.service';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  constructor(private cortexHelperService: CortexHelperService) {}
  @Input() model: CortexFindingUiModel;
  @Input() differentialDiagnosisOptions01: DropdownGroupedModel[];
  @Input() classificationWhoOptions: DropdownModel[];
  @Input() classificationAdamsOptions: DropdownModel[];
  @Input() differentialDiagnosisOptions0203: DropdownGroupedModel[];

  differentialDiagnosisEnum = DifferentialDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  findingEnum = CortexFindingTypeEnum;

  resetDifferentialDiagnosisDependantModel03(): void {
    this.model.classificationWHO3 = ClassificationWHOTypeEnum.None;
    this.model.classificationAdams3 = ClassificationAdamsTypeEnum.None;
  }

  resetDifferentialDiagnosisDependantModel02(): void {
    this.model.isSubordinate = false;
    this.model.classificationWHO2 = ClassificationWHOTypeEnum.None;
    this.model.classificationAdams2 = ClassificationAdamsTypeEnum.None;
    this.resetDifferentialDiagnosisDependantModel03();
  }

  resetDifferentialDiagnosisDependantModel01(): void {
    this.model.isSuspicionOf = false;
    this.model.classificationWHO1 = ClassificationWHOTypeEnum.None;
    this.model.classificationAdams1 = ClassificationAdamsTypeEnum.None;
    this.resetDifferentialDiagnosisDependantModel02();
  }

  isFulfillsWHOCondition = param => this.cortexHelperService.requiredForWHODropdown.includes(param);

  rrIdConditionDifferentialDiagnosisType3() {
    return this.model.findingType === CortexFindingTypeEnum.Focal ? 'hea_c_060439' : 'hea_c_060473';
  }

  rrIdConditionDifferentialDiagnosisType2() {
    return this.model.findingType === CortexFindingTypeEnum.Focal ? 'hea_c_060341' : 'hea_c_060377';
  }
}
