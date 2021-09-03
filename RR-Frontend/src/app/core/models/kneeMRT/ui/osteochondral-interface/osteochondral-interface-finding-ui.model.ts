import { KneeOsteo } from '../knee/knee-osteo.model';

import { FindingBase } from '@models/shared/finding/finding.base';

import {
  FindingTypeEnum,
  JointSurfaceTypeEnum,
  UnipolarJointSurfaceTypeEnum,
  ChondralLesionTypeEnum,
  AssociatedFindingTypeEnum,
  StageTypeEnum,
  ClassificationTypeEnum,
  DetectionDissekatTypeEnum,
  EpiphysealJointTypeEnum,
  DetectionJointMouseLocalizationTypeEnum,
  FormOfArthrosisTypeEnum
} from '@enums/kneeMRT/osteochondral-interface';
import { OuterbridgeClassicifationTypeEnum } from '@enums/kneeMRT/outerbridge-classicifation-type.enum';

export class OsteochondralInterfaceFindingUiModel extends FindingBase {
  // Common
  findingType: FindingTypeEnum;
  location: KneeOsteo;

  // Osteoarthrosis
  isOsteophytes: boolean;
  isChondropathy: boolean;
  outerbridgeClassificationType: OuterbridgeClassicifationTypeEnum;
  isExpansiveness: boolean;
  expansivenessMaxDiameterInMm: number;
  jointSurfaceType: JointSurfaceTypeEnum;
  unipolarJointSurfaceType: UnipolarJointSurfaceTypeEnum;
  isChondrocalcinosis: boolean;
  isSubchondralCysts: boolean;
  isSubchondralEdema: boolean;
  isSubchondralSclerosis: boolean;
  isSynovialCyst: boolean;
  isBoneMarrowEdema: boolean;
  formOfArthrosisType: FormOfArthrosisTypeEnum;

  // TraumaChondralLesion
  chondralLesionType: ChondralLesionTypeEnum;

  // TraumaSubchondralFracture
  isHypointenseLineParallelToCortex: boolean;
  isNoContourIrregularity: boolean;
  isNoArticularSurfaceInvolvement: boolean;

  // TraumaSubchondralInsufficiencyFracture
  isHypointenseLineIrregular: boolean;
  isHypointenseAreaBetweenCortexAndLine: boolean;
  isArticularSurfaceImpression: boolean;
  isCorticalisImpression: boolean;
  isDetectionOfFluidInTheSubchondralSpace: boolean;
  isOsteochondralFragment: boolean;
  subchondralTraumaMaxDiameterInMm: number;
  isBoneMarrowEdemaExtended: boolean;
  isAssociatedMeniscusLesion: boolean;
  isLocationCentralInMainLoadZone: boolean;

  // TraumaOsteochondralFracture
  isHypointenseLineInterruptionCorticalis: boolean;
  isCurvedLine: boolean;
  isOsteochondralCorticalImpression: boolean;
  isArticularSurfaceInvolvement: boolean;
  isFragmentationArticularSurface: boolean;
  isOsteochondraFragment: boolean;
  osteochondralTraumaMaxDiameterInMm: number;
  stageType: StageTypeEnum;
  isDetectionLooseBody: boolean;
  detectionJointMouseLocalizationType: DetectionJointMouseLocalizationTypeEnum;
  associatedFindingType: AssociatedFindingTypeEnum;

  // OsteochondrosisDissecans
  classificationType: ClassificationTypeEnum;
  isBoneMarrowOedema: boolean;
  isDetectionOsteochondralFragment: boolean;
  detectionDissekatType: DetectionDissekatTypeEnum;
  isIntraosseousCysts: boolean;
  isFluidEquivalentHem: boolean;
  isIsointensToSynovia: boolean;
  epiphysealJointType: EpiphysealJointTypeEnum;
  lesionDiameter: number;

