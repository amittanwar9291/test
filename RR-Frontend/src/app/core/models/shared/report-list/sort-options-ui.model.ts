import { ReportListSortColumn } from '@enums/shared/report-list-sort-column.enum';
import { ReportStatus } from '@enums/shared/report-status.enum';

export class SortOptionsUiModel {
  column: ReportListSortColumn;
  ascending: boolean;
  topStatus: ReportStatus;

  constructor() {
    this.column = ReportListSortColumn.None;
    this.ascending = false;
    this.topStatus = ReportStatus.Unknown;
  }
}
