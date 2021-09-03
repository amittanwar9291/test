import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import {
  SideTypeEnum,
  NormVariantOrAnomalyTypeEnum,
  FusionAnomaliesKidneyTypeEnum,
  RenalArteryTypeEnum,
  PolarArteryTypeEnum,
  RenalVeinsTypeEnum,
  UreterTypeEnum
} from '@enums/abdomenMRT/kidneys';
import { AppConfig } from 'app/app.config';
import { nameof } from 'ts-simple-nameof';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { ImageFileTypeEnum } from '@enums/abdomenMRT/kidneys/image-file-type.enum';

@Component({
  selector: 'rr-anomalies-and-norm-variants',
  templateUrl: './anomalies-and-norm-variants.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AnomaliesAndNormVariantsComponent {
  @Input() model: KidneysFindingUiModel;

  sideType = SideTypeEnum;
  normVariantOrAnomalyType = NormVariantOrAnomalyTypeEnum;
  fusionAnomaliesKidneyType = FusionAnomaliesKidneyTypeEnum;
  renalArteryType = RenalArteryTypeEnum;
  polarArteryType = PolarArteryTypeEnum;
  renalVeinsType = RenalVeinsTypeEnum;
  ureterType = UreterTypeEnum;
  imageFileTypeEnum = ImageFileTypeEnum;

  anomaliesAndNormVariantsReferencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_07_001',
    'uni_07_002',
    'uni_07_003',
    'uni_07_006',
    'uni_07_007',
    'uni_07_004',
    'uni_07_005'
  );

  kidneysValidationBlock = [
    nameof<KidneysFindingUiModel>(m => m.isAgenesis),
    nameof<KidneysFindingUiModel>(m => m.isAplasia),
    nameof<KidneysFindingUiModel>(m => m.isHypoplasia),
    nameof<KidneysFindingUiModel>(m => m.isLobarDysmorphia),
    nameof<KidneysFindingUiModel>(m => m.isDuplexCollectingSystem),
    nameof<KidneysFindingUiModel>(m => m.isDoubleKidney),
    nameof<KidneysFindingUiModel>(m => m.isRenalEctopy),
    nameof<KidneysFindingUiModel>(m => m.isFloatingKidney),
    nameof<KidneysFindingUiModel>(m => m.isFusionAnomalies),
    nameof<KidneysFindingUiModel>(m => m.isNonrotation),
    nameof<KidneysFindingUiModel>(m => m.isPersistentFetalLobulation)
  ].join(' ');

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.kidneys.fileUpload;
  }
}
