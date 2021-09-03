import { FindingBase } from '@models/shared/finding/finding.base';
import { SacroiliacjJointDiagnosisTypesEnum } from '@enums/spineMRT/sacroiliac-joint/sacroiliacj-joint-diagnosis-types.enum';
import { JointSurfaceSubTypesEnum } from '@enums/spineMRT/sacroiliac-joint/joint-surface-sub-types.enum';
import { SclerosisTypesEnum } from '@enums/spineMRT/sacroiliac-joint/sclerosis-types.enum';
import { SacroiliacJointEntheitisTypesEnum } from '@enums/spineMRT/sacroiliac-joint/sacroiliac-joint-entheitis-types.enum';
import { SacroiliacJointScoreUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-score-ui.model';

export class SpineSacroiliacJointFindingPresetUiModel extends FindingBase {
  score1: SacroiliacJointScoreUiModel;
  score2: SacroiliacJointScoreUiModel;
  score3: SacroiliacJointScoreUiModel;
  score4: SacroiliacJointScoreUiModel;
  score5: SacroiliacJointScoreUiModel;
  score6: SacroiliacJointScoreUiModel;
  sparccScore: number;
  maximumExpansion: number;

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
  isSPARCCScore: boolean;
  isAbscess: boolean;
  isSoftTissue: boolean;

  constructor() {
    super();

    this.score1 = new SacroiliacJointScoreUiModel();
    this.score2 = new SacroiliacJointScoreUiModel();
    this.score3 = new SacroiliacJointScoreUiModel();
    this.score4 = new SacroiliacJointScoreUiModel();
    this.score5 = new SacroiliacJointScoreUiModel();
    this.score6 = new SacroiliacJointScoreUiModel();
    this.sparccScore = null;
    this.maximumExpansion = null;

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
    this.isSPARCCScore = false;
    this.isAbscess = false;
    this.isSoftTissue = false;
  }
}
