import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { SpleenFindingPresetApiModel } from '@models/abdomenMRT/api/spleen/spleen-finding-preset-api.model';
import { SpleenFindingPresetUiModel } from '@models/abdomenMRT/ui/spleen/spleen-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SpleenFindingPresetMapper implements IMapper<SpleenFindingPresetApiModel, SpleenFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('SpleenFindingPreset_AbdomenMRT_UiModel', 'SpleenFindingPreset_AbdomenMRT_ApiModel')
      .convertToType(SpleenFindingPresetApiModel);
    automapper
      .createMap('SpleenFindingPreset_AbdomenMRT_ApiModel', 'SpleenFindingPreset_AbdomenMRT_UiModel')
      .convertToType(SpleenFindingPresetUiModel);
  }

  mapToAPI(source: SpleenFindingPresetUiModel, out: SpleenFindingPresetApiModel): SpleenFindingPresetApiModel {
    out = automapper.map('SpleenFindingPreset_AbdomenMRT_UiModel', 'SpleenFindingPreset_AbdomenMRT_ApiModel', source);

    out.t1w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2w);

    return out;
  }

  mapToUI(source: SpleenFindingPresetApiModel, out: SpleenFindingPresetUiModel): SpleenFindingPresetUiModel {
    out = automapper.map('SpleenFindingPreset_AbdomenMRT_ApiModel', 'SpleenFindingPreset_AbdomenMRT_UiModel', source);

    out.t1w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2w);

    return out;
  }
}
