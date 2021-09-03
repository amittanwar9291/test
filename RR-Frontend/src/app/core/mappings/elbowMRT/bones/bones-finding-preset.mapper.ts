import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { BonesFindingPresetApiModel } from '@models/elbowMRT/api/bones/bones-finding-preset-api.model';
import { BonesFindingPresetUiModel } from '@models/elbowMRT/ui/bones/bones-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingPresetMapper implements IMapper<BonesFindingPresetApiModel, BonesFindingPresetUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper
      .createMap('BonesFindingPreset_ElbowMRT_ApiModel', 'BonesFindingPreset_ElbowMRT_UiModel')
      .convertToType(BonesFindingPresetUiModel);
    automapper
      .createMap('BonesFindingPreset_ElbowMRT_UiModel', 'BonesFindingPreset_ElbowMRT_ApiModel')
      .convertToType(BonesFindingPresetApiModel);
  }

  mapToAPI(source: BonesFindingPresetUiModel, out: BonesFindingPresetApiModel): BonesFindingPresetApiModel {
    out = automapper.map('BonesFindingPreset_ElbowMRT_UiModel', 'BonesFindingPreset_ElbowMRT_ApiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    return out;
  }

  mapToUI(source: BonesFindingPresetApiModel, out: BonesFindingPresetUiModel): BonesFindingPresetUiModel {
    out = automapper.map('BonesFindingPreset_ElbowMRT_ApiModel', 'BonesFindingPreset_ElbowMRT_UiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    return out;
  }
}
