import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisFindingUiModel } from '@models/thoraxMRT/ui/anamnesis/anamnesis-finding-ui.model';
import { IndicationFindingUiModel } from '@models/thoraxMRT/ui/anamnesis/indication-finding-ui.model';

export class AnamnesisApiModel extends ReportModelBase {
  anamnesisFindings: AnamnesisFindingUiModel[];
  indicationFindings: IndicationFindingUiModel[];
  isMRIPreliminaryExamination: boolean;
  mriPreliminaryExaminationMonth: number;
  mriPreliminaryExaminationYear: number;
  isCTPreliminaryExamination: boolean;
  ctPreliminaryExaminationMonth: number;
  ctPreliminaryExaminationYear: number;

  constructor() {
    super();
    this.anamnesisFindings = [new AnamnesisFindingUiModel()];
    this.indicationFindings = [new IndicationFindingUiModel()];
    this.isMRIPreliminaryExamination = false;
    this.mriPreliminaryExaminationMonth = null;
    this.mriPreliminaryExaminationYear = null;
    this.isCTPreliminaryExamination = false;
    this.ctPreliminaryExaminationMonth = null;
    this.ctPreliminaryExaminationYear = null;
  }
}
