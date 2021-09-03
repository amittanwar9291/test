import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { KneeBonesFindingPresetUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-preset-ui.model';
import { KneeBonesFindingPresetApiModel } from '@models/kneeMRT/api/bones/knee-bones-finding-preset-api.model';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

const SIGNAL_ARRAY = ['None', 'Hypo', 'LowHypo', 'Iso', 'LowHyper', 'Hyper'];

@Injectable({
  providedIn: 'root'
})
export class KneeBonesFindingPresetMapper implements IMapper<KneeBonesFindingPresetApiModel, KneeBonesFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('KneeBonesFindingPreset_KneeMRT_ApiModel', 'KneeBonesFindingPreset_KneeMRT_UiModel')
      .convertToType(KneeBonesFindingPresetUiModel);
    automapper
      .createMap('KneeBonesFindingPreset_KneeMRT_UiModel', 'KneeBonesFindingPreset_KneeMRT_ApiModel')
      .convertToType(KneeBonesFindingPresetApiModel);
  }

  mapToAPI(source: KneeBonesFindingPresetUiModel, out: KneeBonesFindingPresetApiModel): KneeBonesFindingPresetApiModel {
    out = automapper.map('KneeBonesFindingPreset_KneeMRT_UiModel', 'KneeBonesFindingPreset_KneeMRT_ApiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToAPI(SIGNAL_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(SIGNAL_ARRAY, source.signalT2w);

    return out;
  }

  mapToUI(source: KneeBonesFindingPresetApiModel, out: KneeBonesFindingPresetUiModel): KneeBonesFindingPresetUiModel {
    out = automapper.map('KneeBonesFindingPreset_KneeMRT_ApiModel', 'KneeBonesFindingPreset_KneeMRT_UiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToUI(SIGNAL_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(SIGNAL_ARRAY, source.signalT2w);

    return out;
  }
}
