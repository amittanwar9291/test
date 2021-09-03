import { ReportStatus } from '@enums/shared/report-status.enum';

export interface IOpenReportData {
  reportId: string;
  reportStatus: ReportStatus;
  moduleType: string;
}
