import { ReportUiModel } from './report-ui.model';
import { PatientUiModel } from '../patient/patient-ui.model';

export class ReportPatientUiModel {
  report: ReportUiModel;
  patient: PatientUiModel;

  constructor() {
    this.report = new ReportUiModel();
    this.patient = new PatientUiModel();
    this.report.pages = [];
  }
}
