import { ReportPatientApiModel } from './report-patient-api.model';
import { ReportListOptionsApiModel } from '@models/shared/report-list/report-list-options-api.model';

export class ReportListApiModel {
  reportPatientList: ReportPatientApiModel[];
  reportListOptions: ReportListOptionsApiModel;
}
