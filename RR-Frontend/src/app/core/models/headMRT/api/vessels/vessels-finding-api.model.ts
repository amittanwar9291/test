import { FindingBase } from '@models/shared/finding/finding.base';
import { VesselsFindingTypeEnum } from '@enums/headMRT/vessels/';

import {
  AlignmentOfAneurysmDomeTypeEnum,
  LocalizationAneurysmaTypeEnum,
  ShapeTypeEnum,
  SideTypeEnum,
  SubarachnoidHemorrhageLocalizationTypeEnum,
  SubarachnoidHemorrhageTypeEnum,
  SignalTypeEnum
} from '@enums/headMRT/vessels/aneurysm';

import { CharacterizationThrombusTypeEnum, GradingOcclusionTypeEnum } from '@enums/headMRT/vessels/cerebral-venous-thrombosis';

import { VesselsDifferentialDiagnosisTypeEnum } from '@enums/headMRT/vessels/common';

import {
  ADCMapTypeEnum,
  ArterialTerritoryTypeEnum,
  ContrastEnhancementTypeEnum,
  DetailsTypeEnum,
  DiffusionImagingTypeEnum,
  DiffusionRestrictionTypeEnum,
  DWISignalTypeEnum,
  FLAIRDWIRatioTypeEnum,
  FormTypeEnum,
  GradingTypeEnum,
  InfarctStageTypeEnum,
  MRPerfusionTypeEnum,
  PatternTypeEnum,
  VascularTerritoryTypeEnum,
  WhiteMatterTypeEnum
} from '@enums/headMRT/vessels/ischemia';

import { WithAVShuntTypeEnum, WithoutAVShuntTypeEnum } from '@enums/headMRT/vessels/vascular-malformation';
import { FileApiModel } from '@models/shared/uploader/file-api.model';
import { ArteriesSegmentTypeEnum } from '@enums/shared/angiography';

export class VesselsFindingApiModel extends FindingBase {
  // Common

  findingType: VesselsFindingTypeEnum;
  affectedSegmentsOrVesselsLocation: string;
  isBloomingArtifact: boolean;
  isThrombosis: boolean;
  differentialDiagnosisType: VesselsDifferentialDiagnosisTypeEnum;
  sideType: SideTypeEnum;

  serialNumber: string;
  pictureNumber: string;
  uploadedImageFile: FileApiModel;
  imageFileId: string;

  // Ischemia

  arterialTerritoryType: ArterialTerritoryTypeEnum;
  formType: FormTypeEnum;
  vascularTerritoryLocations: string;
  vascularTerritoryType: VascularTerritoryTypeEnum;
  isCorticalVeins: boolean;
  isCorticalVeinsRight: boolean;
  isCorticalVeinsLeft: boolean;
  isInternalCerebralVeins: boolean;
  isInternalCerebralVeinsRight: boolean;
  isInternalCerebralVeinsLeft: boolean;
  isVeinOfLabbeRight: boolean;
  isVeinOfLabbeLeft: boolean;
  isSphenoparietalSinusRight: boolean;
  isSphenoparietalSinusLeft: boolean;
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
  whiteMatterType: WhiteMatterTypeEnum;
  detailsType: DetailsTypeEnum;
  basalGangliaLocations: string;
  patternType: PatternTypeEnum;
  isPerifocalGliosis: boolean;
  isEtatLacunaire: boolean;
  isCortexWedgeShapedConfiguration: boolean;
  isWhiteMatterAffected: boolean;
  isCortexAffected: boolean;
  isStringOfPearlsAspect: boolean;
  signalT2Flare: string;
  diffusionImagingType: DiffusionImagingTypeEnum;
  diffusionRestrictionType: DiffusionRestrictionTypeEnum;
  dwiSignalType: DWISignalTypeEnum;
  adcMapType: ADCMapTypeEnum;
  flairdwiRatioType: FLAIRDWIRatioTypeEnum;
  signalT1w: string;
  mrPerfusionType: MRPerfusionTypeEnum;
  isRelativeReductionCBFCBV: boolean;
  isProlongationOfMTT: boolean;
  isProlongationOfTTP: boolean;
  isPWIDWIMismatch: boolean;
  penumbraTissueAtRisk: number;
  contrastEnhancementType: ContrastEnhancementTypeEnum;
  infarctStageType: InfarctStageTypeEnum;
  isPseudolaminarNecrosis: boolean;
  isHemorrhagicTransformation: boolean;
  isPetechial: boolean;
  isParenchymatous: boolean;
  isVentricularHerniation: boolean;
  isSwellingOfTheGyri: boolean;
  isNarrowedSulci: boolean;
  isGeneralizedCerebralEdema: boolean;
  isWedgeShapedConfiguration: boolean;
  isVascularOcclusion: boolean;
  isDDArtifactTOFAngiography: boolean;
  isIntraarterialFLAIRSignalEnhancement: boolean;
  longitudinalExpansionOfThrombus: number;
  gradingType: GradingTypeEnum;
  isAnteriorCommunicatingArtery: boolean;
  isPosteriorCommunicatingArtery: boolean;
  isCollateralizationOfTheICAECA: boolean;
  isRetrogradePerfusionofTheOphthalmic: boolean;
  isPerfusionOfTheICAPars: boolean;
  isThroughContralateralexternalCarotidArtery: boolean;
  isThroughIpsilateralvertebralArtery: boolean;
  isLeptomeningealcollaterals: boolean;
  isCervicalVesselElongation: boolean;
  isHighGradeStenosisupstreamcervicalArtery: boolean;
  isOcclusionOfUpstreamcervicalArtery: boolean;
  isThrombusInUpstreamcervicalArtery: boolean;
  isDissectionOfUpstreamcervicalArtery: boolean;
  isOstialStenosisaffectedVessel: boolean;

