import { Component, Input } from '@angular/core';

import { ReportListInternalCommunicationService } from '@services/shared/report-list/report-list-internal-communication.service';
import { ReportListViewMode } from '@enums/shared/report-list-view-mode.enum';
import { ReportListState } from '@models/shared/report-list/report-list-state.model';

@Component({
  selector: 'rr-report-list-pagination',
  templateUrl: './report-list-pagination.component.html',
  styleUrls: ['./report-list-pagination.component.scss']
})
export class ReportListPaginationComponent {
  @Input() state = new ReportListState();

  viewModes = ReportListViewMode;

  constructor(private internalCommunicationService: ReportListInternalCommunicationService) {}

  getFirstRowIndex(): number {
    return (this.state.options.pagination.currentPage - 1) * this.state.options.pagination.pageSize;
  }

  selectPage({ page: pageIndex }) {
    const pageNumber = pageIndex + 1;
    if (pageNumber !== this.state.options.pagination.currentPage) {
      this.state.options.pagination.currentPage = pageNumber;
      this.internalCommunicationService.emitFetchReports();
    }
  }
}
