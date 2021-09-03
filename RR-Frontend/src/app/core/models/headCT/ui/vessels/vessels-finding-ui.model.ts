import { FindingBase } from '@models/shared/finding/finding.base';
import { VesselsFindingTypeEnum } from '@enums/headCT/vessels/vessels-finding-type.enum';
import { WhiteMatterTypeEnum } from '@enums/headCT/vessels/white-matter-type.enum';
import { DetailsTypeEnum } from '@enums/headCT/vessels/details-type.enum';
import { PathologyTypeEnum } from '@enums/headCT/vessels/pathology-type.enum';
import { SeverityTypeEnum } from '@enums/headCT/vessels/severity-type.enum';
import { FormTypeEnum } from '@enums/headCT/vessels/form-type.enum';
import { ShapeTypeEnum } from '@enums/headCT/vessels/shape-type.enum';
import { OrientationAneurysmTypeEnum } from '@enums/headCT/vessels/orientation-aneurysm-type.enum';
import { SubarachnoidHemorrhageTypeEnum } from '@enums/headCT/vessels/subarachnoid-hemorrhage-type.enum';
import { SubarachnoidHemorrhageLocalizationTypeEnum } from '@enums/headCT/vessels/subarachnoid-hemorrhage-localization-type.enum';
import { VesselsDiagnosisTypeEnum } from '@enums/headCT/vessels/vessels-diagnosis-type.enum';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/headCT/vessels/differential-diagnosis-type.enum';
import { ArterialTerritoryTypeEnum } from '@enums/headCT/vessels/ischemia/arterial-territory-type.enum';
import { ArterialSupplyAreaPatternTypeEnum } from '@enums/headCT/vessels/ischemia/arterial-supply-area-pattern-type.enum';
import { VascularTerritoryTypeEnum } from '@enums/headCT/vessels/ischemia/vascular-territory-type.enum';
import { IschemicAreaPatternTypeEnum } from '@enums/headCT/vessels/ischemia/ischemic-area-pattern-type.enum';
import { ContrastEnhancementTypeEnum } from '@enums/headCT/vessels/ischemia/contrast-enhancement-type.enum';
import { InfarctStageTypeEnum } from '@enums/headCT/vessels/ischemia/infarct-stage-type.enum';
import { CerebralEdemaTypeEnum } from '@enums/headCT/vessels/ischemia/cerebral-edema-type.enum';
import { PerfusionTypeEnum } from '@enums/headCT/vessels/perfusion/perfusion-type.enum';
import { GradingTypeEnum } from '@enums/headCT/vessels/perfusion/grading-type.enum';
import { MismatchTypeEnum } from '@enums/headCT/vessels/perfusion/mismatch-type.enum';
import { CollateralizationSeverityTypeEnum } from '@enums/headCT/vessels/circle-of-willis-cerebral-arteries/collateralization-severity-type.enum';
import { ArteriesWithOutletTypeEnum } from '@enums/headCT/vessels/external-carotid-artery/arteries-with-outlet-type.enum';
import { WithoutAVShuntTypeEnum } from '@enums/headCT/vessels/vascular-malformation/without-avshunt-type.enum';
import { WithAVShuntTypeEnum } from '@enums/headCT/vessels/vascular-malformation/with-avshunt-type.enum';
import { CortexLocalizerModel } from '@models/headMRT/ui/cortex-localizer.model';
import { ArterialTerritoriesLocalizerModel } from '@models/headMRT/ui/arterial-territories-localizer.model';
import { ArteriesSegmentsLocalizerModel } from '@models/shared/angiography/localizers/arteries-segments-localizer.model';
import { CarotidArteryUiModel } from '@models/shared/angiography/localizers/carotid-artery-ui-model';
import { CerebralVenousThrombosisLocalizerModel } from '@models/headMRT/ui/cerebral-venous-thrombosis-localizer.model';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { BasalGangliaLocationsModel } from '@models/shared/head/basal-ganglia-locations.model';

export class VesselsFindingUiModel extends FindingBase {
  findingType: VesselsFindingTypeEnum;

