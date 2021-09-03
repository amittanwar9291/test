import { Injectable } from '@angular/core';

import { SummaryApiModel } from '@models/spineMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/spineMRT/ui/summary/summary-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor() {
    automapper.createMap('Summary_SpineMRT_UiModel', 'Summary_SpineMRT_ApiModel').convertToType(SummaryApiModel);
    automapper.createMap('Summary_SpineMRT_ApiModel', 'Summary_SpineMRT_UiModel').convertToType(SummaryUiModel);
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_SpineMRT_UiModel', 'Summary_SpineMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_SpineMRT_ApiModel', 'Summary_SpineMRT_UiModel', source);
    return out;
  }
}
