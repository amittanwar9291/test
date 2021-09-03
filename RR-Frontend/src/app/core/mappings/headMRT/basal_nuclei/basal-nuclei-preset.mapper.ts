import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY, THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { BasalNucleiPresetApiModel } from '@models/headMRT/api/basal_nuclei/basal-nuclei-preset-api.model';
import { BasalNucleiPresetUiModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BasalNucleiPresetMapper implements IMapper<BasalNucleiPresetApiModel, BasalNucleiPresetUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper.createMap('BasalNucleiPreset_HeadMRT_ApiModel', 'BasalNucleiPreset_HeadMRT_UiModel').convertToType(BasalNucleiPresetUiModel);
    automapper
      .createMap('BasalNucleiPreset_HeadMRT_UiModel', 'BasalNucleiPreset_HeadMRT_ApiModel')
      .convertToType(BasalNucleiPresetApiModel);
  }

  mapToAPI(source: BasalNucleiPresetUiModel, out: BasalNucleiPresetApiModel): BasalNucleiPresetApiModel {
    out = automapper.map('BasalNucleiPreset_HeadMRT_UiModel', 'BasalNucleiPreset_HeadMRT_ApiModel', source);

    out.t1wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    out.dwiSignalType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.dwiSignalType);
    out.adcSignalType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.adcSignalType);

    return out;
  }

  mapToUI(source: BasalNucleiPresetApiModel, out: BasalNucleiPresetUiModel): BasalNucleiPresetUiModel {
    out = automapper.map('BasalNucleiPreset_HeadMRT_ApiModel', 'BasalNucleiPreset_HeadMRT_UiModel', source);

    out.t1wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    out.dwiSignalType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.dwiSignalType);
    out.adcSignalType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.adcSignalType);

    return out;
  }
}
