import {
  CmEnhancementDistributionTypeEnum,
  FormTypeEnum,
  HistologyKnownTypeEnum,
  HomogeneityTypeEnum,
  PlantVariationPathologicalAnatomyTypeEnum,
  QuantityTypeEnum,
  SpleenDiagnosisTypeEnum
} from '@enums/abdomenMRT/spleen';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FileApiModel } from '@models/shared/uploader/file-api.model';
import { SpleenFindingBaseApiModel } from '@models/abdomenMRT/api/spleen/spleen-finding-base-api.model';

export class SpleenFindingApiModel extends SpleenFindingBaseApiModel {
  // Common
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;

  // StandardVariants
  plantVariationPathologicalAnatomyType: PlantVariationPathologicalAnatomyTypeEnum;
  isCleaves: boolean;
  isNotches: boolean;
  isNodes: boolean;
  isLobulation: boolean;

  // Mass
  descriptionType: DescriptionTypeEnum;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  quantityType: QuantityTypeEnum;
  isFat: boolean;
  isLiquid: boolean;
  isCalcium: boolean;
  isCapsule: boolean;
  isSepts: boolean;
  isNecrosis: boolean;
  isFlowVoid: boolean;
  isBleeding: boolean;
  isNoDisplacement: boolean;
  isMass: boolean;
  isDiffusionRestriction: boolean;
  differentialDiagnosis1: SpleenDiagnosisTypeEnum;
  isSuspicionOf: boolean;
  differentialDiagnosis2: SpleenDiagnosisTypeEnum;
  isSubordinate: boolean;
  differentialDiagnosis3: SpleenDiagnosisTypeEnum;
  isMoreThanOneLesionSamePathology: boolean;
  isExtremitasAnterior: boolean;
  isMiddleThird: boolean;
  isAtTheHilus: boolean;
  isExtremePosterior: boolean;
  isParenchymatous: boolean;
  isSubcapsular: boolean;
  isMoreThanOneLesionParenchymatous: boolean;
  isMoreThanOneLesionSubcapsular: boolean;
  serialNumber: string;
  pictureNumber: string;
  uploadedImageFile: FileApiModel;
  imageFileId: string;

  // SplenicInfarction
  isUpstreamAneurysm: boolean;
  maxDiameterInMm: boolean;
  isUpstreamArterialOcclusion: boolean;
  isOcclusionOfTheSplenicVein: boolean;
  isThrombosisOfTheSplenicVein: boolean;
  isMultifocalLocalization: boolean;

  constructor() {
    super();

    // Common
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;

    // StandardVariants
    this.plantVariationPathologicalAnatomyType = PlantVariationPathologicalAnatomyTypeEnum.None;
    this.isCleaves = false;
    this.isNotches = false;
    this.isNodes = false;
    this.isLobulation = false;

    // Mass
    this.descriptionType = DescriptionTypeEnum.None;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.quantityType = QuantityTypeEnum.None;
    this.isFat = false;
    this.isLiquid = false;
    this.isCalcium = false;
    this.isCapsule = false;
    this.isSepts = false;
    this.isNecrosis = false;
    this.isFlowVoid = false;
    this.isBleeding = false;
    this.isNoDisplacement = false;
    this.isMass = false;
    this.isDiffusionRestriction = false;
    this.differentialDiagnosis1 = SpleenDiagnosisTypeEnum.None;
    this.isSuspicionOf = false;
    this.differentialDiagnosis2 = SpleenDiagnosisTypeEnum.None;
    this.isSubordinate = false;
    this.differentialDiagnosis3 = SpleenDiagnosisTypeEnum.None;
    this.isMoreThanOneLesionSamePathology = false;
    this.isExtremitasAnterior = false;
    this.isMiddleThird = false;
    this.isAtTheHilus = false;
    this.isExtremePosterior = false;
    this.isParenchymatous = false;
    this.isSubcapsular = false;
    this.isMoreThanOneLesionParenchymatous = false;
    this.isMoreThanOneLesionSubcapsular = false;
    this.serialNumber = '';
    this.pictureNumber = '';
    this.uploadedImageFile = null;
    this.imageFileId = null;

    // SplenicInfarction
    this.isUpstreamAneurysm = false;
    this.maxDiameterInMm = null;
    this.isUpstreamArterialOcclusion = false;
    this.isOcclusionOfTheSplenicVein = false;
    this.isThrombosisOfTheSplenicVein = false;
    this.isMultifocalLocalization = false;
  }
}
