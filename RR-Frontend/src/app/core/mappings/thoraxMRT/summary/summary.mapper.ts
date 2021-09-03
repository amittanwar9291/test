import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SummaryApiModel } from '@models/thoraxMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/thoraxMRT/ui/summary/summary-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor() {
    automapper.createMap('Summary_ThoraxMRT_UiModel', 'Summary_ThoraxMRT_ApiModel').convertToType(SummaryApiModel);
    automapper.createMap('Summary_ThoraxMRT_ApiModel', 'Summary_ThoraxMRT_UiModel').convertToType(SummaryUiModel);
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_ThoraxMRT_UiModel', 'Summary_ThoraxMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_ThoraxMRT_ApiModel', 'Summary_ThoraxMRT_UiModel', source);
    return out;
  }
}
