import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { DiagnosisPresetsApiModel } from '@models/mammaMRT/api/diagnosis/diagnosis-presets-api.model';
import { DiagnosisPresetUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-preset-ui.model';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisPresetsMapper implements IMapper<DiagnosisPresetsApiModel, DiagnosisPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper.createMap('DiagnosisPresets_MammaMRT_UiModel', 'DiagnosisPresets_MammaMRT_ApiModel').convertToType(DiagnosisPresetsApiModel);

    automapper.createMap('DiagnosisPresets_MammaMRT_ApiModel', 'DiagnosisPresets_MammaMRT_UiModel').convertToType(DiagnosisPresetUiModel);
  }

  mapToAPI(source: DiagnosisPresetUiModel, out: DiagnosisPresetsApiModel): DiagnosisPresetsApiModel {
    out = automapper.map('DiagnosisPresets_MammaMRT_UiModel', 'DiagnosisPresets_MammaMRT_ApiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    return out;
  }

  mapToUI(source: DiagnosisPresetsApiModel, out: DiagnosisPresetUiModel): DiagnosisPresetUiModel {
    out = automapper.map('DiagnosisPresets_MammaMRT_ApiModel', 'DiagnosisPresets_MammaMRT_UiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    return out;
  }
}
