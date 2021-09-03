import { FilterOptionsUiModel } from '@models/shared/report-list/filter-options-ui.model';
import { PaginationOptionsUiModel } from '../pagination-options-ui.model';
import { SortOptionsUiModel } from './sort-options-ui.model';

export class ReportListOptionsUiModel {
  filter: FilterOptionsUiModel;
  pagination: PaginationOptionsUiModel;
  sort: SortOptionsUiModel;

  constructor() {
    this.filter = new FilterOptionsUiModel();
    this.pagination = new PaginationOptionsUiModel();
    this.sort = new SortOptionsUiModel();
  }
}
