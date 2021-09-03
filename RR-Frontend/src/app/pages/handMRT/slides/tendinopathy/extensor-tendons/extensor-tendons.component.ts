import { Component, Input, OnInit } from '@angular/core';
import { TendinopathyFindingUiModel } from '@models/handMRT/ui/tendinopathy/tendinopathy-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { PathologyTypeEnum } from '@enums/handMRT/tendinopathy/pathology-type.enum';
import { TendovaginitisTypeEnum } from '@enums/handMRT/tendinopathy/tendovaginitis-type.enum';
import { RuptureTypeEnum } from '@enums/handMRT/tendinopathy/rupture-type.enum';
import { DetailsTypeEnum } from '@enums/handMRT/tendinopathy/details-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/handMRT/tendinopathy/differential-diagnosis-type.enum';

@Component({
  selector: 'rr-extensor-tendons',
  templateUrl: './extensor-tendons.component.html',
  styleUrls: ['./extensor-tendons.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ExtensorTendonsComponent implements OnInit {
  @Input() model: TendinopathyFindingUiModel;
  @Input() differentialDiagnoseExtensorTendon: DropdownModel[];
  pathologyTypeEnum: typeof PathologyTypeEnum;
  tendovaginitisTypeEnum: typeof TendovaginitisTypeEnum;
  ruptureTypeEnum: typeof RuptureTypeEnum;
  detailsTypeEnum: typeof DetailsTypeEnum;
  differentialDiagnosisTypeEnum: typeof DifferentialDiagnosisTypeEnum;
  excludedOptios: string[];
  constructor() {
    this.pathologyTypeEnum = PathologyTypeEnum;
    this.tendovaginitisTypeEnum = TendovaginitisTypeEnum;
    this.ruptureTypeEnum = RuptureTypeEnum;
    this.detailsTypeEnum = DetailsTypeEnum;
    this.differentialDiagnosisTypeEnum = DifferentialDiagnosisTypeEnum;
    this.excludedOptios = [];
  }

  localizationValidationGroup =
    'isTendonAbductorPollicisLongusMuscle isTendonExtensorPollicisBrevisMuscle ' +
    'isTendonExtensorCarpiRadialisLongusMuscle isTendonExtensorCarpiRadialisBrevisMuscle isTendonExtensorPollicisLongusMuscle ' +
    'isTendonsExtensoresDigitorumAndIndicisMuscles isTendonExtensorDigitiMinimiMuscle isTendonExtensorCarpiUlnarisMuscle';

  ngOnInit(): void {
    this.updateDD();
  }

  isVisable(): boolean {
    return (
      this.model.differentialDiagnosisType === this.differentialDiagnosisTypeEnum.TendovaginitisDeQuervain ||
      this.model.differentialDiagnosisType === this.differentialDiagnosisTypeEnum.TendovaginitisOfTheECUTendon
    );
  }

  isDDEnabled(): boolean {
    return (
      this.model.isTendonAbductorPollicisLongusMuscle ||
      this.model.isTendonExtensorPollicisBrevisMuscle ||
      this.model.isTendonExtensorPollicisLongusMuscle ||
      this.model.isTendonExtensorCarpiUlnarisMuscle
    );
  }

  updateDD(): void {
    const differentialDiagnoseMap = {
      TendovaginitisDeQuervain: this.model.isTendonAbductorPollicisLongusMuscle || this.model.isTendonExtensorPollicisBrevisMuscle,
      TendovaginitisOfTheECUTendon: this.model.isTendonExtensorCarpiUlnarisMuscle,
      TendovaginitisOfTheEPLTendon: this.model.isTendonExtensorPollicisLongusMuscle
    };

    if (!this.isDDEnabled()) {
      this.model.differentialDiagnosisType = this.differentialDiagnosisTypeEnum.None;
      this.clearDetailsType();
    }

    this.differentialDiagnoseExtensorTendon.forEach(diagnose => {
      if (!differentialDiagnoseMap[diagnose.value] && !this.excludedOptios.includes(diagnose.value)) {
        this.excludedOptios.push(diagnose.value);
      } else if (differentialDiagnoseMap[diagnose.value] && this.excludedOptios.includes(diagnose.value)) {
        this.excludedOptios.splice(this.excludedOptios.indexOf(diagnose.value), 1);
      }
    });
  }

  clearDetailsType(): void {
    this.model.detailsType = this.detailsTypeEnum.None;
    this.model.isSuspected = false;
  }
}
