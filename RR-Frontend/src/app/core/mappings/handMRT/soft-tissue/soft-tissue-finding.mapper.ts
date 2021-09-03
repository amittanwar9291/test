import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SoftTissueFindingUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { SoftTissueFindingApiModel } from '@models/handMRT/api/soft-tissue/soft-tissue-finding-api.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueFindingMapper implements IMapper<SoftTissueFindingApiModel, SoftTissueFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper.createMap('SoftTissueFinding_HandMRT_ApiModel', 'SoftTissueFinding_HandMRT_UiModel').convertToType(SoftTissueFindingUiModel);
    automapper
      .createMap('SoftTissueFinding_HandMRT_UiModel', 'SoftTissueFinding_HandMRT_ApiModel')
      .convertToType(SoftTissueFindingApiModel);
  }

  mapToAPI(source: SoftTissueFindingUiModel, out: SoftTissueFindingApiModel): SoftTissueFindingApiModel {
    out = automapper.map('SoftTissueFinding_HandMRT_UiModel', 'SoftTissueFinding_HandMRT_ApiModel', source);

    out.handLocationsLocalizer = this.enumMapper.mapToString(source.handLocationsLocalizer);
    out.handJointsLocalizer = this.enumMapper.mapToString(source.handJointsLocalizer);

    out.signalTypeT1w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalTypeT1w);
    out.signalTypeT2w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalTypeT2w);

    return out;
  }

  mapToUI(source: SoftTissueFindingApiModel, out: SoftTissueFindingUiModel): SoftTissueFindingUiModel {
    out = automapper.map('SoftTissueFinding_HandMRT_ApiModel', 'SoftTissueFinding_HandMRT_UiModel', source);

    this.enumMapper.mapToObject(source.handLocationsLocalizer, out.handLocationsLocalizer);
    this.enumMapper.mapToObject(source.handJointsLocalizer, out.handJointsLocalizer);

    out.signalTypeT1w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalTypeT1w);
    out.signalTypeT2w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalTypeT2w);

    return out;
  }
}
