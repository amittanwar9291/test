import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { KidneysDifferentialDiagnosisTypeEnum, KidneysFindingTypeEnum } from '@enums/abdomenMRT/kidneys';
import { AppConfig } from 'app/app.config';
import { ImageFileTypeEnum } from '@enums/abdomenMRT/kidneys/image-file-type.enum';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';

@Component({
  selector: 'rr-renal-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent {
  @Input() model: KidneysFindingUiModel;
  @Input() diffDiagnosisOptions: DropdownModel[];

  findingType = KidneysFindingTypeEnum;
  descriptionType = DescriptionTypeEnum;
  differentialDiagnosisType = KidneysDifferentialDiagnosisTypeEnum;

  imageFileTypeEnum = ImageFileTypeEnum;

  decreasedRenalVolumeReferencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_07_001',
    'uni_07_002',
    'uni_07_003',
    'uni_07_006',
    'uni_07_007',
    'uni_07_004',
    'uni_07_005'
  );

  resetDifferentialDiagnosis1DependentModel(): void {
    this.model.isSuspicionOf = false;
    this.resetDifferentialDiagnosis2DependentModel();
  }

  resetDifferentialDiagnosis2DependentModel(): void {
    this.model.isSubordinate = false;
  }

  isDropdownGrouped(): boolean {
    return this.model.findingType === KidneysFindingTypeEnum.DecreasedRenalVolume ? true : undefined;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.kidneys.fileUpload;
  }
}
