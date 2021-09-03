import { DifferentialDiagnosisTypeEnum, IntensityTypeEnum } from '@enums/feetMRT/bones/';

import {
  ArthritisDifferentialDiagnosisTypeEnum,
  ErosionsTypeEnum,
  InflammatoryBoneMarrowEdemaTypeEnum
} from '@enums/feetMRT/bones/arthritis';

import { AssociatedFindingsTypeEnum, DistributionTypeEnum } from '@enums/feetMRT/bones/bone-marrow-edema';

import {
  DistalTibiaFractureTypeEnum,
  FractureClassificationTypeEnum,
  FractureFormSubTypeEnum,
  FractureTypeTypeEnum,
  MedialMalleolusTypeEnum
} from '@enums/feetMRT/bones/fracture';

import {
  DislocationClassificationDetailsTypeEnum,
  DislocationClassificationSubTypeEnum,
  DislocationClassificationTypeEnum,
  DislocationLocalizationTypeEnum,
  DislocationStageTypeEnum
} from '@enums/feetMRT/bones/dislocation';

import { ArticularSurfacesTypeEnum, OuterbridgeClassificationTypeEnum } from '@enums/feetMRT/bones/osteoarthrosis';

import {
  DetectionDissekatTypeEnum,
  EpiphysealJointsTypeEnum,
  OsteochondralLesionClassificationTypeEnum
} from '@enums/feetMRT/bones/osteochondral-lesion';

import { OsteomyelitisDifferentialDiagnosisTypeEnum, StageTypeEnum } from '@enums/feetMRT/bones/osteomyelitis';

import { HistologyTypeEnum, LocalPropagationTypeEnum } from '@enums/feetMRT/bones/space-requirement';

import { RadioulnarSynostosisTypeEnum, StandardVariantTypeEnum, SynarthrosisTypeEnum } from '@enums/feetMRT/bones/standard-variant';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { FootBigModel } from '../localizers/foot-big.model';
import { FootThreeSidesViewModel } from '../localizers/foot-three-sides-view.model';
import { BonesFindingBaseUiModel } from './bones-finding-base-ui.model';

export class BonesFindingUiModel extends BonesFindingBaseUiModel {
  // Common

  footThreeSidesLocalization: FootThreeSidesViewModel;
  threeDimensionalLocalization: FootBigModel;
  intensityType: IntensityTypeEnum;
  isBoneMarrowEdema: boolean;
  isChondropathy: boolean;
  isSubordinated: boolean;

  // NormalVariantOrAnomaly

  standardVariantType: StandardVariantTypeEnum;
  radioulnarSynostosisType: RadioulnarSynostosisTypeEnum;
  synarthrosisType: SynarthrosisTypeEnum;

  // Fracture

  fractureClassificationType: FractureClassificationTypeEnum;
  fractureTypeType: FractureTypeTypeEnum;
  fractureFormSubType: FractureFormSubTypeEnum;
  medialMalleolusType: MedialMalleolusTypeEnum;
  distalTibiaFractureType: DistalTibiaFractureTypeEnum;
  isHindfoot: boolean;
  isMidfoot: boolean;
  isForefoot: boolean;
  isAnterior: boolean;
  isPosteriorVolkmann: boolean;
  isLateral: boolean;
  isMedArticularSurfaceInclMedMalleolus: boolean;
  isMedial: boolean;
  isFrontalCoronal: boolean;
  isSagittalPlane: boolean;
  isnTillauxChaputTubercleFracture: boolean;
  isWagstaffeLeFortAvulsionFracture: boolean;
  isSyndesmosisUnstable: boolean;
  isRuptureOfTheDeltoidLigament: boolean;
  isFractureOfTheMedialMalleolus: boolean;
  isFibulaNeckFracture: boolean;
  isProximalTibiofibularJointDislocation: boolean;

  // BoneMarrowEdema

  distributionType: DistributionTypeEnum;
  associatedFindingsType: AssociatedFindingsTypeEnum;
  differentialDiagnosisType: DifferentialDiagnosisTypeEnum;

  // Dislocation

  dislocationLocalizationType: DislocationLocalizationTypeEnum;
  dislocationClassificationType: DislocationClassificationTypeEnum;
  dislocationClassificationSubType: DislocationClassificationSubTypeEnum;
  dislocationClassificationDetailsType: DislocationClassificationDetailsTypeEnum;
  dislocationStageType: DislocationStageTypeEnum;

  // OsteochondralLesion

