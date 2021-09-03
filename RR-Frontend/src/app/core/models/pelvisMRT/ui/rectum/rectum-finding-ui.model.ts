import { FindingTypesEnum } from '@enums/pelvisMRT/rectum/common/finding-types.enum';
import { FindingBase } from '@models/shared/finding/finding.base';

import { RelationToPuborectalisMuscleTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/relation-to-puborectalis-muscle-type.enum';
import { LocalizationAxialTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/localization-axial-type.enum';
import { LocalizationSSLTypeEnum } from '@enums/pelvisMRT/rectum/common/localization-ssl-type.enum';
import { RectalCarcinomaMorphologyType } from '@enums/pelvisMRT/rectum/rectal-carcinoma/rectal-carcinoma-morphology-type.enum';
import { RectalCancerCraniallyToPuborectalisType } from '@enums/pelvisMRT/rectum/rectal-carcinoma/rectal-cancer-cranially-to-puborectalis-type.enum';
import { TumorGrowthOverMuscularisTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/tumor-growth-over-muscularis-type.enum';
import { InfiltrationTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/infiltration-type.enum';
import { MinimumDistanceToMesorectalFasciaTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/minimum-distance-to-mesorectal-fascia-type.enum';
import { DiameterInfiltratedVeinTypeEnum } from '@enums/pelvisMRT/rectum/rectal-carcinoma/diameter-infiltrated-vein-type.enum';

import { PathologyTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/pathology-type.enum';
import { NumberOfDivertuculaTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/number-of-divertucula-type.enum';
import { IntestinalWallThickeningTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/intestinal-wall-thickening-type.enum';
import { PerforationTypeEnum } from '@enums/pelvisMRT/rectum/common/perforation-type.enum';
import { AbscessMaximumDiameterTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/abscess-maximum-diameter-type.enum';
import { ComplicationsFistulaTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/complications-fistula-type.enum';
import { HansenAndStockTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/hansen-and-stock-type.enum';
import { ClassificationOfDiverticularDiseaseTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/classification-of-diverticular-disease-type.enum';
import { ClassificationOfDiverticularDiseaseSubTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/classification-of-diverticular-disease-sub-type.enum';
import { SigmoidDifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/sigmoid-diverticular-disease-differential-diagnosis';

import { MarginTypeEnum } from '@enums/pelvisMRT/rectum/common/margin-type.enum';
import { FormTypeEnum } from '@enums/pelvisMRT/rectum/sigma-mass/form-type.enum';
import { InternalChangeTypeEnum } from '@enums/pelvisMRT/rectum/common/internal-change-type.enum';
import { KMEnhancementTypeEnum } from '@enums/pelvisMRT/rectum/common/km-enhancement-type.enum';
import { GrowthPatternTypeEnum } from '@enums/pelvisMRT/rectum/sigma-mass/growth-pattern-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/rectum/common/differential-diagnosis-type.enum';
import { DifferentialDiagnosisTStadiumTypeEnum } from '@enums/pelvisMRT/rectum/sigma-mass/differential-diagnosis-tstadium-type.enum';
import { TstadiumInfiltrationTypeEnum } from '@enums/pelvisMRT/rectum/sigma-mass/tstadium-infiltration-type.enum';

import { PatternsOfInflammationTypeEnum } from '@enums/pelvisMRT/rectum/chronich-inflammatory-bowel-disease/patterns-of-inflamation-type.enum';
import { WallAlterationTypeEnum } from '@enums/pelvisMRT/rectum/chronich-inflammatory-bowel-disease/wall-alteration-type.enum';
import { ChronicBowelKmEnhancementFormTypeEnum } from '@enums/pelvisMRT/rectum/chronich-inflammatory-bowel-disease/chronic-bowel-km-enhancement-form-type.enum';
import { ActivityTypeEnum } from '@enums/pelvisMRT/rectum/chronich-inflammatory-bowel-disease/activity-type.enum';

import { AppendicitisInflammationStageTypeEnum } from '@enums/pelvisMRT/rectum/appendagitis/appendicitis-inflammation-stage-type.enum';
import { InternalChangeSubTypeEnum } from '@enums/pelvisMRT/rectum/appendagitis/internal-change-sub-type.enum';
import { EpiploicAppendagitisDifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/rectum/acute-epiplic-appendagitis/epiploic-appendagitis-differential-diagnosis-type.enum';
import { EpiploicAppendagitisLocalizationTypeEnum } from '@enums/pelvisMRT/rectum/acute-epiplic-appendagitis/epiploic-appendagitis-localization-type.enum';
import { FistulaTypeEnum } from '@enums/pelvisMRT/rectum/fistula/fistula-type.enum';
import { StJamesClassificationTypeEnum } from '@enums/pelvisMRT/rectum/fistula/st-james-classification-type.enum';
import { QuantityTypeEnum } from '@enums/pelvisMRT/rectum/fistula/quantity-type.enum';
import { FistulaMorphologyTypeEnum } from '@enums/pelvisMRT/rectum/fistula/fistula-morphology-type.enum';
import { FistulaEndTypeEnum } from '@enums/pelvisMRT/rectum/fistula/fistula-end-type.enum';
import { LocationCraniocaudalTypeEnum } from '@enums/pelvisMRT/rectum/fistula/location-craniocaudal-type.enum';
import { Rectum } from '../localizers/rectum';

export class RectumFindingUiModel extends FindingBase {
  findingType: FindingTypesEnum;
  descriptionType: string;

  // Common
  isUterus: boolean;
  isVagina: boolean;
  isSacrum: boolean;
  isCoccygis: boolean;
  isLevatorAniMuscle: boolean;
  isUpperThird: boolean;
  isMiddleThird: boolean;
  isLowerThird: boolean;
  isMesentericFatObliteration: boolean;
  isAbscess: boolean;
  isStenosis: boolean;
  isPerforation: boolean;
  isSubordinated: boolean;
  isFocalWallThickening: boolean;
  isUrinaryBladder: boolean;
  isColon: boolean;
  isRectum: boolean;
  isT2wSignalBoostInPerifocal: boolean;
  isAccompanyingAscites: boolean;
  maximumDiameterInMm: number;
  isFistula: boolean;
  isProstate: boolean;
  isIleus: boolean;
  isPeritonitis: boolean;
  isSuspicionOf: boolean;
  isSeminalVesicles: boolean;
  isTargetSign: boolean;

  /* rectal-carcinoma */
  isDistanceToPectinateLine: boolean;
  distanceToPectinateLine: boolean;
  isUpperPeritonealFoldInfiltration: boolean;
  isMiddlePeritonealFoldInfiltration: boolean;
  relationToPuborectalisMuscleType: RelationToPuborectalisMuscleTypeEnum;
  puborectalisMuscleDistance: number;
  isInfiltrationOfInternalSphicter: boolean;
  isInfiltrationOfExternalSphicter: boolean;
  isInfiltrationOfLevatorMuscle: boolean;
  localizationAxialType: LocalizationAxialTypeEnum;
  locationAccordingToSslType: LocalizationSSLTypeEnum;
  maximumTumourDiameter: number;
  maximumCcExpansion: number;
  rectalCarcinomaMorphologyType: RectalCarcinomaMorphologyType;
  highT2wSignalIntensityMucinous: boolean;
  rectalCancerCraniallyToPuborectalisType: RectalCancerCraniallyToPuborectalisType;
  tumorGrowthOverMuscularisType: TumorGrowthOverMuscularisTypeEnum;
  infiltrationType: InfiltrationTypeEnum;
  isMSphincterAni: boolean;
  lowRectalCancerType: RectalCancerCraniallyToPuborectalisType;
  minimumDistanceToMesorectalFasciaType: MinimumDistanceToMesorectalFasciaTypeEnum;
  rectumCircumferencialTumorLocationType: LocalizationSSLTypeEnum;
  maximumExtramuralTumorExtension: number;
  isExtramuralVenousInfiltration: boolean;
  diameterInfiltratedVeinType: DiameterInfiltratedVeinTypeEnum;

  /* sigmoid-diverticulosis */
  pathologyType: PathologyTypeEnum;
  numberOfDiverticulaType: NumberOfDivertuculaTypeEnum;
  singularDiverticulaDiameter: number;
  isIntestinalWallThickening: boolean;
  intestinalWallThickeningType: IntestinalWallThickeningTypeEnum;
  maximumWallThickness: number;
  longitudinalExpansion: number;
  isIncreasedEnhancementOfIntestinalWall: boolean;
  sigmoidDiverticularDiseasePerforationType: PerforationTypeEnum;
  abscessMaximumDiameter: number;
  abscessMaximumDiameterType: AbscessMaximumDiameterTypeEnum;
  isPossibleCtGuidedDrainage: boolean;
  isMoreThanOneLesion: boolean;
  isFreeFluid: boolean;
  isHemorrhagic: boolean;
  complicationsFistulaType: ComplicationsFistulaTypeEnum;
  isPhlegmons: boolean;
  isHansenAndStock: boolean;
  hansenAndStockType: HansenAndStockTypeEnum;
  isClassificationOfDiverticularDisease: boolean;
  classificationOfDiverticularDiseaseType: ClassificationOfDiverticularDiseaseTypeEnum;
  classificationOfDiverticularDiseaseSubType: ClassificationOfDiverticularDiseaseSubTypeEnum;
  sigmoidDiverticularDiseaseDifferentialDiagnosisType: SigmoidDifferentialDiagnosisTypeEnum;

  /* sigma mass */
  expansionSize: number;
  expansion2ndPlane: number;
  expansion3rdPlane: number;
  marginType: MarginTypeEnum;
  formType: FormTypeEnum;
  internalChangeType: InternalChangeTypeEnum;
  isConglomerate: boolean;
  isTumorNecrosis: boolean;
  isMesentericFatStranding: boolean;
  sigmaMassKmEnhancementType: KMEnhancementTypeEnum;
  cmEnhancementInternalChangeType: InternalChangeTypeEnum;
  isDiffusionRestriction: boolean;
  growthPatternType: GrowthPatternTypeEnum;
  isOcclusive: boolean;
  sigmaMassPerforationType: PerforationTypeEnum;
  isFreeAir: boolean;
  isInvagination: boolean;
  isInvaginationPrestenoticDilatation: boolean;
  isInvaginationPoststenoticCollapse: boolean;
  isInvaginationIleus: boolean;
  isStenosisPrestenoticDilatation: boolean;
  isStenosisPoststenoticCollapse: boolean;
  isStenosisIleus: boolean;
  isIntestinalWallNecroses: boolean;
  sigmaMassDiameter: number;
  sigmaMassDifferentialDiagnosisType: DifferentialDiagnosisTypeEnum;
  sigmaMassDifferentialDiagnosis02Type: DifferentialDiagnosisTypeEnum;
  differentialDiagnosisTStadiumType: DifferentialDiagnosisTStadiumTypeEnum;
  tstadiumInfiltrationType: TstadiumInfiltrationTypeEnum;
  isPeritoneum: boolean;
  isAbdomenPelvicWall: boolean;
  isSmallIntestine: boolean;
  isLeftExternalIliacVessels: boolean;

  /* chronic inflamatory bowel disease */
  isIleum: boolean;
  isSigmoidColon: boolean;
  patternsOfInflammationType: PatternsOfInflammationTypeEnum;
  isThickening: boolean;
  thickeningSize: number;
  maxLongitudinalExpansion: number;
  isStratification: boolean;
  isLossHaustration: boolean;
  wallAlterationType: WallAlterationTypeEnum;
  isLymphadenopathy: boolean;
  isFatTissueStranding: boolean;
  isFatTissueProliferation: boolean;
  isMarkedVasaRecta: boolean;
  isCombSign: boolean;
  chronicBowelDiseaseKMEnhancementType: KMEnhancementTypeEnum;
  chronicBowelKmEnhancementFormType: ChronicBowelKmEnhancementFormTypeEnum;
  isSubmucosalStripe: boolean;
  isPerifocal: boolean;
  isStricture: boolean;
  isDilatation: boolean;
  isPseudotumor: boolean;
  isToxicMegacolon: boolean;
  activityType: ActivityTypeEnum;
  chronicBowelDiseaseDifferentialDiagnosisType01: DifferentialDiagnosisTypeEnum;
  chronicBowelDiseaseDifferentialDiagnosisType02: DifferentialDiagnosisTypeEnum;

  /* appendicitis */
  diameterOfTheAppendix: number;
  lengthOfTheAppendix: number;
  wallThickening: number;
  isT2wSignalBoostOfIntestinalWall: boolean;
  isIntraluminalFluid: boolean;
  isCecalWallThickening: boolean;
  isArrowheadSign: boolean;
  isCecalBarSign: boolean;
  isWallEdemaOfIntestinalSegments: boolean;
  isAppendicolith: boolean;
  isObliterationOfSurroundingTissue: boolean;
  isThickenedMesoappendix: boolean;
  isEdema: boolean;
  isPerityphliticAbscess: boolean;
  isPeritonealInvolvement: boolean;
  isAdhesions: boolean;
  isAccompanyingInflammatoryPsoas: boolean;
  appendicitisKMEnhancementType: KMEnhancementTypeEnum;
  appendicitisInternalChangeType: InternalChangeTypeEnum;
  appendicitisInternalChangeSubType: InternalChangeSubTypeEnum;
  isKMEnhancementInTheEnvironment: boolean;
  appendicitisInflammationStageType: AppendicitisInflammationStageTypeEnum;
  appendictisDifferentialDiagnosisType: DifferentialDiagnosisTypeEnum;

  /* acute epiploic appendagitis */
  epiploicAppendagitisLocalizationType: EpiploicAppendagitisLocalizationTypeEnum;
  isFatEquivalentMass: boolean;
  epiploicAppendagitisDiameterInMm: number;
  isThickeningAdjacentToPeritoneum: boolean;
  isAdjacentSoftTissueEdema: boolean;
  isThickeningAdjacentToWall: boolean;
  epiploicAppendagitisDifferentialDiagnosisType: EpiploicAppendagitisDifferentialDiagnosisTypeEnum;

  /* sigma volvulus */
  isCoffeeBeanSign: boolean;
  isWhirlSign: boolean;
  isFreePerforation: boolean;
  maximumDilatation: number;

  /* fistula */
  fistulaType: FistulaTypeEnum;
  fistulaLocalizationSSLType: LocalizationSSLTypeEnum;
  fistulaLocalizer: Rectum;
  fistulaEndType: FistulaEndTypeEnum;
  isAdditionalFistulaBranches: boolean;
  isBlindEnding: boolean;
  stJamesClassificationType: StJamesClassificationTypeEnum;
  maxAbscessDiameter: number;
  lengthOfTheFistula: number;
  fistulaKMEnhancementType: KMEnhancementTypeEnum;
  isT2wSignalElevation: boolean;
  locationCraniocaudalType: LocationCraniocaudalTypeEnum;
  isFocalPerifocalFibrosis: boolean;
  isFocalPerifocalAdhesions: boolean;
  isAnalSphincterInvolvement: boolean;
  isMAniInternus: boolean;
  isMAniExternus: boolean;
  isFistulaInMalignantTumor: boolean;
  isFistulaInMalignantSuspicionOf: boolean;
  isTumourRecurrence: boolean;
  axialExpansion: number;
  isFistulaAfterRadiotherapyChemotherapy: boolean;
  isFistulaAfterSurgery: boolean;
  isPostinflammatoryFistulaTract: boolean;
  isInflamedDiverticulum: boolean;
  isAbsenceOfASeparatingFatLamellaBetweenBladderAndColon: boolean;
  isAirInTheUrinaryBladder: boolean;
  isFluidAndAirInVaginalFornix: boolean;
  isUterineCervix: boolean;
  isSphincter: boolean;
  isAnalChannel: boolean;
  quantityType: QuantityTypeEnum;
  maximumLength: number;
  isFocalWallThickeningUrinaryBladder: boolean;
  isFocalWallThickeningColon: boolean;
  isOsteomyelitis: boolean;
  isSubcutaneousFatTissueSacrococcygeal: boolean;
  moreThan2CmPosteriorToTheAnus: boolean;
  fistulaMorphologyType: FistulaMorphologyTypeEnum;
  isCmEnhancementOfThePerifocalSoftTissue: boolean;
  isInvolvementMLevatorAnMuscle: boolean;
  isInvolvementOfAnalSphincters: boolean;
  isInvolvementOfTheIschioanalFossa: boolean;
  fistulaInternalChangeType: InternalChangeTypeEnum;
  expansionInMm: number;

  constructor() {
    super();

    this.findingType = FindingTypesEnum.None;
    this.descriptionType = 'None';

    // Common
    this.isUterus = false;
    this.isVagina = false;
    this.isSacrum = false;
    this.isCoccygis = false;
    this.isLevatorAniMuscle = false;
    this.isUpperThird = false;
    this.isMiddleThird = false;
    this.isLowerThird = false;
    this.isMesentericFatObliteration = false;
    this.isAbscess = false;
    this.isStenosis = false;
    this.isPerforation = false;
    this.isSubordinated = false;
    this.isFocalWallThickening = false;
    this.isUrinaryBladder = false;
    this.isColon = false;
    this.isRectum = false;
    this.isT2wSignalBoostInPerifocal = false;
    this.isAccompanyingAscites = false;
    this.maximumDiameterInMm = null;
    this.isFistula = false;
    this.isProstate = false;
    this.isIleus = false;
    this.isPeritonitis = false;
    this.isSuspicionOf = false;
    this.isSeminalVesicles = false;
    this.isTargetSign = false;

    /* rectal-carcinoma */
    this.isDistanceToPectinateLine = false;
    this.distanceToPectinateLine = null;
    this.isUpperPeritonealFoldInfiltration = false;
    this.isMiddlePeritonealFoldInfiltration = false;
    this.relationToPuborectalisMuscleType = RelationToPuborectalisMuscleTypeEnum.None;
    this.puborectalisMuscleDistance = null;
    this.isInfiltrationOfInternalSphicter = false;
    this.isInfiltrationOfExternalSphicter = false;
    this.isInfiltrationOfLevatorMuscle = false;
    this.localizationAxialType = LocalizationAxialTypeEnum.None;
    this.locationAccordingToSslType = LocalizationSSLTypeEnum.None;
    this.maximumTumourDiameter = null;
    this.maximumCcExpansion = null;
    this.rectalCarcinomaMorphologyType = RectalCarcinomaMorphologyType.None;
    this.highT2wSignalIntensityMucinous = false;
    this.rectalCancerCraniallyToPuborectalisType = RectalCancerCraniallyToPuborectalisType.None;
    this.tumorGrowthOverMuscularisType = TumorGrowthOverMuscularisTypeEnum.None;
    this.infiltrationType = InfiltrationTypeEnum.None;
    this.isMSphincterAni = false;
    this.lowRectalCancerType = RectalCancerCraniallyToPuborectalisType.None;
    this.minimumDistanceToMesorectalFasciaType = MinimumDistanceToMesorectalFasciaTypeEnum.None;
    this.rectumCircumferencialTumorLocationType = LocalizationSSLTypeEnum.None;
    this.maximumExtramuralTumorExtension = null;
    this.isExtramuralVenousInfiltration = false;
    this.diameterInfiltratedVeinType = DiameterInfiltratedVeinTypeEnum.None;

    /* sigmoid-diverticulosis */
    this.pathologyType = PathologyTypeEnum.None;
    this.numberOfDiverticulaType = NumberOfDivertuculaTypeEnum.None;
    this.singularDiverticulaDiameter = null;
    this.isIntestinalWallThickening = false;
    this.intestinalWallThickeningType = IntestinalWallThickeningTypeEnum.None;
    this.maximumWallThickness = null;
    this.longitudinalExpansion = null;
    this.isIncreasedEnhancementOfIntestinalWall = false;
    this.sigmoidDiverticularDiseasePerforationType = PerforationTypeEnum.None;
    this.abscessMaximumDiameter = null;
    this.abscessMaximumDiameterType = AbscessMaximumDiameterTypeEnum.None;
    this.isPossibleCtGuidedDrainage = false;
    this.isMoreThanOneLesion = false;
    this.isFreeFluid = false;
    this.isHemorrhagic = false;
    this.complicationsFistulaType = ComplicationsFistulaTypeEnum.None;
    this.isPhlegmons = false;
    this.isHansenAndStock = false;
    this.hansenAndStockType = HansenAndStockTypeEnum.None;
    this.isClassificationOfDiverticularDisease = false;
    this.classificationOfDiverticularDiseaseType = ClassificationOfDiverticularDiseaseTypeEnum.None;
    this.classificationOfDiverticularDiseaseSubType = ClassificationOfDiverticularDiseaseSubTypeEnum.None;
    this.sigmoidDiverticularDiseaseDifferentialDiagnosisType = SigmoidDifferentialDiagnosisTypeEnum.None;

    /* sigma mass */
    this.expansionSize = null;
    this.expansion2ndPlane = null;
    this.expansion3rdPlane = null;
    this.marginType = MarginTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.internalChangeType = InternalChangeTypeEnum.None;
    this.isConglomerate = false;
    this.isTumorNecrosis = false;
    this.isMesentericFatStranding = false;
    this.sigmaMassKmEnhancementType = KMEnhancementTypeEnum.None;
    this.cmEnhancementInternalChangeType = InternalChangeTypeEnum.None;
    this.isDiffusionRestriction = false;
    this.growthPatternType = GrowthPatternTypeEnum.None;
    this.isOcclusive = false;
    this.sigmaMassPerforationType = PerforationTypeEnum.None;
    this.isFreeAir = false;
    this.isInvagination = false;
    this.isInvaginationPrestenoticDilatation = false;
    this.isInvaginationPoststenoticCollapse = false;
    this.isInvaginationIleus = false;
    this.isStenosisPrestenoticDilatation = false;
    this.isStenosisPoststenoticCollapse = false;
    this.isStenosisIleus = false;
    this.isIntestinalWallNecroses = false;
    this.sigmaMassDiameter = null;
    this.sigmaMassDifferentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;
    this.sigmaMassDifferentialDiagnosis02Type = DifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosisTStadiumType = DifferentialDiagnosisTStadiumTypeEnum.None;
    this.tstadiumInfiltrationType = TstadiumInfiltrationTypeEnum.None;
    this.isPeritoneum = false;
    this.isAbdomenPelvicWall = false;
    this.isSmallIntestine = false;
    this.isLeftExternalIliacVessels = false;

    /* chronic inflamatory bowel disease */
    this.isIleum = false;
    this.isSigmoidColon = false;
    this.patternsOfInflammationType = PatternsOfInflammationTypeEnum.None;
    this.isThickening = false;
    this.thickeningSize = null;
    this.maxLongitudinalExpansion = null;
    this.isStratification = false;
    this.isLossHaustration = false;
    this.wallAlterationType = WallAlterationTypeEnum.None;
    this.isLymphadenopathy = false;
    this.isFatTissueStranding = false;
    this.isFatTissueProliferation = false;
    this.isMarkedVasaRecta = false;
    this.isCombSign = false;
    this.chronicBowelDiseaseKMEnhancementType = KMEnhancementTypeEnum.None;
    this.chronicBowelKmEnhancementFormType = ChronicBowelKmEnhancementFormTypeEnum.None;
    this.isSubmucosalStripe = false;
    this.isPerifocal = false;
    this.isStricture = false;
    this.isDilatation = false;
    this.isPseudotumor = false;
    this.isToxicMegacolon = false;
    this.activityType = ActivityTypeEnum.None;
    this.chronicBowelDiseaseDifferentialDiagnosisType01 = DifferentialDiagnosisTypeEnum.None;
    this.chronicBowelDiseaseDifferentialDiagnosisType02 = DifferentialDiagnosisTypeEnum.None;

    /* appendicitis */
    this.diameterOfTheAppendix = null;
    this.lengthOfTheAppendix = null;
    this.wallThickening = null;
    this.isT2wSignalBoostOfIntestinalWall = false;
    this.isIntraluminalFluid = false;
    this.isCecalWallThickening = false;
    this.isArrowheadSign = false;
    this.isCecalBarSign = false;
    this.isWallEdemaOfIntestinalSegments = false;
    this.isAppendicolith = false;
    this.isObliterationOfSurroundingTissue = false;
    this.isThickenedMesoappendix = false;
    this.isEdema = false;
    this.isPerityphliticAbscess = false;
    this.isPeritonealInvolvement = false;
    this.isAdhesions = false;
    this.isAccompanyingInflammatoryPsoas = false;
    this.appendicitisKMEnhancementType = KMEnhancementTypeEnum.None;
    this.appendicitisInternalChangeType = InternalChangeTypeEnum.None;
    this.appendicitisInternalChangeSubType = InternalChangeSubTypeEnum.None;
    this.isKMEnhancementInTheEnvironment = false;
    this.appendicitisInflammationStageType = AppendicitisInflammationStageTypeEnum.None;
    this.appendictisDifferentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;

    /* acute epiploic appendagitis */
    this.epiploicAppendagitisLocalizationType = EpiploicAppendagitisLocalizationTypeEnum.None;
    this.isFatEquivalentMass = false;
    this.epiploicAppendagitisDiameterInMm = null;
    this.isThickeningAdjacentToPeritoneum = false;
    this.isAdjacentSoftTissueEdema = false;
    this.isThickeningAdjacentToWall = false;
    this.epiploicAppendagitisDifferentialDiagnosisType = EpiploicAppendagitisDifferentialDiagnosisTypeEnum.None;

    /* sigma volvulus */
    this.isCoffeeBeanSign = false;
    this.isWhirlSign = false;
    this.isFreePerforation = false;
    this.maximumDilatation = null;

    /* fistula */
    this.fistulaType = FistulaTypeEnum.None;
    this.fistulaLocalizationSSLType = LocalizationSSLTypeEnum.None;
    this.fistulaLocalizer = new Rectum();
    this.fistulaEndType = FistulaEndTypeEnum.None;
    this.isAdditionalFistulaBranches = false;
    this.isBlindEnding = false;
    this.stJamesClassificationType = StJamesClassificationTypeEnum.None;
    this.maxAbscessDiameter = null;
    this.lengthOfTheFistula = null;
    this.fistulaKMEnhancementType = KMEnhancementTypeEnum.None;
    this.isT2wSignalElevation = false;
    this.locationCraniocaudalType = LocationCraniocaudalTypeEnum.None;
    this.isFocalPerifocalFibrosis = false;
    this.isFocalPerifocalAdhesions = false;
    this.isAnalSphincterInvolvement = false;
    this.isMAniInternus = false;
    this.isMAniExternus = false;
    this.isFistulaInMalignantTumor = false;
    this.isFistulaInMalignantSuspicionOf = false;
    this.isTumourRecurrence = false;
    this.axialExpansion = null;
    this.isFistulaAfterRadiotherapyChemotherapy = false;
    this.isFistulaAfterSurgery = false;
    this.isPostinflammatoryFistulaTract = false;
    this.isInflamedDiverticulum = false;
    this.isAbsenceOfASeparatingFatLamellaBetweenBladderAndColon = false;
    this.isAirInTheUrinaryBladder = false;
    this.isFluidAndAirInVaginalFornix = false;
    this.isUterineCervix = false;
    this.isSphincter = false;
    this.isAnalChannel = false;
    this.quantityType = QuantityTypeEnum.None;
    this.maximumLength = null;
    this.isFocalWallThickeningUrinaryBladder = false;
    this.isFocalWallThickeningColon = false;
    this.isOsteomyelitis = false;
    this.isSubcutaneousFatTissueSacrococcygeal = false;
    this.moreThan2CmPosteriorToTheAnus = false;
    this.fistulaMorphologyType = FistulaMorphologyTypeEnum.None;
    this.isCmEnhancementOfThePerifocalSoftTissue = false;
    this.isInvolvementMLevatorAnMuscle = false;
    this.isInvolvementOfAnalSphincters = false;
    this.isInvolvementOfTheIschioanalFossa = false;
    this.fistulaInternalChangeType = InternalChangeTypeEnum.None;
    this.expansionInMm = null;
  }
}
