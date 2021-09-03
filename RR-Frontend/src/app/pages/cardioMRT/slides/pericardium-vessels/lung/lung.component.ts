import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { nameof } from 'ts-simple-nameof';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';
import { LungLocalizerUiModel } from '@models/cardioMRT/ui/pericardium-vessels/lung-localizer-ui.model';

import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

import {
  AtypicalTypeEnum,
  DistributionTypeEnum,
  FormTypeEnum,
  LocalizationTypeEnum,
  LungDiffDiagnosisTypeEnum,
  LungPathologyTypeEnum,
  PeculiarityTypeEnum
} from '@enums/cardioMRT/pericardium-vessels';

@Component({
  selector: 'rr-lung',
  templateUrl: './lung.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class LungComponent implements OnInit {
  @Input() model: PericardiumVesselsFindingUiModel;
  @Output() emitLocalizer = new EventEmitter();

  lungPathologyType: typeof LungPathologyTypeEnum;
  previousLungPathologyType: LungPathologyTypeEnum;
  localizationType: typeof LocalizationTypeEnum;
  distributionType: typeof DistributionTypeEnum;
  atypicalType: typeof AtypicalTypeEnum;
  peculiarityType: typeof PeculiarityTypeEnum;
  formType: typeof FormTypeEnum;
  lungDiffDiagnosisType: typeof LungDiffDiagnosisTypeEnum;

  constructor(private validationHelperService: ValidationHelperService) {
    this.lungPathologyType = LungPathologyTypeEnum;
    this.localizationType = LocalizationTypeEnum;
    this.distributionType = DistributionTypeEnum;
    this.atypicalType = AtypicalTypeEnum;
    this.peculiarityType = PeculiarityTypeEnum;
    this.formType = FormTypeEnum;
    this.lungDiffDiagnosisType = LungDiffDiagnosisTypeEnum;
  }

  ngOnInit(): void {
    this.previousLungPathologyType = this.model.lungPathologyType;
  }

  private isLungPartEnabled(parts: LungPathologyTypeEnum[]): boolean {
    return parts.includes(this.model.lungPathologyType);
  }

  get isLocalizationByLungLocalizer(): boolean {
    return this.isLungPartEnabled([
      LungPathologyTypeEnum.Consolidation,
      LungPathologyTypeEnum.Atelectasis,
      LungPathologyTypeEnum.PulmonaryNodule,
      LungPathologyTypeEnum.Mass
    ]);
  }

  resetLocalizationAndDiffDiagnosis(): void {
    if (this.previousLungPathologyType !== this.model.lungPathologyType) {
      this.model.lungLocalizer = new LungLocalizerUiModel();
      this.model.isLocalizationRight = false;
      this.model.localizationRightType = LocalizationTypeEnum.None;
      this.model.isLocalizationLeft = false;
      this.model.localizationLeftType = LocalizationTypeEnum.None;
      this.model.atelePulmNoduleDiffDiagnosis = LungDiffDiagnosisTypeEnum.None;

      this.validationHelperService.removeError(nameof<PericardiumVesselsFindingUiModel>(m => m.lungLocalizer));
    }

    this.previousLungPathologyType = this.model.lungPathologyType;
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit();
  }

  get isMaximumDiameterAxialEnabled(): boolean {
    return this.isLungPartEnabled([LungPathologyTypeEnum.PulmonaryNodule, LungPathologyTypeEnum.Mass]);
  }

  get isConsolidationDiffDiagnosisEnabled(): boolean {
    return this.isLungPartEnabled([LungPathologyTypeEnum.Atelectasis, LungPathologyTypeEnum.PulmonaryNodule]);
  }
}