  // Common

  cortexLocation: CortexLocalizerModel;
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
  whiteMatterType: WhiteMatterTypeEnum;
  detailsType: DetailsTypeEnum;
  basalGangliaLocation: BasalGangliaLocationsModel;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
  pathologyType: PathologyTypeEnum;
  severityType: SeverityTypeEnum;
  isHemodynamicallyRelevant: boolean;
  diameterStenosisInMm: number;
  diameterDiseaseFreePoststenoticSegmentInMm: number;
  degreeOfStenosisCalculatedInNASCETInPercentage: number;
  formType: FormTypeEnum;
  lengthInMm: number;
  isShortStenosis: boolean;
  isWallHematoma: boolean;
  isContrastEnhancementOfTheArterialWall: boolean;
  isLocoregionalObliterationOfFattyTissue: boolean;
  isCaliberIrregularities: boolean;
  shapeType: ShapeTypeEnum;
  extensionAneurysmInMm: number;
  widthAneurysmNeckInMm: number;
  orientationAneurysmType: OrientationAneurysmTypeEnum;
  isSubarachnoidHemorrhage: boolean;
  subarachnoidHemorrhageType: SubarachnoidHemorrhageTypeEnum;
  subarachnoidHemorrhageLocalizationType: SubarachnoidHemorrhageLocalizationTypeEnum;
  isThrombolization: boolean;
  isEccentric: boolean;
  isDownstreamInfarctionAreas: boolean;
  isInflammatoryChange: boolean;
  vesselsDiagnosisType: VesselsDiagnosisTypeEnum;
  sideType: SideTypeEnum;
  isCalcification: boolean;
  isSoftPlaque: boolean;
  differentialDiagnosisType: DifferentialDiagnosisTypeEnum;
  isPanarteritisNodosa: boolean;
  isBranchesOfTheExternalCarotidArtery: boolean;
  isCirculusArteriosusWillisii: boolean;

  // NormVariant

  isRightP1HypoplasiaOrFTPConfiguration: boolean;
  isRightP1Aplasia: boolean;
  isRightP1SplittingOrDuplication: boolean;
  isRightA1Hypoplasia: boolean;
  isRightA1Aplasia: boolean;
  isRightA1SplittingOrDuplication: boolean;
  isRightAcomPHypoplasia: boolean;
  isRightAcomPAplasia: boolean;
  isRightPICAEndingAV: boolean;
  isRightAVHypoplasia: boolean;
  isRightAVAplasia: boolean;
  isRightTripleACA: boolean;
  isRightAcomAHypoplasia: boolean;
  isRightAcomAAplasia: boolean;
  isRightAcomASplittingOrDuplication: boolean;
  isLeftP1HypoplasiaOrFTPConfiguration: boolean;
  isLeftP1Aplasia: boolean;
  isLeftP1SplittingOrDuplication: boolean;
  isLeftA1Hypoplasia: boolean;
  isLeftA1Aplasia: boolean;
  isLeftA1SplittingOrDuplication: boolean;
  isLeftAcomPHypoplasia: boolean;
  isLeftAcomPAplasia: boolean;
  isLeftPICAEndingAV: boolean;
  isLeftAVHypoplasia: boolean;
  isLeftAVAplasia: boolean;
  isLeftTripleACA: boolean;
  isLeftAcomAHypoplasia: boolean;
  isLeftAcomAAplasia: boolean;
  isLeftAcomASplittingOrDuplication: boolean;

  // Ischemia

