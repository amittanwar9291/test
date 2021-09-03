import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { PharynxFindingPresetUiModel } from '@models/neckMRT/ui/pharynx/pharynx-finding-preset-ui.model';
import { PharynxFindingPresetApiModel } from '@models/neckMRT/api/pharynx/pharynx-finding-preset-api.model';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

@Injectable({
  providedIn: 'root'
})
export class PharynxFindingPresetMapper implements IMapper<PharynxFindingPresetApiModel, PharynxFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('PharynxFindingPreset_NeckMRT_UiModel', 'PharynxFindingPreset_NeckMRT_ApiModel')
      .convertToType(PharynxFindingPresetApiModel);

    automapper
      .createMap('PharynxFindingPreset_NeckMRT_ApiModel', 'PharynxFindingPreset_NeckMRT_UiModel')
      .convertToType(PharynxFindingPresetUiModel);
  }

  mapToAPI(source: PharynxFindingPresetUiModel, out: PharynxFindingPresetApiModel): PharynxFindingPresetApiModel {
    out = automapper.map('PharynxFindingPreset_NeckMRT_UiModel', 'PharynxFindingPreset_NeckMRT_ApiModel', source);

    out.signalT1wType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1wType);
    out.signalT2wType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2wType);

    return out;
  }

  mapToUI(source: PharynxFindingPresetApiModel, out: PharynxFindingPresetUiModel): PharynxFindingPresetUiModel {
    out = automapper.map('PharynxFindingPreset_NeckMRT_ApiModel', 'PharynxFindingPreset_NeckMRT_UiModel', source);

    out.signalT1wType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1wType);
    out.signalT2wType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2wType);

    return out;
  }
}
