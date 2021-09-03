import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY, THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { CortexPresetApiModel } from '@models/headMRT/api/cortex/cortex-preset-api.model';
import { CortexPresetUiModel } from '@models/headMRT/ui/cortex/cortex-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class CortexPresetMapper implements IMapper<CortexPresetApiModel, CortexPresetUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper.createMap('CortexPreset_HeadMRT_ApiModel', 'CortexPreset_HeadMRT_UiModel').convertToType(CortexPresetUiModel);
    automapper.createMap('CortexPreset_HeadMRT_UiModel', 'CortexPreset_HeadMRT_ApiModel').convertToType(CortexPresetApiModel);
  }

  mapToAPI(source: CortexPresetUiModel, out: CortexPresetApiModel): CortexPresetApiModel {
    out = automapper.map('CortexPreset_HeadMRT_UiModel', 'CortexPreset_HeadMRT_ApiModel', source);

    out.t1WSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignal);
    out.t2WSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignal);
    out.flairWSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairWSignal);

    out.dwiSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.dwiSignal);
    out.adcSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.adcSignal);

    return out;
  }

  mapToUI(source: CortexPresetApiModel, out: CortexPresetUiModel): CortexPresetUiModel {
    out = automapper.map('CortexPreset_HeadMRT_ApiModel', 'CortexPreset_HeadMRT_UiModel', source);

    out.t1WSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignal);
    out.t2WSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignal);
    out.flairWSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairWSignal);

    out.dwiSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.dwiSignal);
    out.adcSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.adcSignal);

    return out;
  }
}
