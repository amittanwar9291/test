import { IndicationTypeEnum } from '@enums/thoraxCT/anamnesis/indication-type.enum';
import { PcrTestForSarsCov2TypeEnum } from '@enums/thoraxCT/anamnesis/pcr-test-for-sars-cov2-type.enum';
import { ReportModelBase } from '@models/report-model-base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { AnamnesisFindingUiModel } from '@models/thoraxCT/ui/anamnesis/anamnesis-finding-ui.model';

export class AnamnesisUiModel extends ReportModelBase {
  indicationType: IndicationTypeEnum;
  isSuspected: boolean;
  pcrTestForSARSCoV2Type: PcrTestForSarsCov2TypeEnum;
  ageOfTestInDays: number;
  isCTPreliminaryExamination: boolean;
  cTPreliminaryExamination: MonthYearModel;
  isMRIPreliminaryExamination: boolean;
  mRIPreliminaryExamination: MonthYearModel;
  findings: AnamnesisFindingUiModel[];

  constructor() {
    super();
    this.indicationType = IndicationTypeEnum.None;
    this.isSuspected = false;
    this.pcrTestForSARSCoV2Type = PcrTestForSarsCov2TypeEnum.None;
    this.ageOfTestInDays = null;
    this.isCTPreliminaryExamination = false;
    this.cTPreliminaryExamination = new MonthYearModel();
    this.isMRIPreliminaryExamination = false;
    this.mRIPreliminaryExamination = new MonthYearModel();
    this.findings = [new AnamnesisFindingUiModel()];
  }
}
