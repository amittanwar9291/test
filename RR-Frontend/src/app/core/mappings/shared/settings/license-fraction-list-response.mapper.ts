import { Injectable } from '@angular/core';
import { LicenseFractionListResponseUiModel } from '@models/shared/settings/license-fraction-list-response-ui.model';
import { LicenseFractionListResponseApiModel } from '@models/shared/settings/license-fraction-list-response-api.model';
import { LicenseFractionMapper } from '@mappings/shared/settings/license-fraction.mapper';
import { PaginationOptionsMapper } from '@mappings/shared/pagination-options.mapper';

@Injectable({
  providedIn: 'root'
})
export class LicenseFractionListResponseMapper {
  constructor(private licenseFractionMapper: LicenseFractionMapper, private paginationOptionsMapper: PaginationOptionsMapper) {}

  mapToUI(source: LicenseFractionListResponseApiModel): LicenseFractionListResponseUiModel {
    const out = new LicenseFractionListResponseUiModel();
    out.licenseFractions = source.licenseFractions.map(fraction => this.licenseFractionMapper.mapToUI(fraction));
    out.paginationOptions = this.paginationOptionsMapper.mapToUI(source.paginationOptions);

    return out;
  }
}
