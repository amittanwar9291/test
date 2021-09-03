import { FluidTypeEnum, MassTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/appendicitis';

import {
  CddClassificationTypeEnum,
  CharacteristicsTypeEnum,
  HansenAndStockTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/bowel-diverticula';

import {
  ContrastEnhancementQuantitativeTypeEnum,
  GastricLocalizationTypeEnum,
  GastrointestinalDifferentialDiagnosisTypeEnum,
  GastrointestinalHomogeneityTypeEnum,
  HeightTypeEnum,
  HistologyKnownTypeEnum,
  MarginTypeEnum,
  PerforationTypeEnum,
  SideTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/common';

import {
  AbdominalWallHerniaTypeEnum,
  DetailsTypeEnum,
  HerniaLocalizationTypeEnum,
  MidlineHerniasTypeEnum,
  TypeTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/hernia';

import { HourTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/intestinal-mass';

import {
  MechanicalLocalizationTypeEnum,
  PoststenoticSegmentTypeEnum,
  TransitionalSegmentTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/mechanical-ileus';

import { PathogenesisTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/paralytic-ileus';

import {
  ComplicationCourseOfDiseaseTypeEnum,
  StomachResectionTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/postoperative-gastric-imaging';

import {
  ContrastEnhancementDistributionTypeEnum,
  EvaluationTypeEnum,
  ExtensionTypeEnum,
  LengthOfChangesInCmTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/segmental-bowel-findings';
import { FileApiModel } from '@models/shared/uploader/file-api.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { GastrointestinalTractFindingBaseApiModel } from '@models/abdomenMRT/api/gastrointestinal-tract/gastrointestinal-tract-finding-base-api.model';

export class GastrointestinalTractFindingApiModel extends GastrointestinalTractFindingBaseApiModel {
  descriptionType: DescriptionTypeEnum;

  // Common

  histologyKnownType: HistologyKnownTypeEnum;
  gastricLocalizationType: GastricLocalizationTypeEnum;
  marginType: MarginTypeEnum;
  homogeneityType: GastrointestinalHomogeneityTypeEnum;
  cmEnhancementHomogeneityType: GastrointestinalHomogeneityTypeEnum;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  perforationType: PerforationTypeEnum;
  heightType: HeightTypeEnum;
  sideType: SideTypeEnum;
  typeType: TypeTypeEnum;
  differentialDiagnosis1Type: GastrointestinalDifferentialDiagnosisTypeEnum;
  differentialDiagnosis2Type: GastrointestinalDifferentialDiagnosisTypeEnum;
  evaluationType: EvaluationTypeEnum;
  extensionType: ExtensionTypeEnum;
  isHistologyKnown: boolean;
  isDiffusionRestriction: boolean;
  isExophytic: boolean;
  isEndophytic: boolean;
  isSuspicionOf: boolean;
  isSubordinate: boolean;
  isAbscess: boolean;
  isOneLesionOfTheSameEntity: boolean;
  isCommunicating: boolean;
  isDuodenum: boolean;
  isJejunum: boolean;
  isCecum: boolean;
  isVermiformAppendix: boolean;
  isAscendingColon: boolean;
  isHepaticFlexure: boolean;
  isTransverseColon: boolean;
  isSplenicFlexure: boolean;
  isDescendingColon: boolean;
  isSigmoidColon: boolean;
  isRectum: boolean;
  isAnalCanal: boolean;
  isInvagination: boolean;
  isStenosis: boolean;
  isMass: boolean;
  isIleus: boolean;
  isFistula: boolean;
  isPerforation: boolean;
  isContained: boolean;
  isOpen: boolean;
  isPerifocalFatStranding: boolean;
  isParsDescendens: boolean;
  isParsHorizontalis: boolean;
  isParsAscendens: boolean;
  isAscites: boolean;
  isJejunumIleum: boolean;
  isFluid: boolean;
  isIncarceration: boolean;
  isVolvulus: boolean;
  isArterial: boolean;
  isAccentuatedMesentericVesselsCombSign: boolean;
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
  measurementIntestinalWallInMm: number;
  sadLargestInMm: number;

  // GastricMass

  isSignalDropInTheOpposedPhaseChemicalShift: boolean;
  isSubmucous: boolean;
  isIntraluminal: boolean;
  isExtraluminal: boolean;
  isIrregularCalcifications: boolean;
  isPunctateCalcifications: boolean;
  isMucosalEnhancement: boolean;
  sadInMm: number;
  isMacroscopicFat: boolean;

  // GastricUlcer

  isFreeGas: boolean;
  isSuspicionOfFreeGas: boolean;
  isSuspicionOfAbscess: boolean;

  // PostoperativeGastricImaging

  complicationCourseOfDiseaseType: ComplicationCourseOfDiseaseTypeEnum;
  isMarginalContrastEnhancement: boolean;
  isSeroma: boolean;
  isActiveBleeding: boolean;
  isSignsOfSuperinfection: boolean;
  isStomachResection: boolean;
  stomachResectionType: StomachResectionTypeEnum;
  isBiliodigestiveAnastomosis: boolean;
  isBraunAnastomosis: boolean;
  isFundoplication: boolean;
  isRouxYReconstruction: boolean;
  isGastricBanding: boolean;
  isBariatricSurgery: boolean;

  // SegmentalBowelFindings

  isPreterminalIleum: boolean;
  isNeoterminalIleum: boolean;
  isTerminalIleum: boolean;
  lengthOfChangesInCmType: LengthOfChangesInCmTypeEnum;
  isStricture: boolean;
  massMaximumDiameterInMm: number;
  isPseudotumor: boolean;
  isPseudotumorStenosis: boolean;
  isPrestenoticDilatation: boolean;
  prestenoticDilatationMaximumDiameterInMm: number;
  isInterenteric: boolean;
  isEnterocutaneous: boolean;
  isBlindEndend: boolean;
  isEnterovesical: boolean;
  isEnterovaginal: boolean;
  isToxicMegacolon: boolean;
  isMucosalEdema: boolean;

  // IntestinalMass

  isIleum: boolean;
  isRectumUpperThird: boolean;
  isRectumMiddleThird: boolean;
  isRectumLowerThird: boolean;
  isPortalVenous: boolean;
  isDesmoplasticReactionOfTheMesentery: boolean;
  isPostoperativePostinterventional: boolean;
  isRadiationInduced: boolean;
  isMesorectalFascia: boolean;
  fromToType: HourTypeEnum;
  untilType: HourTypeEnum;
  isAdjacentIntestine: boolean;
  isPeritonealFolds: boolean;
  isParenchymalOrgan: boolean;
  isLiver: boolean;
  isPancreas: boolean;
  isSpleen: boolean;
  isKidney: boolean;
  isKidneyRight: boolean;
  isKidneyLeft: boolean;
  isAdrenalGland: boolean;
  isAdrenalGlandRight: boolean;
  isAdrenalGlandLeft: boolean;
  isVessels: boolean;
  isBone: boolean;
  isMechanicalIleus: boolean;
  isPeritonealCarcinomatosis: boolean;
  isFistulaFormation: boolean;
  isCloacalFormation: boolean;
  isLocoregional: boolean;
  isDistant: boolean;
  longitudinalExtensionInMm: number;

  // BowelDiverticula

  isMeckelSDiverticulum: boolean;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  characteristicsType: CharacteristicsTypeEnum;
  isDiverticulosis: boolean;
  bowelDiverticulaMaximumDiameterInMm: number;
  hansenAndStockType: HansenAndStockTypeEnum;
  cddClassificationType: CddClassificationTypeEnum;
  isPerifocalAbscess: boolean;
  isMultipleAbscesses: boolean;
  maxSizeInMm: number;
  isPeritonitis: boolean;
  isEnteroEnteral: boolean;
  isEnteroVesical: boolean;
  isEnteroCutaneous: boolean;
  isEnteroVaginal: boolean;
  isSinusTract: boolean;

  // Appendicitis

  isRetrocecalPositionOfTheAppendix: boolean;
  isAppendixExpansion: boolean;
  appendixExpansionInMm: number;
  isLumenExpansion: boolean;
  lumenExpansionInMm: number;
  isAppendicolite: boolean;
  appendicoliteInMm: number;
  isContrastEnhancementOfTheIntestinalWall: boolean;
  isTargetSign: boolean;
  isFocalReducedContrastEnhancement: boolean;
  isWallEdemaOfTheAdjacentIntestinalSegments: boolean;
  fluidType: FluidTypeEnum;
  isPerityphliticAbscess: boolean;
  isInflammatoryCoReactionOfTheMPsoas: boolean;
  isMucocele: boolean;
  isDiverticulitis: boolean;
  isAppendagitisEpiploica: boolean;
  massType: MassTypeEnum;
  isEnlargedNonInflamedAppendix: boolean;
  isColitis: boolean;
  isIleitis: boolean;
  isOvarianProcess: boolean;

  // MechanicalIleus

  maxPrestenoticDilatationInMm: number;
  mechanicalLocalizationType: MechanicalLocalizationTypeEnum;
  isIschemicBowelSegments: boolean;
  isTransmigratoryPeritonitis: boolean;
  isAdhesionsBrides: boolean;
  isInflammatory: boolean;
  isStrangulation: boolean;
  isClosedLoop: boolean;
  isAtresia: boolean;
  isGallstoneIleus: boolean;
  isScarStenosis: boolean;
  isDuplications: boolean;
  isCoprostasis: boolean;
  poststenoticSegmentType: PoststenoticSegmentTypeEnum;
  transitionalSegmentType: TransitionalSegmentTypeEnum;
  isSurroundingMass: boolean;

  // ParalyticIleus

  pathogenesisType: PathogenesisTypeEnum;
  isGeneralizedUniformGaseousDistensionOfTheLargeAndSmallBowel: boolean;
  maximumDiameterLargeBowelInMm: number;
  maximumSmallBowelDiameterInMm: number;

  // Hernia

  herniaLocalizationType: HerniaLocalizationTypeEnum;
  isLittreRichterHernia: boolean;
  extensionHerniaSacInMm: number;
  extensionHernialOrificeInMm: number;
  extensionHernialOrificeSecondPlaneInMm: number;
  extensionHernialOrificeThirdPlaneInMm: number;
  abdominalWallHerniaType: AbdominalWallHerniaTypeEnum;
  midlineHerniasType: MidlineHerniasTypeEnum;
  detailsType: DetailsTypeEnum;
  isIncisionalHernia: boolean;
  isScrotalHernia: boolean;
  isIntestinalLoops: boolean;
  isLargeIntestine: boolean;
  isSmallIntestine: boolean;
  isMesentericFatTissue: boolean;
  isOmentum: boolean;
  isFixedBowelLoops: boolean;
  isBowelInAbnormalAnatomicPosition: boolean;
  isObstruction: boolean;

  // ImageFileUpload

  checkCondition: boolean;
  uploadedImageFile: FileApiModel;
  imageFileId: string;
  pictureNumber: string;
  serialNumber: string;

  constructor() {
    super();
    this.descriptionType = DescriptionTypeEnum.None;

    // Common

    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.gastricLocalizationType = GastricLocalizationTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = GastrointestinalHomogeneityTypeEnum.None;
    this.cmEnhancementHomogeneityType = GastrointestinalHomogeneityTypeEnum.None;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.perforationType = PerforationTypeEnum.None;
    this.heightType = HeightTypeEnum.None;
    this.sideType = SideTypeEnum.None;
    this.typeType = TypeTypeEnum.None;
    this.differentialDiagnosis1Type = GastrointestinalDifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis2Type = GastrointestinalDifferentialDiagnosisTypeEnum.None;
    this.evaluationType = EvaluationTypeEnum.None;
    this.extensionType = ExtensionTypeEnum.None;
    this.isHistologyKnown = false;
    this.isDiffusionRestriction = false;
    this.isExophytic = false;
    this.isEndophytic = false;
    this.isSuspicionOf = false;
    this.isSubordinate = false;
    this.isAbscess = false;
    this.isOneLesionOfTheSameEntity = false;
    this.isCommunicating = false;
    this.isDuodenum = false;
    this.isJejunum = false;
    this.isCecum = false;
    this.isVermiformAppendix = false;
    this.isAscendingColon = false;
    this.isHepaticFlexure = false;
    this.isTransverseColon = false;
    this.isSplenicFlexure = false;
    this.isDescendingColon = false;
    this.isSigmoidColon = false;
    this.isRectum = false;
    this.isAnalCanal = false;
    this.isInvagination = false;
    this.isStenosis = false;
    this.isMass = false;
    this.isIleus = false;
    this.isFistula = false;
    this.isPerforation = false;
    this.isContained = false;
    this.isOpen = false;
    this.isPerifocalFatStranding = false;
    this.isParsDescendens = false;
    this.isParsHorizontalis = false;
    this.isParsAscendens = false;
    this.isAscites = false;
    this.isJejunumIleum = false;
    this.isFluid = false;
    this.isIncarceration = false;
    this.isVolvulus = false;
    this.isArterial = false;
    this.isAccentuatedMesentericVesselsCombSign = false;
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
    this.measurementIntestinalWallInMm = null;
    this.sadLargestInMm = null;

    // GastricMass

    this.isSignalDropInTheOpposedPhaseChemicalShift = false;
    this.isSubmucous = false;
    this.isIntraluminal = false;
    this.isExtraluminal = false;
    this.isIrregularCalcifications = false;
    this.isPunctateCalcifications = false;
    this.isMucosalEnhancement = false;
    this.sadInMm = null;
    this.isMacroscopicFat = false;

    // GastricUlcer

    this.isFreeGas = false;
    this.isSuspicionOfFreeGas = false;
    this.isSuspicionOfAbscess = false;

    // PostoperativeGastricImaging

    this.complicationCourseOfDiseaseType = ComplicationCourseOfDiseaseTypeEnum.None;
    this.isMarginalContrastEnhancement = false;
    this.isSeroma = false;
    this.isActiveBleeding = false;
    this.isSignsOfSuperinfection = false;
    this.isStomachResection = false;
    this.stomachResectionType = StomachResectionTypeEnum.None;
    this.isBiliodigestiveAnastomosis = false;
    this.isBraunAnastomosis = false;
    this.isFundoplication = false;
    this.isRouxYReconstruction = false;
    this.isGastricBanding = false;
    this.isBariatricSurgery = false;

    // SegmentalBowelFindings

    this.isPreterminalIleum = false;
    this.isNeoterminalIleum = false;
    this.isTerminalIleum = false;
    this.lengthOfChangesInCmType = LengthOfChangesInCmTypeEnum.None;
    this.isStricture = false;
    this.massMaximumDiameterInMm = null;
    this.isPseudotumor = false;
    this.isPseudotumorStenosis = false;
    this.isPrestenoticDilatation = false;
    this.prestenoticDilatationMaximumDiameterInMm = null;
    this.isInterenteric = false;
    this.isEnterocutaneous = false;
    this.isBlindEndend = false;
    this.isEnterovesical = false;
    this.isEnterovaginal = false;
    this.isToxicMegacolon = false;
    this.isMucosalEdema = false;

    // IntestinalMass

    this.isIleum = false;
    this.isRectumUpperThird = false;
    this.isRectumMiddleThird = false;
    this.isRectumLowerThird = false;
    this.isPortalVenous = false;
    this.isDesmoplasticReactionOfTheMesentery = false;
    this.isPostoperativePostinterventional = false;
    this.isRadiationInduced = false;
    this.isMesorectalFascia = false;
    this.fromToType = HourTypeEnum.None;
    this.untilType = HourTypeEnum.None;
    this.isAdjacentIntestine = false;
    this.isPeritonealFolds = false;
    this.isParenchymalOrgan = false;
    this.isLiver = false;
    this.isPancreas = false;
    this.isSpleen = false;
    this.isKidney = false;
    this.isKidneyRight = false;
    this.isKidneyLeft = false;
    this.isAdrenalGland = false;
    this.isAdrenalGlandRight = false;
    this.isAdrenalGlandLeft = false;
    this.isVessels = false;
    this.isBone = false;
    this.isMechanicalIleus = false;
    this.isPeritonealCarcinomatosis = false;
    this.isFistulaFormation = false;
    this.isCloacalFormation = false;
    this.isLocoregional = false;
    this.isDistant = false;
    this.longitudinalExtensionInMm = null;

    // BowelDiverticula

    this.isMeckelSDiverticulum = false;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.characteristicsType = CharacteristicsTypeEnum.None;
    this.isDiverticulosis = false;
    this.bowelDiverticulaMaximumDiameterInMm = null;
    this.hansenAndStockType = HansenAndStockTypeEnum.None;
    this.cddClassificationType = CddClassificationTypeEnum.None;
    this.isPerifocalAbscess = false;
    this.isMultipleAbscesses = false;
    this.maxSizeInMm = null;
    this.isPeritonitis = false;
    this.isEnteroEnteral = false;
    this.isEnteroVesical = false;
    this.isEnteroCutaneous = false;
    this.isEnteroVaginal = false;
    this.isSinusTract = false;

    // Appendicitis

    this.isRetrocecalPositionOfTheAppendix = false;
    this.isAppendixExpansion = false;
    this.appendixExpansionInMm = null;
    this.isLumenExpansion = false;
    this.lumenExpansionInMm = null;
    this.isAppendicolite = false;
    this.appendicoliteInMm = null;
    this.isContrastEnhancementOfTheIntestinalWall = false;
    this.isTargetSign = false;
    this.isFocalReducedContrastEnhancement = false;
    this.isWallEdemaOfTheAdjacentIntestinalSegments = false;
    this.fluidType = FluidTypeEnum.None;
    this.isPerityphliticAbscess = false;
    this.isInflammatoryCoReactionOfTheMPsoas = false;
    this.isMucocele = false;
    this.isDiverticulitis = false;
    this.isAppendagitisEpiploica = false;
    this.massType = MassTypeEnum.None;
    this.isEnlargedNonInflamedAppendix = false;
    this.isColitis = false;
    this.isIleitis = false;
    this.isOvarianProcess = false;

    // MechanicalIleus

    this.maxPrestenoticDilatationInMm = null;
    this.mechanicalLocalizationType = MechanicalLocalizationTypeEnum.None;
    this.isIschemicBowelSegments = false;
    this.isTransmigratoryPeritonitis = false;
    this.isAdhesionsBrides = false;
    this.isInflammatory = false;
    this.isStrangulation = false;
    this.isClosedLoop = false;
    this.isAtresia = false;
    this.isGallstoneIleus = false;
    this.isScarStenosis = false;
    this.isDuplications = false;
    this.isCoprostasis = false;
    this.poststenoticSegmentType = PoststenoticSegmentTypeEnum.None;
    this.transitionalSegmentType = TransitionalSegmentTypeEnum.None;
    this.isSurroundingMass = false;

    // ParalyticIleus

    this.pathogenesisType = PathogenesisTypeEnum.None;
    this.isGeneralizedUniformGaseousDistensionOfTheLargeAndSmallBowel = false;
    this.maximumDiameterLargeBowelInMm = null;
    this.maximumSmallBowelDiameterInMm = null;

    // Hernia

    this.herniaLocalizationType = HerniaLocalizationTypeEnum.None;
    this.isLittreRichterHernia = false;
    this.extensionHerniaSacInMm = null;
    this.extensionHernialOrificeInMm = null;
    this.extensionHernialOrificeSecondPlaneInMm = null;
    this.extensionHernialOrificeThirdPlaneInMm = null;
    this.abdominalWallHerniaType = AbdominalWallHerniaTypeEnum.None;
    this.midlineHerniasType = MidlineHerniasTypeEnum.None;
    this.detailsType = DetailsTypeEnum.None;
    this.isIncisionalHernia = false;
    this.isScrotalHernia = false;
    this.isIntestinalLoops = false;
    this.isLargeIntestine = false;
    this.isSmallIntestine = false;
    this.isMesentericFatTissue = false;
    this.isOmentum = false;
    this.isFixedBowelLoops = false;
    this.isBowelInAbnormalAnatomicPosition = false;
    this.isObstruction = false;

    // ImageFileUpload

    this.checkCondition = false;
    this.pictureNumber = '';
    this.serialNumber = '';
    this.uploadedImageFile = null;
    this.imageFileId = null;
  }
}
