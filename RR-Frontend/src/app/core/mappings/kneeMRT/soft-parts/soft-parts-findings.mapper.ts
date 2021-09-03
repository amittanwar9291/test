import { Injectable } from '@angular/core';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';

import { IMapper } from '@interfaces/mapper.interface';

import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { SoftPartsFindingApiModel } from '@models/kneeMRT/api/soft-parts/soft-parts-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class SoftPartsFindingsMapper implements IMapper<SoftPartsFindingApiModel, SoftPartsFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper.createMap('SoftPartsFinding_KneeMRT_UiModel', 'SoftPartsFinding_KneeMRT_ApiModel').convertToType(SoftPartsFindingApiModel);
    automapper.createMap('SoftPartsFinding_KneeMRT_ApiModel', 'SoftPartsFinding_KneeMRT_UiModel').convertToType(SoftPartsFindingUiModel);
  }

  mapToAPI(source: SoftPartsFindingUiModel, out: SoftPartsFindingApiModel): SoftPartsFindingApiModel {
    out = automapper.map('SoftPartsFinding_KneeMRT_UiModel', 'SoftPartsFinding_KneeMRT_ApiModel', source);

    out.location = this.enumMapper.mapToString(source.location);
    out.t1w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2w);

    return out;
  }

  mapToUI(source: SoftPartsFindingApiModel, out: SoftPartsFindingUiModel): SoftPartsFindingUiModel {
    out = automapper.map('SoftPartsFinding_KneeMRT_ApiModel', 'SoftPartsFinding_KneeMRT_UiModel', source);

    out.t1w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2w);
    this.enumMapper.mapToObject(source.location, out.location);

    return out;
  }
}
