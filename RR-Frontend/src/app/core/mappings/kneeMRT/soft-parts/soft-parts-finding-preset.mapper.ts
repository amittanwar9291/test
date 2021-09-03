import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { SoftPartsFindingPresetApiModel } from '@models/kneeMRT/api/soft-parts/soft-parts-finding-preset-api.model';
import { SoftPartsFindingPresetUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-preset-ui.model';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class SoftPartsFindingPresetMapper implements IMapper<SoftPartsFindingPresetApiModel, SoftPartsFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('SoftPartsFindingPreset_KneeMRT_UiModel', 'SoftPartsFindingPreset_KneeMRT_ApiModel')
      .convertToType(SoftPartsFindingPresetApiModel);
    automapper
      .createMap('SoftPartsFindingPreset_KneeMRT_ApiModel', 'SoftPartsFindingPreset_KneeMRT_UiModel')
      .convertToType(SoftPartsFindingPresetUiModel);
  }

  mapToAPI(source: SoftPartsFindingPresetUiModel, out: SoftPartsFindingPresetApiModel): SoftPartsFindingPresetApiModel {
    out = automapper.map('SoftPartsFindingPreset_KneeMRT_UiModel', 'SoftPartsFindingPreset_KneeMRT_ApiModel', source);

    out.t1w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2w);

    return out;
  }

  mapToUI(source: SoftPartsFindingPresetApiModel, out: SoftPartsFindingPresetUiModel): SoftPartsFindingPresetUiModel {
    out = automapper.map('SoftPartsFindingPreset_KneeMRT_ApiModel', 'SoftPartsFindingPreset_KneeMRT_UiModel', source);

    out.t1w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2w);

    return out;
  }
}
