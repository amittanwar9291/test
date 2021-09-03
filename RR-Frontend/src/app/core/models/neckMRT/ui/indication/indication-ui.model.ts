import { ReportModelBase } from '@models/report-model-base';
import { IndicationFindingUiModel } from '@models/neckMRT/ui/indication/indication-finding-ui.model';
import { PreviousTherapyUiModel } from '@models/neckMRT/ui/indication/previous-therapy-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

export class IndicationUiModel extends ReportModelBase {
  indications: IndicationFindingUiModel[];
  previousTherapies: PreviousTherapyUiModel[];
  isMRI: boolean;
  dateOfMRI: MonthYearModel;
  isCT: boolean;
  dateOfCT: MonthYearModel;
  isSonography: boolean;
  dateOfSonography: MonthYearModel;

  constructor() {
    super();
    this.indications = [new IndicationFindingUiModel()];
    this.previousTherapies = [new PreviousTherapyUiModel()];
    this.isMRI = false;
    this.dateOfMRI = new MonthYearModel();
    this.isCT = false;
    this.dateOfCT = new MonthYearModel();
    this.isSonography = false;
    this.dateOfSonography = new MonthYearModel();
  }
}
