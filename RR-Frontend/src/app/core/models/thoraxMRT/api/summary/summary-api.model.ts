import { BiopsyRecommendedTypeEnum } from '@enums/thoraxMRT/summary/biopsy-recommended-type.enum';
import { DynamicFindingsTypeEnum } from '@enums/thoraxMRT/summary/dynamic-findings-type.enum';
import { MriFollowUpTypeEnum } from '@enums/thoraxMRT/summary/mri-follow-up-type.enum';
import { NStageTypeEnum } from '@enums/thoraxMRT/summary/NStage-type.enum';
import { TNStagingTypeEnum } from '@enums/thoraxMRT/summary/TNStaging-type.enum';
import { TStageTypeEnum } from '@enums/thoraxMRT/summary/TStage-type.enum';
import { ReportModelBase } from '@models/report-model-base';

export class SummaryApiModel extends ReportModelBase {
  isMRIFollowUp: boolean;
  mriFollowUpType: MriFollowUpTypeEnum;
  isBiopsyRecommended: boolean;
  biopsyRecommendedType: BiopsyRecommendedTypeEnum;
  isEvaluationInInterdisciplinaryBoard: boolean;
  isTumorBoard: boolean;
  isInterstitialLungDisease: boolean;
  isFurtherDiagnostics: boolean;
  isCTThorax: boolean;
  isCTAbdomen: boolean;
  isCTNeck: boolean;
  isMammographyAndBreastUltrasound: boolean;
  isMRISpine: boolean;
  isMRIAbdomen: boolean;
  isMRINeck: boolean;
  isCardiacDiagnostics: boolean;
  isCTAngiography: boolean;
  isCTPA: boolean;
  isPETCT: boolean;
  isSPECT: boolean;
  isBoneScan: boolean;
  dynamicFindingsType: DynamicFindingsTypeEnum;
  tnStagingType: TNStagingTypeEnum;
  tStageType: TStageTypeEnum;
  nStageType: NStageTypeEnum;
  isQuantitativeEvaluationCysticFibrosis: boolean;
  scorePreliminaryExaminationPoints: number;
  cysticFibrosisDynamicFindingsType: DynamicFindingsTypeEnum;

  constructor() {
    super();
    this.isMRIFollowUp = false;
    this.mriFollowUpType = MriFollowUpTypeEnum.None;
    this.isBiopsyRecommended = false;
    this.biopsyRecommendedType = BiopsyRecommendedTypeEnum.None;
    this.isEvaluationInInterdisciplinaryBoard = false;
    this.isFurtherDiagnostics = false;
    this.isTumorBoard = false;
    this.isInterstitialLungDisease = false;
    this.isCTThorax = false;
    this.isCTAbdomen = false;
    this.isCTNeck = false;
    this.isMammographyAndBreastUltrasound = false;
    this.isMRISpine = false;
    this.isMRIAbdomen = false;
    this.isMRINeck = false;
    this.isCardiacDiagnostics = false;
    this.isCTAngiography = false;
    this.isCTPA = false;
    this.isPETCT = false;
    this.isSPECT = false;
    this.isBoneScan = false;
    this.dynamicFindingsType = DynamicFindingsTypeEnum.None;
    this.tnStagingType = TNStagingTypeEnum.None;
    this.tStageType = TStageTypeEnum.None;
    this.nStageType = NStageTypeEnum.None;
    this.isQuantitativeEvaluationCysticFibrosis = false;
    this.scorePreliminaryExaminationPoints = null;
    this.cysticFibrosisDynamicFindingsType = DynamicFindingsTypeEnum.None;
  }
}
