import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { BonesFindingPresetUiModel } from '@models/neckMRT/ui/bones/bones-finding-preset-ui.model';
import { BonesFindingPresetApiModel } from '@models/neckMRT/api/bones/bones-finding-preset-api.model';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingPresetMapper implements IMapper<BonesFindingPresetApiModel, BonesFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('BonesFindingPreset_NeckMRT_UiModel', 'BonesFindingPreset_NeckMRT_ApiModel')
      .convertToType(BonesFindingPresetApiModel);

    automapper
      .createMap('BonesFindingPreset_NeckMRT_ApiModel', 'BonesFindingPreset_NeckMRT_UiModel')
      .convertToType(BonesFindingPresetUiModel);
  }

  mapToAPI(source: BonesFindingPresetUiModel, out: BonesFindingPresetApiModel): BonesFindingPresetApiModel {
    out = automapper.map('BonesFindingPreset_NeckMRT_UiModel', 'BonesFindingPreset_NeckMRT_ApiModel', source);

    out.t1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2w);

    return out;
  }

  mapToUI(source: BonesFindingPresetApiModel, out: BonesFindingPresetUiModel): BonesFindingPresetUiModel {
    out = automapper.map('BonesFindingPreset_NeckMRT_ApiModel', 'BonesFindingPreset_NeckMRT_UiModel', source);

    out.t1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2w);

    return out;
  }
}
