import { Component, Input, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { AppConfig } from 'app/app.config';

import { DiagnosisFindingUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-finding-ui.model';
import { DiagnosisDescriptionGroupedUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-description-grouped-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  DemarcationTypeEnum,
  FormTypeEnum,
  HistoricallySecuredTypeEnum,
  KmDynamicDelayedTypeEnum,
  KmDynamicInitialTypeEnum
} from '@enums/mammaMRT/diagnosis';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';

import { DiagnosisPresetsHttpService } from '@services/mammaMRT/http/diagnosis/diagnosis-presets-http.service';
import { DiagnosisDifferentialDiagnosisTypeEnum } from '@enums/mammaMRT/diagnosis/diagnosis-differential-diagnosis-type.enum';

@Component({
  selector: 'rr-focal-point',
  templateUrl: './focal-point.component.html',
  styleUrls: ['./focal-point.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: DiagnosisPresetsHttpService
    }
  ]
})
export class FocalPointComponent {
  @Input() model: DiagnosisFindingUiModel;
  @Input() differentialDiagnosisOptions: DiagnosisDescriptionGroupedUiModel[];
  @Input() differentialDiagnosisRestrictedOptions: DiagnosisDescriptionGroupedUiModel[];
  @Input() enhancementsListOptions: DropdownModel[];
  @Input() cmEnchancementApplied: SimpleAnswerEnum;

  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;

  historicallySecuredType: typeof HistoricallySecuredTypeEnum;
  formType: typeof FormTypeEnum;
  demarcationType: typeof DemarcationTypeEnum;
  kmDynamicInitialType: typeof KmDynamicInitialTypeEnum;
  kmDynamicDelayedType: typeof KmDynamicDelayedTypeEnum;
  descriptionType: typeof DescriptionTypeEnum;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.mammaMRT.diagnosis.fileUpload;
  }

  constructor() {
    this.historicallySecuredType = HistoricallySecuredTypeEnum;
    this.formType = FormTypeEnum;
    this.demarcationType = DemarcationTypeEnum;
    this.kmDynamicInitialType = KmDynamicInitialTypeEnum;
    this.kmDynamicDelayedType = KmDynamicDelayedTypeEnum;
    this.descriptionType = DescriptionTypeEnum;
  }

  removeUploadedFile(): void {
    this.referencePictureComponent.resetReferencePicture();
  }

  isMainPartDisabled(): boolean {
    return this.model.descriptionType !== this.descriptionType.IDescribe && this.model.diagnosisType === 'None';
  }

  isCmPartDisabled(): boolean {
    return this.cmEnchancementApplied !== SimpleAnswerEnum.Yes;
  }

  resetIsSubordinate() {
    this.model.isSubordinated = false;
  }

  isDifferentialDiagnosis02Disabled(): boolean {
    switch (this.model.descriptionType) {
      case this.descriptionType.IDescribe: {
        return this.model.additionalDiagnosis1Type === 'None';
      }
      case this.descriptionType.IKnow: {
        return this.model.diagnosisType === 'None';
      }
    }
  }

  clearDependentProps() {
    if (this.model.diagnosisType === DiagnosisDifferentialDiagnosisTypeEnum.None) {
      this.model.isHistologicalConfirmation = false;
      this.model.histologicallySecuredType = HistoricallySecuredTypeEnum.None;
      this.model.largestDiameterInMm = null;
      this.model.axisRightAngledInMm = null;
      this.model.distanceToNippleInMm = null;

      this.model.isIntralesionalFat = false;
      this.model.isDiffusionRestriction = false;
      this.model.isAdditionalIpsilateralLesionsSameEntity = false;
      this.model.isSkinInfiltration = false;
      this.model.isPectoralisMuscleInfiltration = false;
      this.model.isChestWall = false;
    }

    this.resetIsSubordinate();
  }
}
