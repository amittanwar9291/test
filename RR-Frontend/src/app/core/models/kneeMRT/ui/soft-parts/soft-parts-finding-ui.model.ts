import { KneeCompartment } from '@models/kneeMRT/ui/knee/knee-compartment.model';
import { FindingBase } from '@models/shared/finding/finding.base';

import {
  BursitisMarginsTypeEnum,
  ClassificationMunichConsensusTypeEnum,
  CmEnhancementTypeEnum,
  DemarcationTypeEnum,
  DistributionPatternsTypeEnum,
  EdemaTypeEnum,
  TPTEnthesiopathyDistalTypeEnum,
  FocalTypeEnum,
  FurtherFindingsMusculatureTypeEnum,
  HingeTypeEnum,
  HomogeneityTypeEnum,
  IntramuscularHaematomaTypeEnum,
  LocalizationAxialTypeEnum,
  LocalizationCraniocaudalRelationTypeEnum,
  MainSoftPartsFindingTypeEnum,
  MuscularAtrophyTypeEnum,
  MusculatureLocationTypeEnum,
  OsseousAvulsionTypeEnum,
  TendonsPatellarTendonTypeEnum,
  QualityTypeEnum,
  QuantityTypeEnum,
  TearTypeEnum,
  SoftPartsFindingTypeEnum,
  SynoviaShapeTypeEnum,
  SynoviaTypeEnum,
  SynoviaCmEnhancementTypeEnum,
  TendonsLocalizationTypeEnum,
  VesselsNervesLocalizationTypeEnum,
  VesselsNervesTypeEnum
} from '@enums/kneeMRT/soft-parts';
import { SoftPartsDiagnosisTypeEnum } from '@enums/kneeMRT/soft-parts/soft-parts-diagnosis-type.enum';

export class SoftPartsFindingUiModel extends FindingBase {
  // common
  findingType: MainSoftPartsFindingTypeEnum;
  isTear: boolean;
  isRetraction: boolean;
  retractionInMm: number;
  isBoneBruise: boolean;
  isEnthesiopathy: boolean;
  isArticularEffusion: boolean;
  isBoneMarrowEdemaUpperPatellarPole: boolean;
  isHaematoma: boolean;
  isThickeningEdema: boolean;
  isMuscularAtrophy: boolean;
  location: KneeCompartment;
  t1w: number;
  t2w: number;
  differentialDiagnosis: SoftPartsDiagnosisTypeEnum;
  differentialDiagnosis01: SoftPartsDiagnosisTypeEnum;
  differentialDiagnosis02: SoftPartsDiagnosisTypeEnum;
  isSecondary: boolean;
  tendonLocalizationType: TendonsLocalizationTypeEnum;

  // ArticularEffusion
  qualityType: QualityTypeEnum;
  quantityType: QuantityTypeEnum;
  isSedimentation: boolean;
  isBakerCyst: boolean;
  expansivenessMaxDiameterInMm: number;
  expansivenessMaxLinearExpansionInMm: number;
  isRuptured: boolean;
  isSynovialCystProxTibiofibularJoint: boolean;
  synovialCystProxTibiofibularJointMaxDiameterInMm: number;

  // SynoviaDiffuse
  isHyperplasia: boolean;
  isIncreasedContrastEnhancement: boolean;
  isHigherT2wOrPDSignal: boolean;

  // SynoviaFocal
  descriptionType: string;
  hingeType: HingeTypeEnum;
  synoviaType: SynoviaTypeEnum;
  isBloomingArtifact: boolean;
  synoviaCMEnhancementType: SynoviaCmEnhancementTypeEnum;
  synoviaShapeType: SynoviaShapeTypeEnum;
  isSynovialNodulusGreaterThan1Lesions: boolean;
  isNecrosis: boolean;
  isLooseBody: boolean;
  isLooseBodyGreaterThan1Lesions: boolean;
  isBonyErosions: boolean;
  distributionPatternsType: DistributionPatternsTypeEnum;
  focalType: FocalTypeEnum;
  isHaemarthros: boolean;

  // HoffaFatBody
  isEdema: boolean;
  edemaType: EdemaTypeEnum;
  isEdemaFocalDistal: boolean;
  isEdemaFocalDorsal: boolean;
  isEdemaFocalProximal: boolean;
  isEdemaFocalSuperolateral: boolean;
  isEdemaFocalMaltrackingOfThePatella: boolean;
  isFragmentation: boolean;
  isFibrosis: boolean;
  isLowSIInT1w: boolean;
  isLowSIInT2w: boolean;
  isHypertrophy: boolean;
  isCartilageIsointenserNodulus: boolean;
  isCartilageIsointenserNodulusGreaterThen1Lesion: boolean;
  isThickeningPlicaSynovialisInfrapatellaris: boolean;

