import { BonesFindingPresetApiModel } from '@models/hipMRT/api/bones/bones-finding-preset-api.model';
import { BonesFindingPresetUiModel } from '@models/hipMRT/ui/bones/bones-finding-preset-ui.model';
import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingPresetMapper implements IMapper<BonesFindingPresetApiModel, BonesFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    {
      automapper
        .createMap('BonesFindingPreset_HipMRT_ApiModel', 'BonesFindingPreset_HipMRT_UiModel')
        .convertToType(BonesFindingPresetUiModel);
      automapper
        .createMap('BonesFindingPreset_HipMRT_UiModel', 'BonesFindingPreset_HipMRT_ApiModel')
        .convertToType(BonesFindingPresetApiModel);
    }
  }

  mapToAPI(source: BonesFindingPresetUiModel, out: BonesFindingPresetApiModel): BonesFindingPresetApiModel {
    out = automapper.map('BonesFindingPreset_HipMRT_UiModel', 'BonesFindingPreset_HipMRT_ApiModel', source);

    out.t1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2w);

    return out;
  }
  mapToUI(source: BonesFindingPresetApiModel, out: BonesFindingPresetUiModel): BonesFindingPresetUiModel {
    out = automapper.map('BonesFindingPreset_HipMRT_UiModel', 'BonesFindingPreset_HipMRT_ApiModel', source);

    out.t1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2w);

    return out;
  }
}
