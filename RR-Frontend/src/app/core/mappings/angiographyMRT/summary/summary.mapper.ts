import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SummaryApiModel } from '@models/angiographyMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/angiographyMRT/ui/summary/summary-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor() {
    automapper.createMap('Summary_AngioMRT_UiModel', 'Summary_AngioMRT_ApiModel').convertToType(SummaryApiModel);
    automapper.createMap('Summary_AngioMRT_ApiModel', 'Summary_AngioMRT_UiModel').convertToType(SummaryUiModel);
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_AngioMRT_UiModel', 'Summary_AngioMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_AngioMRT_ApiModel', 'Summary_AngioMRT_UiModel', source);
    return out;
  }
}
