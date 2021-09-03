import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

import { SoftTissueFindingApiModel } from '@models/hipMRT/api/soft-tissue/soft-tissue-finding-api.model';
import { SoftTissueFindingUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueFindingMapper implements IMapper<SoftTissueFindingApiModel, SoftTissueFindingUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper.createMap('SoftTissueFinding_HipMRT_ApiModel', 'SoftTissueFinding_HipMRT_UiModel').convertToType(SoftTissueFindingUiModel);
    automapper.createMap('SoftTissueFinding_HipMRT_UiModel', 'SoftTissueFinding_HipMRT_ApiModel').convertToType(SoftTissueFindingApiModel);
  }

  mapToAPI(source: SoftTissueFindingUiModel, out: SoftTissueFindingApiModel): SoftTissueFindingApiModel {
    out = automapper.map('SoftTissueFinding_HipMRT_UiModel', 'SoftTissueFinding_HipMRT_ApiModel', source);
    out.t1wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);

    return out;
  }

  mapToUI(source: SoftTissueFindingApiModel, out: SoftTissueFindingUiModel): SoftTissueFindingUiModel {
    out = automapper.map('SoftTissueFinding_HipMRT_ApiModel', 'SoftTissueFinding_HipMRT_UiModel', source);
    out.t1wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);

    return out;
  }
}
