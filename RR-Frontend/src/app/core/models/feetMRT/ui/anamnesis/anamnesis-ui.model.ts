import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisIndicationFindingUiModel } from '@models/feetMRT/ui/anamnesis/anamnesis-indication-finding-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

export class AnamnesisUiModel extends ReportModelBase {
  isXRay: boolean;
  xRay: MonthYearModel;
  isCT: boolean;
  ct: MonthYearModel;
  isMRI: boolean;
  mri: MonthYearModel;
  findings: AnamnesisIndicationFindingUiModel[];

  constructor() {
    super();
    this.isXRay = false;
    this.xRay = new MonthYearModel();
    this.isCT = false;
    this.ct = new MonthYearModel();
    this.isMRI = false;
    this.mri = new MonthYearModel();
    this.findings = [new AnamnesisIndicationFindingUiModel()];
  }
}
