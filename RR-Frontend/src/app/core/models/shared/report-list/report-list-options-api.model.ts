import { FilterOptionsApiModel } from '@models/shared/report-list/filter-options-api.model';
import { PaginationOptionsApiModel } from '@models/shared/pagination-options-api.model';
import { SortOptionsApiModel } from '@models/shared/report-list/sort-options-api.model';

export class ReportListOptionsApiModel {
  filter: FilterOptionsApiModel;
  pagination: PaginationOptionsApiModel;
  sort: SortOptionsApiModel;

  constructor() {
    this.filter = new FilterOptionsApiModel();
    this.pagination = new PaginationOptionsApiModel();
    this.sort = new SortOptionsApiModel();
  }
}
