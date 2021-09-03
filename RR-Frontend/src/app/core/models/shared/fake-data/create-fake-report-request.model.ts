export class CreateFakeReportRequest {
  reportTypeName: string;
  reportStatus: string;

  constructor(reportTypeName: string, reportStatus: string) {
    this.reportTypeName = reportTypeName;
    this.reportStatus = reportStatus;
  }
}
