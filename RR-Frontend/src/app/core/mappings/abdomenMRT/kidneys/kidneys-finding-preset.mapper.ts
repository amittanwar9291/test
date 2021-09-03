import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { KidneysFindingPresetUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-preset-ui.model';
import { KidneysFindingPresetApiModel } from '@models/abdomenMRT/api/kidneys/kidneys-finding-preset-api.model';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
@Injectable({
  providedIn: 'root'
})
export class KidneysFindingPresetMapper implements IMapper<KidneysFindingPresetApiModel, KidneysFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('KidneysFindingPreset_AbdomenMRT_UiModel', 'KidneysFindingPreset_AbdomenMRT_ApiModel')
      .convertToType(KidneysFindingPresetApiModel);
    automapper
      .createMap('KidneysFindingPreset_AbdomenMRT_ApiModel', 'KidneysFindingPreset_AbdomenMRT_UiModel')
      .convertToType(KidneysFindingPresetUiModel);
  }
  mapToAPI(source: KidneysFindingPresetUiModel, out: KidneysFindingPresetApiModel): KidneysFindingPresetApiModel {
    out = automapper.map('KidneysFindingPreset_AbdomenMRT_UiModel', 'KidneysFindingPreset_AbdomenMRT_ApiModel', source);
    out.t1wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignal);
    out.corticomedullaryPhase = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.corticomedullaryPhase);
    out.nephrographicPhase = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.nephrographicPhase);
    return out;
  }
  mapToUI(source: KidneysFindingPresetApiModel, out: KidneysFindingPresetUiModel): KidneysFindingPresetUiModel {
    out = automapper.map('KidneysFindingPreset_AbdomenMRT_ApiModel', 'KidneysFindingPreset_AbdomenMRT_UiModel', source);
    out.t1wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignal);
    out.corticomedullaryPhase = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.corticomedullaryPhase);
    out.nephrographicPhase = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.nephrographicPhase);
    return out;
  }
}