  // Bursitis
  isBursaSuprapatellar: boolean;
  isBursaSubcutaneaPraepatellaris: boolean;
  isBursaSubfascialisPraepatellaris: boolean;
  isBursaInfrapatellarisProfunda: boolean;
  isBursaAnserina: boolean;
  isBursaWithinTheInnerBand: boolean;
  isBursaSubtendineaMusculiSemimembranosi: boolean;
  isBursaTractusIliotibialis: boolean;
  isBursaSubtendineaMusculiBicipitisFemorisInferior: boolean;
  bursitisMarginsType: BursitisMarginsTypeEnum;
  bursaDiameterInMm: number;
  isHaemorrhage: boolean;

  // TendonsPatellarTendon
  tptLocalizationType: TendonsPatellarTendonTypeEnum;
  isAvulsionTuberosityTibiae: boolean;
  isSurroundingHematoma: boolean;
  isPatellaAlta: boolean;
  enthesiopathyType: TendonsPatellarTendonTypeEnum;
  isSindingLarsenJohanssonSyndrome: boolean;
  isThickeningEdemaOfTheProximalLigamentPatellae: boolean;
  isDeep: boolean;
  issuperficial: boolean;
  isEdemaOfTheInfrapatellarFattyBody: boolean;
  isBoneMarrowEdemaOfTheCaudalPatellapol: boolean;
  enthesiopathyDistalType: TPTEnthesiopathyDistalTypeEnum;
  isMOsgoodSlatterThickeningEdemaOfTheDistalPatellarLigament: boolean;
  isMOsgoodSlatterBoneMarrowEdemaOfTuberosity: boolean;
  isBuritisInfrapatellarisProfunda: boolean;
  isEdemaOfTheVentralSoftTissues: boolean;
  isHoffaFatPad: boolean;
  isFragmentationOfTuberosity: boolean;
  isMOsgoodSlatterBursitisInfrapatellarisProfunda: boolean;
  isIrregularityOfTuberosityTibiae: boolean;
  isThickeningEdemaOfTheDistalLigamentPatellae: boolean;
  isThickeningEdemaOfTheDistalPatellarLigament: boolean;
  isBursitisInfrapatellarisProfunda: boolean;
  isBoneMarrowEdemaOfTuberosity: boolean;
  isIntratendinousCalcification: boolean;
  isTractionSpur: boolean;

  // TendonsQuadricepsTendon
  tearType: TearTypeEnum;
  isRectusFemoris: boolean;
  isVastusMedialis: boolean;
  isVastusLateralis: boolean;
  isVastusIntermedius: boolean;
  isAvulsionPatella: boolean;
  isHematomaSuprapatellar: boolean;
  isTendonsQuadricepsTendonHaemarthros: boolean;
  isPatellaBaja: boolean;
  isBursitisSuprapatellaris: boolean;
  isIntratendinalCalcification: boolean;
  isTendonsQuadricepsTendonTractionSpur: boolean;

  // TendonsBicepsFemorisTendon
  isAvulsionFibulaHeads: boolean;
  isBursitisSubtendineaMusculiBicipitisFemorisInferior: boolean;

  // TendonsPopliteusTendon
  isBursitisSubtendineaMusculusPoplitei: boolean;
  isTendonsPopliteusTendonMuscularAtrophy: boolean;
  isCyamella: boolean;

  // TendonsTractusIliotibialis
  isTBursitisOfTheIliotibialTract: boolean;
  isFibrovascularStimulus: boolean;
  isGanglionCyst: boolean;

  // TendonsPesAnserinus
  isLayer: boolean;
  isSuperficialPars: boolean;
  isParsProfundus: boolean;
  isTendonsPesAnserinusBursitisPesAnserinus: boolean;
  isTendonsPesAnserinusMSemitendinosus: boolean;
  isTendonsPesAnserinusMGracilis: boolean;
  isTendonsPesAnserinusMSartorius: boolean;
  isTendonsPesAnserinusMusculusSemiMembranosus: boolean;

