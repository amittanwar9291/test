import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SummaryUiModel } from '@models/hipMRT/ui/summary/summary-ui.model';
import { SummaryApiModel } from '@models/hipMRT/api/summary/summary-api.model';

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor() {
    automapper.createMap('Summary_HipMRT_ApiModel', 'Summary_HipMRT_UiModel').convertToType(SummaryUiModel);
    automapper.createMap('Summary_HipMRT_UiModel', 'Summary_HipMRT_ApiModel').convertToType(SummaryApiModel);
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_HipMRT_UiModel', 'Summary_HipMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_HipMRT_ApiModel', 'Summary_HipMRT_UiModel', source);
    return out;
  }
}
