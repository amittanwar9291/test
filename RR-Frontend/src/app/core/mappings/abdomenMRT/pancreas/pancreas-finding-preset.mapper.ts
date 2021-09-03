import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { PancreasFindingPresetUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-preset-ui.model';
import { PancreasFindingPresetApiModel } from '@models/abdomenMRT/api/pancreas/pancreas-finding-preset-api.model';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class PancreasFindingPresetMapper implements IMapper<PancreasFindingPresetApiModel, PancreasFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('PancreasFindingPreset_AbdomenMRT_ApiModel', 'PancreasFindingPreset_AbdomenMRT_UiModel')
      .convertToType(PancreasFindingPresetUiModel);
    automapper
      .createMap('PancreasFindingPreset_AbdomenMRT_UiModel', 'PancreasFindingPreset_AbdomenMRT_ApiModel')
      .convertToType(PancreasFindingPresetApiModel);
  }

  mapToAPI(source: PancreasFindingPresetUiModel, out: PancreasFindingPresetApiModel): PancreasFindingPresetApiModel {
    out = automapper.map('PancreasFindingPreset_AbdomenMRT_UiModel', 'PancreasFindingPreset_AbdomenMRT_ApiModel', source);

    out.signalT1wType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1wType);
    out.signalT2wType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2wType);

    return out;
  }

  mapToUI(source: PancreasFindingPresetApiModel, out: PancreasFindingPresetUiModel): PancreasFindingPresetUiModel {
    out = automapper.map('PancreasFindingPreset_AbdomenMRT_ApiModel', 'PancreasFindingPreset_AbdomenMRT_UiModel', source);

    out.signalT1wType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1wType);
    out.signalT2wType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2wType);

    return out;
  }
}
