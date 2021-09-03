import { Injectable } from '@angular/core';

import { SummaryApiModel } from '@models/kneeMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/kneeMRT/ui/summary/summary-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor() {
    automapper.createMap('Summary_KneeMRT_UiModel', 'Summary_KneeMRT_ApiModel').convertToType(SummaryApiModel);
    automapper.createMap('Summary_KneeMRT_ApiModel', 'Summary_KneeMRT_UiModel').convertToType(SummaryUiModel);
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_KneeMRT_UiModel', 'Summary_KneeMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_KneeMRT_ApiModel', 'Summary_KneeMRT_UiModel', source);
    return out;
  }
}
