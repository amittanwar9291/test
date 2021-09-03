import { Injectable } from '@angular/core';
import { PaginationOptionsUiModel } from '@models/shared/pagination-options-ui.model';
import { PaginationOptionsApiModel } from '@models/shared/pagination-options-api.model';

@Injectable({
  providedIn: 'root'
})
export class PaginationOptionsMapper {
  constructor() {
    automapper.createMap('PaginationOptionsUiModel', 'PaginationOptionsApiModel').convertToType(PaginationOptionsApiModel);
    automapper.createMap('PaginationOptionsApiModel', 'PaginationOptionsUiModel').convertToType(PaginationOptionsUiModel);
  }

  mapToAPI(source: PaginationOptionsUiModel) {
    return automapper.map('PaginationOptionsUiModel', 'PaginationOptionsApiModel', source);
  }

  mapToUI(source: PaginationOptionsApiModel) {
    return automapper.map('PaginationOptionsApiModel', 'PaginationOptionsUiModel', source);
  }
}
