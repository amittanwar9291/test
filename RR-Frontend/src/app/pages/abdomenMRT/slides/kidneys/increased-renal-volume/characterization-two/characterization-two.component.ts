import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HomogeneityTypeEnum } from '@enums/abdomenMRT/homogeneity-type.enum';
import {
  KidneysDifferentialDiagnosisTypeEnum,
  KidneysFindingTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum
} from '@enums/abdomenMRT/kidneys';
import { AppConfig } from 'app/app.config';
import { ImageFileTypeEnum } from '@enums/abdomenMRT/kidneys/image-file-type.enum';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';

@Component({
  selector: 'rr-renal-characterization-two',
  templateUrl: './characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: KidneysFindingUiModel;
  @Input() diffDiagnosisOptions: DropdownModel[];
  @Input() isCMReinforced: boolean;

  findingType = KidneysFindingTypeEnum;
  descriptionType = DescriptionTypeEnum;
  differentialDiagnosisType = KidneysDifferentialDiagnosisTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityType = HomogeneityTypeEnum;

  imageFileTypeEnum = ImageFileTypeEnum;

  increasedRenalVolumeReferencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_07_001_02',
    'uni_07_002_02',
    'uni_07_003_02',
    'uni_07_006_02',
    'uni_07_007_02',
    'uni_07_004_02',
    'uni_07_005_02'
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

  get isContrastEnhancementQuantitativeNoORNone(): boolean {
    return (
      this.model.contrastEnhancementRenalParenchymaQuantitative === ContrastEnhancementQuantitativeTypeEnum.No ||
      this.model.contrastEnhancementRenalParenchymaQuantitative === ContrastEnhancementQuantitativeTypeEnum.None
    );
  }
}