  arterialTerritoryType: ArterialTerritoryTypeEnum;
  arterialSupplyAreaPatternType: ArterialSupplyAreaPatternTypeEnum;
  vascularTerritoryLocation: ArterialTerritoriesLocalizerModel;
  vascularTerritoryType: VascularTerritoryTypeEnum;
  isCorticalVeins: boolean;
  isCorticalVeinsRight: boolean;
  isCorticalVeinsLeft: boolean;
  isInternalCerebralVeins: boolean;
  isInternalCerebralVeinsRight: boolean;
  isInternalCerebralVeinsLeft: boolean;
  isRightVeinOfLabbe: boolean;
  isLeftVeinOfLabbe: boolean;
  isRightSphenoparietalSinus: boolean;
  isLeftSphenoparietalSinus: boolean;
  maxDiameterInMm: number;
  isMultipleLesions: boolean;
  ischemicAreaPatternType: IschemicAreaPatternTypeEnum;
  isPerifocalGliosis: boolean;
  isEtatLacunaire: boolean;
  isTerritorialPatternWedgeShapedConfiguration: boolean;
  isWhiteMatterAffected: boolean;
  isCortexAffected: boolean;
  isStringOfPearlsAspect: boolean;
  contrastEnhancementType: ContrastEnhancementTypeEnum;
  infarctStageType: InfarctStageTypeEnum;
  isInfarctionDemarked: boolean;
  isNoIntracerebralHemorrhage: boolean;
  isCSFIsodense: boolean;
  isLimitedDelineationOfTheBasalGanglia: boolean;
  isLimitedDelineationOfTheThalamus: boolean;
  isHyperdenseMediaSign: boolean;
  isHyperdenseVesselSign: boolean;
  isLimitedMedullaCorticalDifferentiation: boolean;
  isSwellingOfTheGyri: boolean;
  isNarrowedSulci: boolean;
  isPseudolaminarNecrosis: boolean;
  isHemorrhagicTransformation: boolean;
  isPetechial: boolean;
  isParenchymatous: boolean;
  isVentricularHerniation: boolean;
  isAssociatedFindingsWedgeShapedConfiguration: boolean;
  cerebralEdemaType: CerebralEdemaTypeEnum;

  // Perfusion

  isNoEvidenceOfAPerfusionDisturbance: boolean;
  isHypoperfusion: boolean;
  hypoPerfusionType: PerfusionTypeEnum;
  isHyperperfusion: boolean;
  hyperPerfusionType: PerfusionTypeEnum;
  isLimitedEvaluability: boolean;
  isArtifactRelated: boolean;
  gradingVolumeInMm3: number;
  mttInSec: number;
  mttGradingType: GradingTypeEnum;
  ttpInSec: number;
  ttpGradingType: GradingTypeEnum;
  cbfInMl100gMin: number;
  cbfGradingType: GradingTypeEnum;
  cbvInMl100g: number;
  cbvGradingType: GradingTypeEnum;
  mismatchType: MismatchTypeEnum;
  mismatchVolumeInMm3: number;
  isRelevantPenumbra: boolean;
  isNoRelevantPenumbra: boolean;
  mismatchRatio: number;
  isIschemicGenesis: boolean;
  isTumorDisease: boolean;
  isPostictalChanges: boolean;
  isPRESS: boolean;
  isReperfusionSyndrome: boolean;
  aspectScore: number;

  // CircleOfWillisAndCerebralArteries

  affectedSegmentsOrVesselsLocation: ArteriesSegmentsLocalizerModel;
  longitudinalExpansionThrombusInMm: number;
  collateralizationSeverityType: CollateralizationSeverityTypeEnum;
  isAntCommunicatingArtery: boolean;
  isPostCommunicatingArtery: boolean;
  isCollateralizationOfTheICAViaECABranches: boolean;
  isRetrogradePerfusionOfTheOphthalmicArtery: boolean;
  isPerfusionOfTheICAParsCervicalis: boolean;
  isThroughContralateralExternalCarotidArtery: boolean;
  isThroughIpsilateralVertebralArtery: boolean;
  isLeptomeningealCollaterals: boolean;
  isCervicalVesselElongation: boolean;
  isUpstreamCervicalArteryWithHighGradeStenosis: boolean;
  isUpstreamCervicalArteryWithOcclusion: boolean;
  isThrombusInUpstreamCervicalArtery: boolean;
  isDissectionOfUpstreamCervicalArtery: boolean;
  isOstialStenosisAffectedVessel: boolean;

  // InternalCarotidArtery

