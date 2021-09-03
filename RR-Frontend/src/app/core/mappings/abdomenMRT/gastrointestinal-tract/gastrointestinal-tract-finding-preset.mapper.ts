import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';

import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { GastrointestinalTractFindingPresetApiModel } from '@models/abdomenMRT/api/gastrointestinal-tract/gastrointestinal-tract-finding-preset-api.model';
import { GastrointestinalTractFindingPresetUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-preset-ui.model';
@Injectable({
  providedIn: 'root'
})
export class GastrointestinalTractFindingPresetMapper
  implements IMapper<GastrointestinalTractFindingPresetApiModel, GastrointestinalTractFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('GastrointestinalTractFindingPreset_AbdomenMRT_UiModel', 'GastrointestinalTractFindingPreset_AbdomenMRT_ApiModel')
      .convertToType(GastrointestinalTractFindingPresetApiModel);
    automapper
      .createMap('GastrointestinalTractFindingPreset_AbdomenMRT_ApiModel', 'GastrointestinalTractFindingPreset_AbdomenMRT_UiModel')
      .convertToType(GastrointestinalTractFindingPresetUiModel);
  }
  mapToAPI(
    source: GastrointestinalTractFindingPresetUiModel,
    out: GastrointestinalTractFindingPresetApiModel
  ): GastrointestinalTractFindingPresetApiModel {
    out = automapper.map(
      'GastrointestinalTractFindingPreset_AbdomenMRT_UiModel',
      'GastrointestinalTractFindingPreset_AbdomenMRT_ApiModel',
      source
    );
    out.t1WSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignalType);
    out.t2WSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignalType);
    return out;
  }
  mapToUI(
    source: GastrointestinalTractFindingPresetApiModel,
    out: GastrointestinalTractFindingPresetUiModel
  ): GastrointestinalTractFindingPresetUiModel {
    out = automapper.map(
      'GastrointestinalTractFindingPreset_AbdomenMRT_ApiModel',
      'GastrointestinalTractFindingPreset_AbdomenMRT_UiModel',
      source
    );
    out.t1WSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignalType);
    out.t2WSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignalType);
    return out;
  }
}
