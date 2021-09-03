import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';

import { SpatialRequirementFindingPresetApiModel } from '@models/cardioMRT/api/spatial-requirement/spatial-requirement-finding-preset-api.model';
import { SpatialRequirementFindingPresetUiModel } from '@models/cardioMRT/ui/spatial-requirement/spatial-requirement-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SpatialRequirementFindingPresetMapper
  implements IMapper<SpatialRequirementFindingPresetApiModel, SpatialRequirementFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('SpatialRequirementFindingPreset_CardioMRT_ApiModel', 'SpatialRequirementFindingPreset_CardioMRT_UiModel')
      .convertToType(SpatialRequirementFindingPresetUiModel);
    automapper
      .createMap('SpatialRequirementFindingPreset_CardioMRT_ApiModel', 'SpatialRequirementFindingPreset_CardioMRT_ApiModel')
      .convertToType(SpatialRequirementFindingPresetApiModel);
  }

  mapToAPI(
    source: SpatialRequirementFindingPresetUiModel,
    out: SpatialRequirementFindingPresetApiModel
  ): SpatialRequirementFindingPresetApiModel {
    out = automapper.map('SpatialRequirementFindingPreset_CardioMRT_UiModel', 'SpatialRequirementFindingPreset_CardioMRT_ApiModel', source);

    out.signalT1wCharacteristics = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT1wCharacteristics);
    out.signalT2wCharacteristics = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT2wCharacteristics);

    return out;
  }

  mapToUI(
    source: SpatialRequirementFindingPresetApiModel,
    out: SpatialRequirementFindingPresetUiModel
  ): SpatialRequirementFindingPresetUiModel {
    out = automapper.map('SpatialRequirementFindingPreset_CardioMRT_ApiModel', 'SpatialRequirementFindingPreset_CardioMRT_UiModel', source);

    out.signalT1wCharacteristics = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT1wCharacteristics);
    out.signalT2wCharacteristics = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT2wCharacteristics);

    return out;
  }
}
