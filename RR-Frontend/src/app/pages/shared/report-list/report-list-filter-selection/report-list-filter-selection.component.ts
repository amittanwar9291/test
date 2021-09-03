import { Dropdown } from 'primeng/dropdown';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ReportListFilterColumn } from '@enums/shared/report-list-filter-column.enum';
import { ReportListViewMode } from '@enums/shared/report-list-view-mode.enum';
import { pull } from 'lodash';
import { ReportListState } from '@models/shared/report-list/report-list-state.model';

@Component({
  selector: 'rr-report-list-filter-selection',
  templateUrl: './report-list-filter-selection.component.html',
  styleUrls: ['./report-list-filter-selection.component.scss']
})
export class ReportListFilterSelectionComponent {
  @ViewChild('dropdown') dropdown: Dropdown;
  @Input() state = new ReportListState();
  @Input() caption: string;
  @Input() options: DropdownModel[];
  @Input() filterColumn: ReportListFilterColumn;
  @Input() selections: string[];
  @Input() styleClass: string;
  @Output() select = new EventEmitter();

  viewModes = ReportListViewMode;

  constructor() {}

  selectFilterValue({ value: selectedValue }: any) {
    if (selectedValue) {
      this.updateSelection(this.filterColumn, selectedValue);
      this.select.emit();
    }
  }

  hasSelection(): boolean {
    return !!this.selections.length;
  }

  isSelected(value: string): boolean {
    return this.selections.includes(value);
  }

  private updateSelection(filterColumn: ReportListFilterColumn, selectedValue: string): void {
    if (this.isResetValue(filterColumn, selectedValue)) {
      this.selections.length = 0;

      return;
    }

    if (this.filterColumn === ReportListFilterColumn.Examination) {
      this.verifyCompoundValueSelection(selectedValue);
    }

    this.toggleFilterSelection(selectedValue);
  }

  private isResetValue(filterColumn: ReportListFilterColumn, value: string): boolean {
    switch (filterColumn) {
      case ReportListFilterColumn.Status:
        return value === 'Unknown';
      case ReportListFilterColumn.Examination:
      case ReportListFilterColumn.User:
        return value === 'None';
    }
  }

  private verifyCompoundValueSelection(selectedValue: string) {
    if (selectedValue === 'AllMRT' || selectedValue === 'AllCT') {
      this.selections.length = 0;
    } else {
      pull(this.selections, 'AllMRT');
      pull(this.selections, 'AllCT');
    }
  }

  private toggleFilterSelection(selectedValue: string): void {
    if (this.selections.includes(selectedValue)) {
      pull(this.selections, selectedValue);
    } else {
      this.selections.push(selectedValue);
    }
    this.dropdown.clear(null);
  }
}
