import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisFindingUiModel } from '@models/thoraxMRT/ui/anamnesis/anamnesis-finding-ui.model';
import { IndicationFindingUiModel } from '@models/thoraxMRT/ui/anamnesis/indication-finding-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

export class AnamnesisUiModel extends ReportModelBase {
  anamnesisFindings: AnamnesisFindingUiModel[];
  indicationFindings: IndicationFindingUiModel[];
  isMRIPreliminaryExamination: boolean;
  mriPreliminaryExaminationDate: MonthYearModel;
  isCTPreliminaryExamination: boolean;
  ctPreliminaryExaminationDate: MonthYearModel;

  constructor() {
    super();
    this.anamnesisFindings = [new AnamnesisFindingUiModel()];
    this.indicationFindings = [new IndicationFindingUiModel()];
    this.isMRIPreliminaryExamination = false;
    this.mriPreliminaryExaminationDate = new MonthYearModel();
    this.isCTPreliminaryExamination = false;
    this.ctPreliminaryExaminationDate = new MonthYearModel();
  }
}
