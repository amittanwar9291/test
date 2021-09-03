import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { SoftTissueFindingPresetApiModel } from '@models/elbowMRT/api/soft-tissue/soft-tissue-finding-preset-api.model';
import { SoftTissueFindingBaseUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-base-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueFindingPresetMapper implements IMapper<SoftTissueFindingPresetApiModel, SoftTissueFindingBaseUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper
      .createMap('SoftTissueFindingPreset_ElbowMRT_ApiModel', 'SoftTissueFindingPreset_ElbowMRT_UiModel')
      .convertToType(SoftTissueFindingBaseUiModel);
    automapper
      .createMap('SoftTissueFindingPreset_ElbowMRT_UiModel', 'SoftTissueFindingPreset_ElbowMRT_ApiModel')
      .convertToType(SoftTissueFindingPresetApiModel);
  }

  mapToAPI(source: SoftTissueFindingBaseUiModel, out: SoftTissueFindingPresetApiModel): SoftTissueFindingPresetApiModel {
    out = automapper.map('SoftTissueFindingPreset_ElbowMRT_UiModel', 'SoftTissueFindingPreset_ElbowMRT_ApiModel', source);

    out.t1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2w);

    return out;
  }

  mapToUI(source: SoftTissueFindingPresetApiModel, out: SoftTissueFindingBaseUiModel): SoftTissueFindingBaseUiModel {
    out = automapper.map('SoftTissueFindingPreset_ElbowMRT_ApiModel', 'SoftTissueFindingPreset_ElbowMRT_UiModel', source);

    out.t1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2w);

    return out;
  }
}
