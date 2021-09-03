import { IMapper } from '@interfaces/mapper.interface';
import { SoftTissueFindingPresetUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-preset-ui.model';
import { SoftTissueFindingPresetApiModel } from '@models/feetMRT/api/soft-tissue/soft-tissue-finding-preset-api.model';
import { Injectable } from '@angular/core';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueFindingPresetMapper implements IMapper<SoftTissueFindingPresetApiModel, SoftTissueFindingPresetUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper
      .createMap('SoftTissueFindingPreset_FeetMRT_ApiModel', 'SoftTissueFindingPreset_FeetMRT_UiModel')
      .convertToType(SoftTissueFindingPresetUiModel);
    automapper
      .createMap('SoftTissueFindingPreset_FeetMRT_UiModel', 'SoftTissueFindingPreset_FeetMRT_ApiModel')
      .convertToType(SoftTissueFindingPresetApiModel);
  }

  mapToAPI(source: SoftTissueFindingPresetUiModel, out: SoftTissueFindingPresetApiModel): SoftTissueFindingPresetApiModel {
    out = automapper.map('SoftTissueFindingPreset_FeetMRT_UiModel', 'SoftTissueFindingPreset_FeetMRT_ApiModel', source);
    out.signalT1w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT2w);

    return out;
  }

  mapToUI(source: SoftTissueFindingPresetApiModel, out: SoftTissueFindingPresetUiModel): SoftTissueFindingPresetUiModel {
    out = automapper.map('SoftTissueFindingPreset_FeetMRT_ApiModel', 'SoftTissueFindingPreset_FeetMRT_UiModel', source);
    out.signalT1w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT2w);

    return out;
  }
}
