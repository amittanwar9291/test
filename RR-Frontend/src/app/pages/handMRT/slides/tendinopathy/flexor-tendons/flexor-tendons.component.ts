import { Component, Input, OnInit } from '@angular/core';
import { TendinopathyFindingUiModel } from '@models/handMRT/ui/tendinopathy/tendinopathy-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { PathologyTypeEnum } from '@enums/handMRT/tendinopathy/pathology-type.enum';
import { TendovaginitisTypeEnum } from '@enums/handMRT/tendinopathy/tendovaginitis-type.enum';
import { RuptureTypeEnum } from '@enums/handMRT/tendinopathy/rupture-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DifferentialDiagnosisTypeEnum } from '@enums/handMRT/tendinopathy/differential-diagnosis-type.enum';

@Component({
  selector: 'rr-flexor-tendons',
  templateUrl: './flexor-tendons.component.html',
  styleUrls: ['./flexor-tendons.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FlexorTendonsComponent {
  @Input() model: TendinopathyFindingUiModel;
  @Input() differentialDiagnoseFlexorTendon: DropdownModel[];
  pathologyTypeEnum: typeof PathologyTypeEnum;
  tendovaginitisTypeEnum: typeof TendovaginitisTypeEnum;
  ruptureTypeEnum: typeof RuptureTypeEnum;
  differentialDiagnosisTypeEnum: typeof DifferentialDiagnosisTypeEnum;
  constructor() {
    this.pathologyTypeEnum = PathologyTypeEnum;
    this.tendovaginitisTypeEnum = TendovaginitisTypeEnum;
    this.ruptureTypeEnum = RuptureTypeEnum;
    this.differentialDiagnosisTypeEnum = DifferentialDiagnosisTypeEnum;
  }

  clearDD() {
    this.model.differentialDiagnosisType = this.differentialDiagnosisTypeEnum.None;
  }

  clearSuspected() {
    this.model.isSuspected = false;
  }
}
