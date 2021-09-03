import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';

import { SpineSoftTissuesFindingPresetApiModel } from '@models/spineMRT/api/soft-tissues/spine-soft-tissues-finding-preset-api.model';
import { SpineSoftTissuesFindingPresetUiModel } from '@models/spineMRT/ui/soft-tissues/spine-soft-tissues-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SpineSoftTissuesFindingPresetMapper
  implements IMapper<SpineSoftTissuesFindingPresetApiModel, SpineSoftTissuesFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('SpineSoftTissuesFindingPreset_SpineMRT_ApiModel', 'SpineSoftTissuesFindingPreset_SpineMRT_UiModel')
      .convertToType(SpineSoftTissuesFindingPresetUiModel);
    automapper
      .createMap('SpineSoftTissuesFindingPreset_SpineMRT_UiModel', 'SpineSoftTissuesFindingPreset_SpineMRT_ApiModel')
      .convertToType(SpineSoftTissuesFindingPresetApiModel);
  }

  mapToAPI(
    source: SpineSoftTissuesFindingPresetUiModel,
    out: SpineSoftTissuesFindingPresetApiModel
  ): SpineSoftTissuesFindingPresetApiModel {
    out = automapper.map('SpineSoftTissuesFindingPreset_SpineMRT_UiModel', 'SpineSoftTissuesFindingPreset_SpineMRT_ApiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT2w);

    return out;
  }

  mapToUI(source: SpineSoftTissuesFindingPresetApiModel, out: SpineSoftTissuesFindingPresetUiModel): SpineSoftTissuesFindingPresetUiModel {
    out = automapper.map('SpineSoftTissuesFindingPreset_SpineMRT_ApiModel', 'SpineSoftTissuesFindingPreset_SpineMRT_UiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT2w);

    return out;
  }
}
