import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { FacialSkullFindingPresetApiModel } from '@models/headMRT/api/facial-skull/facial-skull-finding-preset-api.model';
import { FacialSkullFindingPresetUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class FacialSkullPresetFindingMapper implements IMapper<FacialSkullFindingPresetApiModel, FacialSkullFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('FacialSkullFindingPreset_HeadMRT_ApiModel', 'FacialSkullFindingPreset_HeadMRT_UiModel')
      .convertToType(FacialSkullFindingPresetUiModel);
    automapper
      .createMap('FacialSkullFindingPreset_HeadMRT_UiModel', 'FacialSkullFindingPreset_HeadMRT_ApiModel')
      .convertToType(FacialSkullFindingPresetApiModel);
  }

  mapToAPI(source: FacialSkullFindingPresetUiModel, out: FacialSkullFindingPresetApiModel): FacialSkullFindingPresetApiModel {
    out = automapper.map('FacialSkullFindingPreset_HeadMRT_UiModel', 'FacialSkullFindingPreset_HeadMRT_ApiModel', source);

    out.t1wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    return out;
  }

  mapToUI(source: FacialSkullFindingPresetApiModel, out: FacialSkullFindingPresetUiModel): FacialSkullFindingPresetUiModel {
    out = automapper.map('FacialSkullFindingPreset_HeadMRT_ApiModel', 'FacialSkullFindingPreset_HeadMRT_UiModel', source);

    out.t1wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    return out;
  }
}
