import { IMapper } from '@interfaces/mapper.interface';
import { ReportListOptionsApiModel } from '@models/shared/report-list/report-list-options-api.model';
import { ReportListOptionsUiModel } from '@models/shared/report-list/report-list-options-ui.model';
import { SortOptionsUiModel } from '@models/shared/report-list/sort-options-ui.model';
import { SortOptionsApiModel } from '@models/shared/report-list/sort-options-api.model';
import { ReportListFilterOptionsMapper } from '@mappings/shared/report-list/report-list-filter-options.mapper';
import { PaginationOptionsMapper } from '@mappings/shared/pagination-options.mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportListOptionsMapper implements IMapper<ReportListOptionsApiModel, ReportListOptionsUiModel> {
  constructor(private filterOptionsMapper: ReportListFilterOptionsMapper, private paginationOptionsMapper: PaginationOptionsMapper) {
    automapper.createMap('SortOptionsUiModel', 'SortOptionsApiModel').convertToType(SortOptionsApiModel);
    automapper.createMap('SortOptionsApiModel', 'SortOptionsUiModel').convertToType(SortOptionsUiModel);
  }

  mapToAPI(source: ReportListOptionsUiModel, out: ReportListOptionsApiModel): ReportListOptionsApiModel {
    out.filter = this.filterOptionsMapper.mapToAPI(source.filter, out.filter);
    out.pagination = this.paginationOptionsMapper.mapToAPI(source.pagination);
    out.sort = automapper.map('SortOptionsUiModel', 'SortOptionsApiModel', source.sort);

    return out;
  }

  mapToUI(source: ReportListOptionsApiModel, out: ReportListOptionsUiModel): ReportListOptionsUiModel {
    out.filter = this.filterOptionsMapper.mapToUI(source.filter, out.filter);
    out.pagination = this.paginationOptionsMapper.mapToUI(source.pagination);
    out.sort = automapper.map('SortOptionsApiModel', 'SortOptionsUiModel', source.sort);

    return out;
  }
}
