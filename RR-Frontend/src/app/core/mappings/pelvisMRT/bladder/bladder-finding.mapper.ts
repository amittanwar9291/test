import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { BladderFindingApiModel } from '@models/pelvisMRT/api/bladder/bladder-finding-api.model';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

@Injectable({
  providedIn: 'root'
})
export class BladderFindingMapper implements IMapper<BladderFindingApiModel, BladderFindingUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper.createMap('BladderFinding_PelvisMRT_ApiModel', 'BladderFinding_PelvisMRT_UiModel').convertToType(BladderFindingUiModel);
    automapper.createMap('BladderFinding_PelvisMRT_UiModel', 'BladderFinding_PelvisMRT_ApiModel').convertToType(BladderFindingApiModel);
  }

  mapToAPI(source: BladderFindingUiModel, out: BladderFindingApiModel): BladderFindingApiModel {
    out = automapper.map('BladderFinding_PelvisMRT_UiModel', 'BladderFinding_PelvisMRT_ApiModel', source);

    out.t1wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);

    return out;
  }

  mapToUI(source: BladderFindingApiModel, out: BladderFindingUiModel): BladderFindingUiModel {
    out = automapper.map('BladderFinding_PelvisMRT_ApiModel', 'BladderFinding_PelvisMRT_UiModel', source);

    out.t1wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);

    return out;
  }
}
