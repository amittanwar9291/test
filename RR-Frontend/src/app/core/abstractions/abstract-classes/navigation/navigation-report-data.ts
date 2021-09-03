import { INavigationReportData } from '@interfaces/navigation/navigation-report-data.interface';
import { ReportUiModel } from '@models/shared/report';
import { ReportPatientUiModel } from '@models/shared/report/report-patient-ui.model';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

export abstract class AbstractNavigationReportDataService implements INavigationReportData {
  abstract getReport(id: any, moduleName: string): Promise<any>;
  abstract refreshReport(): void;
  abstract getReportData(): ReportUiModel;
  abstract getReportWithPatientData(): ReportPatientUiModel;
  abstract postReport(report: ReportUiModel, headers?: HttpHeaders): Promise<ReportUiModel>;
  abstract getReportId(): string;
  abstract getReportStream(): Subject<ReportUiModel>;

  abstract getCurrentPageUrl(): string;
  abstract getNextPageNumber(): number;
  abstract getPreviousPageNumber(): number;
  abstract getCurrentPageNumber(): number;
  abstract getRaportPagesCount(): number;
  abstract setPageId(pageNumber: number, id: string): void;
  abstract setCurrentPageId(id: string): void;
  abstract setCurrentPage(pageNumber: number): void;
  abstract setPageAsModified(pageNumber: number): void;
  abstract getPageDeletionStream(): Observable<number[]>;
}
