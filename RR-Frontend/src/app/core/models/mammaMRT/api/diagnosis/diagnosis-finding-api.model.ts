import { FileApiModel } from '@models/shared/uploader/file-api.model';

import { HistoricallySecuredTypeEnum } from '@enums/mammaMRT/diagnosis/historically-secured-type.enum';
import { DistributionPatternTypeEnum } from '@enums/mammaMRT/diagnosis/distribution-pattern-type.enum';
import { InternalEnhancementTypeEnum } from '@enums/mammaMRT/diagnosis/internal-enhancement-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DiagnosisFindingTypeEnum } from '@enums/mammaMRT/diagnosis/diagnosis-finding-type.enum';
import { DiagnosisFindingBaseApiModel } from '@models/mammaMRT/api/diagnosis/diagnosis-finding-base-api.model';

export class DiagnosisFindingApiModel extends DiagnosisFindingBaseApiModel {
  findingType: DiagnosisFindingTypeEnum;
  descriptionType: DescriptionTypeEnum;

  // common
  diagnosisType: string;
  additionalDiagnosis1Type: string;
  additionalDiagnosis2Type: string;
  additionalDiagnosis3Type: string;
  findingLocation: string;
  largestDiameterInMm: number;
  serialNumber: string;
  pictureNumber: string;
  uploadedImageFile: FileApiModel;
  imageFileId: string;

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
    this.findingLocation = 'None';
    this.largestDiameterInMm = null;
    this.serialNumber = '';
    this.pictureNumber = '';
    this.uploadedImageFile = null;
    this.imageFileId = null;

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
