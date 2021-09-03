import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SoftTissueFindingPresetApiModel } from '@models/handMRT/api/soft-tissue/soft-tissue-finding-preset-api.model';
import { SoftTissueFindingPresetUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-finding-preset-ui.model';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueFindingPresetMapper implements IMapper<SoftTissueFindingPresetApiModel, SoftTissueFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('SoftTissueFindingPreset_HandMRT_ApiModel', 'SoftTissueFindingPreset_HandMRT_UiModel')
      .convertToType(SoftTissueFindingPresetUiModel);
    automapper
      .createMap('SoftTissueFindingPreset_HandMRT_UiModel', 'SoftTissueFindingPreset_HandMRT_ApiModel')
      .convertToType(SoftTissueFindingPresetApiModel);
  }

  mapToAPI(source: SoftTissueFindingPresetUiModel, out: SoftTissueFindingPresetApiModel): SoftTissueFindingPresetApiModel {
    out = automapper.map('SoftTissueFindingPreset_HandMRT_UiModel', 'SoftTissueFindingPreset_HandMRT_ApiModel', source);

    out.signalTypeT1w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalTypeT1w);
    out.signalTypeT2w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalTypeT2w);

    return out;
  }

  mapToUI(source: SoftTissueFindingPresetApiModel, out: SoftTissueFindingPresetUiModel): SoftTissueFindingPresetUiModel {
    out = automapper.map('SoftTissueFindingPreset_HandMRT_ApiModel', 'SoftTissueFindingPreset_HandMRT_UiModel', source);

    out.signalTypeT1w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalTypeT1w);
    out.signalTypeT2w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalTypeT2w);

    return out;
  }
}
