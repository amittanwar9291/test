import { ReportModelBase } from '@models/report-model-base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { AnamnesisIndicationFindingUiModel } from '@models/handMRT/ui/anamnesis/anamnesis-indication-finding-ui.model';
import { AnamnesisPreviousSurgeriesFindingUiModel } from '@models/handMRT/ui/anamnesis/anamnesis-previous-surgeries-finding-ui.model';

export class AnamnesisUiModel extends ReportModelBase {
  indications: AnamnesisIndicationFindingUiModel[];
  previousSurgeries: AnamnesisPreviousSurgeriesFindingUiModel[];

  isXRay: boolean;
  xRay: MonthYearModel;
  isCT: boolean;
  ct: MonthYearModel;
  isMri: boolean;
  mri: MonthYearModel;

  constructor() {
    super();

    this.indications = [new AnamnesisIndicationFindingUiModel()];
    this.previousSurgeries = [new AnamnesisPreviousSurgeriesFindingUiModel()];

    this.isXRay = false;
    this.xRay = new MonthYearModel();
    this.isCT = false;
    this.ct = new MonthYearModel();
    this.isMri = false;
    this.mri = new MonthYearModel();
  }
}
