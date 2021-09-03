import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';
import { CortexFindingTypeEnum } from '@enums/shared/head/cortex';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/headCT/cortex/differential-diagnosis-type.enum';
import {
  CorticalThinningTypeEnum,
  MarginTypeEnum,
  HomogeneityTypeEnum,
  HistologyKnownTypeEnum,
  RegionTypeEnum,
  ContrastQuantitativeTypeEnum,
  ShapeTypeEnum
} from '@enums/shared/head/cortex/common/';
import { ClassificationWHOTypeEnum, DetailsTypeEnum, LocalizationTypeEnum } from '@enums/shared/head/cortex/focal';
import { ClassificationAdamsTypeEnum } from '@enums/shared/head/cortex/diffuse/classification-adams-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headCT/common/contrast-enhancement-quantitative-type.enum';
import { DensityTypeEnum } from '@enums/headCT/common/density-type.enum';

export class CortexFindingApiModel extends FindingBase {
  // Common

  findingType: CortexFindingTypeEnum;
  cortexDifferentialDiagnosisType: DifferentialDiagnosisTypeEnum;
  cortexDifferentialDiagnosisType1: DifferentialDiagnosisTypeEnum;
  cortexDifferentialDiagnosisType2: DifferentialDiagnosisTypeEnum;
  cortexDifferentialDiagnosisType3: DifferentialDiagnosisTypeEnum;
  descriptionType: DescriptionTypeEnum;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  cortexLocations: string;
  isPraecuneus: boolean;
  isCuneus: boolean;
  isLingualGyrus: boolean;
  isGyrusTemporalisTransversus: boolean;
  isLateralOccipitotemporalGyrus: boolean;
  isParsIntermedia: boolean;
  isSuperiorCerebellarPeduncle: boolean;
  isMiddleCerebellarPeduncle: boolean;
  isInferiorCerebellarPeduncle: boolean;
  isCortex: boolean;
  isWhiteMatter: boolean;
  localizationType: LocalizationTypeEnum;
  detailsType: DetailsTypeEnum;
  isCalcification: boolean;
  isNecrosis: boolean;
  isHemorrhage: boolean;
  isConfluent: boolean;
  isMassEffect: boolean;
  isInfiltration: boolean;
  isNarrowedSulci: boolean;
  isBlurringOfWhiteGreyJunction: boolean;
  isPerifocalEdema: boolean;
  isDescentOfTheCerebellarTonsils: boolean;
  isHydrocephalus: boolean;
  isMidlineShift: boolean;
  midlineShiftSideType: SideTypeEnum;
  midlineShift: number;
  isHerniation: boolean;
  regionType: RegionTypeEnum;
  isCorticalThinning: boolean;
  corticalThinningType: CorticalThinningTypeEnum;
  isCorticalTuber: boolean;
  isSubependymalNodules: boolean;
  isCalcified: boolean;
  isAbscess: boolean;
  maxDiameter: number;
  isVentricularHerniation: boolean;
  isLateralVentricleRight: boolean;
  isLateralVentricleLeft: boolean;
  is3RdVentricle: boolean;
  is4thVentricle: boolean;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementQuantitativeTypeEnum;
  isLesionOfTheSameEntity: boolean;
  isRight: boolean;
  isLeft: boolean;
  isFrontal: boolean;
  isTemporal: boolean;
  isParietal: boolean;
  isOccipital: boolean;
  isInfratentorial: boolean;
  marginType: MarginTypeEnum;
  isSuspicionOf: boolean;
  isSubordinate: boolean;

  // Focal

  localizationWHOClassification: ClassificationWHOTypeEnum;
  size: number;
  size2ndPlane: number;
  size3rdPlane: number;
  maxSizeInPreviousExamination: number;
  secondPlane: number;
  thirdPlane: number;
  configurationMarginType: MarginTypeEnum;
  densityType: DensityTypeEnum;
  quantitative: number;
  homogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  isCysticParts: boolean;
  isSolidParts: boolean;
  isFat: boolean;
  isCapsule: boolean;
  isSepta: boolean;
  isFluidLevel: boolean;
  isContactToTheVentricularSystem: boolean;
  isAqueduct: boolean;
  isCaputMedusa: boolean;
  contrastEnhancementType: ContrastQuantitativeTypeEnum;
  classificationWHO1: ClassificationWHOTypeEnum;
  classificationWHO2: ClassificationWHOTypeEnum;
  classificationWHO3: ClassificationWHOTypeEnum;

  // Diffuse

