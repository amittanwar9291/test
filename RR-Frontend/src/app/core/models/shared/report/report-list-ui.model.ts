import { ReportListOptionsUiModel } from '@models/shared/report-list/report-list-options-ui.model';
import { ReportPatientUiModel } from '@models/shared/report/report-patient-ui.model';

export class ReportListUiModel {
  reportPatientList: ReportPatientUiModel[];
  reportListOptions: ReportListOptionsUiModel;
}
