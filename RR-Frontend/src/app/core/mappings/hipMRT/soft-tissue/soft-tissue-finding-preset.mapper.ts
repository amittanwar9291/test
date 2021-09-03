import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SoftTissueFindingPresetUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-preset-ui.model';
import { SoftTissueFindingPresetApiModel } from '@models/hipMRT/api/soft-tissue/soft-tissue-finding-preset-api.model';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueFindingPresetMapper implements IMapper<SoftTissueFindingPresetApiModel, SoftTissueFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('SoftTissueFindingPreset_HipMRT_ApiModel', 'SoftTissueFindingPreset_HipMRT_UiModel')
      .convertToType(SoftTissueFindingPresetUiModel);
    automapper
      .createMap('SoftTissueFindingPreset_HipMRT_UiModel', 'SoftTissueFindingPreset_HipMRT_ApiModel')
      .convertToType(SoftTissueFindingPresetApiModel);
  }

  mapToAPI(source: SoftTissueFindingPresetUiModel, out: SoftTissueFindingPresetApiModel): SoftTissueFindingPresetApiModel {
    out = automapper.map('SoftTissueFindingPreset_HipMRT_UiModel', 'SoftTissueFindingPreset_HipMRT_ApiModel', source);

    out.t1wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);

    return out;
  }

  mapToUI(source: SoftTissueFindingPresetApiModel, out: SoftTissueFindingPresetUiModel): SoftTissueFindingPresetUiModel {
    out = automapper.map('SoftTissueFindingPreset_HipMRT_ApiModel', 'SoftTissueFindingPreset_HipMRT_UiModel', source);

    out.t1wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);

    return out;
  }
}
