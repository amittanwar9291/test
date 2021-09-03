import { Component, Input } from '@angular/core';

import { ReportListSortColumn } from '@enums/shared/report-list-sort-column.enum';
import { ReportStatus } from '@enums/shared/report-status.enum';
import { ReportListState } from '@models/shared/report-list/report-list-state.model';

@Component({
  selector: 'rr-report-list-header-row',
  templateUrl: './report-list-header-row.component.html',
  styleUrls: ['./report-list-header-row.component.scss']
})
export class ReportListHeaderRowComponent {
  @Input() state = new ReportListState();

  sortColumns = ReportListSortColumn;
  statuses = ReportStatus;

  constructor() {}

  isTopStatus(status: ReportStatus): boolean {
    return this.state.options.sort.topStatus === status;
  }
}
