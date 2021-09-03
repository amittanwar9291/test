import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { SummaryApiModel } from '@models/cardioMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/cardioMRT/ui/summary/summary-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor() {
    automapper.createMap('Summary_CardioMRT_UiModel', 'Summary_CardioMRT_ApiModel').convertToType(SummaryApiModel);

    automapper.createMap('Summary_CardioMRT_ApiModel', 'Summary_CardioMRT_UiModel').convertToType(SummaryUiModel);
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_CardioMRT_UiModel', 'Summary_CardioMRT_ApiModel', source);

    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_CardioMRT_ApiModel', 'Summary_CardioMRT_UiModel', source);

    return out;
  }
}