  localizationModifiedClassificationAdams: ClassificationAdamsTypeEnum;
  isCysts: boolean;
  isMicroBleeding: boolean;
  isHemorrhagicLacunae: boolean;
  isAtrophy: boolean;
  classificationAdams1: ClassificationAdamsTypeEnum;
  classificationAdams2: ClassificationAdamsTypeEnum;
  classificationAdams3: ClassificationAdamsTypeEnum;
  isMesiotemporalSclerosis: boolean;

  constructor() {
    super();

    // Common

    this.cortexDifferentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;
    this.cortexDifferentialDiagnosisType1 = DifferentialDiagnosisTypeEnum.None;
    this.cortexDifferentialDiagnosisType2 = DifferentialDiagnosisTypeEnum.None;
    this.cortexDifferentialDiagnosisType3 = DifferentialDiagnosisTypeEnum.None;
    this.findingType = CortexFindingTypeEnum.None;
    this.descriptionType = DescriptionTypeEnum.None;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.cortexLocations = 'None';
    this.isPraecuneus = false;
    this.isCuneus = false;
    this.isLingualGyrus = false;
    this.isGyrusTemporalisTransversus = false;
    this.isLateralOccipitotemporalGyrus = false;
    this.isParsIntermedia = false;
    this.isSuperiorCerebellarPeduncle = false;
    this.isMiddleCerebellarPeduncle = false;
    this.isInferiorCerebellarPeduncle = false;
    this.isCortex = false;
    this.isWhiteMatter = false;
    this.localizationType = LocalizationTypeEnum.None;
    this.detailsType = DetailsTypeEnum.None;
    this.isCalcification = false;
    this.isNecrosis = false;
    this.isHemorrhage = false;
    this.isConfluent = false;
    this.isMassEffect = false;
    this.isInfiltration = false;
    this.isNarrowedSulci = false;
    this.isBlurringOfWhiteGreyJunction = false;
    this.isPerifocalEdema = false;
    this.isDescentOfTheCerebellarTonsils = false;
    this.isHydrocephalus = false;
    this.isMidlineShift = false;
    this.midlineShiftSideType = SideTypeEnum.None;
    this.midlineShift = null;
    this.isHerniation = false;
    this.regionType = RegionTypeEnum.None;
    this.isCorticalThinning = false;
    this.corticalThinningType = CorticalThinningTypeEnum.None;
    this.isCorticalTuber = false;
    this.isSubependymalNodules = false;
    this.isCalcified = false;
    this.isAbscess = false;
    this.maxDiameter = null;
    this.isVentricularHerniation = false;
    this.isLateralVentricleRight = false;
    this.isLateralVentricleLeft = false;
    this.is3RdVentricle = false;
    this.is4thVentricle = false;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.isLesionOfTheSameEntity = false;
    this.isRight = false;
    this.isLeft = false;
    this.isFrontal = false;
    this.isTemporal = false;
    this.isParietal = false;
    this.isOccipital = false;
    this.isInfratentorial = false;
    this.marginType = MarginTypeEnum.None;
    this.isSuspicionOf = false;
    this.isSubordinate = false;

    // Focal

    this.localizationWHOClassification = ClassificationWHOTypeEnum.None;
    this.size = null;
    this.size2ndPlane = null;
    this.size3rdPlane = null;
    this.maxSizeInPreviousExamination = null;
    this.secondPlane = null;
    this.thirdPlane = null;
    this.configurationMarginType = MarginTypeEnum.None;
    this.densityType = DensityTypeEnum.None;
    this.quantitative = null;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.isCysticParts = false;
    this.isSolidParts = false;
    this.isFat = false;
    this.isCapsule = false;
    this.isSepta = false;
    this.isFluidLevel = false;
    this.isContactToTheVentricularSystem = false;
    this.isAqueduct = false;
    this.isCaputMedusa = false;
    this.contrastEnhancementType = ContrastQuantitativeTypeEnum.None;
    this.classificationWHO1 = ClassificationWHOTypeEnum.None;
    this.classificationWHO2 = ClassificationWHOTypeEnum.None;
    this.classificationWHO3 = ClassificationWHOTypeEnum.None;

    // Diffuse

    this.localizationModifiedClassificationAdams = ClassificationAdamsTypeEnum.None;
    this.isCysts = false;
    this.isMicroBleeding = false;
    this.isHemorrhagicLacunae = false;
    this.isAtrophy = false;
    this.classificationAdams1 = ClassificationAdamsTypeEnum.None;
    this.classificationAdams2 = ClassificationAdamsTypeEnum.None;
    this.classificationAdams3 = ClassificationAdamsTypeEnum.None;
    this.isMesiotemporalSclerosis = false;
  }
}
