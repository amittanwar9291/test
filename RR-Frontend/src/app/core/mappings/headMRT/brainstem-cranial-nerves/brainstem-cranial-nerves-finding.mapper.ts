import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY, THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';

import { BrainstemCranialNervesFindingApiModel } from '@models/headMRT/api/brainstem-cranial-nerves/brainstem-cranial-nerves-finding-api.model';
import { BrainstemCranialNervesFindingUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BrainstemCranialNervesFindingMapper
  implements IMapper<BrainstemCranialNervesFindingApiModel, BrainstemCranialNervesFindingUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('BrainstemCranialNervesFinding_HeadMRT_UiModel', 'BrainstemCranialNervesFinding_HeadMRT_ApiModel')
      .convertToType(BrainstemCranialNervesFindingApiModel);
    automapper
      .createMap('BrainstemCranialNervesFinding_HeadMRT_ApiModel', 'BrainstemCranialNervesFinding_HeadMRT_UiModel')
      .convertToType(BrainstemCranialNervesFindingUiModel);
  }

  mapToAPI(
    source: BrainstemCranialNervesFindingUiModel,
    out: BrainstemCranialNervesFindingApiModel
  ): BrainstemCranialNervesFindingApiModel {
    out = automapper.map('BrainstemCranialNervesFinding_HeadMRT_UiModel', 'BrainstemCranialNervesFinding_HeadMRT_ApiModel', source);

    out.t1WSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignalType);
    out.t2WSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    out.dwiSignalType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.dwiSignalType);
    out.adcSignalType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.adcSignalType);

    return out;
  }

  mapToUI(source: BrainstemCranialNervesFindingApiModel, out: BrainstemCranialNervesFindingUiModel): BrainstemCranialNervesFindingUiModel {
    out = automapper.map('BrainstemCranialNervesFinding_HeadMRT_ApiModel', 'BrainstemCranialNervesFinding_HeadMRT_UiModel', source);

    out.t1WSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignalType);
    out.t2WSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignalType);
    out.flairSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignalType);

    out.dwiSignalType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.dwiSignalType);
    out.adcSignalType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.adcSignalType);

    return out;
  }
}
