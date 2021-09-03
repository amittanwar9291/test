import { PatientFilterOptionsApiModel } from '@models/shared/report-list/patient-filter-options-api.model';
import { ReportFilterOptionsApiModel } from '@models/shared/report-list/report-filter-options-api.model';

export class FilterOptionsApiModel {
  patientOptions: PatientFilterOptionsApiModel;
  reportOptions: ReportFilterOptionsApiModel;

  constructor() {
    this.patientOptions = new PatientFilterOptionsApiModel();
    this.reportOptions = new ReportFilterOptionsApiModel();
  }
}
