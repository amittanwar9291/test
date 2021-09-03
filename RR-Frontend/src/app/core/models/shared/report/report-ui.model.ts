import { ReportPageUiModel } from '@models/shared/navigation';
import { ModelBase } from '@models/model-base';
import { ReportStatus } from '@enums/shared/report-status.enum';

export class ReportUiModel extends ModelBase {
  presetCode: string;
  patientId: string;
  userId: string;
  userLabel: string;
  findingsDate: Date;
  examinationDate: Date;
  examinationType: string;
  status: ReportStatus;
  patientAge: number;
  language: string;
  evaluation: string;
  freeField: string;
  pages: ReportPageUiModel[];
  totalPageCount: number;
  activePage: string;
  isLocked: boolean;

  constructor() {
    super();

    this.presetCode = '';
    this.patientId = '';
    this.userId = '';
    this.userLabel = '';
    this.findingsDate = null;
    this.examinationDate = null;
    this.examinationType = '';
    this.status = ReportStatus.Unknown;
    this.patientAge = 0;
    this.language = '';
    this.evaluation = '';
    this.freeField = '';
    this.totalPageCount = 0;
    this.activePage = '';
    this.pages = [];
    this.isLocked = false;
  }
}
