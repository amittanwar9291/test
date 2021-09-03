import { FindingBase } from '@models/shared/finding/finding.base';
import { BonesFindingTypeEnum } from '@enums/spineCT/bones/bones-finding-type.enum';
import { BonesDiagnosisTypeEnum } from '@enums/spineCT/bones/bones-diagnosis-type.enum';
import { MarginTypeEnum } from '@enums/spineCT/bones/mass-spine/margin-type.enum';
import { CortexTypeEnum } from '@enums/spineCT/bones/mass-spine/cortex-type.enum';
import { FormTypeEnum } from '@enums/spineCT/bones/mass-spine/form-type.enum';

export class BonesFindingBaseApiModel extends FindingBase {
  // common

  findingType: BonesFindingTypeEnum;

  // Characterization I

  bonesDiagnosis1: BonesDiagnosisTypeEnum;
  marginType: MarginTypeEnum;
  cortexType: CortexTypeEnum;
  formType: FormTypeEnum;

  // Characterization II
  isSepta: boolean;
  isLiquidLevel: boolean;
  isPolkaDotSign: boolean;
  isSclerosis: boolean;
  isInfiltrationOfAdjacentSoftTissues: boolean;
  isOsteolytic: boolean;
  isMarginalSclerosis: boolean;
  isPeriostealReaction: boolean;
  isSunburst: boolean;
  isExtensiveVertebralHemangioma: boolean;

  constructor() {
    super();

    // common

    this.findingType = BonesFindingTypeEnum.None;

    // Characterization I
    this.bonesDiagnosis1 = BonesDiagnosisTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.cortexType = CortexTypeEnum.None;
    this.formType = FormTypeEnum.None;

    // Characterization II

    this.isSepta = false;
    this.isLiquidLevel = false;
    this.isPolkaDotSign = false;
    this.isSclerosis = false;
    this.isInfiltrationOfAdjacentSoftTissues = false;
    this.isOsteolytic = false;
    this.isMarginalSclerosis = false;
    this.isPeriostealReaction = false;
    this.isSunburst = false;
    this.isExtensiveVertebralHemangioma = false;
  }
}