  // CerebralVenousThrombosis

  cerebralVenousThrombosisLocations: string;
  isThrombusDetection: boolean;
  isCerebralEdema: boolean;
  isMissingFlowVoid: boolean;
  isElongatedthrombusCourse: boolean;
  isSignalVoidInphaseContrast: boolean;
  isContrastFillingDefectinMRV: boolean;
  isEmptyDeltaSign: boolean;
  isDuralEnhancement: boolean;
  gradingOcclusionType: GradingOcclusionTypeEnum;
  minDiameterresidualLumen: number;
  characterizationThrombusType: CharacterizationThrombusTypeEnum;
  isCongestiveHemorrhage: boolean;
  isPetechialhemorrhages: boolean;
  isEctasiaOfTheUpstream: boolean;
  isSAH: boolean;

  // Aneurysm

  localizationAneurysmaType: LocalizationAneurysmaTypeEnum;
  isV1: boolean;
  isV2: boolean;
  isV3: boolean;
  isV4: boolean;
  segmentsBouthillierLocations: string;
  shapeType: ShapeTypeEnum;
  extensionAneurysm: number;
  secondPlane: number;
  thirdPlane: number;
  aneurysmNeckWidth: number;
  alignmentOfAneurysmDomeType: AlignmentOfAneurysmDomeTypeEnum;
  isSubarachnoidHemorrhage: boolean;
  subarachnoidHemorrhageType: SubarachnoidHemorrhageTypeEnum;
  subarachnoidHemorrhageLocalizationType: SubarachnoidHemorrhageLocalizationTypeEnum;
  isEccentric: boolean;
  isDownstreamInfarctAreas: boolean;
  isInflammatoryChange: boolean;

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
  isSuspicionOfReverseFlow: boolean;
  isHemorrhage: boolean;
  isEdema: boolean;
  isIschemia: boolean;

