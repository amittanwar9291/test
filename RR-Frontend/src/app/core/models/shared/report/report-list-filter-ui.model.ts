import { ReportListFilterColumn } from '@enums/shared/report-list-filter-column.enum';

export class ReportListFilterUiModel {
  selections: Map<ReportListFilterColumn, string[]>;

  constructor() {
    this.selections = new Map<ReportListFilterColumn, string[]>();
    this.selections[ReportListFilterColumn.Status] = [];
    this.selections[ReportListFilterColumn.Examination] = [];
    this.selections[ReportListFilterColumn.User] = [];
  }
}
