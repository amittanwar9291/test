export class ReportSessionUiModel {
  reportSessionId: string;
  reportId: string;
  reportSessionCreationDate: Date;
  reportCreationDate: Date;
  moduleName: string;
  moduleLabel: string;
  reportStatus: string;
  userInitial: string;

  constructor() {
    this.reportSessionId = '';
    this.reportId = '';
    this.reportSessionCreationDate = null;
    this.reportCreationDate = null;
    this.moduleName = '';
    this.moduleLabel = '';
    this.reportStatus = '';
    this.userInitial = '';
  }
}
