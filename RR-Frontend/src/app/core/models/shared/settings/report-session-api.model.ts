export class ReportSessionApiModel {
  reportSessionId: string;
  reportId: string;
  reportSessionCreationDate: string;
  reportCreationDate: string;
  moduleName: string;
  reportStatus: string;
  userInitial: string;

  constructor() {
    this.reportSessionId = '';
    this.reportId = '';
    this.reportSessionCreationDate = '';
    this.reportCreationDate = '';
    this.moduleName = '';
    this.reportStatus = '';
    this.userInitial = '';
  }
}