  internalCarotidArterySegmentsLocations: CarotidArteryUiModel;

  // ExternalCarotidArtery

  arteriesWithOutletType: ArteriesWithOutletTypeEnum;

  // VertebralArtery

  isV1: boolean;
  isV2: boolean;
  isV3: boolean;
  isV4: boolean;
  isContralateralVertebralArtery: boolean;

  // CerebralVeinsSinusDuraeMatris

  cerebralVenousThrombosisLocation: CerebralVenousThrombosisLocalizerModel;
  isCongestiveHemorrhage: boolean;
  isPetechialHemorrhages: boolean;
  isEctasiaOfTheUpstreamVeins: boolean;
  isSAH: boolean;
  isCerebralEdema: boolean;

  // VascularMalformation

  isSuspicionOf: boolean;
  withoutAVShuntType: WithoutAVShuntTypeEnum;
  withAVShuntType: WithAVShuntTypeEnum;
  isReverseFlowSuspected: boolean;

  // DuralAVFistula

  isFrontal: boolean;
  isTemporal: boolean;
  isParietal: boolean;
  isOccipital: boolean;
  isInfratentorial: boolean;
  isTransverseSinus: boolean;
  isSigmoidSinus: boolean;
  isSinusCavernosus: boolean;
  isSuperiorSagittalSinus: boolean;
  isSuperiorPetrosalSinus: boolean;
  isInferiorPetrosalSinus: boolean;
  isReverseFlow: boolean;
  isReverseFlowSuspicionOf: boolean;
  isThrombosis: boolean;
  isHemorrhage: boolean;
  isEdema: boolean;
  isIschemia: boolean;

  referencePicture: ReferencePictureUiModel;
  perfusion01ReferencePicture: ReferencePictureUiModel;
  perfusion02ReferencePicture: ReferencePictureUiModel;

