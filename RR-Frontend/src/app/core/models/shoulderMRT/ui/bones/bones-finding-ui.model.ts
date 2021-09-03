import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';

import {
  AoClassificationAo12TypeEnum,
  AoClassificationFractureTypeEnum,
  BoneTypeEnum,
  CmEnhancementDistributionTypeEnum,
  DegenerationIntensityTypeEnum,
  DegenerationJointSurfacesTypeEnum,
  DegenerationOutbridgeTypeEnum,
  DifferentialDiagnosisTypeEnum,
  DistributionTypeEnum,
  FirstLocalizationTypeEnum,
  FractureClassificationTypeEnum,
  FractureClaviculaEvaluationTypeEnum,
  FractureClaviculaRatingTypeEnum,
  FractureNotSpecifiedTypeEnum,
  FractureProximalerAoEvaluationTypeEnum,
  FractureProximalerAoRatingTypeEnum,
  FractureProximalerNeerDetailsTypeEnum,
  FractureProximalerNeerRatingTypeEnum,
  FractureScapulaEvaluationTypeEnum,
  FractureScapulaRatingTypeEnum,
  FractureSpecificTypeEnum,
  LocalPropagationTypeEnum,
  PostTraumaticHillSachsTypeEnum,
  SecondTumorDifferentialDiagnosisEnum,
  TumorDifferentialDiagnosisEnum
} from '@enums/shoulderMRT/bones';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BonesFindingBaseUiModel } from './bones-finding-base-ui.model';

export class BonesFindingUiModel extends BonesFindingBaseUiModel {
  // Common
  boneType: BoneTypeEnum;
  isSubordinated: boolean;
  referencePicture: ReferencePictureUiModel;

  // Fracture
  fractureNotSpecifiedType: FractureNotSpecifiedTypeEnum;
  fractureHumerusClassificationType: FractureClassificationTypeEnum;
  fractureHumerusAoRatingType: FractureProximalerAoRatingTypeEnum;
  fractureHumerusAoEvaluationType: FractureProximalerAoEvaluationTypeEnum;
  fractureHumerusNeerRatingType: FractureProximalerNeerRatingTypeEnum;
  isFractureHumerusFragmentsHumeraHead: boolean;
  isFractureHumerusFragmentsMajusTubercle: boolean;
  isFractureHumerusFragmentsTuberculumMinus: boolean;
  isFractureHumerusFragmentsHumerumShaft: boolean;
  fractureHumerusNeerDetailsType: FractureProximalerNeerDetailsTypeEnum;
  fractureClaviculaEvaluationType: FractureClaviculaEvaluationTypeEnum;
  fractureClaviculaAoClassificationType: FractureClaviculaRatingTypeEnum;
  fractureScapulaEvaluationType: FractureScapulaEvaluationTypeEnum;
  fractureScapulaAoClassificationType: FractureScapulaRatingTypeEnum;
  aoClassificationAO12Type: AoClassificationAo12TypeEnum;
  aoClassificationFractureType: AoClassificationFractureTypeEnum;
  fractureSpecificType: FractureSpecificTypeEnum;

  // BoneMarrowEdema
  isProximalerHumerus: boolean;
  isHillSachsLesion: boolean;
  isReverseHillSachsLesion: boolean;
  isHumeralHead: boolean;
  isGreaterTubercle: boolean;
  isLesserTubercle: boolean;
  isLateralClavicle: boolean;
  isAcromialEnd: boolean;
  isClavicularBody: boolean;
  isExtremitasClaviculae: boolean;
  isScapula: boolean;
  isAkromion: boolean;
  isProcessusCoracoideus: boolean;
  isScapularSpine: boolean;
  isSupraspinatousFossa: boolean;
  isGlenoidFossa: boolean;
  isInfraspinatousFossa: boolean;
  distributionType: DistributionTypeEnum;
  isSoftTissueEdema: boolean;
  isThickenedAndEdematizedSynovialis: boolean;
  differentialDiagnosisType: DifferentialDiagnosisTypeEnum;

  // PostTraumatic
  posttraumaticHillSachsType: PostTraumaticHillSachsTypeEnum;
  isImpressionPosteroSuperior: boolean;
  posteroSuperiorDegrees: number;
  isImpressionAnteroSuperior: boolean;
  anteroSuperiorDegrees: number;

  // HumerusNecrosis
  isHumerusSubchondral: boolean;
  humerusDiameter: number;
  isHumerusIntactCortex: boolean;

  // Degeneration
  isSeverityOfGlenohumeralOsteoarthritis: boolean;
  degenerationIntensityType: DegenerationIntensityTypeEnum;
  isDegenerationSclerosis: boolean;
  isDegenerationEdema: boolean;
  isDegenerationCyst: boolean;
  isDegenerationChondropathy: boolean;
  isDegenerationChondrocalcinosis: boolean;
  isDegenerationOsteophytes: boolean;
  isDegenerationArthropathy: boolean;
  degenerationOutbridgeType: DegenerationOutbridgeTypeEnum;
  degenerationExpansiveness: number;
  degenerationJointSurfacesType: DegenerationJointSurfacesTypeEnum;

  // Tumor
  descriptionType: DescriptionTypeEnum;
  firstLocalizationType: FirstLocalizationTypeEnum;
  axialMaxInMm: number;
  planeAxialInMm: number;
  craniocaudalInMm: number;
  isSeptal: boolean;

