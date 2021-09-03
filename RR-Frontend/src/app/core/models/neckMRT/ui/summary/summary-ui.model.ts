import { ReportModelBase } from '@models/report-model-base';

import { BiopsyTypeEnum, DynamicsOfFindingsTypeEnum, MRIFollowUpTypeEnum } from '@enums/neckMRT/summary/';

import { TNMClassificationUiModel } from '@models/neckMRT/ui/summary/tnmclassification-ui.model';

export class SummaryUiModel extends ReportModelBase {
  isContrastEnhancedMriNeck: boolean;
  isBrainMri: boolean;
  isOrbitaMri: boolean;
  isTemporomandibularJointsMri: boolean;
  isTofMrAngiography: boolean;
  isMrAngiographyIntracranial: boolean;
  isMrAngiographyExtracranial: boolean;
  isMriCervicalSpine: boolean;
  isCct: boolean;
  isCtAngiographyIntracranial: boolean;
  isCtAngiographyExtracranial: boolean;
  isCtPetrousBone: boolean;
  isParanasalSinusCt: boolean;
  isCtNeck: boolean;
  isDentalCtDvt: boolean;
  isCtThorax: boolean;
  isPetCt: boolean;
  isSpectCt: boolean;
  isBoneScintigraphy: boolean;
  mriFollowUpType: MRIFollowUpTypeEnum;
  isBiopsy: boolean;
  biopsyType: BiopsyTypeEnum;
  isEvaluationInInterdisciplinaryTumorBoard: boolean;
  dynamicsOfFindingsType: DynamicsOfFindingsTypeEnum;
  tnmClassifications: TNMClassificationUiModel[];

  constructor() {
    super();
    this.isContrastEnhancedMriNeck = false;
    this.isBrainMri = false;
    this.isOrbitaMri = false;
    this.isTemporomandibularJointsMri = false;
    this.isTofMrAngiography = false;
    this.isMrAngiographyIntracranial = false;
    this.isMrAngiographyExtracranial = false;
    this.isMriCervicalSpine = false;
    this.isCct = false;
    this.isCtAngiographyIntracranial = false;
    this.isCtAngiographyExtracranial = false;
    this.isCtPetrousBone = false;
    this.isParanasalSinusCt = false;
    this.isCtNeck = false;
    this.isDentalCtDvt = false;
    this.isCtThorax = false;
    this.isPetCt = false;
    this.isSpectCt = false;
    this.isBoneScintigraphy = false;
    this.mriFollowUpType = MRIFollowUpTypeEnum.None;
    this.isBiopsy = false;
    this.biopsyType = BiopsyTypeEnum.None;
    this.isEvaluationInInterdisciplinaryTumorBoard = false;
    this.dynamicsOfFindingsType = DynamicsOfFindingsTypeEnum.None;
    this.tnmClassifications = [new TNMClassificationUiModel()];
  }
}
