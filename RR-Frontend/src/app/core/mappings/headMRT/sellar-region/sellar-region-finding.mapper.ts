import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SellarRegionFindingApiModel } from '@models/headMRT/api/sellar-region/sellar-region-finding-api.model';
import { SellarRegionFindingUiModel } from '@models/headMRT/ui/sellar-region/sellar-region-finding-ui.model';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

@Injectable({
  providedIn: 'root'
})
export class SellarRegionFindingMapper implements IMapper<SellarRegionFindingApiModel, SellarRegionFindingUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('SellarRegionFinding_HeadMRT_UiModel', 'SellarRegionFinding_HeadMRT_ApiModel')
      .convertToType(SellarRegionFindingApiModel);
    automapper
      .createMap('SellarRegionFinding_HeadMRT_ApiModel', 'SellarRegionFinding_HeadMRT_UiModel')
      .convertToType(SellarRegionFindingUiModel);
  }

  mapToAPI(source: SellarRegionFindingUiModel, out: SellarRegionFindingApiModel): SellarRegionFindingApiModel {
    out = automapper.map('SellarRegionFinding_HeadMRT_UiModel', 'SellarRegionFinding_HeadMRT_ApiModel', source);

    out.t1wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    return out;
  }

  mapToUI(source: SellarRegionFindingApiModel, out: SellarRegionFindingUiModel): SellarRegionFindingUiModel {
    out = automapper.map('SellarRegionFinding_HeadMRT_ApiModel', 'SellarRegionFinding_HeadMRT_UiModel', source);

    out.t1wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    return out;
  }
}
