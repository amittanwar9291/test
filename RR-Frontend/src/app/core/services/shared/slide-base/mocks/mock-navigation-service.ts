import { ReportUiModel } from '@models/shared/report';

export class MockNavigationService {
  reportData: ReportUiModel;
  currentPageNumber = 5;

  setReportData(data: ReportUiModel) {
    this.reportData = data;
  }

  getCurrentPageNumber(): number {
    return this.currentPageNumber;
  }

  setPage(pageNumber: number) {
    this.currentPageNumber = pageNumber;
  }

  public getReportData(): ReportUiModel {
    return this.reportData;
  }

  refresh() {
    // intentionaly blanc
  }
}
