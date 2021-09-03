import { Injectable } from '@angular/core';

import { SummaryApiModel } from '@models/shoulderMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/shoulderMRT/ui/summary/summary-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor() {
    automapper.createMap('Summary_ShoulderMRT_UiModel', 'Summary_ShoulderMRT_ApiModel').convertToType(SummaryApiModel);
    automapper.createMap('Summary_ShoulderMRT_ApiModel', 'Summary_ShoulderMRT_UiModel').convertToType(SummaryUiModel);
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_ShoulderMRT_UiModel', 'Summary_ShoulderMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_ShoulderMRT_ApiModel', 'Summary_ShoulderMRT_UiModel', source);
    return out;
  }
}
