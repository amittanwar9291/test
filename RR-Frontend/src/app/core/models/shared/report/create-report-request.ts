export class CreateReportRequest {
  reportId: string;
  moduleName: string;
  userName: string;

  constructor() {
    this.reportId = '';
    this.moduleName = '';
    this.userName = '';
  }
}
