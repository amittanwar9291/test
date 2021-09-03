export class ReportFilterOptionsUiModel {
  reportStatuses: string[];
  examinations: string[];
  userIds: string[];
  age?: number;
  examinationDate: Date;
  findingsDate: Date;

  constructor() {
    this.reportStatuses = [];
    this.examinations = [];
    this.userIds = [];
    this.age = null;
    this.examinationDate = null;
    this.findingsDate = null;
  }
}
