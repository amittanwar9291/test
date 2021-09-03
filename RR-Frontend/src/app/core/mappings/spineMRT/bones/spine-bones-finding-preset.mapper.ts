import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SpineBonesFindingPresetUiModel } from '@models/spineMRT/ui/bones/spine-bones-finding-preset-ui.model';
import { SpineBonesFindingPresetApiModel } from '@models/spineMRT/api/bones/spine-bones-finding-preset-api.model';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class SpineBonesFindingPresetMapper implements IMapper<SpineBonesFindingPresetApiModel, SpineBonesFindingPresetUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper
      .createMap('SpineBonesFindingPreset_SpineMRT_ApiModel', 'SpineBonesFindingPreset_SpineMRT_UiModel')
      .convertToType(SpineBonesFindingPresetUiModel);
    automapper
      .createMap('SpineBonesFindingPreset_SpineMRT_UiModel', 'SpineBonesFindingPreset_SpineMRT_ApiModel')
      .convertToType(SpineBonesFindingPresetApiModel);
  }

  mapToAPI(source: SpineBonesFindingPresetUiModel, out: SpineBonesFindingPresetApiModel): SpineBonesFindingPresetApiModel {
    out = automapper.map('SpineBonesFindingPreset_SpineMRT_UiModel', 'SpineBonesFindingPreset_SpineMRT_ApiModel', source);

    out.traumaLocation = this.enumMapper.mapToString(source.traumaLocation);

    out.t1wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignal);
    out.signalSTIR = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalSTIR);

    return out;
  }

  mapToUI(source: SpineBonesFindingPresetApiModel, out: SpineBonesFindingPresetUiModel): SpineBonesFindingPresetUiModel {
    out = automapper.map('SpineBonesFindingPreset_SpineMRT_ApiModel', 'SpineBonesFindingPreset_SpineMRT_UiModel', source);

    this.enumMapper.mapToObject(source.traumaLocation, out.traumaLocation);

    out.t1wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignal);
    out.signalSTIR = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalSTIR);

    return out;
  }
}
