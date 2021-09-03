import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { TendinopathyFindingApiModel } from '@models/handMRT/api/tendinopathy/tendinopathy-finding-api.model';
import { TendinopathyFindingUiModel } from '@models/handMRT/ui/tendinopathy/tendinopathy-finding-ui.model';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

@Injectable({
  providedIn: 'root'
})
export class TendinopathyFindingMapper implements IMapper<TendinopathyFindingApiModel, TendinopathyFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper
      .createMap('TendinopathyFinding_HandMRT_ApiModel', 'TendinopathyFinding_HandMRT_UiModel')
      .convertToType(TendinopathyFindingUiModel);
    automapper
      .createMap('TendinopathyFinding_HandMRT_UiModel', 'TendinopathyFinding_HandMRT_ApiModel')
      .convertToType(TendinopathyFindingApiModel);
  }

  mapToAPI(source: TendinopathyFindingUiModel, out: TendinopathyFindingApiModel): TendinopathyFindingApiModel {
    out = automapper.map('TendinopathyFinding_HandMRT_UiModel', 'TendinopathyFinding_HandMRT_ApiModel', source);
    out.signalTypeT1w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalTypeT1w);
    out.signalTypeT2w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalTypeT2w);
    return out;
  }

  mapToUI(source: TendinopathyFindingApiModel, out: TendinopathyFindingUiModel): TendinopathyFindingUiModel {
    out = automapper.map('TendinopathyFinding_HandMRT_ApiModel', 'TendinopathyFinding_HandMRT_UiModel', source);
    out.signalTypeT1w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalTypeT1w);
    out.signalTypeT2w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalTypeT2w);
    return out;
  }
}
