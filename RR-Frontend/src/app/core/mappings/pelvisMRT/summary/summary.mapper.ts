import { SummaryApiModel } from '@models/pelvisMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/pelvisMRT/ui/summary/summary-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor() {
    automapper.createMap('Summary_PelvisMRT_UiModel', 'Summary_PelvisMRT_ApiModel').convertToType(SummaryApiModel);
    automapper.createMap('Summary_PelvisMRT_ApiModel', 'Summary_PelvisMRT_UiModel').convertToType(SummaryUiModel);
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_PelvisMRT_UiModel', 'Summary_PelvisMRT_ApiModel', source);

    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_PelvisMRT_ApiModel', 'Summary_PelvisMRT_UiModel', source);

    return out;
  }
}
