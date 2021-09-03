import { ReportApiModel } from '.';
import { PatientApiModel } from '../patient/patient-api.model';

export class ReportPatientApiModel {
  report: ReportApiModel;
  patient?: PatientApiModel;

  constructor() {
    this.report = new ReportApiModel();
    this.report.pages = [];
  }
}
