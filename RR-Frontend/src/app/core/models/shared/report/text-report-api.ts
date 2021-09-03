import { ModelBase } from '@models/model-base';
import { Guid } from '../guid/guid';
import { ReportSummaryApiModel } from '@models/shared/report/summary/report-summary-api.model';

export class TextReportApiModel extends ModelBase {
  reportTypeName: string;
  patientData: string;
  reportHtml: string;
  discussion: string;
  isLocalizer: boolean;
  isReferenceImage: boolean;
  isICD10: boolean;
  reportId: string;
  approved: string;
  reportSummary: ReportSummaryApiModel[];

  constructor() {
    super();
    this.reportTypeName = '';
    this.reportHtml = '';
    this.patientData = '';
    this.discussion = '';
    this.isLocalizer = false;
    this.isReferenceImage = false;
    this.isICD10 = false;
    this.approved = '';
    this.reportId = Guid.createEmpty();
    this.reportSummary = null;
  }
}
