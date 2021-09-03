import { BreastFullCrossShoulder } from '@models/shared/mamma/breast/breast-full-cross-shoulder';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';

import {
  HistoricallySecuredTypeEnum,
  DiagnosisFindingTypeEnum,
  DistributionPatternTypeEnum,
  InternalEnhancementTypeEnum
} from '@enums/mammaMRT/diagnosis';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DiagnosisFindingBaseUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-finding-base-ui.model';

export class DiagnosisFindingUiModel extends DiagnosisFindingBaseUiModel {
  findingType: DiagnosisFindingTypeEnum;
  descriptionType: DescriptionTypeEnum;

  // common
  diagnosisType: string;
  additionalDiagnosis1Type: string;
  additionalDiagnosis2Type: string;
  additionalDiagnosis3Type: string;
  findingLocation: BreastFullCrossShoulder;
  largestDiameterInMm: number;
  referencePicture: ReferencePictureUiModel;

  // Focal Point
  isHistologicalConfirmation: boolean;
  histologicallySecuredType: HistoricallySecuredTypeEnum;
  axisRightAngledInMm: number;
  distanceToNippleInMm: number;
  isIntralesionalFat: boolean;
  isDiffusionRestriction: boolean;
  isAdditionalIpsilateralLesionsSameEntity: boolean;
  isSkinInfiltration: boolean;
  isPectoralisMuscleInfiltration: boolean;
  isChestWall: boolean;
  isSubordinated: boolean;

  // Non spatial requirement
  distributionPatternType: DistributionPatternTypeEnum;
  internalEnhancementType: InternalEnhancementTypeEnum;

  constructor() {
    super();

    this.findingType = DiagnosisFindingTypeEnum.None;
    this.descriptionType = DescriptionTypeEnum.None;

    // common
    this.diagnosisType = 'None';
    this.additionalDiagnosis1Type = 'None';
    this.additionalDiagnosis2Type = 'None';
    this.additionalDiagnosis3Type = 'None';
    this.findingLocation = new BreastFullCrossShoulder();
    this.largestDiameterInMm = null;
    this.referencePicture = new ReferencePictureUiModel();

    // Focal Point
    this.isHistologicalConfirmation = false;
    this.histologicallySecuredType = HistoricallySecuredTypeEnum.None;
    this.axisRightAngledInMm = null;
    this.distanceToNippleInMm = null;
    this.isIntralesionalFat = false;
    this.isDiffusionRestriction = false;
    this.isAdditionalIpsilateralLesionsSameEntity = false;
    this.isSkinInfiltration = false;
    this.isPectoralisMuscleInfiltration = false;
    this.isChestWall = false;
    this.isSubordinated = false;

    // Non spatial requirement
    this.distributionPatternType = DistributionPatternTypeEnum.None;
    this.internalEnhancementType = InternalEnhancementTypeEnum.None;
  }
}
