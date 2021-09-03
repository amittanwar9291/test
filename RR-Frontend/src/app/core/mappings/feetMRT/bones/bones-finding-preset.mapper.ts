import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { BonesFindingPresetApiModel } from '@models/feetMRT/api/bones/bones-finding-preset-api.model';
import { BonesFindingPresetUiModel } from '@models/feetMRT/ui/bones/bones-finding-preset-ui.model';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingPresetMapper implements IMapper<BonesFindingPresetApiModel, BonesFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper
      .createMap('BonesFindingPreset_FeetMRT_ApiModel', 'BonesFindingPreset_FeetMRT_UiModel')
      .convertToType(BonesFindingPresetUiModel);
    automapper
      .createMap('BonesFindingPreset_FeetMRT_UiModel', 'BonesFindingPreset_FeetMRT_ApiModel')
      .convertToType(BonesFindingPresetApiModel);
  }

  mapToAPI(source: BonesFindingPresetUiModel, out: BonesFindingPresetApiModel): BonesFindingPresetApiModel {
    out = automapper.map('BonesFindingPreset_FeetMRT_UiModel', 'BonesFindingPreset_FeetMRT_ApiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    return out;
  }

  mapToUI(source: BonesFindingPresetApiModel, out: BonesFindingPresetUiModel): BonesFindingPresetUiModel {
    out = automapper.map('BonesFindingPreset_FeetMRT_ApiModel', 'BonesFindingPreset_FeetMRT_UiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    return out;
  }
}
