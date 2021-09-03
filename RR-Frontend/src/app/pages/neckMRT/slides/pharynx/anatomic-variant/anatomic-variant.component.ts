import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  AnatomicVariantTypeEnum,
  CleftLipAndPalateTypeEnum,
  CmEnhancementQuantitativeTypeEnum,
  HomogeneityTypeEnum,
  GradingTypeEnum
} from '@enums/neckMRT/pharynx';
import { PharynxFindingUiModel } from '@models/neckMRT/ui/pharynx/pharynx-finding-ui.model';
import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-anatomic-variant',
  templateUrl: './anatomic-variant.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AnatomicVariantComponent {
  @Input() model: PharynxFindingUiModel;
  @Input() isContrastEnhanced: boolean;
  @Input() isDWI: boolean;

  anatomicVariantType = AnatomicVariantTypeEnum;
  cmEnhancementQuantitativeType = CmEnhancementQuantitativeTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  gradingType = GradingTypeEnum;
  cleftLipAndPalateType = CleftLipAndPalateTypeEnum;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.neckMRT.pharynx.fileUpload;
  }
}
