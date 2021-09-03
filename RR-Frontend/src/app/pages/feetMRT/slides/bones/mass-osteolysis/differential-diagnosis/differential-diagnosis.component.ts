import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DifferentialDiagnosisTypeEnum } from '@enums/feetMRT/bones';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-bones-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  @Input() model: BonesFindingUiModel;
  @Input() differentialDiagnosis: DropdownModel[];

  descriptionTypeEnum: typeof DescriptionTypeEnum;
  differentialDiagnosisTypeEnum: typeof DifferentialDiagnosisTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  private initializeEnums() {
    this.descriptionTypeEnum = DescriptionTypeEnum;
    this.differentialDiagnosisTypeEnum = DifferentialDiagnosisTypeEnum;
  }

  clearDifferentialDiagnosis01() {
    this.model.isSuspicionOf = false;
    this.clearDifferentialDiagnosis02();
  }

  clearDifferentialDiagnosis02() {
    this.model.isSubordinated = false;
  }
}
