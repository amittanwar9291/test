import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SummaryApiModel } from '@models/elbowMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/elbowMRT/ui/summary/summary-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor() {
    automapper.createMap('Summary_ElbowMRT_UiModel', 'Summary_ElbowMRT_ApiModel').convertToType(SummaryApiModel);
    automapper.createMap('Summary_ElbowMRT_ApiModel', 'Summary_ElbowMRT_UiModel').convertToType(SummaryUiModel);
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_ElbowMRT_UiModel', 'Summary_ElbowMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_ElbowMRT_ApiModel', 'Summary_ElbowMRT_UiModel', source);
    return out;
  }
}
