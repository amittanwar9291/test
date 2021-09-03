import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

import { MusculatureUiModel } from '@models/shoulderMRT/ui/soft-parts/musculature-ui.model';
import { MusculatureApiModel } from '@models/shoulderMRT/api/soft-parts/musculature-api.model';

@Injectable({
  providedIn: 'root'
})
export class MusculatureFindingsMapper implements IMapper<MusculatureApiModel, MusculatureUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('MusculatureFindings_ShoulderMRT_UiModel', 'MusculatureFindings_ShoulderMRT_ApiModel')
      .convertToType(MusculatureApiModel);
    automapper
      .createMap('MusculatureFindings_ShoulderMRT_ApiModel', 'MusculatureFindings_ShoulderMRT_UiModel')
      .convertToType(MusculatureUiModel);
  }

  mapToAPI(source: MusculatureUiModel, out: MusculatureApiModel): MusculatureApiModel {
    out = automapper.map('MusculatureFindings_ShoulderMRT_UiModel', 'MusculatureFindings_ShoulderMRT_ApiModel', source);

    out.t1w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2w);

    return out;
  }

  mapToUI(source: MusculatureApiModel, out: MusculatureUiModel): MusculatureUiModel {
    out = automapper.map('MusculatureFindings_ShoulderMRT_ApiModel', 'MusculatureFindings_ShoulderMRT_UiModel', source);

    out.t1w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2w);

    return out;
  }
}
