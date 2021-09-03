import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { MeningesPresetApiModel } from '@models/headMRT/api/meninges/meninges-preset-api.model';
import { MeningesPresetUiModel } from '@models/headMRT/ui/meninges/meninges-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class MeningesPresetMapper implements IMapper<MeningesPresetApiModel, MeningesPresetUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper.createMap('MeningesPreset_HeadMRT_ApiModel', 'MeningesPreset_HeadMRT_UiModel').convertToType(MeningesPresetUiModel);
    automapper.createMap('MeningesPreset_HeadMRT_UiModel', 'MeningesPreset_HeadMRT_ApiModel').convertToType(MeningesPresetApiModel);
  }

  mapToAPI(source: MeningesPresetUiModel, out: MeningesPresetApiModel): MeningesPresetApiModel {
    out = automapper.map('MeningesPreset_HeadMRT_UiModel', 'MeningesPreset_HeadMRT_ApiModel', source);

    out.t1WSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignal);
    out.t2WSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignal);
    out.flairSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignal);

    return out;
  }

  mapToUI(source: MeningesPresetApiModel, out: MeningesPresetUiModel): MeningesPresetUiModel {
    out = automapper.map('MeningesPreset_HeadMRT_ApiModel', 'MeningesPreset_HeadMRT_UiModel', source);

    out.t1WSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignal);
    out.t2WSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignal);
    out.flairSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignal);

    return out;
  }
}
