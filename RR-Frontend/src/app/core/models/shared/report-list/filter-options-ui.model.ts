import { PatientFilterOptionsUiModel } from '@models/shared/report-list/patient-filter-options-ui.model';
import { ReportFilterOptionsUiModel } from '@models/shared/report-list/report-filter-options-ui.model';

export class FilterOptionsUiModel {
  patientOptions: PatientFilterOptionsUiModel;
  reportOptions: ReportFilterOptionsUiModel;

  constructor() {
    this.patientOptions = new PatientFilterOptionsUiModel();
    this.reportOptions = new ReportFilterOptionsUiModel();
  }
}
