import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { FacialSkullFindingApiModel } from '@models/headMRT/api/facial-skull/facial-skull-finding-api.model';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

@Injectable({
  providedIn: 'root'
})
export class FacialSkullFindingMapper implements IMapper<FacialSkullFindingApiModel, FacialSkullFindingUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('FacialSkullFinding_HeadMRT_ApiModel', 'FacialSkullFinding_HeadMRT_UiModel')
      .convertToType(FacialSkullFindingUiModel);
    automapper
      .createMap('FacialSkullFinding_HeadMRT_UiModel', 'FacialSkullFinding_HeadMRT_ApiModel')
      .convertToType(FacialSkullFindingApiModel);
  }

  mapToAPI(source: FacialSkullFindingUiModel, out: FacialSkullFindingApiModel): FacialSkullFindingApiModel {
    out = automapper.map('FacialSkullFinding_HeadMRT_UiModel', 'FacialSkullFinding_HeadMRT_ApiModel', source);

    out.t1wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    return out;
  }

  mapToUI(source: FacialSkullFindingApiModel, out: FacialSkullFindingUiModel): FacialSkullFindingUiModel {
    out = automapper.map('FacialSkullFinding_HeadMRT_ApiModel', 'FacialSkullFinding_HeadMRT_UiModel', source);

    out.t1wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    return out;
  }
}
