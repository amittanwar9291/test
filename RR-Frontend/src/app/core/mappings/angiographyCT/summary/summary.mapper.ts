import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { SummaryApiModel } from '@models/angiographyCT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/angiographyCT/ui/summary/summary-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor() {
    automapper.createMap('Summary_AngioCT_UiModel', 'Summary_AngioCT_ApiModel').convertToType(SummaryApiModel);
    automapper.createMap('Summary_AngioCT_ApiModel', 'Summary_AngioCT_UiModel').convertToType(SummaryUiModel);
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_AngioCT_UiModel', 'Summary_AngioCT_ApiModel', source);
    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_AngioCT_ApiModel', 'Summary_AngioCT_UiModel', source);
    return out;
  }
}
