import { ReportModelBase } from '@models/report-model-base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { ClinicSymptomsFindingUiModel } from './clinic-symptoms-finding-ui.model';
import { PreviousInterventionsTherapiesFindingUiModel } from './previous-interventions-therapies-finding-ui.model';

export class AnamnesisUiModel extends ReportModelBase {
  clinicalSymptomFindings: ClinicSymptomsFindingUiModel[];
  previousInterventionsTherapiesFindings: PreviousInterventionsTherapiesFindingUiModel[];
  isMRI: boolean;
  isCT: boolean;
  isPETCT: boolean;
  isDSA: boolean;
  dateOfMRI: MonthYearModel;
  dateOfCT: MonthYearModel;
  dateOfPETCT: MonthYearModel;
  dateOfDSA: MonthYearModel;

  hours: number;
  days: number;
  months: number;
  years: number;

  constructor() {
    super();

    this.clinicalSymptomFindings = [new ClinicSymptomsFindingUiModel()];
    this.previousInterventionsTherapiesFindings = [new PreviousInterventionsTherapiesFindingUiModel()];
    this.isMRI = false;
    this.isCT = false;
    this.isPETCT = false;
    this.isDSA = false;
    this.dateOfMRI = new MonthYearModel();
    this.dateOfCT = new MonthYearModel();
    this.dateOfPETCT = new MonthYearModel();
    this.dateOfDSA = new MonthYearModel();

    this.hours = null;
    this.days = null;
    this.months = null;
    this.years = null;
  }
}
