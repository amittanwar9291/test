import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

import { BonesDiagnosisPresetApiModel } from '@models/shoulderMRT/api/bones/bones-diagnosis-preset-api.model';
import { BonesDiagnosisPresetUiModel } from '@models/shoulderMRT/ui/bones/bones-diagnosis-preset-ui-model';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class BonesDiagnosisPresetMapper implements IMapper<BonesDiagnosisPresetApiModel, BonesDiagnosisPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('BonesDiagnosisPreset_ShoulderMRT_ApiModel', 'BonesDiagnosisPreset_ShoulderMRT_UiModel')
      .convertToType(BonesDiagnosisPresetUiModel);
    automapper
      .createMap('BonesDiagnosisPreset_ShoulderMRT_UiModel', 'BonesDiagnosisPreset_ShoulderMRT_ApiModel')
      .convertToType(BonesDiagnosisPresetApiModel);
  }

  mapToAPI(source: BonesDiagnosisPresetUiModel, out: BonesDiagnosisPresetApiModel): BonesDiagnosisPresetApiModel {
    out = automapper.map('BonesDiagnosisPreset_ShoulderMRT_UiModel', 'BonesDiagnosisPreset_ShoulderMRT_ApiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);
    return out;
  }

  mapToUI(source: BonesDiagnosisPresetApiModel, out: BonesDiagnosisPresetUiModel): BonesDiagnosisPresetUiModel {
    out = automapper.map('BonesDiagnosisPreset_ShoulderMRT_ApiModel', 'BonesDiagnosisPreset_ShoulderMRT_UiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);
    return out;
  }
}
