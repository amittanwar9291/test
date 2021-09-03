import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY, THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { BrainstemCranialNervesPresetApiModel } from '@models/headMRT/api/brainstem-cranial-nerves/brainstem-cranial-nerves-preset-api.model';
import { BrainstemCranialNervesPresetUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BrainstemCranialNervesPresetMapper
  implements IMapper<BrainstemCranialNervesPresetApiModel, BrainstemCranialNervesPresetUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper
      .createMap('BrainstemCranialNervesPreset_HeadMRT_ApiModel', 'BrainstemCranialNervesPreset_HeadMRT_UiModel')
      .convertToType(BrainstemCranialNervesPresetUiModel);
    automapper
      .createMap('BrainstemCranialNervesPreset_HeadMRT_UiModel', 'BrainstemCranialNervesPreset_HeadMRT_ApiModel')
      .convertToType(BrainstemCranialNervesPresetApiModel);
  }

  mapToAPI(source: BrainstemCranialNervesPresetUiModel, out: BrainstemCranialNervesPresetApiModel): BrainstemCranialNervesPresetApiModel {
    out = automapper.map('BrainstemCranialNervesPreset_HeadMRT_UiModel', 'BrainstemCranialNervesPreset_HeadMRT_ApiModel', source);

    out.t1WSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignalType);
    out.t2WSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    out.dwiSignalType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.dwiSignalType);

    return out;
  }

  mapToUI(source: BrainstemCranialNervesPresetApiModel, out: BrainstemCranialNervesPresetUiModel): BrainstemCranialNervesPresetUiModel {
    out = automapper.map('BrainstemCranialNervesPreset_HeadMRT_ApiModel', 'BrainstemCranialNervesPreset_HeadMRT_UiModel', source);

    out.t1WSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignalType);
    out.t2WSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    out.dwiSignalType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.dwiSignalType);

    return out;
  }
}
