import { ReportUiModel } from '@models/shared/report';
import { HttpHeaders } from '@angular/common/http';

export interface INavigationReportData {
  getReport(id: any, moduleName: string): Promise<any>;
  getReportData(): ReportUiModel;
  postReport(report: ReportUiModel, headers?: HttpHeaders): Promise<ReportUiModel>;
  getReportId(): string;

  getCurrentPageUrl(): string;
  getNextPageNumber(): number;
  getPreviousPageNumber(): number;
  getCurrentPageNumber(): number;
  getRaportPagesCount(): number;
  setPageId(pageNumber: number, id: string): void;
  setCurrentPageId(id: string): void;
  setCurrentPage(pageNumber: number): void;
}
