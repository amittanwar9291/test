import { FindingBase } from '@models/shared/finding/finding.base';
import {
  CmEnhancementTypeEnum,
  DemarcationTypeEnum,
  DistributionPatternsTypeEnum,
  FocalTypeEnum,
  HingeTypeEnum,
  HomogeneityTypeEnum,
  SynoviaCmEnhancementTypeEnum,
  SynoviaShapeTypeEnum,
  SynoviaTypeEnum
} from '@enums/kneeMRT/soft-parts';
import { SoftPartsDiagnosisTypeEnum } from '@enums/kneeMRT/soft-parts/soft-parts-diagnosis-type.enum';

export class SoftPartsFindingPresetUiModel extends FindingBase {
  isArticularEffusion: boolean;
  t1w: number;
  t2w: number;
  differentialDiagnosis01: SoftPartsDiagnosisTypeEnum;
  differentialDiagnosis02: SoftPartsDiagnosisTypeEnum;
  isSecondary: boolean;
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
  differentialDiagnosis03: SoftPartsDiagnosisTypeEnum;

  constructor() {
    super();

    this.isArticularEffusion = false;
    this.t1w = 0;
    this.t2w = 0;
    this.differentialDiagnosis01 = SoftPartsDiagnosisTypeEnum.None;
    this.differentialDiagnosis02 = SoftPartsDiagnosisTypeEnum.None;
    this.isSecondary = false;
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
    this.differentialDiagnosis03 = SoftPartsDiagnosisTypeEnum.None;
  }
}
