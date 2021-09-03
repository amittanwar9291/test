import { BonesFindingBaseApiModel } from './bones-finding-base-api.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { NotFurtherSpecifiedTypeEnum } from '@enums/pelvisMRT/bones';

import {
  AnfhCortexTypeEnum,
  AnfhDifferentialDiagnosisTypeEnum,
  ClassificationAccordingToARCOTypeEnum
} from '@enums/pelvisMRT/bones/avascular-necrosis-of-the-femoral-head';

import { DistributionTypeEnum } from '@enums/pelvisMRT/bones/bone-marrow-edema';

import { BursitisLimitationTypeEnum, BursitisLocalizationTypeEnum } from '@enums/pelvisMRT/bones/bursitis';

import { ChondropathyIntensityTypeEnum, ExpansionTypeEnum, IntensityTypeEnum } from '@enums/pelvisMRT/bones/coxarthrosis';

import {
  FaClassificationTypeEnum,
  FractureBothColumnsCompleteJointInvolvementTypeEnum,
  FractureWallPartialJointInvolvementEnum,
  TransverseFracturePartialJointInvolvementTypeEnum
} from '@enums/pelvisMRT/bones/fracture-acetabulum';

import {
  FfsFractureFormTypeEnum,
  FfsLocalizationTypeEnum,
  MultiFragmentaryFractureTypeEnum,
  SimpleFractureTypeEnum,
  WedgeFractureTypeEnum
} from '@enums/pelvisMRT/bones/fracture-femoral-shaft';

import {
  FbClassificationTypeEnum,
  FbFractureFormA1SubTypeEnum,
  FbFractureFormA2SubTypeEnum,
  FbFractureFormA3SubTypeEnum,
  FbFractureFormATypeEnum,
  FbFractureFormB1SubTypeEnum,
  FbFractureFormB2SubTypeEnum,
  FbFractureFormB3SubTypeEnum,
  FbFractureFormBTypeEnum,
  FbFractureFormC1SubTypeEnum,
  FbFractureFormC2SubTypeEnum,
  FbFractureFormC3SubTypeEnum,
  FbFractureFormCTypeEnum
} from '@enums/pelvisMRT/bones/fracture-pelvis';

import {
  DepressionFractureTypeEnum,
  FemoralHeadFractureFormTypeEnum,
  FemoralNeckFractureFormTypeEnum,
  FpfClassificationTypeEnum,
  IntertrochantericTypeEnum,
  MultiFragmentalPertrochantericTypeEnum,
  ShearFractureAngleTypeEnum,
  ShearFractureTypeEnum,
  SimplePertrochantericTypeEnum,
  SubcapitalTypeEnum,
  TranscervicalTypeEnum,
  TrochantericRegionFractureFormTypeEnum,
  TrochantericRuptureTypeEnum
} from '@enums/pelvisMRT/bones/fracture-proximal-femur';

import { QuantityTypeEnum } from '@enums/pelvisMRT/bones/joint-effusion';

import { ODifferentialDiagnosisTypeEnum, StadiumTypeEnum } from '@enums/pelvisMRT/bones/osteomyelitis';

import {
  BoneWidthTypeEnum,
  LocalizationFemoralNeckTypeEnum,
  WideEdemaMeasurementCoronaryTypeEnum
} from '@enums/pelvisMRT/bones/stress-fracture';

import { TbmeDifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/bones/transient-bone-marrow-edema';

import {
  BonesDiagnosisTypeEnum,
  HistologicallySecuredTypeEnum,
  LocalSpreadTypeEnum,
  TClassificationTypeEnum
} from '@enums/pelvisMRT/bones/tumor';
import { SideTypeEnum } from '@enums/pelvisMRT/bones/bursitis/side-type.enum';

export class BonesFindingApiModel extends BonesFindingBaseApiModel {
  // Common

  hipLocalizer: string;
  isSubordinated: boolean;
  isTransientBoneMarrowEdema: boolean;
  isArticularEffusion: boolean;
  isOsteochondralFragment: boolean;
  isPseudarthrosis: boolean;

  // Fracture

  fpfClassificationType: FpfClassificationTypeEnum;
  fpfNotFurtherSpecifiedType: NotFurtherSpecifiedTypeEnum;
  trochantericRegionFractureFormType: TrochantericRegionFractureFormTypeEnum;
  simplePertrochantericType: SimplePertrochantericTypeEnum;
  trochantericRuptureType: TrochantericRuptureTypeEnum;
  multiFragmentalPertrochantericType: MultiFragmentalPertrochantericTypeEnum;
  intertrochantericType: IntertrochantericTypeEnum;
  femoralNeckFractureFormType: FemoralNeckFractureFormTypeEnum;
  subcapitalType: SubcapitalTypeEnum;
  transcervicalType: TranscervicalTypeEnum;
  shearFractureAngleType: ShearFractureAngleTypeEnum;
  femoralHeadFractureFormType: FemoralHeadFractureFormTypeEnum;
  shearFractureType: ShearFractureTypeEnum;
  impressionFractureType: DepressionFractureTypeEnum;

  // Fracture

  ffsLocalizationType: FfsLocalizationTypeEnum;
  ffsFractureFormType: FfsFractureFormTypeEnum;
  simpleFractureType: SimpleFractureTypeEnum;
  wedgeFractureType: WedgeFractureTypeEnum;
  multiFragmentaryFractureType: MultiFragmentaryFractureTypeEnum;
  fsfNotFurtherSpecifiedType: NotFurtherSpecifiedTypeEnum;

  // Fracture

  faClassificationType: FaClassificationTypeEnum;
  fractureWallAbutmentPartialJointInvolvementType: FractureWallPartialJointInvolvementEnum;
  transverseFracturePartialJointInvolvementType: TransverseFracturePartialJointInvolvementTypeEnum;
  fractureBothAbutmentsCompleteJointInvolvementType: FractureBothColumnsCompleteJointInvolvementTypeEnum;
  acetabularFractureNotFurtherSpecifiedType: NotFurtherSpecifiedTypeEnum;

  // Fracture

  fbClassificationType: FbClassificationTypeEnum;
  fbFractureFormAType: FbFractureFormATypeEnum;
  fbFractureFormA1SubType: FbFractureFormA1SubTypeEnum;
  fbFractureFormA2SubType: FbFractureFormA2SubTypeEnum;
  fbFractureFormA3SubType: FbFractureFormA3SubTypeEnum;
  fbFractureFormBType: FbFractureFormBTypeEnum;
  fbFractureFormB1SubType: FbFractureFormB1SubTypeEnum;
  fbFractureFormB2SubType: FbFractureFormB2SubTypeEnum;
  fbFractureFormB3SubType: FbFractureFormB3SubTypeEnum;
  fbFractureFormCType: FbFractureFormCTypeEnum;
  fbFractureFormC1SubType: FbFractureFormC1SubTypeEnum;
  fbFractureFormC2SubType: FbFractureFormC2SubTypeEnum;
  fbFractureFormC3SubType: FbFractureFormC3SubTypeEnum;
  pelvicFractureNotFurtherSpecifiedType: NotFurtherSpecifiedTypeEnum;

  // Stress

  localizationFemoralNeckType: LocalizationFemoralNeckTypeEnum;
  isHypointenseLine: boolean;
  boneWidthType: BoneWidthTypeEnum;
  wideEdemaMeasurementCoronaryType: WideEdemaMeasurementCoronaryTypeEnum;
  isCorrespondingHypointensityT1w: boolean;
  isPeriostealOedema: boolean;

  // Subchondral

  isLowSignalLine: boolean;
  isLowSignalArea: boolean;
  isArticularSurfaceCollapseCortical: boolean;
  isLiquidFilledSubchondralGap: boolean;
  osteochondralFragmentInMm: number;
  isCMEnhancementPerifocal: boolean;

  // Bone

  isSubchondralFracture: boolean;
  distributionType: DistributionTypeEnum;
  expansionHipLocalizer: string;
  isOsSacrum: boolean;
  isOsSacrumRight: boolean;
  isOsSacrumLeft: boolean;

  // Transient

  tbmeDifferentialDiagnosisType: TbmeDifferentialDiagnosisTypeEnum;
  isTbmeBoneMarrowEdema: boolean;
  isAbsentSubchondralLesion: boolean;

  // Avascular

  isSubchondralgeographicalDemarcationLine: boolean;
  isDoubleLineCharacterT2w: boolean;
  isInverselyRelatedToThe: boolean;
  isAnterosuperior: boolean;
  isAdjacentBoneMarrowEdema: boolean;
  measurementCoronaryInDegrees: number;
  measurementSagittalinDegrees: number;
  isCoexistenceCoaxarthosis: boolean;
  isBilateralDiagnosis: boolean;
  isClassificationAccordingToARCO: boolean;
  classificationAccordingToARCOType: ClassificationAccordingToARCOTypeEnum;
  anfhCortexType: AnfhCortexTypeEnum;
  anfhDifferentialDiagnosisType: AnfhDifferentialDiagnosisTypeEnum;

  // Coxarthrosis

  isChondropathy: boolean;
  isSubchondralCystsGeodes: boolean;
  isSubchondralOedema: boolean;
  isSubchondralSclerosis: boolean;
  isOsteophytes: boolean;
  isSynovialCyst: boolean;
  isSynovitis: boolean;
  isFreeJointBody: boolean;
  isQuantity: boolean;
  isLabrumLesion: boolean;
  isLabrumHypertrophy: boolean;
  isParalabralCysts: boolean;
  chondropathyIntensityType: ChondropathyIntensityTypeEnum;
  expansionType: ExpansionTypeEnum;
  intensityType: IntensityTypeEnum;

  // Osteomyelitis

  isIntrabonyAbscess: boolean;
  intrabonyAbscessDiameterInMm: number;
  intrabonyAbscessSecondLayerInMm: number;
  isPenumbraSign: boolean;
  isPeripheralCMEnhancement: boolean;
  isMoreThanOneLesion: boolean;
  isSequester: boolean;
  sequesterDiameterInMm: number;
  isSequesterMoreThanLesion: boolean;
  isNoKMEnhancement: boolean;
  isOsteolysis: boolean;
  periostealBoneApposition: boolean;
  isDestruction: boolean;
  isThinningScalopping: boolean;
  isPeriostealThickening: boolean;
  isSubperiostealAbscess: boolean;
  subperiostealAbscessLargestLesionAxialInMm: number;
  isPeriostrupture: boolean;
  stadiumType: StadiumTypeEnum;
  oDifferentialDiagnosisType: ODifferentialDiagnosisTypeEnum;

  // Osteitis

  isBoneMarrowEdemaOs: boolean;
  isBoneMarrowEdemaOsRight: boolean;
  isBoneMarrowEdemaOsLeft: boolean;
  isMuscleEdemaAdductors: boolean;
  isIrregularityJoint: boolean;
  isSecondaryCleftSign: boolean;
  isSecondaryCleftSignRight: boolean;
  isSecondaryCleftSignLeft: boolean;
  isSubchondralCysts: boolean;
  isRectusAbdominisTendinopathy: boolean;
  isRectusAbdominisTendinopathyRight: boolean;
  isRectusAbdominisTendinopathyLeft: boolean;

  // JointEffusion

  isJointEffusionRight: boolean;
  isJointEffusionLeft: boolean;
  quantityType: QuantityTypeEnum;
  isHemorrhagic: boolean;
  isSedimentation: boolean;

  // Bursitis

  sideType: SideTypeEnum;
  bursitisLocalizationType: BursitisLocalizationTypeEnum;
  bursitisLimitationType: BursitisLimitationTypeEnum;
  maxDiameterInMm: number;
  isHemorrhage: boolean;
  bursitisHomogeneityType: HomogeneityTypeEnum;

  // Tumor

  singleSelectionTumorHipLocalizer: string;
  descriptionType: DescriptionTypeEnum;
  expansionSizeInMm: number;
  expansion2ndLayerSizeInMm: number;
  expansion3rdLayerSizeInMm: number;
  isContrastInSepta: boolean;
  isCalcificationDiffuselyDistributed: boolean;
  isNidus: boolean;
  isCapT2wHyperintensity: boolean;
  isInfiltrationBoundary: boolean;
  isPerifocalSclerosis: boolean;
  isSurroundingInflammatoryReaction: boolean;
  isPathologicalFracture: boolean;
  isWithinThePrimarilyAffectedBone: boolean;
  localSpreadType: LocalSpreadTypeEnum;
  classificationType: TClassificationTypeEnum;
  isHistologicallySecured: boolean;
  histologicallySecuredType: HistologicallySecuredTypeEnum;
  differentialDiagnosis1: BonesDiagnosisTypeEnum;
  differentialDiagnosis2: BonesDiagnosisTypeEnum;
  differentialDiagnosis3: BonesDiagnosisTypeEnum;

  constructor() {
    super();

    // Common

    this.hipLocalizer = 'None';
    this.isSubordinated = false;
    this.isTransientBoneMarrowEdema = false;
    this.isArticularEffusion = false;
    this.isOsteochondralFragment = false;
    this.isPseudarthrosis = false;

    // Fracture

    this.fpfClassificationType = FpfClassificationTypeEnum.None;
    this.fpfNotFurtherSpecifiedType = NotFurtherSpecifiedTypeEnum.None;
    this.trochantericRegionFractureFormType = TrochantericRegionFractureFormTypeEnum.None;
    this.simplePertrochantericType = SimplePertrochantericTypeEnum.None;
    this.trochantericRuptureType = TrochantericRuptureTypeEnum.None;
    this.multiFragmentalPertrochantericType = MultiFragmentalPertrochantericTypeEnum.None;
    this.intertrochantericType = IntertrochantericTypeEnum.None;
    this.femoralNeckFractureFormType = FemoralNeckFractureFormTypeEnum.None;
    this.subcapitalType = SubcapitalTypeEnum.None;
    this.transcervicalType = TranscervicalTypeEnum.None;
    this.shearFractureAngleType = ShearFractureAngleTypeEnum.None;
    this.femoralHeadFractureFormType = FemoralHeadFractureFormTypeEnum.None;
    this.shearFractureType = ShearFractureTypeEnum.None;
    this.impressionFractureType = DepressionFractureTypeEnum.None;

    // Fracture

    this.ffsLocalizationType = FfsLocalizationTypeEnum.None;
    this.ffsFractureFormType = FfsFractureFormTypeEnum.None;
    this.simpleFractureType = SimpleFractureTypeEnum.None;
    this.wedgeFractureType = WedgeFractureTypeEnum.None;
    this.multiFragmentaryFractureType = MultiFragmentaryFractureTypeEnum.None;
    this.fsfNotFurtherSpecifiedType = NotFurtherSpecifiedTypeEnum.None;

    // Fracture

    this.faClassificationType = FaClassificationTypeEnum.None;
    this.fractureWallAbutmentPartialJointInvolvementType = FractureWallPartialJointInvolvementEnum.None;
    this.transverseFracturePartialJointInvolvementType = TransverseFracturePartialJointInvolvementTypeEnum.None;
    this.fractureBothAbutmentsCompleteJointInvolvementType = FractureBothColumnsCompleteJointInvolvementTypeEnum.None;
    this.acetabularFractureNotFurtherSpecifiedType = NotFurtherSpecifiedTypeEnum.None;

    // Fracture

    this.fbClassificationType = FbClassificationTypeEnum.None;
    this.fbFractureFormAType = FbFractureFormATypeEnum.None;
    this.fbFractureFormA1SubType = FbFractureFormA1SubTypeEnum.None;
    this.fbFractureFormA2SubType = FbFractureFormA2SubTypeEnum.None;
    this.fbFractureFormA3SubType = FbFractureFormA3SubTypeEnum.None;
    this.fbFractureFormBType = FbFractureFormBTypeEnum.None;
    this.fbFractureFormB1SubType = FbFractureFormB1SubTypeEnum.None;
    this.fbFractureFormB2SubType = FbFractureFormB2SubTypeEnum.None;
    this.fbFractureFormB3SubType = FbFractureFormB3SubTypeEnum.None;
    this.fbFractureFormCType = FbFractureFormCTypeEnum.None;
    this.fbFractureFormC1SubType = FbFractureFormC1SubTypeEnum.None;
    this.fbFractureFormC2SubType = FbFractureFormC2SubTypeEnum.None;
    this.fbFractureFormC3SubType = FbFractureFormC3SubTypeEnum.None;
    this.pelvicFractureNotFurtherSpecifiedType = NotFurtherSpecifiedTypeEnum.None;

    // Stress

    this.localizationFemoralNeckType = LocalizationFemoralNeckTypeEnum.None;
    this.isHypointenseLine = false;
    this.boneWidthType = BoneWidthTypeEnum.None;
    this.wideEdemaMeasurementCoronaryType = WideEdemaMeasurementCoronaryTypeEnum.None;
    this.isCorrespondingHypointensityT1w = false;
    this.isPeriostealOedema = false;

    // Subchondral

    this.isLowSignalLine = false;
    this.isLowSignalArea = false;
    this.isArticularSurfaceCollapseCortical = false;
    this.isLiquidFilledSubchondralGap = false;
    this.osteochondralFragmentInMm = null;
    this.isCMEnhancementPerifocal = false;

    // Bone

    this.isSubchondralFracture = false;
    this.distributionType = DistributionTypeEnum.None;
    this.expansionHipLocalizer = 'None';
    this.isOsSacrum = false;
    this.isOsSacrumRight = false;
    this.isOsSacrumLeft = false;

    // Transient

    this.tbmeDifferentialDiagnosisType = TbmeDifferentialDiagnosisTypeEnum.None;
    this.isTbmeBoneMarrowEdema = false;
    this.isAbsentSubchondralLesion = false;

    // Avascular

    this.isSubchondralgeographicalDemarcationLine = false;
    this.isDoubleLineCharacterT2w = false;
    this.isInverselyRelatedToThe = false;
    this.isAnterosuperior = false;
    this.isAdjacentBoneMarrowEdema = false;
    this.measurementCoronaryInDegrees = null;
    this.measurementSagittalinDegrees = null;
    this.isCoexistenceCoaxarthosis = false;
    this.isBilateralDiagnosis = false;
    this.isClassificationAccordingToARCO = false;
    this.classificationAccordingToARCOType = ClassificationAccordingToARCOTypeEnum.None;
    this.anfhCortexType = AnfhCortexTypeEnum.None;
    this.anfhDifferentialDiagnosisType = AnfhDifferentialDiagnosisTypeEnum.None;

    // Coxarthrosis

    this.isChondropathy = false;
    this.isSubchondralCystsGeodes = false;
    this.isSubchondralOedema = false;
    this.isSubchondralSclerosis = false;
    this.isOsteophytes = false;
    this.isSynovialCyst = false;
    this.isSynovitis = false;
    this.isFreeJointBody = false;
    this.isQuantity = false;
    this.isLabrumLesion = false;
    this.isLabrumHypertrophy = false;
    this.isParalabralCysts = false;
    this.chondropathyIntensityType = ChondropathyIntensityTypeEnum.None;
    this.expansionType = ExpansionTypeEnum.None;
    this.intensityType = IntensityTypeEnum.None;

    // Osteomyelitis

    this.isIntrabonyAbscess = false;
    this.intrabonyAbscessDiameterInMm = null;
    this.intrabonyAbscessSecondLayerInMm = null;
    this.isPenumbraSign = false;
    this.isPeripheralCMEnhancement = false;
    this.isMoreThanOneLesion = false;
    this.isSequester = false;
    this.sequesterDiameterInMm = null;
    this.isSequesterMoreThanLesion = false;
    this.isNoKMEnhancement = false;
    this.isOsteolysis = false;
    this.periostealBoneApposition = false;
    this.isDestruction = false;
    this.isThinningScalopping = false;
    this.isPeriostealThickening = false;
    this.isSubperiostealAbscess = false;
    this.subperiostealAbscessLargestLesionAxialInMm = null;
    this.isPeriostrupture = false;
    this.stadiumType = StadiumTypeEnum.None;
    this.oDifferentialDiagnosisType = ODifferentialDiagnosisTypeEnum.None;

    // Osteitis

    this.isBoneMarrowEdemaOs = false;
    this.isBoneMarrowEdemaOsRight = false;
    this.isBoneMarrowEdemaOsLeft = false;
    this.isMuscleEdemaAdductors = false;
    this.isIrregularityJoint = false;
    this.isSecondaryCleftSign = false;
    this.isSecondaryCleftSignRight = false;
    this.isSecondaryCleftSignLeft = false;
    this.isSubchondralCysts = false;
    this.isRectusAbdominisTendinopathy = false;
    this.isRectusAbdominisTendinopathyRight = false;
    this.isRectusAbdominisTendinopathyLeft = false;

    // JointEffusion

    this.isJointEffusionRight = false;
    this.isJointEffusionLeft = false;
    this.quantityType = QuantityTypeEnum.None;
    this.isHemorrhagic = false;
    this.isSedimentation = false;

    // Bursitis

    this.sideType = SideTypeEnum.None;
    this.bursitisLocalizationType = BursitisLocalizationTypeEnum.None;
    this.bursitisLimitationType = BursitisLimitationTypeEnum.None;
    this.maxDiameterInMm = null;
    this.isHemorrhage = false;
    this.bursitisHomogeneityType = HomogeneityTypeEnum.None;

    // Tumor

    this.singleSelectionTumorHipLocalizer = 'None';
    this.descriptionType = DescriptionTypeEnum.None;
    this.expansionSizeInMm = null;
    this.expansion2ndLayerSizeInMm = null;
    this.expansion3rdLayerSizeInMm = null;
    this.isContrastInSepta = false;
    this.isCalcificationDiffuselyDistributed = false;
    this.isNidus = false;
    this.isCapT2wHyperintensity = false;
    this.isInfiltrationBoundary = false;
    this.isPerifocalSclerosis = false;
    this.isSurroundingInflammatoryReaction = false;
    this.isPathologicalFracture = false;
    this.isWithinThePrimarilyAffectedBone = false;
    this.localSpreadType = LocalSpreadTypeEnum.None;
    this.classificationType = TClassificationTypeEnum.None;
    this.isHistologicallySecured = false;
    this.histologicallySecuredType = HistologicallySecuredTypeEnum.None;
    this.differentialDiagnosis1 = BonesDiagnosisTypeEnum.None;
    this.differentialDiagnosis2 = BonesDiagnosisTypeEnum.None;
    this.differentialDiagnosis3 = BonesDiagnosisTypeEnum.None;
  }
}