  // Musculature
  musculatureLocation: MusculatureLocationTypeEnum;
  intramuscularHaematomaType: IntramuscularHaematomaTypeEnum;
  isIntramuscularHaematoma: boolean;
  isIntramuscular: boolean;
  isInterfacial: boolean;
  isIntermuscular: boolean;
  isMuscleLesion: boolean;
  classificationMunichConsensusType: ClassificationMunichConsensusTypeEnum;
  isCrossDiameterRuptureBelow5Mm: boolean;
  isCrossDiameterRuptureOver5Mm: boolean;
  tornMuscleOrTendonRetractionInMm: number;
  isWavyAppearanceOfTheFibers: boolean;
  isBonyAvulsionFracture: boolean;
  osseousAvulsionType: OsseousAvulsionTypeEnum;
  isIntracorticalOedema: boolean;
  isFurtherFindingsMusculature: boolean;
  furtherFindingsMusculatureType: FurtherFindingsMusculatureTypeEnum;
  muscularAtrophyType: MuscularAtrophyTypeEnum;
  isMuscleHerniation: boolean;

  // VesselsNerves
  vesselsNervesType: VesselsNervesTypeEnum;
  aPoliteaAneurysmaDiameterInMm: number;
  isSuperficialLegVeins: boolean;
  isDeepVeins: boolean;
  isSmoothMargins: boolean;
  isSpindleShaped: boolean;
  isSplitFatSign: boolean;
  isT1wIsointensToTheMusculature: boolean;
  musculatureCMEnchancementType: CmEnhancementTypeEnum;
  kmEnchancementDiameterInMm: number;
  vesselsNervesLocalizationType: VesselsNervesLocalizationTypeEnum;
  vesselsNervesHomogeneityType: HomogeneityTypeEnum;
  isMalignantAspect: boolean;

  // SoftParts
  softPartsFindingType: SoftPartsFindingTypeEnum;
  kneeRetractionInMm: number;

  // SoftTissueTumor - tab 1
  localizationAxialType: LocalizationAxialTypeEnum;
  localizationCraniocaudalRelationType: LocalizationCraniocaudalRelationTypeEnum;
  axialMaxInMm: number;
  secondPlaneAxialInMm: number;
  craniocaudalInMm: number;
  demarcationType: DemarcationTypeEnum;
  tissueTumorHomogeneityType: HomogeneityTypeEnum;
  isGrease: boolean;
  isCysts: boolean;
  isCalcification: boolean;
  isCapsule: boolean;
  isSepts: boolean;
  isNecroses: boolean;
  isSignalVoids: boolean;

  // SoftTissueTumor - tab 2
  isSubcutaneous: boolean;
  isNoMassEffect: boolean;
  isAlongTendonSheath: boolean;
  isInfiltration: boolean;
  isCutisThickening: boolean;
  isPressureCorrosionerosionBone: boolean;
  tissueTumorCMEnhancementType: CmEnhancementTypeEnum;
  quantitativeType: HomogeneityTypeEnum;
  isCentrally: boolean;
  isPeripheral: boolean;

  // SoftTissueTumor - tab 3
  differentialDiagnosis03: SoftPartsDiagnosisTypeEnum;

  reportTypeName: null;

