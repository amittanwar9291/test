import { FindingBase } from '@models/shared/finding/finding.base';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';

import { BonesFindingTypeEnum } from '@enums/neckMRT/bones/';
import { MyelonPathologyTypeEnum } from '@enums/neckMRT/bones/myelon';
import {
  ContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  CorticalBoneTypeEnum,
  HomogeneityTypeEnum,
  MarginTypeEnum,
  ShapeTypeEnum,
  DifferentialDiagnosisTypeEnum,
  LocalSpreadTypeEnum
} from '@enums/neckMRT/bones/spatial-neoplasm';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export class BonesFindingBaseUiModel extends FindingBase {
  // common
  spineLocations: SpineLocation;
  isMaxilla: boolean;
  isMandible: boolean;
  isCondylarProcess: boolean;
  isOsTemporale: boolean;
  isOsSphenoidale: boolean;
  isOsEthmoidale: boolean;
  isMaxillaPalatineProcess: boolean;
  isMaxillaAlveolarProcess: boolean;
  isRamusMandibulae: boolean;
  isCoronoideusProcess: boolean;
  isMandibleAlveolarProcess: boolean;

  // spatial-neoplasm
  isSpine: boolean;
  isFacialSkeleton: boolean;
  isCartilage: boolean;
  isPosteriorCranialFossa: boolean;
  isOsIncisivum: boolean;
  isOsPalatinum: boolean;
  isVomer: boolean;
  isSuperiorNasalConcha: boolean;
  isMiddleNasalConcha: boolean;
  isInferiorNasalConcha: boolean;
  isOsHyoideum: boolean;
  isThyroidCartilage: boolean;
  isCricoidCartilage: boolean;
  isArytenoidCartilage: boolean;
  isOsOccipitale: boolean;
  isClivus: boolean;

  myelonPathologyType: MyelonPathologyTypeEnum;
  descriptionType: DescriptionTypeEnum;
  findingType: BonesFindingTypeEnum;
  mainSpatialNeoplasmDifferentialDiagnosisType1: DifferentialDiagnosisTypeEnum;
  marginType: MarginTypeEnum;
  mainHomogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  corticalBoneType: CorticalBoneTypeEnum;
  t1w: number;
  t2w: number;
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
  localSpreadType: LocalSpreadTypeEnum;
  isSoftTissueEdema: boolean;
  isBoneMarrowEdema: boolean;
  isOverOneLesion: boolean;
  isWithinThePrimaryAffectedBone: boolean;
  vertebroplastySpineLocations: SpineLocation;

  constructor() {
    super();

    // common
    this.spineLocations = new SpineLocation();
    this.isMaxilla = false;
    this.isMandible = false;
    this.isCondylarProcess = false;
    this.isOsTemporale = false;
    this.isOsSphenoidale = false;
    this.isOsEthmoidale = false;
    this.isMaxillaPalatineProcess = false;
    this.isMaxillaAlveolarProcess = false;
    this.isRamusMandibulae = false;
    this.isCoronoideusProcess = false;
    this.isMandibleAlveolarProcess = false;

    // spatial-neoplasm
    this.isSpine = false;
    this.isFacialSkeleton = false;
    this.isCartilage = false;
    this.isPosteriorCranialFossa = false;
    this.isOsIncisivum = false;
    this.isOsPalatinum = false;
    this.isVomer = false;
    this.isSuperiorNasalConcha = false;
    this.isMiddleNasalConcha = false;
    this.isInferiorNasalConcha = false;
    this.isOsHyoideum = false;
    this.isThyroidCartilage = false;
    this.isCricoidCartilage = false;
    this.isArytenoidCartilage = false;
    this.isOsOccipitale = false;
    this.isClivus = false;

    this.myelonPathologyType = MyelonPathologyTypeEnum.None;
    this.descriptionType = DescriptionTypeEnum.None;
    this.findingType = BonesFindingTypeEnum.None;
    this.mainSpatialNeoplasmDifferentialDiagnosisType1 = DifferentialDiagnosisTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.mainHomogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.corticalBoneType = CorticalBoneTypeEnum.None;
    this.t1w = 0;
    this.t2w = 0;
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
    this.localSpreadType = LocalSpreadTypeEnum.None;
    this.isSoftTissueEdema = false;
    this.isBoneMarrowEdema = false;
    this.isOverOneLesion = false;
    this.isWithinThePrimaryAffectedBone = false;
    this.vertebroplastySpineLocations = new SpineLocation();
  }
}
