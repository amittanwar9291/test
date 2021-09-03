export class ReportFilterOptionsApiModel {
  reportStatuses: string[];
  examinations: string[];
  userIds: string[];
  age?: number;
  examinationDate: string;
  findingsDate: string;

  constructor() {
    this.reportStatuses = [];
    this.examinations = [];
    this.userIds = [];
    this.age = null;
    this.examinationDate = '';
    this.findingsDate = '';
  }
}
