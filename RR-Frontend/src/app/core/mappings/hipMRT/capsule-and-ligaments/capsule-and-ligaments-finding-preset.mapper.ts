import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';

import { CapsuleAndLigamentsFindingPresetApiModel } from '@models/hipMRT/api/capsule-and-ligaments/capsule-and-ligaments-finding-preset-api.model';
import { CapsuleAndLigamentsFindingPresetUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class CapsuleAndLigamentsFindingPresetMapper
  implements IMapper<CapsuleAndLigamentsFindingPresetApiModel, CapsuleAndLigamentsFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    {
      automapper
        .createMap('CapsuleAndLigamentsFindingPreset_HipMRT_ApiModel', 'CapsuleAndLigamentsFindingPreset_HipMRT_UiModel')
        .convertToType(CapsuleAndLigamentsFindingPresetUiModel);
      automapper
        .createMap('CapsuleAndLigamentsFindingPreset_HipMRT_UiModel', 'CapsuleAndLigamentsFindingPreset_HipMRT_ApiModel')
        .convertToType(CapsuleAndLigamentsFindingPresetApiModel);
    }
  }

  mapToAPI(
    source: CapsuleAndLigamentsFindingPresetUiModel,
    out: CapsuleAndLigamentsFindingPresetApiModel
  ): CapsuleAndLigamentsFindingPresetApiModel {
    out = automapper.map('CapsuleAndLigamentsFindingPreset_HipMRT_UiModel', 'CapsuleAndLigamentsFindingPreset_HipMRT_ApiModel', source);
    out.t1wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignal);
    return out;
  }
  mapToUI(
    source: CapsuleAndLigamentsFindingPresetApiModel,
    out: CapsuleAndLigamentsFindingPresetUiModel
  ): CapsuleAndLigamentsFindingPresetUiModel {
    out = automapper.map('CapsuleAndLigamentsFindingPreset_HipMRT_ApiModel', 'CapsuleAndLigamentsFindingPreset_HipMRT_UiModel', source);
    out.t1wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignal);
    return out;
  }
}