  constructor() {
    super();

    // Common

    this.findingType = VesselsFindingTypeEnum.None;
    this.affectedSegmentsOrVesselsLocation = ArteriesSegmentTypeEnum.None;
    this.isBloomingArtifact = false;
    this.isThrombosis = false;
    this.differentialDiagnosisType = VesselsDifferentialDiagnosisTypeEnum.None;
    this.sideType = SideTypeEnum.None;

    this.serialNumber = '';
    this.pictureNumber = '';
    this.uploadedImageFile = null;
    this.imageFileId = null;

    // Ischemia

    this.arterialTerritoryType = ArterialTerritoryTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.vascularTerritoryLocations = 'None';
    this.vascularTerritoryType = VascularTerritoryTypeEnum.None;
    this.isCorticalVeins = false;
    this.isCorticalVeinsRight = false;
    this.isCorticalVeinsLeft = false;
    this.isInternalCerebralVeins = false;
    this.isInternalCerebralVeinsRight = false;
    this.isInternalCerebralVeinsLeft = false;
    this.isVeinOfLabbeRight = false;
    this.isVeinOfLabbeLeft = false;
    this.isSphenoparietalSinusRight = false;
    this.isSphenoparietalSinusLeft = false;
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
    this.whiteMatterType = WhiteMatterTypeEnum.None;
    this.detailsType = DetailsTypeEnum.None;
    this.basalGangliaLocations = 'None';
    this.patternType = PatternTypeEnum.None;
    this.isPerifocalGliosis = false;
    this.isEtatLacunaire = false;
    this.isCortexWedgeShapedConfiguration = false;
    this.isWhiteMatterAffected = false;
    this.isCortexAffected = false;
    this.isStringOfPearlsAspect = false;
    this.signalT2Flare = SignalTypeEnum.None;
    this.diffusionImagingType = DiffusionImagingTypeEnum.None;
    this.diffusionRestrictionType = DiffusionRestrictionTypeEnum.None;
    this.dwiSignalType = DWISignalTypeEnum.None;
    this.adcMapType = ADCMapTypeEnum.None;
    this.flairdwiRatioType = FLAIRDWIRatioTypeEnum.None;
    this.signalT1w = SignalTypeEnum.None;
    this.mrPerfusionType = MRPerfusionTypeEnum.None;
    this.isRelativeReductionCBFCBV = false;
    this.isProlongationOfMTT = false;
    this.isProlongationOfTTP = false;
    this.isPWIDWIMismatch = false;
    this.penumbraTissueAtRisk = null;
    this.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
    this.infarctStageType = InfarctStageTypeEnum.None;
    this.isPseudolaminarNecrosis = false;
    this.isHemorrhagicTransformation = false;
    this.isPetechial = false;
    this.isParenchymatous = false;
    this.isVentricularHerniation = false;
    this.isSwellingOfTheGyri = false;
    this.isNarrowedSulci = false;
    this.isGeneralizedCerebralEdema = false;
    this.isWedgeShapedConfiguration = false;
    this.isVascularOcclusion = false;
    this.isDDArtifactTOFAngiography = false;
    this.isIntraarterialFLAIRSignalEnhancement = false;
    this.longitudinalExpansionOfThrombus = null;
    this.gradingType = GradingTypeEnum.None;
    this.isAnteriorCommunicatingArtery = false;
    this.isPosteriorCommunicatingArtery = false;
    this.isCollateralizationOfTheICAECA = false;
    this.isRetrogradePerfusionofTheOphthalmic = false;
    this.isPerfusionOfTheICAPars = false;
    this.isThroughContralateralexternalCarotidArtery = false;
    this.isThroughIpsilateralvertebralArtery = false;
    this.isLeptomeningealcollaterals = false;
    this.isCervicalVesselElongation = false;
    this.isHighGradeStenosisupstreamcervicalArtery = false;
    this.isOcclusionOfUpstreamcervicalArtery = false;
    this.isThrombusInUpstreamcervicalArtery = false;
    this.isDissectionOfUpstreamcervicalArtery = false;
    this.isOstialStenosisaffectedVessel = false;

    // CerebralVenousThrombosis

    this.cerebralVenousThrombosisLocations = 'None';
    this.isThrombusDetection = false;
    this.isCerebralEdema = false;
    this.isMissingFlowVoid = false;
    this.isElongatedthrombusCourse = false;
    this.isSignalVoidInphaseContrast = false;
    this.isContrastFillingDefectinMRV = false;
    this.isEmptyDeltaSign = false;
    this.isDuralEnhancement = false;
    this.gradingOcclusionType = GradingOcclusionTypeEnum.None;
    this.minDiameterresidualLumen = null;
    this.characterizationThrombusType = CharacterizationThrombusTypeEnum.None;
    this.isCongestiveHemorrhage = false;
    this.isPetechialhemorrhages = false;
    this.isEctasiaOfTheUpstream = false;
    this.isSAH = false;

    // Aneurysm

    this.localizationAneurysmaType = LocalizationAneurysmaTypeEnum.None;
    this.isV1 = false;
    this.isV2 = false;
    this.isV3 = false;
    this.isV4 = false;
    this.segmentsBouthillierLocations = 'None';
    this.shapeType = ShapeTypeEnum.None;
    this.extensionAneurysm = null;
    this.secondPlane = null;
    this.thirdPlane = null;
    this.aneurysmNeckWidth = null;
    this.alignmentOfAneurysmDomeType = AlignmentOfAneurysmDomeTypeEnum.None;
    this.isSubarachnoidHemorrhage = false;
    this.subarachnoidHemorrhageType = SubarachnoidHemorrhageTypeEnum.None;
    this.subarachnoidHemorrhageLocalizationType = SubarachnoidHemorrhageLocalizationTypeEnum.None;
    this.isEccentric = false;
    this.isDownstreamInfarctAreas = false;
    this.isInflammatoryChange = false;

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
    this.isSuspicionOfReverseFlow = false;
    this.isHemorrhage = false;
    this.isEdema = false;
    this.isIschemia = false;
  }
}
