import { FindingBase } from '@models/shared/finding/finding.base';
import { PeritonealCavityDifferentialDiagnosisTypeEnum, PeritonealCavityFindingTypeEnum } from '@enums/abdomenMRT/peritoneal-cavity/';

import { AscitesQualityTypeEnum, ExtensionTypeEnum, QuantityTypeEnum } from '@enums/abdomenMRT/peritoneal-cavity/ascites';

import {
  ContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  FormTypeEnum,
  GrowthPatternsTypeEnum,
  MarginTypeEnum
} from '@enums/abdomenMRT/peritoneal-cavity/peritoneal-mass';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { HomogeneityTypeEnum } from '@enums/abdomenMRT/homogeneity-type.enum';

export class PeritonealCavityFindingUiModel extends FindingBase {
  findingType: PeritonealCavityFindingTypeEnum;

  // Common

  differentialDiagnosisType: PeritonealCavityDifferentialDiagnosisTypeEnum;
  differentialDiagnosis1Type: PeritonealCavityDifferentialDiagnosisTypeEnum;
  differentialDiagnosis2Type: PeritonealCavityDifferentialDiagnosisTypeEnum;
  differentialDiagnosis3Type: PeritonealCavityDifferentialDiagnosisTypeEnum;
  isSubphrenic: boolean;
  isRight: boolean;
  isLeft: boolean;
  isOmentalBursa: boolean;
  isOmentumMajus: boolean;
  isOmentalForamen: boolean;
  isSubhepatic: boolean;
  isSupramesenteric: boolean;
  isInframesenteric: boolean;
  isMesentericRoot: boolean;
  isPeritonealContrastEnhancement: boolean;
  isParacolic: boolean;
  isParacolicRight: boolean;
  isParacolicLeft: boolean;
  isMesocolonTransversum: boolean;
  isSupramesocolic: boolean;
  isInframesocolic: boolean;
  isVesicoUterinePouch: boolean;
  isRectoUterinePouchPouchOfDouglas: boolean;
  isRectoVesicalPouch: boolean;
  isMesenteryOfTheSmallBowel: boolean;
  isDiffuse: boolean;
  isAnteriorPararenalSpace: boolean;
  isPosteriorPararenalSpace: boolean;
  isPerirenalSpace: boolean;
  isAnteriorLeafGerotaFascia: boolean;
  isPosteriorLeafGerotaFascia: boolean;
  isSuspicionOf: boolean;
  isSubordinate: boolean;

  // ImageFileUpload
  referencePicture: ReferencePictureUiModel;

  t1wSignal: number;
  t2wSignal: number;
  isSignalDrop: boolean;
  signalDropExtensionType: ExtensionTypeEnum;
  isDiffusionRestriction: boolean;
  extensionSizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
  isRetroperitoneum: boolean;
  isLateroconalFascia: boolean;
  isZuckerkandlsFascia: boolean;
  isParaaortic: boolean;
  isInteraortocaval: boolean;
  isParacaval: boolean;
  marginType: MarginTypeEnum;
  formType: FormTypeEnum;
  isFat: boolean;
  isCysts: boolean;
  isCalcification: boolean;
  isBoneOrTooth: boolean;
  isInternalChangesCapsule: boolean;
  isSepta: boolean;
  isNecrosis: boolean;
  isSignalVoids: boolean;
  isHemorrhage: boolean;
  growthPatternsType: GrowthPatternsTypeEnum;
  isAssociatedFindingsCapsule: boolean;
  isPseudoCapsule: boolean;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;

  // Ascites
  maxThicknessInMm: number;
  isConcomitantPeritonitis: boolean;
  isFocalGasInclusion: boolean;
  isSuspectedAbscess: boolean;
  isSuspectedAbscessAboveOneFinding: boolean;
  isCommunicatingLesions: boolean;
  quantityType: QuantityTypeEnum;
  ascitesQualityType: AscitesQualityTypeEnum;

  // Peritonitis
  isOmentumInvolvement: boolean;
  isMesentericFatInvolvement: boolean;
  isInvolvedQuadrantsRightUpper: boolean;
  isInvolvedQuadrantsRightLower: boolean;
  isInvolvedQuadrantsLeftUpper: boolean;
  isInvolvedQuadrantsLeftLower: boolean;

  // HemorrhageHematoma
  isIntraperitoneal: boolean;
  isRetroperitoneumRightSide: boolean;
  isRetroperitoneumLeftSide: boolean;
  isSedimentationEffects: boolean;
  isFluidLevel: boolean;
  isSignsOfSuperinfection: boolean;

  // PeritonealMass

  pmLocalizationHomogeneityType: HomogeneityTypeEnum;
  isSpaceOccupying: boolean;
  isAbdominalWall: boolean;
  isSmallIntestine: boolean;
  isColon: boolean;
  isStomach: boolean;
  isArteries: boolean;
  isVeins: boolean;
  isThickenedGreaterOmentum: boolean;
  isContrastEnhancement: boolean;
  thickenedGreaterOmentumMaxWidthInMm: number;
  isPerforation: boolean;
  isFreeGas: boolean;
  isDDPostoperative: boolean;
  isIleus: boolean;
  isAscites: boolean;
  isImpressionOfLiverSurface: boolean;
  isImpressionOfSpleenSurface: boolean;
  isEvidenceOfContrastMediaLatePhase: boolean;
  isEncasementOfMesentericVessels: boolean;
  isRetractionOfAdjacentIntestinalLoops: boolean;
  pMStrongHomogeneityType: HomogeneityTypeEnum;
  isAboveOneLesionOfTheSameEntity: boolean;

  // RetroperitonealMass

