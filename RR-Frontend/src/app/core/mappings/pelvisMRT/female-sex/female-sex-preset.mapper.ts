import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { FemaleSexPresetApiModel } from '@models/pelvisMRT/api/female-sex/female-sex-preset-api.model';
import { FemaleSexPresetUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class FemaleSexPresetMapper implements IMapper<FemaleSexPresetApiModel, FemaleSexPresetUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper.createMap('FemaleSexPreset_PelvisMRT_ApiModel', 'FemaleSexPreset_PelvisMRT_UiModel').convertToType(FemaleSexPresetUiModel);
    automapper.createMap('FemaleSexPreset_PelvisMRT_UiModel', 'FemaleSexPreset_PelvisMRT_ApiModel').convertToType(FemaleSexPresetApiModel);
  }

  mapToAPI(source: FemaleSexPresetUiModel, out: FemaleSexPresetApiModel): FemaleSexPresetApiModel {
    out = automapper.map('FemaleSexPreset_PelvisMRT_UiModel', 'FemaleSexPreset_PelvisMRT_ApiModel', source);

    out.t1wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);
    out.additionalT1wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.additionalT1wSignal);
    return out;
  }

  mapToUI(source: FemaleSexPresetApiModel, out: FemaleSexPresetUiModel): FemaleSexPresetUiModel {
    out = automapper.map('FemaleSexPreset_PelvisMRT_ApiModel', 'FemaleSexPreset_PelvisMRT_UiModel', source);

    out.t1wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);
    out.additionalT1wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.additionalT1wSignal);

    return out;
  }
}
