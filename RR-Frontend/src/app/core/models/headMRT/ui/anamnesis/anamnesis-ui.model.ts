import { ReportModelBase } from '@models/report-model-base';
import { ClinicFindingUiModel } from '@models/headMRT/ui/anamnesis/clinic-finding-ui.model';
import { PreviousInterventionsTherapiesFindingUiModel } from '@models/headMRT/ui/anamnesis/previous-interventions-therapies-finding-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

export class AnamnesisUiModel extends ReportModelBase {
  clinicalSymptomFindings: ClinicFindingUiModel[];
  previousInterventionsTherapiesFindings: PreviousInterventionsTherapiesFindingUiModel[];
  isMRI: boolean;
  isCT: boolean;
  isPETCT: boolean;
  isDSA: boolean;
  dateOfMRI: MonthYearModel;
  dateOfCT: MonthYearModel;
  dateOfPETCT: MonthYearModel;
  dateOfDSA: MonthYearModel;

  constructor() {
    super();

    this.clinicalSymptomFindings = [new ClinicFindingUiModel()];
    this.previousInterventionsTherapiesFindings = [new PreviousInterventionsTherapiesFindingUiModel()];
    this.isMRI = false;
    this.isCT = false;
    this.isPETCT = false;
    this.isDSA = false;
    this.dateOfMRI = new MonthYearModel();
    this.dateOfCT = new MonthYearModel();
    this.dateOfPETCT = new MonthYearModel();
    this.dateOfDSA = new MonthYearModel();
  }
}
