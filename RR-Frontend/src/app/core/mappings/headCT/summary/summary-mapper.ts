import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SummaryApiModel } from '@models/headCT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/headCT/ui/summary/summary-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor() {
    automapper.createMap('Summary_HeadCT_UiModel', 'Summary_HeadCT_ApiModel').convertToType(SummaryApiModel);
    automapper.createMap('Summary_HeadCT_ApiModel', 'Summary_HeadCT_UiModel').convertToType(SummaryUiModel);
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_HeadCT_UiModel', 'Summary_HeadCT_ApiModel', source);
    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_HeadCT_ApiModel', 'Summary_HeadCT_UiModel', source);
    return out;
  }
}
