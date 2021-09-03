import { Injectable } from '@angular/core';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

import { SpineMyelonFindingPresetApiModel } from '@models/spineMRT/api/myelon/spine-myelon-finding-preset-api.model';
import { SpineMyelonFindingPresetUiModel } from '@models/spineMRT/ui/myelon/presets/spine-myelon-finding-preset-ui.model';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class SpineMyelonFindingPresetMapper implements IMapper<SpineMyelonFindingPresetApiModel, SpineMyelonFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('SpineMyelonFindingPreset_SpineMRT_UiModel', 'SpineMyelonFindingPreset_SpineMRT_ApiModel')
      .convertToType(SpineMyelonFindingPresetApiModel);
    automapper
      .createMap('SpineMyelonFindingPreset_SpineMRT_ApiModel', 'SpineMyelonFindingPreset_SpineMRT_UiModel')
      .convertToType(SpineMyelonFindingPresetUiModel);
  }

  mapToAPI(source: SpineMyelonFindingPresetUiModel, out: SpineMyelonFindingPresetApiModel): SpineMyelonFindingPresetApiModel {
    out = automapper.map('SpineMyelonFindingPreset_SpineMRT_UiModel', 'SpineMyelonFindingPreset_SpineMRT_ApiModel', source);

    out.t1wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);

    return out;
  }

  mapToUI(source: SpineMyelonFindingPresetApiModel, out: SpineMyelonFindingPresetUiModel): SpineMyelonFindingPresetUiModel {
    out = automapper.map('SpineMyelonFindingPreset_SpineMRT_ApiModel', 'SpineMyelonFindingPreset_SpineMRT_UiModel', source);

    out.t1wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);
    return out;
  }
}