  constructor() {
    super();

    // common
    this.findingType = MainSoftPartsFindingTypeEnum.None;
    this.isTear = false;
    this.isRetraction = false;
    this.retractionInMm = null;
    this.isBoneBruise = false;
    this.isEnthesiopathy = false;
    this.isArticularEffusion = false;
    this.isBoneMarrowEdemaUpperPatellarPole = false;
    this.isHaematoma = false;
    this.isThickeningEdema = false;
    this.isMuscularAtrophy = false;
    this.location = new KneeCompartment();
    this.t1w = 0;
    this.t2w = 0;
    this.differentialDiagnosis = SoftPartsDiagnosisTypeEnum.None;
    this.differentialDiagnosis01 = SoftPartsDiagnosisTypeEnum.None;
    this.differentialDiagnosis02 = SoftPartsDiagnosisTypeEnum.None;
    this.isSecondary = false;
    this.tendonLocalizationType = TendonsLocalizationTypeEnum.None;

    // ArticularEffusion
    this.qualityType = QualityTypeEnum.None;
    this.quantityType = QuantityTypeEnum.None;
    this.isSedimentation = false;
    this.isBakerCyst = false;
    this.expansivenessMaxDiameterInMm = null;
    this.expansivenessMaxLinearExpansionInMm = null;
    this.isRuptured = false;
    this.isSynovialCystProxTibiofibularJoint = false;
    this.synovialCystProxTibiofibularJointMaxDiameterInMm = null;

    // SynoviaDiffuse
    this.isHyperplasia = false;
    this.isIncreasedContrastEnhancement = false;
    this.isHigherT2wOrPDSignal = false;

    // SynoviaFocal
    this.descriptionType = 'None';
    this.hingeType = HingeTypeEnum.None;
    this.synoviaType = SynoviaTypeEnum.None;
    this.isBloomingArtifact = false;
    this.synoviaCMEnhancementType = SynoviaCmEnhancementTypeEnum.None;
    this.synoviaShapeType = SynoviaShapeTypeEnum.None;
    this.isSynovialNodulusGreaterThan1Lesions = false;
    this.isNecrosis = false;
    this.isLooseBody = false;
    this.isLooseBodyGreaterThan1Lesions = false;
    this.isBonyErosions = false;
    this.distributionPatternsType = DistributionPatternsTypeEnum.None;
    this.focalType = FocalTypeEnum.None;
    this.isHaemarthros = false;

    // HoffaFatBody
    this.isEdema = false;
    this.edemaType = EdemaTypeEnum.None;
    this.isEdemaFocalDistal = false;
    this.isEdemaFocalDorsal = false;
    this.isEdemaFocalProximal = false;
    this.isEdemaFocalSuperolateral = false;
    this.isEdemaFocalMaltrackingOfThePatella = false;
    this.isFragmentation = false;
    this.isFibrosis = false;
    this.isLowSIInT1w = false;
    this.isLowSIInT2w = false;
    this.isHypertrophy = false;
    this.isCartilageIsointenserNodulus = false;
    this.isCartilageIsointenserNodulusGreaterThen1Lesion = false;
    this.isThickeningPlicaSynovialisInfrapatellaris = false;

    // Bursitis
    this.isBursaSuprapatellar = false;
    this.isBursaSubcutaneaPraepatellaris = false;
    this.isBursaSubfascialisPraepatellaris = false;
    this.isBursaInfrapatellarisProfunda = false;
    this.isBursaAnserina = false;
    this.isBursaWithinTheInnerBand = false;
    this.isBursaSubtendineaMusculiSemimembranosi = false;
    this.isBursaTractusIliotibialis = false;
    this.isBursaSubtendineaMusculiBicipitisFemorisInferior = false;
    this.bursitisMarginsType = BursitisMarginsTypeEnum.None;
    this.bursaDiameterInMm = null;
    this.isHaemorrhage = false;

    // TendonsPatellarTendon
    this.tptLocalizationType = TendonsPatellarTendonTypeEnum.None;
    this.isAvulsionTuberosityTibiae = false;
    this.isSurroundingHematoma = false;
    this.isPatellaAlta = false;
    this.enthesiopathyType = TendonsPatellarTendonTypeEnum.None;
    this.isSindingLarsenJohanssonSyndrome = false;
    this.isThickeningEdemaOfTheProximalLigamentPatellae = false;
    this.isDeep = false;
    this.issuperficial = false;
    this.isEdemaOfTheInfrapatellarFattyBody = false;
    this.isBoneMarrowEdemaOfTheCaudalPatellapol = false;
    this.enthesiopathyDistalType = TPTEnthesiopathyDistalTypeEnum.None;
    this.isMOsgoodSlatterThickeningEdemaOfTheDistalPatellarLigament = false;
    this.isMOsgoodSlatterBoneMarrowEdemaOfTuberosity = false;
    this.isBuritisInfrapatellarisProfunda = false;
    this.isEdemaOfTheVentralSoftTissues = false;
    this.isHoffaFatPad = false;
    this.isFragmentationOfTuberosity = false;
    this.isMOsgoodSlatterBursitisInfrapatellarisProfunda = false;
    this.isIrregularityOfTuberosityTibiae = false;
    this.isThickeningEdemaOfTheDistalLigamentPatellae = false;
    this.isThickeningEdemaOfTheDistalPatellarLigament = false;
    this.isBursitisInfrapatellarisProfunda = false;
    this.isBoneMarrowEdemaOfTuberosity = false;
    this.isIntratendinousCalcification = false;
    this.isTractionSpur = false;

    // TendonsQuadricepsTendon
    this.tearType = TearTypeEnum.None;
    this.isRectusFemoris = false;
    this.isVastusMedialis = false;
    this.isVastusLateralis = false;
    this.isVastusIntermedius = false;
    this.isAvulsionPatella = false;
    this.isHematomaSuprapatellar = false;
    this.isTendonsQuadricepsTendonHaemarthros = false;
    this.isPatellaBaja = false;
    this.isBursitisSuprapatellaris = false;
    this.isIntratendinalCalcification = false;
    this.isTendonsQuadricepsTendonTractionSpur = false;

    // TendonsBicepsFemorisTendon
    this.isAvulsionFibulaHeads = false;
    this.isBursitisSubtendineaMusculiBicipitisFemorisInferior = false;

    // TendonsPopliteusTendon
    this.isBursitisSubtendineaMusculusPoplitei = false;
    this.isTendonsPopliteusTendonMuscularAtrophy = false;
    this.isCyamella = false;

    // TendonsTractusIliotibialis
    this.isTBursitisOfTheIliotibialTract = false;
    this.isFibrovascularStimulus = false;
    this.isGanglionCyst = false;

    // TendonsPesAnserinus
    this.isLayer = false;
    this.isSuperficialPars = false;
    this.isParsProfundus = false;
    this.isTendonsPesAnserinusBursitisPesAnserinus = false;
    this.isTendonsPesAnserinusMSemitendinosus = false;
    this.isTendonsPesAnserinusMGracilis = false;
    this.isTendonsPesAnserinusMSartorius = false;
    this.isTendonsPesAnserinusMusculusSemiMembranosus = false;

    // Musculature
    this.musculatureLocation = MusculatureLocationTypeEnum.None;
    this.intramuscularHaematomaType = IntramuscularHaematomaTypeEnum.None;
    this.isIntramuscularHaematoma = false;
    this.isIntramuscular = false;
    this.isInterfacial = false;
    this.isIntermuscular = false;
    this.isMuscleLesion = false;
    this.classificationMunichConsensusType = ClassificationMunichConsensusTypeEnum.None;
    this.isCrossDiameterRuptureBelow5Mm = false;
    this.isCrossDiameterRuptureOver5Mm = false;
    this.tornMuscleOrTendonRetractionInMm = null;
    this.isWavyAppearanceOfTheFibers = false;
    this.isBonyAvulsionFracture = false;
    this.osseousAvulsionType = OsseousAvulsionTypeEnum.None;
    this.isIntracorticalOedema = false;
    this.isFurtherFindingsMusculature = false;
    this.furtherFindingsMusculatureType = FurtherFindingsMusculatureTypeEnum.None;
    this.muscularAtrophyType = MuscularAtrophyTypeEnum.None;
    this.isMuscleHerniation = false;

    // VesselsNerves
    this.vesselsNervesType = VesselsNervesTypeEnum.None;
    this.isSuperficialLegVeins = false;
    this.isDeepVeins = false;
    this.isSmoothMargins = false;
    this.isSpindleShaped = false;
    this.isSplitFatSign = false;
    this.isT1wIsointensToTheMusculature = false;
    this.musculatureCMEnchancementType = CmEnhancementTypeEnum.None;
    this.kmEnchancementDiameterInMm = null;
    this.vesselsNervesLocalizationType = VesselsNervesLocalizationTypeEnum.None;
    this.vesselsNervesHomogeneityType = HomogeneityTypeEnum.None;
    this.aPoliteaAneurysmaDiameterInMm = null;
    this.isMalignantAspect = false;

    // SoftParts
    this.softPartsFindingType = SoftPartsFindingTypeEnum.None;
    this.kneeRetractionInMm = null;

    // SoftTissueTumor - tab 1
    this.localizationAxialType = LocalizationAxialTypeEnum.None;
    this.localizationCraniocaudalRelationType = LocalizationCraniocaudalRelationTypeEnum.None;
    this.axialMaxInMm = null;
    this.secondPlaneAxialInMm = null;
    this.craniocaudalInMm = null;
    this.demarcationType = DemarcationTypeEnum.None;
    this.tissueTumorHomogeneityType = HomogeneityTypeEnum.None;
    this.isGrease = false;
    this.isCysts = false;
    this.isCalcification = false;
    this.isCapsule = false;
    this.isSepts = false;
    this.isNecroses = false;
    this.isSignalVoids = false;

    // SoftTissueTumor - tab 2
    this.isSubcutaneous = false;
    this.isNoMassEffect = false;
    this.isAlongTendonSheath = false;
    this.isInfiltration = false;
    this.isCutisThickening = false;
    this.isPressureCorrosionerosionBone = false;
    this.tissueTumorCMEnhancementType = CmEnhancementTypeEnum.None;
    this.quantitativeType = HomogeneityTypeEnum.None;
    this.isCentrally = false;
    this.isPeripheral = false;

    // SoftTissueTumor - tab 3
    this.differentialDiagnosis03 = SoftPartsDiagnosisTypeEnum.None;

    this.reportTypeName = null;
  }
}
