import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { MaleSexPresetApiModel } from '@models/pelvisMRT/api/male-sex/male-sex-preset-api.model';
import { MaleSexPresetUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class MaleSexPresetMapper implements IMapper<MaleSexPresetApiModel, MaleSexPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper.createMap('MaleSexPreset_PelvisMRT_ApiModel', 'MaleSexPreset_PelvisMRT_UiModel').convertToType(MaleSexPresetUiModel);
    automapper.createMap('MaleSexPreset_PelvisMRT_UiModel', 'MaleSexPreset_PelvisMRT_ApiModel').convertToType(MaleSexPresetApiModel);
  }

  mapToAPI(source: MaleSexPresetUiModel, out: MaleSexPresetApiModel): MaleSexPresetApiModel {
    out = automapper.map('MaleSexPreset_PelvisMRT_UiModel', 'MaleSexPreset_PelvisMRT_ApiModel', source);
    out.scrotumMassSignalT1wSliderType = this.sliderMapper.mapSignalToAPI(
      THREE_INPUT_ARRAY_REVERSED,
      source.scrotumMassSignalT1wSliderType
    );
    out.scrotumMassSignalT2wSliderType = this.sliderMapper.mapSignalToAPI(
      THREE_INPUT_ARRAY_REVERSED,
      source.scrotumMassSignalT2wSliderType
    );
    out.signalT1wSliderType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT1wSliderType);
    out.signalT2wSliderType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT2wSliderType);
    return out;
  }

  mapToUI(source: MaleSexPresetApiModel, out: MaleSexPresetUiModel): MaleSexPresetUiModel {
    out = automapper.map('MaleSexPreset_PelvisMRT_ApiModel', 'MaleSexPreset_PelvisMRT_UiModel', source);
    out.scrotumMassSignalT1wSliderType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.scrotumMassSignalT1wSliderType);
    out.scrotumMassSignalT2wSliderType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.scrotumMassSignalT2wSliderType);
    out.signalT1wSliderType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT1wSliderType);
    out.signalT2wSliderType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT2wSliderType);
    return out;
  }
}
