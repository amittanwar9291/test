import { Observable, of } from 'rxjs';
import { ReportUiModel } from '@models/shared/report';
import { slideBaseTestConsts } from './test-const';

export class MockNavigationDataService {
  reportData: ReportUiModel;

  setReportData(data: ReportUiModel) {
    this.reportData = data;
  }

  postReport(report: ReportUiModel): Promise<ReportUiModel> {
    report.id = slideBaseTestConsts.reportPostId;
    this.reportData = report;

    return of(this.reportData).toPromise();
  }

  getReportData(): ReportUiModel {
    return this.reportData;
  }

  setPageId(pageNumber: number, id: string) {
    this.reportData.pages[pageNumber - 1].pageId = id;
  }

  getPageDeletionStream(): Observable<number[]> {
    return of([]);
  }
}