  rmLocalizationHomogeneityType: HomogeneityTypeEnum;
  isUreter: boolean;
  isBone: boolean;
  isNeuralForamen: boolean;
  isSpinalCanal: boolean;
  isCutaneous: boolean;
  isMPsoas: boolean;
  isSpondylodiscitis: boolean;
  isSpondylodiscitisSuspicionOf: boolean;
  rMStrongHomogeneityType: HomogeneityTypeEnum;

  constructor() {
    super();
    this.findingType = PeritonealCavityFindingTypeEnum.None;

    // Common
    this.differentialDiagnosisType = PeritonealCavityDifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis1Type = PeritonealCavityDifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis2Type = PeritonealCavityDifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis3Type = PeritonealCavityDifferentialDiagnosisTypeEnum.None;
    this.isSubphrenic = false;
    this.isRight = false;
    this.isLeft = false;
    this.isOmentalBursa = false;
    this.isOmentumMajus = false;
    this.isOmentalForamen = false;
    this.isSubhepatic = false;
    this.isSupramesenteric = false;
    this.isInframesenteric = false;
    this.isMesentericRoot = false;
    this.isPeritonealContrastEnhancement = false;
    this.isParacolic = false;
    this.isParacolicRight = false;
    this.isParacolicLeft = false;
    this.isMesocolonTransversum = false;
    this.isSupramesocolic = false;
    this.isInframesocolic = false;
    this.isVesicoUterinePouch = false;
    this.isRectoUterinePouchPouchOfDouglas = false;
    this.isRectoVesicalPouch = false;
    this.isMesenteryOfTheSmallBowel = false;
    this.isDiffuse = false;
    this.isAnteriorPararenalSpace = false;
    this.isPosteriorPararenalSpace = false;
    this.isPerirenalSpace = false;
    this.isAnteriorLeafGerotaFascia = false;
    this.isPosteriorLeafGerotaFascia = false;
    this.isSuspicionOf = false;
    this.isSubordinate = false;
    this.referencePicture = new ReferencePictureUiModel();

    this.t1wSignal = null;
    this.t2wSignal = null;
    this.isSignalDrop = false;
    this.signalDropExtensionType = ExtensionTypeEnum.None;
    this.isDiffusionRestriction = false;
    this.extensionSizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
    this.isRetroperitoneum = false;
    this.isLateroconalFascia = false;
    this.isZuckerkandlsFascia = false;
    this.isParaaortic = false;
    this.isInteraortocaval = false;
    this.isParacaval = false;
    this.marginType = MarginTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.isFat = false;
    this.isCysts = false;
    this.isCalcification = false;
    this.isBoneOrTooth = false;
    this.isInternalChangesCapsule = false;
    this.isSepta = false;
    this.isNecrosis = false;
    this.isSignalVoids = false;
    this.isHemorrhage = false;
    this.growthPatternsType = GrowthPatternsTypeEnum.None;
    this.isAssociatedFindingsCapsule = false;
    this.isPseudoCapsule = false;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;

    // Ascites
    this.maxThicknessInMm = null;
    this.isConcomitantPeritonitis = false;
    this.isFocalGasInclusion = false;
    this.isSuspectedAbscess = false;
    this.isSuspectedAbscessAboveOneFinding = false;
    this.isCommunicatingLesions = false;
    this.quantityType = QuantityTypeEnum.None;
    this.ascitesQualityType = AscitesQualityTypeEnum.None;

    // Peritonitis
    this.isOmentumInvolvement = false;
    this.isMesentericFatInvolvement = false;
    this.isInvolvedQuadrantsRightUpper = false;
    this.isInvolvedQuadrantsRightLower = false;
    this.isInvolvedQuadrantsLeftUpper = false;
    this.isInvolvedQuadrantsLeftLower = false;

    // HemorrhageHematoma
    this.isIntraperitoneal = false;
    this.isRetroperitoneumRightSide = false;
    this.isRetroperitoneumLeftSide = false;
    this.isSedimentationEffects = false;
    this.isFluidLevel = false;
    this.isSignsOfSuperinfection = false;

    // PeritonealMass
    this.pmLocalizationHomogeneityType = HomogeneityTypeEnum.None;
    this.isSpaceOccupying = false;
    this.isAbdominalWall = false;
    this.isSmallIntestine = false;
    this.isColon = false;
    this.isStomach = false;
    this.isArteries = false;
    this.isVeins = false;
    this.isThickenedGreaterOmentum = false;
    this.isContrastEnhancement = false;
    this.thickenedGreaterOmentumMaxWidthInMm = null;
    this.isPerforation = false;
    this.isFreeGas = false;
    this.isDDPostoperative = false;
    this.isIleus = false;
    this.isAscites = false;
    this.isImpressionOfLiverSurface = false;
    this.isImpressionOfSpleenSurface = false;
    this.isEvidenceOfContrastMediaLatePhase = false;
    this.isEncasementOfMesentericVessels = false;
    this.isRetractionOfAdjacentIntestinalLoops = false;
    this.pMStrongHomogeneityType = HomogeneityTypeEnum.None;
    this.isAboveOneLesionOfTheSameEntity = false;

    // RetroperitonealMass

    this.rmLocalizationHomogeneityType = HomogeneityTypeEnum.None;
    this.isUreter = false;
    this.isBone = false;
    this.isNeuralForamen = false;
    this.isSpinalCanal = false;
    this.isCutaneous = false;
    this.isMPsoas = false;
    this.isSpondylodiscitis = false;
    this.isSpondylodiscitisSuspicionOf = false;
    this.rMStrongHomogeneityType = HomogeneityTypeEnum.None;
  }
}
