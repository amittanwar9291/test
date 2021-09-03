import { IMapper } from '@interfaces/mapper.interface';
import { SummaryApiModel } from '@models/abdomenMRT/api/summary/summary-api.model';
import { SummaryUiModel } from '@models/abdomenMRT/ui/summary/summary-ui.model';
import { Injectable } from '@angular/core';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

const CATEGORY_ARRAY = ['None', 'Negative', 'LRNC', 'LR1', 'LR2', 'LR3', 'LR4', 'LR5', 'LRM', 'LRTIV'];

@Injectable({
  providedIn: 'root'
})
export class SummaryMapper implements IMapper<SummaryApiModel, SummaryUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper.createMap('Summary_AbdomenMRT_UiModel', 'Summary_AbdomenMRT_ApiModel').convertToType(SummaryApiModel);
    automapper.createMap('Summary_AbdomenMRT_ApiModel', 'Summary_AbdomenMRT_UiModel').convertToType(SummaryUiModel);
  }

  mapToAPI(source: SummaryUiModel, out: SummaryApiModel): SummaryApiModel {
    out = automapper.map('Summary_AbdomenMRT_UiModel', 'Summary_AbdomenMRT_ApiModel', source);
    return out;

    out.liRADSCategoryType = this.sliderMapper.mapSignalToAPI(CATEGORY_ARRAY, source.liRADSCategoryType);
  }

  mapToUI(source: SummaryApiModel, out: SummaryUiModel): SummaryUiModel {
    out = automapper.map('Summary_AbdomenMRT_ApiModel', 'Summary_AbdomenMRT_UiModel', source);

    out.liRADSCategoryType = this.sliderMapper.mapSignalToUI(CATEGORY_ARRAY, source.liRADSCategoryType);

    return out;
  }
}
