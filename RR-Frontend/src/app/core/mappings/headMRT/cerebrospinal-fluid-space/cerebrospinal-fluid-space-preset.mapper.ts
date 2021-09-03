import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { CerebrospinalFluidSpacePresetApiModel } from '@models/headMRT/api/cerebrospinal-fluid-space/cerebrospinal-fluid-space-preset-api.model';
import { CerebrospinalFluidSpacePresetUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class CerebrospinalFluidSpacePresetMapper
  implements IMapper<CerebrospinalFluidSpacePresetApiModel, CerebrospinalFluidSpacePresetUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper
      .createMap('CerebrospinalFluidSpacePreset_HeadMRT_ApiModel', 'CerebrospinalFluidSpacePreset_HeadMRT_UiModel')
      .convertToType(CerebrospinalFluidSpacePresetUiModel);
    automapper
      .createMap('CerebrospinalFluidSpacePreset_HeadMRT_UiModel', 'CerebrospinalFluidSpacePreset_HeadMRT_ApiModel')
      .convertToType(CerebrospinalFluidSpacePresetApiModel);
  }

  mapToAPI(
    source: CerebrospinalFluidSpacePresetUiModel,
    out: CerebrospinalFluidSpacePresetApiModel
  ): CerebrospinalFluidSpacePresetApiModel {
    out = automapper.map('CerebrospinalFluidSpacePreset_HeadMRT_UiModel', 'CerebrospinalFluidSpacePreset_HeadMRT_ApiModel', source);

    out.t1WSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignal);
    out.t2WSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignal);
    out.flairSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignal);

    return out;
  }

  mapToUI(source: CerebrospinalFluidSpacePresetApiModel, out: CerebrospinalFluidSpacePresetUiModel): CerebrospinalFluidSpacePresetUiModel {
    out = automapper.map('CerebrospinalFluidSpacePreset_HeadMRT_ApiModel', 'CerebrospinalFluidSpacePreset_HeadMRT_UiModel', source);

    out.t1WSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignal);
    out.t2WSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignal);
    out.flairSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.flairSignal);

    return out;
  }
}
