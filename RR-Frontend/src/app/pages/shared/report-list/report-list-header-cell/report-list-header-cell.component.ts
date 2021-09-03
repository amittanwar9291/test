import { Component, Input } from '@angular/core';

import { ReportListSortColumn } from '@enums/shared/report-list-sort-column.enum';
import { ReportListInternalCommunicationService } from '@services/shared/report-list/report-list-internal-communication.service';
import { ReportStatus } from '@enums/shared/report-status.enum';
import { ReportListViewMode } from '@enums/shared/report-list-view-mode.enum';
import { ReportListState } from '@models/shared/report-list/report-list-state.model';

@Component({
  selector: 'rr-report-list-header-cell',
  templateUrl: './report-list-header-cell.component.html',
  styleUrls: ['./report-list-header-cell.component.scss']
})
export class ReportListHeaderCellComponent {
  private statusValues = Object.values(ReportStatus);

  @Input() state = new ReportListState();
  @Input() translateKey: string;
  @Input() isSortable = true;
  @Input() isRequired = false;
  @Input() sortColumn: ReportListSortColumn;

  viewModes = ReportListViewMode;

  constructor(private internalCommunicationService: ReportListInternalCommunicationService) {}

  isSortedAscendingShown(): boolean {
    return this.isSortable && this.isList() && ((this.isSorted() && this.isSortedAscending()) || !this.isSorted());
  }

  isSortedDescendingShown(): boolean {
    return this.isSortable && this.isList() && ((this.isSorted() && this.isSortedDescending()) || !this.isSorted());
  }

  selectSortColumn(): void {
    if (!this.isSortable || !this.sortColumn || this.state.viewMode !== ReportListViewMode.List) {
      return;
    }

    if (this.sortColumn === ReportListSortColumn.Status) {
      this.handleStatusColumnSorting();
    } else {
      this.handleNonStatusColumnSorting();
    }

    this.state.options.sort.column = this.sortColumn;
    this.state.options.pagination.currentPage = 1;
    this.internalCommunicationService.emitFetchReports();
  }

  isClone(): boolean {
    return this.state.viewMode === ReportListViewMode.Clone;
  }

  isNew(): boolean {
    return this.state.viewMode === ReportListViewMode.New;
  }

  private isSortedAscending(): boolean {
    return this.isSorted() && this.state.options.sort.ascending;
  }

  private isSortedDescending(): boolean {
    return this.isSorted() && !this.state.options.sort.ascending;
  }

  private isList(): boolean {
    return this.state.viewMode === ReportListViewMode.List;
  }

  private isSorted(): boolean {
    return this.sortColumn === this.state.options.sort.column;
  }

  private handleStatusColumnSorting(): void {
    this.state.options.sort.ascending = false;
    const currentIndex = this.statusValues.indexOf(this.state.options.sort.topStatus);
    const nextIndex = (currentIndex + 1) % this.statusValues.length || 1;
    this.state.options.sort.topStatus = this.statusValues[nextIndex];
  }

  private handleNonStatusColumnSorting(): void {
    this.state.options.sort.topStatus = ReportStatus.Unknown;
    this.state.options.sort.ascending = this.state.options.sort.column === this.sortColumn ? !this.state.options.sort.ascending : true;
  }
}
