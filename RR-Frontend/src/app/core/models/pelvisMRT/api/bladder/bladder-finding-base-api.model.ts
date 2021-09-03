import { FindingBase } from '@models/shared/finding/finding.base';
import { BladderFindingTypeEnum, BladderDiagnosisTypeEnum } from '@enums/pelvisMRT/bladder';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';

export class BladderFindingBaseApiModel extends FindingBase {
  findingType: BladderFindingTypeEnum;

  // Common
  contrastEnhancementType: CMEnhancementTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  t1wSignal: string;
  t2wSignal: string;

  // SoftTissueMass
  differentialDiagnosis: BladderDiagnosisTypeEnum;
  isCapsuleMembrane: boolean;
  isFluidLevel: boolean;
  isInflammatoryReaction: boolean;

  constructor() {
    super();

    this.findingType = BladderFindingTypeEnum.None;

    // Common
    this.contrastEnhancementType = CMEnhancementTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.t1wSignal = 'None';
    this.t2wSignal = 'None';

    // SoftTissueMass
    this.differentialDiagnosis = BladderDiagnosisTypeEnum.None;
    this.isCapsuleMembrane = false;
    this.isFluidLevel = false;
    this.isInflammatoryReaction = false;
  }
}