  diameterLesionInMm: number;
  osteochondralLesionClassificationType: OsteochondralLesionClassificationTypeEnum;
  isAdjacentArticularEffusion: boolean;
  isDetectionFragment: boolean;
  detectionDissekatType: DetectionDissekatTypeEnum;
  isSubchondralCyst: boolean;
  isT2HyperintenseRim: boolean;
  isExpiredDefectCompletelyFilledWithLiquid: boolean;
  isAdjacentJointCasting: boolean;
  epiphysealJointsType: EpiphysealJointsTypeEnum;
  apophysitisMorbusSever: boolean;
  apophysitisMorbusIselin: boolean;
  thiemannDisease: boolean;
  kohlerDiseaseI: boolean;
  kohlerDiseaseII: boolean;

  // Osteoarthritis

  outerbridgeClassificationType: OuterbridgeClassificationTypeEnum;
  expansionLargestDiameterInMm: number;
  articularSurfacesType: ArticularSurfacesTypeEnum;
  isOsteophytes: boolean;
  isSubchondralCystsGeodes: boolean;
  isSubchondralEdema: boolean;
  isSubchondralSclerosis: boolean;
  isLocalBoneMarrowEdema: boolean;
  isSynovialCyst: boolean;
  isChondrocalcinosis: boolean;

  // Arthritis

  isArticularEffusion: boolean;
  isSynovitis: boolean;
  isHyperplasia: boolean;
  isT2wHyperintensity: boolean;
  isIncreasedContrastEnhancement: boolean;
  isPannus: boolean;
  isErosions: boolean;
  erosionsLocalizationType: ErosionsTypeEnum;
  isInflammatoryBoneMarrowEdema: boolean;
  inflammatoryBoneMarrowEdemaLocalizationType: InflammatoryBoneMarrowEdemaTypeEnum;
  isIntraosseousCysts: boolean;
  isPeriostitis: boolean;
  isProliferativeBoneChanges: boolean;
  isDestructions: boolean;
  isAnkylosis: boolean;
  arthritisDifferentialDiagnosisType: ArthritisDifferentialDiagnosisTypeEnum;

  // Osteomyelitis

  stageType: StageTypeEnum;
  isDestruction: boolean;
  isThinning: boolean;
  isIntraosseousAbscess: boolean;
  intrabonyAbscessSizeInMm: number;
  intraosseousAbscessSecondPlaneInMm: number;
  intraosseousAbscessThirdPlaneInMm: number;
  isPenumbraSign: boolean;
  isPeripheralContrastEnhancement: boolean;
  isIntraossalAbscessMoreThanOneLesion: boolean;
  isSequestrum: boolean;
  sequestrumSizeInMm: number;
  sequesterSecondPlaneInMm: number;
  sequesterThirdPlaneInMm: number;
  isSequesterNoContrastEnhancement: boolean;
  isSequestrumMoreThanOneLesion: boolean;
  isOsteolysis: boolean;
  isBoneApposition: boolean;
  isPeriostealThickening: boolean;
  isPeriostealRupture: boolean;
  isSubperiostealAbscess: boolean;
  subperiostealAbscessSizeInMm: number;
  isSoftTissueEdema: boolean;
  osteomyelitisDifferentialDiagnosisType: OsteomyelitisDifferentialDiagnosisTypeEnum;

  // MassOsteolysis

  descriptionType: DescriptionTypeEnum;
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;

