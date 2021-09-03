import { FindingBase } from '@models/shared/finding/finding.base';
import { SacroiliacjJointDiagnosisTypesEnum } from '@enums/spineMRT/sacroiliac-joint/sacroiliacj-joint-diagnosis-types.enum';
import { JointSurfaceSubTypesEnum } from '@enums/spineMRT/sacroiliac-joint/joint-surface-sub-types.enum';
import { SclerosisTypesEnum } from '@enums/spineMRT/sacroiliac-joint/sclerosis-types.enum';
import { SacroiliacJointEntheitisTypesEnum } from '@enums/spineMRT/sacroiliac-joint/sacroiliac-joint-entheitis-types.enum';

export class SpineSacroiliacJointFindingPresetApiModel extends FindingBase {
  iKnowDifferentialDiagnosis01: SacroiliacjJointDiagnosisTypesEnum;
  isBoneBridges: boolean;
  isAnkylosis: boolean;
  isOsteophytes: boolean;
  jointSurfaceSubType: JointSurfaceSubTypesEnum;
  isErosions: boolean;
  isSurfaceNarrowing: boolean;
  isVacuumPhenomenon: boolean;
  isSubchondralCysts: boolean;
  isSubchondralSclerosis: boolean;
  sclerosisType: SclerosisTypesEnum;
  isFatDeposition: boolean;
  isEnthesitis: boolean;
  entheitisType: SacroiliacJointEntheitisTypesEnum;
  isSynovitis: boolean;
  isCmEnhancement: boolean;
  isJointSpaceWidening: boolean;
  isJointEffusion: boolean;
  isBoneMarrow: boolean;
  isAbscess: boolean;
  isSoftTissue: boolean;

  constructor() {
    super();
    this.iKnowDifferentialDiagnosis01 = SacroiliacjJointDiagnosisTypesEnum.None;
    this.isBoneBridges = false;
    this.isAnkylosis = false;
    this.isOsteophytes = false;
    this.jointSurfaceSubType = JointSurfaceSubTypesEnum.None;
    this.isErosions = false;
    this.isSurfaceNarrowing = false;
    this.isVacuumPhenomenon = false;
    this.isSubchondralCysts = false;
    this.isSubchondralSclerosis = false;
    this.sclerosisType = SclerosisTypesEnum.None;
    this.isFatDeposition = false;
    this.isEnthesitis = false;
    this.entheitisType = SacroiliacJointEntheitisTypesEnum.None;
    this.isSynovitis = false;
    this.isCmEnhancement = false;
    this.isJointSpaceWidening = false;
    this.isJointEffusion = false;
    this.isBoneMarrow = false;
    this.isAbscess = false;
    this.isSoftTissue = false;
  }
}
