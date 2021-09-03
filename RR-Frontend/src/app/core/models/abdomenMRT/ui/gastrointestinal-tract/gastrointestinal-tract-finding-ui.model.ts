import { FluidTypeEnum, MassTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/appendicitis';

import {
  CddClassificationTypeEnum,
  CharacteristicsTypeEnum,
  HansenAndStockTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/bowel-diverticula';

import {
  GastrointestinalDifferentialDiagnosisTypeEnum,
  HeightTypeEnum,
  HistologyKnownTypeEnum,
  SideTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/common';

import {
  AbdominalWallHerniaTypeEnum,
  DetailsTypeEnum,
  HerniaLocalizationTypeEnum,
  MidlineHerniasTypeEnum,
  TypeTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/hernia';

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
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { GastrointestinalTractFindingBaseUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-base-ui.model';

export class GastrointestinalTractFindingUiModel extends GastrointestinalTractFindingBaseUiModel {
  descriptionType: DescriptionTypeEnum;

  // Common

  histologyKnownType: HistologyKnownTypeEnum;
  heightType: HeightTypeEnum;
  sideType: SideTypeEnum;
  typeType: TypeTypeEnum;
  differentialDiagnosis1Type: GastrointestinalDifferentialDiagnosisTypeEnum;
  differentialDiagnosis2Type: GastrointestinalDifferentialDiagnosisTypeEnum;
  evaluationType: EvaluationTypeEnum;
  extensionType: ExtensionTypeEnum;
  isHistologyKnown: boolean;
  isSuspicionOf: boolean;
  isSubordinate: boolean;
  isOneLesionOfTheSameEntity: boolean;
  isRectum: boolean;
  isStenosis: boolean;
  isMass: boolean;
  isIleus: boolean;
  isFistula: boolean;
  isContained: boolean;
  isOpen: boolean;
  isPerifocalFatStranding: boolean;
  isJejunumIleum: boolean;
  isFluid: boolean;
  isIncarceration: boolean;
  isVolvulus: boolean;
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
  measurementIntestinalWallInMm: number;

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

  referencePicture: ReferencePictureUiModel;

  constructor() {
    super();
    this.descriptionType = DescriptionTypeEnum.None;

    // Common

    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.heightType = HeightTypeEnum.None;
    this.sideType = SideTypeEnum.None;
    this.typeType = TypeTypeEnum.None;
    this.differentialDiagnosis1Type = GastrointestinalDifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis2Type = GastrointestinalDifferentialDiagnosisTypeEnum.None;
    this.evaluationType = EvaluationTypeEnum.None;
    this.extensionType = ExtensionTypeEnum.None;
    this.isHistologyKnown = false;
    this.isSuspicionOf = false;
    this.isSubordinate = false;
    this.isOneLesionOfTheSameEntity = false;
    this.isCommunicating = false;
    this.isRectum = false;
    this.isStenosis = false;
    this.isMass = false;
    this.isIleus = false;
    this.isFistula = false;
    this.isContained = false;
    this.isOpen = false;
    this.isPerifocalFatStranding = false;
    this.isJejunumIleum = false;
    this.isFluid = false;
    this.isIncarceration = false;
    this.isVolvulus = false;
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
    this.measurementIntestinalWallInMm = null;

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

    this.referencePicture = new ReferencePictureUiModel();
  }
}
