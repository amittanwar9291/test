import { Component, Input, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { AppConfig } from 'app/app.config';

import { DiagnosisFindingUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-finding-ui.model';
import { DiagnosisDescriptionGroupedUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-description-grouped-ui.model';

import { DistributionPatternTypeEnum, InternalEnhancementTypeEnum } from '@enums/mammaMRT/diagnosis';

import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

@Component({
  selector: 'rr-non-spatial-requirement',
  templateUrl: './non-spatial-requirement.component.html',
  styleUrls: ['./non-spatial-requirement.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NonSpatialRequirementComponent {
  @Input() model: DiagnosisFindingUiModel;
  @Input() differentialDiagnosisOptions: DiagnosisDescriptionGroupedUiModel[];
  @Input() differentialDiagnosisRestrictedOptions: DiagnosisDescriptionGroupedUiModel[];

  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;

  distributionPatternType: typeof DistributionPatternTypeEnum;
  internalEnhancementType: typeof InternalEnhancementTypeEnum;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.mammaMRT.diagnosis.fileUpload;
  }
  constructor() {
    this.distributionPatternType = DistributionPatternTypeEnum;
    this.internalEnhancementType = InternalEnhancementTypeEnum;
  }

  resetIsSubordinate() {
    this.model.isSubordinated = false;
  }

  removeUploadedFile(): void {
    this.referencePictureComponent.resetReferencePicture();
  }
}
