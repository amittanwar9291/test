import { FindingBase } from '@models/shared/finding/finding.base';

import { BonesFindingTypeEnum } from '@enums/neckMRT/bones/';
import { MyelonPathologyTypeEnum } from '@enums/neckMRT/bones/myelon';
import {
  ContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  CorticalBoneTypeEnum,
  HomogeneityTypeEnum,
  MarginTypeEnum,
  ShapeTypeEnum,
  DifferentialDiagnosisTypeEnum
} from '@enums/neckMRT/bones/spatial-neoplasm';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export class BonesFindingBaseApiModel extends FindingBase {
  myelonPathologyType: MyelonPathologyTypeEnum;
  descriptionType: DescriptionTypeEnum;
  findingType: BonesFindingTypeEnum;
  mainSpatialNeoplasmDifferentialDiagnosisType1: DifferentialDiagnosisTypeEnum;
  marginType: MarginTypeEnum;
  mainHomogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  corticalBoneType: CorticalBoneTypeEnum;
  t1w: string;
  t2w: string;
  isSeptatedChambered: boolean;
  isFluidLevel: boolean;
  isCalcification: boolean;
  isCentral: boolean;
  isDiffuseDistribution: boolean;
  isNidus: boolean;
  isT2wHyperintense: boolean;
  isFatSignal: boolean;
  contrastEnhancementQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  subHomogeneityType: HomogeneityTypeEnum;
  contrastEnhancementDistributionType: ContrastEnhancementDistributionTypeEnum;
  isPeriostealReaction: boolean;
  isSclerosisEdge: boolean;
  isExpansive: boolean;
  isOsteolytic: boolean;
  isOsteoblastic: boolean;
  isSclerotic: boolean;
  isInfiltrationSoftTissues: boolean;
  isInfiltrationOfAdjacentbone: boolean;
  isSoftTissueEdema: boolean;
  isBoneMarrowEdema: boolean;
  isOverOneLesion: boolean;

  constructor() {
    super();
    this.myelonPathologyType = MyelonPathologyTypeEnum.None;
    this.descriptionType = DescriptionTypeEnum.None;
    this.findingType = BonesFindingTypeEnum.None;
    this.mainSpatialNeoplasmDifferentialDiagnosisType1 = DifferentialDiagnosisTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.mainHomogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.corticalBoneType = CorticalBoneTypeEnum.None;
    this.t1w = 'None';
    this.t2w = 'None';
    this.isSeptatedChambered = false;
    this.isFluidLevel = false;
    this.isCalcification = false;
    this.isCentral = false;
    this.isDiffuseDistribution = false;
    this.isNidus = false;
    this.isT2wHyperintense = false;
    this.isFatSignal = false;
    this.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.subHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.isPeriostealReaction = false;
    this.isSclerosisEdge = false;
    this.isExpansive = false;
    this.isOsteolytic = false;
    this.isOsteoblastic = false;
    this.isSclerotic = false;
    this.isInfiltrationSoftTissues = false;
    this.isInfiltrationOfAdjacentbone = false;
    this.isSoftTissueEdema = false;
    this.isBoneMarrowEdema = false;
    this.isOverOneLesion = false;
  }
}
