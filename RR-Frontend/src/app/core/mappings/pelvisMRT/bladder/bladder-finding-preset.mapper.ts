import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { BladderFindingPresetApiModel } from '@models/pelvisMRT/api/bladder/bladder-finding-preset-api.model';
import { BladderFindingPresetUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-preset-ui.model';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

@Injectable({
  providedIn: 'root'
})
export class BladderFindingPresetMapper implements IMapper<BladderFindingPresetApiModel, BladderFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('BladderFindingPreset_PelvisMRT_ApiModel', 'BladderFindingPreset_PelvisMRT_UiModel')
      .convertToType(BladderFindingPresetUiModel);
    automapper
      .createMap('BladderFindingPreset_PelvisMRT_UiModel', 'BladderFindingPreset_PelvisMRT_ApiModel')
      .convertToType(BladderFindingPresetApiModel);
  }

  mapToAPI(source: BladderFindingPresetUiModel, out: BladderFindingPresetApiModel): BladderFindingPresetApiModel {
    out = automapper.map('BladderFindingPreset_PelvisMRT_UiModel', 'BladderFindingPreset_PelvisMRT_ApiModel', source);

    out.t1wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);

    return out;
  }

  mapToUI(source: BladderFindingPresetApiModel, out: BladderFindingPresetUiModel): BladderFindingPresetUiModel {
    out = automapper.map('BladderFindingPreset_PelvisMRT_ApiModel', 'BladderFindingPreset_PelvisMRT_UiModel', source);

    out.t1wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);

    return out;
  }
}
