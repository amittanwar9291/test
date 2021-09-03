import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { CortexFindingApiModel } from '@models/headMRT/api/cortex/cortex-finding-api.model';
import { CortexFindingUiModel } from '@models/headMRT/ui/cortex/cortex-finding-ui.model';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY, THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

@Injectable({
  providedIn: 'root'
})
export class CortexFindingMapper implements IMapper<CortexFindingApiModel, CortexFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper.createMap('CortexFinding_HeadMRT_UiModel', 'CortexFinding_HeadMRT_ApiModel').convertToType(CortexFindingApiModel);
    automapper.createMap('CortexFinding_HeadMRT_ApiModel', 'CortexFinding_HeadMRT_UiModel').convertToType(CortexFindingUiModel);
  }

  mapToAPI(source: CortexFindingUiModel, out: CortexFindingApiModel): CortexFindingApiModel {
    out = automapper.map('CortexFinding_HeadMRT_UiModel', 'CortexFinding_HeadMRT_ApiModel', source);
    out.flairWSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairWSignal);
    out.t1WSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignal);
    out.t2WSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignal);
    out.dwiSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.dwiSignal);
    out.adcSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.adcSignal);
    out.cortexLocations = this.enumMapper.mapToString(source.cortexLocations);
    return out;
  }

  mapToUI(source: CortexFindingApiModel, out: CortexFindingUiModel): CortexFindingUiModel {
    out = automapper.map('CortexFinding_HeadMRT_ApiModel', 'CortexFinding_HeadMRT_UiModel', source);
    out.flairWSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairWSignal);
    out.t1WSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignal);
    out.t2WSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignal);
    out.dwiSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.dwiSignal);
    out.adcSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.adcSignal);
    this.enumMapper.mapToObject(source.cortexLocations, out.cortexLocations);
    return out;
  }
}