  constructor() {
    super();
    this.findingType = VesselsFindingTypeEnum.None;

    // Common

    this.cortexLocation = new CortexLocalizerModel();
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
    this.whiteMatterType = WhiteMatterTypeEnum.None;
    this.detailsType = DetailsTypeEnum.None;
    this.basalGangliaLocation = new BasalGangliaLocationsModel();
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
    this.pathologyType = PathologyTypeEnum.None;
    this.severityType = SeverityTypeEnum.None;
    this.isHemodynamicallyRelevant = false;
    this.diameterStenosisInMm = null;
    this.diameterDiseaseFreePoststenoticSegmentInMm = null;
    this.degreeOfStenosisCalculatedInNASCETInPercentage = null;
    this.formType = FormTypeEnum.None;
    this.lengthInMm = null;
    this.isShortStenosis = false;
    this.isWallHematoma = false;
    this.isContrastEnhancementOfTheArterialWall = false;
    this.isLocoregionalObliterationOfFattyTissue = false;
    this.isCaliberIrregularities = false;
    this.shapeType = ShapeTypeEnum.None;
    this.extensionAneurysmInMm = null;
    this.widthAneurysmNeckInMm = null;
    this.orientationAneurysmType = OrientationAneurysmTypeEnum.None;
    this.isSubarachnoidHemorrhage = false;
    this.subarachnoidHemorrhageType = SubarachnoidHemorrhageTypeEnum.None;
    this.subarachnoidHemorrhageLocalizationType = SubarachnoidHemorrhageLocalizationTypeEnum.None;
    this.isThrombolization = false;
    this.isEccentric = false;
    this.isDownstreamInfarctionAreas = false;
    this.isInflammatoryChange = false;
    this.vesselsDiagnosisType = VesselsDiagnosisTypeEnum.None;
    this.sideType = SideTypeEnum.None;
    this.isCalcification = false;
    this.isSoftPlaque = false;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;
    this.isPanarteritisNodosa = false;
    this.isBranchesOfTheExternalCarotidArtery = false;
    this.isCirculusArteriosusWillisii = false;

    // NormVariant

    this.isRightP1HypoplasiaOrFTPConfiguration = false;
    this.isRightP1Aplasia = false;
    this.isRightP1SplittingOrDuplication = false;
    this.isRightA1Hypoplasia = false;
    this.isRightA1Aplasia = false;
    this.isRightA1SplittingOrDuplication = false;
    this.isRightAcomPHypoplasia = false;
    this.isRightAcomPAplasia = false;
    this.isRightPICAEndingAV = false;
    this.isRightAVHypoplasia = false;
    this.isRightAVAplasia = false;
    this.isRightTripleACA = false;
    this.isRightAcomAHypoplasia = false;
    this.isRightAcomAAplasia = false;
    this.isRightAcomASplittingOrDuplication = false;
    this.isLeftP1HypoplasiaOrFTPConfiguration = false;
    this.isLeftP1Aplasia = false;
    this.isLeftP1SplittingOrDuplication = false;
    this.isLeftA1Hypoplasia = false;
    this.isLeftA1Aplasia = false;
    this.isLeftA1SplittingOrDuplication = false;
    this.isLeftAcomPHypoplasia = false;
    this.isLeftAcomPAplasia = false;
    this.isLeftPICAEndingAV = false;
    this.isLeftAVHypoplasia = false;
    this.isLeftAVAplasia = false;
    this.isLeftTripleACA = false;
    this.isLeftAcomAHypoplasia = false;
    this.isLeftAcomAAplasia = false;
    this.isLeftAcomASplittingOrDuplication = false;

    // Ischemia

    this.arterialTerritoryType = ArterialTerritoryTypeEnum.None;
    this.arterialSupplyAreaPatternType = ArterialSupplyAreaPatternTypeEnum.None;
    this.vascularTerritoryLocation = new ArterialTerritoriesLocalizerModel();
    this.vascularTerritoryType = VascularTerritoryTypeEnum.None;
    this.isCorticalVeins = false;
    this.isCorticalVeinsRight = false;
    this.isCorticalVeinsLeft = false;
    this.isInternalCerebralVeins = false;
    this.isInternalCerebralVeinsRight = false;
    this.isInternalCerebralVeinsLeft = false;
    this.isRightVeinOfLabbe = false;
    this.isLeftVeinOfLabbe = false;
    this.isRightSphenoparietalSinus = false;
    this.isLeftSphenoparietalSinus = false;
    this.maxDiameterInMm = null;
    this.isMultipleLesions = false;
    this.ischemicAreaPatternType = IschemicAreaPatternTypeEnum.None;
    this.isPerifocalGliosis = false;
    this.isEtatLacunaire = false;
    this.isTerritorialPatternWedgeShapedConfiguration = false;
    this.isWhiteMatterAffected = false;
    this.isCortexAffected = false;
    this.isStringOfPearlsAspect = false;
    this.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
    this.infarctStageType = InfarctStageTypeEnum.None;
    this.isInfarctionDemarked = false;
    this.isNoIntracerebralHemorrhage = false;
    this.isCSFIsodense = false;
    this.isLimitedDelineationOfTheBasalGanglia = false;
    this.isLimitedDelineationOfTheThalamus = false;
    this.isHyperdenseMediaSign = false;
    this.isHyperdenseVesselSign = false;
    this.isLimitedMedullaCorticalDifferentiation = false;
    this.isSwellingOfTheGyri = false;
    this.isNarrowedSulci = false;
    this.isPseudolaminarNecrosis = false;
    this.isHemorrhagicTransformation = false;
    this.isPetechial = false;
    this.isParenchymatous = false;
    this.isVentricularHerniation = false;
    this.isAssociatedFindingsWedgeShapedConfiguration = false;
    this.cerebralEdemaType = CerebralEdemaTypeEnum.None;

    // Perfusion

    this.isNoEvidenceOfAPerfusionDisturbance = false;
    this.isHypoperfusion = false;
    this.hypoPerfusionType = PerfusionTypeEnum.None;
    this.isHyperperfusion = false;
    this.hyperPerfusionType = PerfusionTypeEnum.None;
    this.isLimitedEvaluability = false;
    this.isArtifactRelated = false;
    this.gradingVolumeInMm3 = null;
    this.mttInSec = null;
    this.mttGradingType = GradingTypeEnum.None;
    this.ttpInSec = null;
    this.ttpGradingType = GradingTypeEnum.None;
    this.cbfInMl100gMin = null;
    this.cbfGradingType = GradingTypeEnum.None;
    this.cbvInMl100g = null;
    this.cbvGradingType = GradingTypeEnum.None;
    this.mismatchType = MismatchTypeEnum.None;
    this.mismatchVolumeInMm3 = null;
    this.isRelevantPenumbra = false;
    this.isNoRelevantPenumbra = false;
    this.mismatchRatio = null;
    this.isIschemicGenesis = false;
    this.isTumorDisease = false;
    this.isPostictalChanges = false;
    this.isPRESS = false;
    this.isReperfusionSyndrome = false;
    this.aspectScore = null;

    // CircleOfWillisAndCerebralArteries

    this.affectedSegmentsOrVesselsLocation = new ArteriesSegmentsLocalizerModel();
    this.longitudinalExpansionThrombusInMm = null;
    this.collateralizationSeverityType = CollateralizationSeverityTypeEnum.None;
    this.isAntCommunicatingArtery = false;
    this.isPostCommunicatingArtery = false;
    this.isCollateralizationOfTheICAViaECABranches = false;
    this.isRetrogradePerfusionOfTheOphthalmicArtery = false;
    this.isPerfusionOfTheICAParsCervicalis = false;
    this.isThroughContralateralExternalCarotidArtery = false;
    this.isThroughIpsilateralVertebralArtery = false;
    this.isLeptomeningealCollaterals = false;
    this.isCervicalVesselElongation = false;
    this.isUpstreamCervicalArteryWithHighGradeStenosis = false;
    this.isUpstreamCervicalArteryWithOcclusion = false;
    this.isThrombusInUpstreamCervicalArtery = false;
    this.isDissectionOfUpstreamCervicalArtery = false;
    this.isOstialStenosisAffectedVessel = false;

    // InternalCarotidArtery

    this.internalCarotidArterySegmentsLocations = new CarotidArteryUiModel();

    // ExternalCarotidArtery

    this.arteriesWithOutletType = ArteriesWithOutletTypeEnum.None;

    // VertebralArtery

    this.isV1 = false;
    this.isV2 = false;
    this.isV3 = false;
    this.isV4 = false;
    this.isContralateralVertebralArtery = false;

    // CerebralVeinsSinusDuraeMatris

    this.cerebralVenousThrombosisLocation = new CerebralVenousThrombosisLocalizerModel();
    this.isCongestiveHemorrhage = false;
    this.isPetechialHemorrhages = false;
    this.isEctasiaOfTheUpstreamVeins = false;
    this.isSAH = false;
    this.isCerebralEdema = false;

    // VascularMalformation

    this.isSuspicionOf = false;
    this.withoutAVShuntType = WithoutAVShuntTypeEnum.None;
    this.withAVShuntType = WithAVShuntTypeEnum.None;
    this.isReverseFlowSuspected = false;

    // DuralAVFistula

    this.isFrontal = false;
    this.isTemporal = false;
    this.isParietal = false;
    this.isOccipital = false;
    this.isInfratentorial = false;
    this.isTransverseSinus = false;
    this.isSigmoidSinus = false;
    this.isSinusCavernosus = false;
    this.isSuperiorSagittalSinus = false;
    this.isSuperiorPetrosalSinus = false;
    this.isInferiorPetrosalSinus = false;
    this.isReverseFlow = false;
    this.isReverseFlowSuspicionOf = false;
    this.isThrombosis = false;
    this.isHemorrhage = false;
    this.isEdema = false;
    this.isIschemia = false;

    this.referencePicture = new ReferencePictureUiModel();
    this.perfusion01ReferencePicture = new ReferencePictureUiModel();
    this.perfusion02ReferencePicture = new ReferencePictureUiModel();
  }
}
