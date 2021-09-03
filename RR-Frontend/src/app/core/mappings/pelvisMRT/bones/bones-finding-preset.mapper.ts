import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { BonesFindingPresetApiModel } from '@models/pelvisMRT/api/bones/bones-finding-preset-api.model';
import { BonesFindingPresetUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingPresetMapper implements IMapper<BonesFindingPresetApiModel, BonesFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('BonesFindingPreset_PelvisMRT_ApiModel', 'BonesFindingPreset_PelvisMRT_UiModel')
      .convertToType(BonesFindingPresetUiModel);
    automapper
      .createMap('BonesFindingPreset_PelvisMRT_UiModel', 'BonesFindingPreset_PelvisMRT_ApiModel')
      .convertToType(BonesFindingPresetApiModel);
  }

  mapToAPI(source: BonesFindingPresetUiModel, out: BonesFindingPresetApiModel): BonesFindingPresetApiModel {
    out = automapper.map('BonesFindingPreset_PelvisMRT_UiModel', 'BonesFindingPreset_PelvisMRT_ApiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    return out;
  }

  mapToUI(source: BonesFindingPresetApiModel, out: BonesFindingPresetUiModel): BonesFindingPresetUiModel {
    out = automapper.map('BonesFindingPreset_PelvisMRT_ApiModel', 'BonesFindingPreset_PelvisMRT_UiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    return out;
  }
}
