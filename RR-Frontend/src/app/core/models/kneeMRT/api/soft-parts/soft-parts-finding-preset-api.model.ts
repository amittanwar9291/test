import { FindingBase } from '@models/shared/finding/finding.base';
import {
  CmEnhancementTypeEnum,
  DemarcationTypeEnum,
  MainSoftPartsFindingTypeEnum,
  SynoviaCmEnhancementTypeEnum,
  SynoviaShapeTypeEnum
} from '@enums/kneeMRT/soft-parts';
import { SoftPartsDiagnosisTypeEnum } from '@enums/kneeMRT/soft-parts/soft-parts-diagnosis-type.enum';
import { HomogeneityTypeEnum } from '@enums/kneeMRT/bones';

export class SoftPartsFindingPresetApiModel extends FindingBase {
  // common
  findingType: MainSoftPartsFindingTypeEnum;

  isArticularEffusion: boolean;
  t1w: string;
  t2w: string;
  differentialDiagnosis: SoftPartsDiagnosisTypeEnum;

  // SynoviaFocal
  isBloomingArtifact: boolean;
  synoviaCMEnhancementType: SynoviaCmEnhancementTypeEnum;
  synoviaShapeType: SynoviaShapeTypeEnum;
  isSynovialNodulusGreaterThan1Lesions: boolean;
  isNecrosis: boolean;
  isFreeJointBody: boolean;
  isFreeJointBodyGreaterThan1Lesions: boolean;
  isHaemarthros: boolean;
  isBonyErosions: boolean;

  // SoftTissueTumor - tab 1
  demarcationType: DemarcationTypeEnum;
  tissueTumorHomogeneityType: HomogeneityTypeEnum;
  isGrease: boolean;
  isCysts: boolean;
  isCalcification: boolean;
  isCapsule: boolean;
  isSignalVoids: boolean;

  // SoftTissueTumor - tab 2
  isSubcutaneous: boolean;
  isPressureCorrosionerosionBone: boolean;
  tissueTumorCMEnhancementType: CmEnhancementTypeEnum;
  quantitativeType: HomogeneityTypeEnum;
  isPeripheral: boolean;

  constructor() {
    super();

    // common
    this.findingType = MainSoftPartsFindingTypeEnum.None;
    this.isArticularEffusion = false;
    this.t1w = 'None';
    this.t2w = 'None';
    this.differentialDiagnosis = SoftPartsDiagnosisTypeEnum.None;

    // SynoviaFocal
    this.isBloomingArtifact = false;
    this.synoviaCMEnhancementType = SynoviaCmEnhancementTypeEnum.None;
    this.synoviaShapeType = SynoviaShapeTypeEnum.None;
    this.isSynovialNodulusGreaterThan1Lesions = false;
    this.isNecrosis = false;
    this.isFreeJointBody = false;
    this.isFreeJointBodyGreaterThan1Lesions = false;
    this.isHaemarthros = false;
    this.isBonyErosions = false;

    // SoftTissueTumor - tab 1
    this.demarcationType = DemarcationTypeEnum.None;
    this.tissueTumorHomogeneityType = HomogeneityTypeEnum.None;
    this.isGrease = false;
    this.isCysts = false;
    this.isCalcification = false;
    this.isCapsule = false;
    this.isSignalVoids = false;

    // SoftTissueTumor - tab 2
    this.isSubcutaneous = false;
    this.isPressureCorrosionerosionBone = false;
    this.tissueTumorCMEnhancementType = CmEnhancementTypeEnum.None;
    this.quantitativeType = HomogeneityTypeEnum.None;
    this.isPeripheral = false;
  }
}
