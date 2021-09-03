import { ReportSummaryTextModel } from '@models/shared/report/summary/report-summary-text.model';

export class ReportSummaryApiModel {
  order: number;
  pageNumber: number;
  translations: ReportSummaryTextModel[];
  isAddedByUser: boolean;
  priority: string;

  constructor(order: number, pageNumber: number, translations: ReportSummaryTextModel[], isAddedByUser: boolean, priority: string) {
    this.order = order;
    this.pageNumber = pageNumber;
    this.translations = translations;
    this.isAddedByUser = isAddedByUser;
    this.priority = priority;
  }
}