  isInfiltrationOfAdjacentBones: boolean;
  isPathologicalFracture: boolean;
  isPerilesionalSclerosis: boolean;
  isSurroundingInflammatoryReaction: boolean;
  isAnotherLesionSameEntity: boolean;
  isWithinThePrimarilyAffected: boolean;
  isStagingPathologicalFracture: boolean;
  localPropagationType: LocalPropagationTypeEnum;
  differentialDiagnosis01: TumorDifferentialDiagnosisEnum;
  differentialDiagnosis02: SecondTumorDifferentialDiagnosisEnum;
  differentialDiagnosis03: SecondTumorDifferentialDiagnosisEnum;

  // Congenital
  isRoundedPosteriorGlenoidRim: boolean;
  isPosteriorLabrumHypertrophy: boolean;
  isLabrumHyperintensity: boolean;

  constructor() {
    super();

    // Common
    this.boneType = BoneTypeEnum.None;
    this.isSubordinated = false;
    this.referencePicture = new ReferencePictureUiModel();

    // Fracture
    this.fractureNotSpecifiedType = FractureNotSpecifiedTypeEnum.None;
    this.fractureHumerusClassificationType = FractureClassificationTypeEnum.None;
    this.fractureHumerusAoRatingType = FractureProximalerAoRatingTypeEnum.None;
    this.fractureHumerusAoEvaluationType = FractureProximalerAoEvaluationTypeEnum.None;
    this.fractureHumerusNeerRatingType = FractureProximalerNeerRatingTypeEnum.None;
    this.isFractureHumerusFragmentsHumeraHead = false;
    this.isFractureHumerusFragmentsMajusTubercle = false;
    this.isFractureHumerusFragmentsTuberculumMinus = false;
    this.isFractureHumerusFragmentsHumerumShaft = false;
    this.fractureHumerusNeerDetailsType = FractureProximalerNeerDetailsTypeEnum.None;
    this.fractureClaviculaEvaluationType = FractureClaviculaEvaluationTypeEnum.None;
    this.fractureClaviculaAoClassificationType = FractureClaviculaRatingTypeEnum.None;
    this.fractureScapulaEvaluationType = FractureScapulaEvaluationTypeEnum.None;
    this.fractureScapulaAoClassificationType = FractureScapulaRatingTypeEnum.None;
    this.aoClassificationAO12Type = AoClassificationAo12TypeEnum.None;
    this.aoClassificationFractureType = AoClassificationFractureTypeEnum.None;
    this.fractureSpecificType = FractureSpecificTypeEnum.None;

    // BoneMarrowEdema
    this.isProximalerHumerus = false;
    this.isHillSachsLesion = false;
    this.isReverseHillSachsLesion = false;
    this.isHumeralHead = false;
    this.isGreaterTubercle = false;
    this.isLesserTubercle = false;
    this.isLateralClavicle = false;
    this.isAcromialEnd = false;
    this.isClavicularBody = false;
    this.isExtremitasClaviculae = false;
    this.isScapula = false;
    this.isAkromion = false;
    this.isProcessusCoracoideus = false;
    this.isScapularSpine = false;
    this.isSupraspinatousFossa = false;
    this.isGlenoidFossa = false;
    this.isInfraspinatousFossa = false;
    this.distributionType = DistributionTypeEnum.None;
    this.isSoftTissueEdema = false;
    this.isThickenedAndEdematizedSynovialis = false;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;

    // PostTraumatic
    this.posttraumaticHillSachsType = PostTraumaticHillSachsTypeEnum.None;
    this.isImpressionPosteroSuperior = false;
    this.posteroSuperiorDegrees = null;
    this.isImpressionAnteroSuperior = false;
    this.anteroSuperiorDegrees = null;

    // HumerusNecrosis
    this.isHumerusSubchondral = false;
    this.humerusDiameter = null;
    this.isHumerusIntactCortex = false;

    // Degeneration
    this.isSeverityOfGlenohumeralOsteoarthritis = false;
    this.degenerationIntensityType = DegenerationIntensityTypeEnum.None;
    this.isDegenerationSclerosis = false;
    this.isDegenerationEdema = false;
    this.isDegenerationCyst = false;
    this.isDegenerationChondropathy = false;
    this.isDegenerationChondrocalcinosis = false;
    this.isDegenerationOsteophytes = false;
    this.isDegenerationArthropathy = false;
    this.degenerationOutbridgeType = DegenerationOutbridgeTypeEnum.None;
    this.degenerationExpansiveness = null;
    this.degenerationJointSurfacesType = DegenerationJointSurfacesTypeEnum.None;

    // Tumor
    this.descriptionType = DescriptionTypeEnum.None;
    this.firstLocalizationType = FirstLocalizationTypeEnum.None;
    this.axialMaxInMm = null;
    this.planeAxialInMm = null;
    this.craniocaudalInMm = null;
    this.isSeptal = false;

    this.isInfiltrationOfAdjacentBones = false;
    this.isPathologicalFracture = false;
    this.isPerilesionalSclerosis = false;
    this.isSurroundingInflammatoryReaction = false;
    this.isAnotherLesionSameEntity = false;
    this.isWithinThePrimarilyAffected = false;
    this.isStagingPathologicalFracture = false;
    this.localPropagationType = LocalPropagationTypeEnum.None;
    this.differentialDiagnosis01 = TumorDifferentialDiagnosisEnum.None;
    this.differentialDiagnosis02 = SecondTumorDifferentialDiagnosisEnum.None;
    this.differentialDiagnosis03 = SecondTumorDifferentialDiagnosisEnum.None;

    // Congenital
    this.isRoundedPosteriorGlenoidRim = false;
    this.isPosteriorLabrumHypertrophy = false;
    this.isLabrumHyperintensity = false;
  }
}
