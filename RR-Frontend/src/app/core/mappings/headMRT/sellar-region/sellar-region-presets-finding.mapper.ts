import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { SellarRegionFindingPresetApiModel } from '@models/headMRT/api/sellar-region/sellar-region-finding-preset-api.model';
import { SellarRegionFindingPresetUiModel } from '@models/headMRT/ui/sellar-region/sellar-region-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SellarRegionPresetsFindingMapper implements IMapper<SellarRegionFindingPresetApiModel, SellarRegionFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('SellarRegionFindingPreset_HeadMRT_UiModel', 'SellarRegionFindingPreset_HeadMRT_ApiModel')
      .convertToType(SellarRegionFindingPresetApiModel);
    automapper
      .createMap('SellarRegionFindingPreset_HeadMRT_ApiModel', 'SellarRegionFindingPreset_HeadMRT_UiModel')
      .convertToType(SellarRegionFindingPresetUiModel);
  }

  mapToAPI(source: SellarRegionFindingPresetUiModel, out: SellarRegionFindingPresetApiModel): SellarRegionFindingPresetApiModel {
    out = automapper.map('SellarRegionFindingPreset_HeadMRT_UiModel', 'SellarRegionFindingPreset_HeadMRT_ApiModel', source);

    out.t1wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    return out;
  }

  mapToUI(source: SellarRegionFindingPresetApiModel, out: SellarRegionFindingPresetUiModel): SellarRegionFindingPresetUiModel {
    out = automapper.map('SellarRegionFindingPreset_HeadMRT_ApiModel', 'SellarRegionFindingPreset_HeadMRT_UiModel', source);

    out.t1wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    return out;
  }
}