  constructor() {
    super();
    // Common

    this.footThreeSidesLocalization = new FootThreeSidesViewModel();
    this.threeDimensionalLocalization = new FootBigModel();
    this.intensityType = IntensityTypeEnum.None;
    this.isBoneMarrowEdema = false;
    this.isChondropathy = false;
    this.isSubordinated = false;

    // NormalVariantOrAnomaly

    this.standardVariantType = StandardVariantTypeEnum.None;
    this.radioulnarSynostosisType = RadioulnarSynostosisTypeEnum.None;
    this.synarthrosisType = SynarthrosisTypeEnum.None;

    // Fracture

    this.fractureClassificationType = FractureClassificationTypeEnum.None;
    this.fractureTypeType = FractureTypeTypeEnum.None;
    this.fractureFormSubType = FractureFormSubTypeEnum.None;
    this.medialMalleolusType = MedialMalleolusTypeEnum.None;
    this.distalTibiaFractureType = DistalTibiaFractureTypeEnum.None;
    this.isHindfoot = false;
    this.isMidfoot = false;
    this.isForefoot = false;
    this.isAnterior = false;
    this.isPosteriorVolkmann = false;
    this.isLateral = false;
    this.isMedArticularSurfaceInclMedMalleolus = false;
    this.isMedial = false;
    this.isFrontalCoronal = false;
    this.isSagittalPlane = false;
    this.isnTillauxChaputTubercleFracture = false;
    this.isWagstaffeLeFortAvulsionFracture = false;
    this.isSyndesmosisUnstable = false;
    this.isRuptureOfTheDeltoidLigament = false;
    this.isFractureOfTheMedialMalleolus = false;
    this.isFibulaNeckFracture = false;
    this.isProximalTibiofibularJointDislocation = false;

    // BoneMarrowEdema

    this.distributionType = DistributionTypeEnum.None;
    this.associatedFindingsType = AssociatedFindingsTypeEnum.None;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;

    // Dislocation

    this.dislocationLocalizationType = DislocationLocalizationTypeEnum.None;
    this.dislocationClassificationType = DislocationClassificationTypeEnum.None;
    this.dislocationClassificationSubType = DislocationClassificationSubTypeEnum.None;
    this.dislocationClassificationDetailsType = DislocationClassificationDetailsTypeEnum.None;
    this.dislocationStageType = DislocationStageTypeEnum.None;

    // OsteochondralLesion

    this.diameterLesionInMm = null;
    this.osteochondralLesionClassificationType = OsteochondralLesionClassificationTypeEnum.None;
    this.isAdjacentArticularEffusion = false;
    this.isDetectionFragment = false;
    this.detectionDissekatType = DetectionDissekatTypeEnum.None;
    this.isSubchondralCyst = false;
    this.isT2HyperintenseRim = false;
    this.isExpiredDefectCompletelyFilledWithLiquid = false;
    this.isAdjacentJointCasting = false;
    this.epiphysealJointsType = EpiphysealJointsTypeEnum.None;
    this.apophysitisMorbusSever = false;
    this.apophysitisMorbusIselin = false;
    this.thiemannDisease = false;
    this.kohlerDiseaseI = false;
    this.kohlerDiseaseII = false;

    // Osteoarthritis

    this.outerbridgeClassificationType = OuterbridgeClassificationTypeEnum.None;
    this.expansionLargestDiameterInMm = null;
    this.articularSurfacesType = ArticularSurfacesTypeEnum.None;
    this.isOsteophytes = false;
    this.isSubchondralCystsGeodes = false;
    this.isSubchondralEdema = false;
    this.isSubchondralSclerosis = false;
    this.isLocalBoneMarrowEdema = false;
    this.isSynovialCyst = false;
    this.isChondrocalcinosis = false;

    // Arthritis

    this.isArticularEffusion = false;
    this.isSynovitis = false;
    this.isHyperplasia = false;
    this.isT2wHyperintensity = false;
    this.isIncreasedContrastEnhancement = false;
    this.isPannus = false;
    this.isErosions = false;
    this.erosionsLocalizationType = ErosionsTypeEnum.None;
    this.isInflammatoryBoneMarrowEdema = false;
    this.inflammatoryBoneMarrowEdemaLocalizationType = InflammatoryBoneMarrowEdemaTypeEnum.None;
    this.isIntraosseousCysts = false;
    this.isPeriostitis = false;
    this.isProliferativeBoneChanges = false;
    this.isDestructions = false;
    this.isAnkylosis = false;
    this.arthritisDifferentialDiagnosisType = ArthritisDifferentialDiagnosisTypeEnum.None;

    // Osteomyelitis

    this.stageType = StageTypeEnum.None;
    this.isDestruction = false;
    this.isThinning = false;
    this.isIntraosseousAbscess = false;
    this.intrabonyAbscessSizeInMm = null;
    this.intraosseousAbscessSecondPlaneInMm = null;
    this.intraosseousAbscessThirdPlaneInMm = null;
    this.isPenumbraSign = false;
    this.isPeripheralContrastEnhancement = false;
    this.isIntraossalAbscessMoreThanOneLesion = false;
    this.isSequestrum = false;
    this.sequestrumSizeInMm = null;
    this.sequesterSecondPlaneInMm = null;
    this.sequesterThirdPlaneInMm = null;
    this.isSequesterNoContrastEnhancement = false;
    this.isSequestrumMoreThanOneLesion = false;
    this.isOsteolysis = false;
    this.isBoneApposition = false;
    this.isPeriostealThickening = false;
    this.isPeriostealRupture = false;
    this.isSubperiostealAbscess = false;
    this.subperiostealAbscessSizeInMm = null;
    this.isSoftTissueEdema = false;
    this.osteomyelitisDifferentialDiagnosisType = OsteomyelitisDifferentialDiagnosisTypeEnum.None;

    // MassOsteolysis

    this.descriptionType = DescriptionTypeEnum.None;
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
  }
}
