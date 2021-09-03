import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SoftTissueFindingUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { SoftTissueFindingApiModel } from '@models/elbowMRT/api/soft-tissue/soft-tissue-finding-api.model';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueFindingMapper implements IMapper<SoftTissueFindingApiModel, SoftTissueFindingUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('SoftTissueFinding_ElbowMRT_UiModel', 'SoftTissueFinding_ElbowMRT_ApiModel')
      .convertToType(SoftTissueFindingApiModel);
    automapper
      .createMap('SoftTissueFinding_ElbowMRT_ApiModel', 'SoftTissueFinding_ElbowMRT_UiModel')
      .convertToType(SoftTissueFindingUiModel);
  }

  mapToAPI(source: SoftTissueFindingUiModel, out: SoftTissueFindingApiModel): SoftTissueFindingApiModel {
    out = automapper.map('SoftTissueFinding_ElbowMRT_UiModel', 'SoftTissueFinding_ElbowMRT_ApiModel', source);

    out.t1w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2w);
    return out;
  }

  mapToUI(source: SoftTissueFindingApiModel, out: SoftTissueFindingUiModel): SoftTissueFindingUiModel {
    out = automapper.map('SoftTissueFinding_ElbowMRT_ApiModel', 'SoftTissueFinding_ElbowMRT_UiModel', source);

    out.t1w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2w);
    return out;
  }
}
