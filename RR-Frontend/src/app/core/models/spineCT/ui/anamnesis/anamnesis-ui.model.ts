import { ReportModelBase } from '@models/report-model-base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { AnamnesisIndicationUiModel } from './anamnesis-indication-ui.model';
import { PreviousInterventionUiModel } from './previous-intervention-ui.model';

export class AnamnesisUiModel extends ReportModelBase {
  anamnesisIndications: AnamnesisIndicationUiModel[];
  previousInterventions: PreviousInterventionUiModel[];

  isCT: boolean;
  dateOfCT: MonthYearModel;

  isMRI: boolean;
  dateOfMRI: MonthYearModel;

  isXRay: boolean;
  dateOfXRay: MonthYearModel;

  constructor() {
    super();
    this.anamnesisIndications = [];
    this.previousInterventions = [];
    this.isCT = false;
    this.isMRI = false;
    this.isXRay = false;

    this.dateOfCT = new MonthYearModel();
    this.dateOfMRI = new MonthYearModel();
    this.dateOfXRay = new MonthYearModel();
  }
}
