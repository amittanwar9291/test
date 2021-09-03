import { ReportModelBase } from '@models/report-model-base';
import { ProcedureTypeEnum } from '@enums/pelvisMRT/summary/procedure-type.enum';
import { BiopsyRecommendedTypeEnum } from '@enums/pelvisMRT/summary/biopsy-recommended-type.enum';
import { DynamicsOfFindingTypeEnum } from '@enums/pelvisMRT/summary/dynamics-of-finding-type.enum';
import { TumorRegressionGradeTypeEnum } from '@enums/pelvisMRT/summary/tumor-regression-grade-type.enum';
import { TnStagingTypeEnum } from '@enums/pelvisMRT/summary/tn-staging-type.enum';
import { TStageTypeEnum } from '@enums/pelvisMRT/summary/t-stage-type.enum';
import { NStageTypeEnum } from '@enums/pelvisMRT/summary/n-stage-type.enum';
import { MStageTypeEnum } from '@enums/pelvisMRT/summary/m-stage-type.enum';
import { MriFollowUpTypeEnum } from '@enums/pelvisMRT/summary/mri-follow-up-type.enum';

export class SummaryUiModel extends ReportModelBase {
  procedureType: ProcedureTypeEnum;
  isCtThorax: boolean;
  isCtAbdomen: boolean;
  isMriAbdomen: boolean;
  isPetCt: boolean;
  isSpectCt: boolean;
  isSkeletalScintigraphy: boolean;
  mriFollowUpType: MriFollowUpTypeEnum;
  isBiopsyRecommended: boolean;
  isEvaluationInInterdisciplinaryTumorBoard: boolean;
  piradsScoreTotal: number;
  biopsyRecommendedType: BiopsyRecommendedTypeEnum;
  dynamicsOfFinding: DynamicsOfFindingTypeEnum;
  tumorRegressionGradeTRG: TumorRegressionGradeTypeEnum;
  tnStagingType: TnStagingTypeEnum;
  prostateCarcinomaTStageType: TStageTypeEnum;
  prostateCarcinomaNStageType: NStageTypeEnum;
  prostateCarcinomaMStageType: MStageTypeEnum;
  bladderCarcinomaTStageType: TStageTypeEnum;
  bladderCarcinomaNStageType: NStageTypeEnum;
  rectalCancerTStageType: TStageTypeEnum;
  rectalCancerNStageType: NStageTypeEnum;
  sigmoidColonTStageType: TStageTypeEnum;
  sigmoidColonNStageType: NStageTypeEnum;

  constructor() {
    super();

    this.procedureType = ProcedureTypeEnum.None;
    this.isCtThorax = false;
    this.isCtAbdomen = false;
    this.isMriAbdomen = false;
    this.isPetCt = false;
    this.isSpectCt = false;
    this.isSkeletalScintigraphy = false;
    this.mriFollowUpType = MriFollowUpTypeEnum.None;
    this.isBiopsyRecommended = false;
    this.isEvaluationInInterdisciplinaryTumorBoard = false;
    this.piradsScoreTotal = null;
    this.biopsyRecommendedType = BiopsyRecommendedTypeEnum.None;
    this.dynamicsOfFinding = DynamicsOfFindingTypeEnum.None;
    this.tumorRegressionGradeTRG = TumorRegressionGradeTypeEnum.None;
    this.tnStagingType = TnStagingTypeEnum.None;
    this.prostateCarcinomaTStageType = TStageTypeEnum.None;
    this.prostateCarcinomaNStageType = NStageTypeEnum.None;
    this.prostateCarcinomaMStageType = MStageTypeEnum.None;
    this.bladderCarcinomaTStageType = TStageTypeEnum.None;
    this.bladderCarcinomaNStageType = NStageTypeEnum.None;
    this.rectalCancerTStageType = TStageTypeEnum.None;
    this.rectalCancerNStageType = NStageTypeEnum.None;
    this.sigmoidColonTStageType = TStageTypeEnum.None;
    this.sigmoidColonNStageType = NStageTypeEnum.None;
  }
}
