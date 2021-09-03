import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { CerebrospinalFluidSpaceFindingApiModel } from '@models/headMRT/api/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-api.model';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class CerebrospinalFluidSpaceFindingMapper
  implements IMapper<CerebrospinalFluidSpaceFindingApiModel, CerebrospinalFluidSpaceFindingUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('CerebrospinalFluidSpaceFinding_HeadMRT_UiModel', 'CerebrospinalFluidSpaceFinding_HeadMRT_ApiModel')
      .convertToType(CerebrospinalFluidSpaceFindingApiModel);
    automapper
      .createMap('CerebrospinalFluidSpaceFinding_HeadMRT_ApiModel', 'CerebrospinalFluidSpaceFinding_HeadMRT_UiModel')
      .convertToType(CerebrospinalFluidSpaceFindingUiModel);
  }

  mapToAPI(
    source: CerebrospinalFluidSpaceFindingUiModel,
    out: CerebrospinalFluidSpaceFindingApiModel
  ): CerebrospinalFluidSpaceFindingApiModel {
    out = automapper.map('CerebrospinalFluidSpaceFinding_HeadMRT_UiModel', 'CerebrospinalFluidSpaceFinding_HeadMRT_ApiModel', source);

    out.t1WSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignal);
    out.t2WSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignal);
    out.flairSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignal);

    return out;
  }

  mapToUI(
    source: CerebrospinalFluidSpaceFindingApiModel,
    out: CerebrospinalFluidSpaceFindingUiModel
  ): CerebrospinalFluidSpaceFindingUiModel {
    out = automapper.map('CerebrospinalFluidSpaceFinding_HeadMRT_ApiModel', 'CerebrospinalFluidSpaceFinding_HeadMRT_UiModel', source);

    out.t1WSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignal);
    out.t2WSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignal);
    out.flairSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignal);

    return out;
  }
}
