import { Injectable } from '@angular/core';

import { SummaryApiModel } from '@models/thoraxCT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/thoraxCT/ui/summary/summary-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

const SIGNAL_ARRAY = ['None', 'One', 'Two', 'Three', 'FourA', 'FourB', 'FourX', 'S'];

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper.createMap('Summary_ThoraxCT_UiModel', 'Summary_ThoraxCT_ApiModel').convertToType(SummaryApiModel);
    automapper.createMap('Summary_ThoraxCT_ApiModel', 'Summary_ThoraxCT_UiModel').convertToType(SummaryUiModel);
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_ThoraxCT_UiModel', 'Summary_ThoraxCT_ApiModel', source);

    out.signalType = this.sliderMapper.mapSignalToAPI(SIGNAL_ARRAY, source.signalType);

    return out;
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_ThoraxCT_ApiModel', 'Summary_ThoraxCT_UiModel', source);

    out.signalType = this.sliderMapper.mapSignalToUI(SIGNAL_ARRAY, source.signalType);

    return out;
  }
}
