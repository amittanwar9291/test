import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SummaryApiModel } from '@models/spineCT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/spineCT/ui/summary/summary-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SpineCTSummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor() {
    automapper.createMap('Summary_SpineCT_ApiModel', 'Summary_SpineCT_UiModel').convertToType(SummaryUiModel);
    automapper.createMap('Summary_SpineCT_UiModel', 'Summary_SpineCT_ApiModel').convertToType(SummaryApiModel);
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_SpineCT_UiModel', 'Summary_SpineCT_ApiModel', source);
    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_SpineCT_ApiModel', 'Summary_SpineCT_UiModel', source);
    return out;
  }
}
