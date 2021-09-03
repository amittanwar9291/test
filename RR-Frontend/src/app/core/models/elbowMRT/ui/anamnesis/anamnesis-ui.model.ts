import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisFindingUiModel } from '@models/elbowMRT/ui/anamnesis/anamnesis-finding-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

export class AnamnesisUiModel extends ReportModelBase {
  findings: AnamnesisFindingUiModel[];

  isXRay: boolean;
  xRayDate: MonthYearModel;
  isCT: boolean;
  ctDate: MonthYearModel;
  isMRI: boolean;
  mriDate: MonthYearModel;

  constructor() {
    super();

    this.isXRay = false;
    this.xRayDate = new MonthYearModel();
    this.isCT = false;
    this.ctDate = new MonthYearModel();
    this.isMRI = false;
    this.mriDate = new MonthYearModel();

    this.findings = [new AnamnesisFindingUiModel()];
  }
}
