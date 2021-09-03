import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { LarynxFindingPresetUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-preset-ui.model';
import { LarynxFindingPresetApiModel } from '@models/neckMRT/api/larynx/larynx-finding-preset-api.model';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
@Injectable({
  providedIn: 'root'
})
export class LarynxFindingPresetMapper implements IMapper<LarynxFindingPresetApiModel, LarynxFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('LarynxFindingPreset_NeckMRT_UiModel', 'LarynxFindingPreset_NeckMRT_ApiModel')
      .convertToType(LarynxFindingPresetApiModel);
    automapper
      .createMap('LarynxFindingPreset_NeckMRT_ApiModel', 'LarynxFindingPreset_NeckMRT_UiModel')
      .convertToType(LarynxFindingPresetUiModel);
  }
  mapToAPI(source: LarynxFindingPresetUiModel, out: LarynxFindingPresetApiModel): LarynxFindingPresetApiModel {
    out = automapper.map('LarynxFindingPreset_NeckMRT_UiModel', 'LarynxFindingPreset_NeckMRT_ApiModel', source);
    out.t1wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);
    return out;
  }
  mapToUI(source: LarynxFindingPresetApiModel, out: LarynxFindingPresetUiModel): LarynxFindingPresetUiModel {
    out = automapper.map('LarynxFindingPreset_NeckMRT_ApiModel', 'LarynxFindingPreset_NeckMRT_UiModel', source);
    out.t1wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);
    return out;
  }
}
