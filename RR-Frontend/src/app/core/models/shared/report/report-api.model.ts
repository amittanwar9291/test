import { ReportPageApiModel } from '@models/shared/navigation';
import { ModelBase } from '@models/model-base';

export class ReportApiModel extends ModelBase {
  presetCode: string;
  patientId: string;
  userId: string;
  userName: string;
  studyInstanceUID: string;
  examinationDate: string;
  examinationType: string;
  findingsDate: string;
  status: string;
  patientAge: number;
  language: string;
  evaluation: string;
  pages: ReportPageApiModel[];
  totalPageCount: number;
  isLocked: boolean;

  constructor() {
    super();

    this.presetCode = '';
    this.patientId = '';
    this.userId = '';
    this.userName = '';
    this.studyInstanceUID = '';
    this.examinationDate = '';
    this.examinationType = '';
    this.findingsDate = '';
    this.status = '';
    this.patientAge = 0;
    this.language = '';
    this.evaluation = '';
    this.totalPageCount = 0;
    this.isLocked = false;
  }
}
