import { FindingBase } from '@models/shared/finding/finding.base';
import {
  HistologyTypeEnum,
  MarginTypeEnum,
  DifferentialDiagnoseTypeEnum,
  CortexTypeEnum,
  CmEnhancementTypeEnum,
  QuantitativeTypeEnum,
  LocalExpansionTypeEnum,
  BonesFindingTypeEnum
} from '@enums/handMRT/bones/';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';

export class BonesFindingBaseUiModel extends FindingBase {
  findingType: BonesFindingTypeEnum;
  isBoneMarrowEdema: boolean;
  isSoftTissueEdema: boolean;

  // Tab 1
  tumorDifferentialDiagnosisType: DifferentialDiagnoseTypeEnum;
  isEpiphyseal: boolean;
  isMetaphyseal: boolean;
  isHistologyKnown: boolean;
  knownHistologyMalignancyType: HistologyTypeEnum;
  isDiaphyseal: boolean;
  referencePicture: ReferencePictureUiModel;

  // Tab 2
  marginType: MarginTypeEnum;
  homogenityType: HomogeneityTypeEnum;
  cortexType: CortexTypeEnum;
  signalT1w: number;
  signalT2w: number;
  contrastEnhancementType: QuantitativeTypeEnum;
  contrastHomogenityType: HomogeneityTypeEnum;
  contrastDistributionType: CmEnhancementTypeEnum;
  isRound: boolean;
  isLobulated: boolean;
  isBroadBased: boolean;
  isPedunculated: boolean;
  isProjectingAway: boolean;
  isGeographic: boolean;

  // Tab 3
  isSeptated: boolean;
  isFluidLevel: boolean;
  isCalcification: boolean;
  isCentral: boolean;
  isDiffuse: boolean;
  isNidus: boolean;
  isT2wHyperintense: boolean;
  isOsteoidMatrix: boolean;
  isFatSignal: boolean;
  isSunBurst: boolean;
  isCodmanSpur: boolean;
  isCartilageCap: boolean;
  isCapT2wHyperintense: boolean;
  isScleroticMargin: boolean;
  isMarginWithLowSignal: boolean;
  isExpansile: boolean;
  isOsteolytic: boolean;
  isOsteoblastic: boolean;
  isSclerotic: boolean;
  isSoftTissueInfiltration: boolean;
  maxCartilageThicness: number;
  isAdjacentBoneInfiltration: boolean;
  isPathologicalFracture: boolean;
  isPathologicalFractureSuspected: boolean;
  isPerifocalSclerosis: boolean;
  isSurroundingInflammatoryReaction: boolean;
  localExpansionType: LocalExpansionTypeEnum;

  // Tab 4
  tumorDifferentialDiagnosis1Type: DifferentialDiagnoseTypeEnum;
  isDifferentialDiagnosisSuspected: boolean;
  tumorDifferentialDiagnosis2Type: DifferentialDiagnoseTypeEnum;
  tumorDifferentialDiagnosis3Type: DifferentialDiagnoseTypeEnum;
  isLesionSameEntity: boolean;
  isPrimarilyInvolvedBone: boolean;

  constructor() {
    super();
    this.findingType = BonesFindingTypeEnum.None;
    this.isBoneMarrowEdema = false;
    this.isSoftTissueEdema = false;

    // Tab 1
    this.tumorDifferentialDiagnosisType = DifferentialDiagnoseTypeEnum.None;
    this.isEpiphyseal = false;
    this.isMetaphyseal = false;
    this.isHistologyKnown = false;
    this.knownHistologyMalignancyType = HistologyTypeEnum.None;
    this.isDiaphyseal = false;
    this.referencePicture = new ReferencePictureUiModel();

    // tab2
    this.marginType = MarginTypeEnum.None;
    this.homogenityType = HomogeneityTypeEnum.None;
    this.cortexType = CortexTypeEnum.None;
    this.signalT1w = 0;
    this.signalT2w = 0;
    this.contrastEnhancementType = QuantitativeTypeEnum.None;
    this.contrastHomogenityType = HomogeneityTypeEnum.None;
    this.contrastDistributionType = CmEnhancementTypeEnum.None;
    this.isRound = false;
    this.isLobulated = false;
    this.isBroadBased = false;
    this.isPedunculated = false;
    this.isProjectingAway = false;
    this.isGeographic = false;

    // Tab 3
    this.isSeptated = false;
    this.isFluidLevel = false;
    this.isCalcification = false;
    this.isCentral = false;
    this.isDiffuse = false;
    this.isNidus = false;
    this.isT2wHyperintense = false;
    this.isOsteoidMatrix = false;
    this.isFatSignal = false;
    this.isSunBurst = false;
    this.isCodmanSpur = false;
    this.isCartilageCap = false;
    this.isCapT2wHyperintense = false;
    this.isScleroticMargin = false;
    this.isMarginWithLowSignal = false;
    this.isExpansile = false;
    this.isOsteolytic = false;
    this.isOsteoblastic = false;
    this.isSclerotic = false;
    this.isSoftTissueInfiltration = false;
    this.maxCartilageThicness = null;
    this.isAdjacentBoneInfiltration = false;
    this.isPathologicalFracture = false;
    this.isPathologicalFractureSuspected = false;
    this.isPerifocalSclerosis = false;
    this.isSurroundingInflammatoryReaction = false;
    this.localExpansionType = LocalExpansionTypeEnum.None;

    // Tab 4
    this.tumorDifferentialDiagnosis1Type = DifferentialDiagnoseTypeEnum.None;
    this.isDifferentialDiagnosisSuspected = false;
    this.tumorDifferentialDiagnosis2Type = DifferentialDiagnoseTypeEnum.None;
    this.tumorDifferentialDiagnosis3Type = DifferentialDiagnoseTypeEnum.None;
    this.isLesionSameEntity = false;
    this.isPrimarilyInvolvedBone = false;
  }
}
