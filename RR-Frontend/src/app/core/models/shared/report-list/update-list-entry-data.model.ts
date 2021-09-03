import { ReportStatus } from '@enums/shared/report-status.enum';

export class UpdateListEntryData {
  reportId: string;
  status: ReportStatus;
  isLocked: boolean;

  constructor(reportId: string, status: ReportStatus, isLocked: boolean) {
    this.reportId = reportId;
    this.status = status;
    this.isLocked = isLocked;
  }
}