  // AvascularNecrosis
  isLocalizationIntraosseous: boolean;
  isUninterruptedMarginalSclerosis: boolean;
  isWavyAppearance: boolean;
  isDoubleLineSign: boolean;
  diameterInfarction: number;
  isSurroundingBoneMarrowEdema: boolean;
  isBurglaryOfTheJointSurface: boolean;
  burglaryOfTheJointSurfaceDiameterInMm: number;
  isSubchondralFatSignalIntensityLoss: boolean;

  constructor() {
    super();

    // Common
    this.findingType = FindingTypeEnum.None;
    this.location = new KneeOsteo();

    // Osteoarthrosis
    this.isOsteophytes = false;
    this.isChondropathy = false;
    this.outerbridgeClassificationType = OuterbridgeClassicifationTypeEnum.None;
    this.isExpansiveness = false;
    this.expansivenessMaxDiameterInMm = null;
    this.jointSurfaceType = JointSurfaceTypeEnum.None;
    this.unipolarJointSurfaceType = UnipolarJointSurfaceTypeEnum.None;
    this.isChondrocalcinosis = false;
    this.isSubchondralCysts = false;
    this.isSubchondralEdema = false;
    this.isSubchondralSclerosis = false;
    this.isSynovialCyst = false;
    this.isBoneMarrowEdema = false;
    this.formOfArthrosisType = FormOfArthrosisTypeEnum.None;

    // TraumaChondralLesion
    this.chondralLesionType = ChondralLesionTypeEnum.None;

    // TraumaSubchondralFracture
    this.isHypointenseLineParallelToCortex = false;
    this.isNoContourIrregularity = false;
    this.isNoArticularSurfaceInvolvement = false;

    // TraumaSubchondralInsufficiencyFracture
    this.isHypointenseLineIrregular = false;
    this.isHypointenseAreaBetweenCortexAndLine = false;
    this.isArticularSurfaceImpression = false;
    this.isCorticalisImpression = false;
    this.isDetectionOfFluidInTheSubchondralSpace = false;
    this.isOsteochondralFragment = false;
    this.subchondralTraumaMaxDiameterInMm = null;
    this.isBoneMarrowEdemaExtended = false;
    this.isAssociatedMeniscusLesion = false;
    this.isLocationCentralInMainLoadZone = false;

    // TraumaOsteochondralFracture
    this.isHypointenseLineInterruptionCorticalis = false;
    this.isCurvedLine = false;
    this.isOsteochondralCorticalImpression = false;
    this.isArticularSurfaceInvolvement = false;
    this.isFragmentationArticularSurface = false;
    this.isOsteochondraFragment = false;
    this.osteochondralTraumaMaxDiameterInMm = null;
    this.stageType = StageTypeEnum.None;
    this.isDetectionLooseBody = false;
    this.detectionJointMouseLocalizationType = DetectionJointMouseLocalizationTypeEnum.None;
    this.associatedFindingType = AssociatedFindingTypeEnum.None;

    // OsteochondrosisDissecans
    this.classificationType = ClassificationTypeEnum.None;
    this.isBoneMarrowOedema = false;
    this.isDetectionOsteochondralFragment = false;
    this.detectionDissekatType = DetectionDissekatTypeEnum.None;
    this.isIntraosseousCysts = false;
    this.isFluidEquivalentHem = false;
    this.isIsointensToSynovia = false;
    this.epiphysealJointType = EpiphysealJointTypeEnum.None;
    this.lesionDiameter = null;

    // AvascularNecrosis
    this.isLocalizationIntraosseous = true;
    this.isUninterruptedMarginalSclerosis = false;
    this.isWavyAppearance = false;
    this.isDoubleLineSign = false;
    this.diameterInfarction = null;
    this.isSurroundingBoneMarrowEdema = false;
    this.isBurglaryOfTheJointSurface = false;
    this.burglaryOfTheJointSurfaceDiameterInMm = null;
    this.isSubchondralFatSignalIntensityLoss = false;
  }
}
