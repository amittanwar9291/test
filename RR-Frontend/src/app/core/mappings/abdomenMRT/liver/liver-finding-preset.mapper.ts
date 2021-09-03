import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { LiverFindingPresetApiModel } from '@models/abdomenMRT/api/liver/liver-finding-preset-api.model';
import { LiverFindingPresetUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-preset-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LiverFindingPresetMapper implements IMapper<LiverFindingPresetApiModel, LiverFindingPresetUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('LiverFindingPreset_AbdomenMRT_ApiModel', 'LiverFindingPreset_AbdomenMRT_UiModel')
      .convertToType(LiverFindingPresetUiModel);
    automapper
      .createMap('LiverFindingPreset_AbdomenMRT_UiModel', 'LiverFindingPreset_AbdomenMRT_ApiModel')
      .convertToType(LiverFindingPresetApiModel);
  }

  mapToAPI(source: LiverFindingPresetUiModel, out: LiverFindingPresetApiModel): LiverFindingPresetApiModel {
    out = automapper.map('LiverFindingPreset_AbdomenMRT_UiModel', 'LiverFindingPreset_AbdomenMRT_ApiModel', source);

    out.t1WSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignalType);
    out.t2WSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignalType);
    out.earlyArterial = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.earlyArterial);
    out.lateArterial = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.lateArterial);
    out.portalVenous = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.portalVenous);
    out.venous = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.venous);
    out.liverSpecificContrastEnhancement = this.sliderMapper.mapSignalToAPI(
      FIVE_INPUT__GRADE_REVERSED_ARRAY,
      source.liverSpecificContrastEnhancement
    );

    return out;
  }

  mapToUI(source: LiverFindingPresetApiModel, out: LiverFindingPresetUiModel): LiverFindingPresetUiModel {
    out = automapper.map('LiverFindingPreset_AbdomenMRT_ApiModel', 'LiverFindingPreset_AbdomenMRT_UiModel', source);

    out.t1WSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignalType);
    out.t2WSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignalType);
    out.earlyArterial = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.earlyArterial);
    out.lateArterial = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.lateArterial);
    out.portalVenous = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.portalVenous);
    out.venous = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.venous);
    out.liverSpecificContrastEnhancement = this.sliderMapper.mapSignalToUI(
      FIVE_INPUT__GRADE_REVERSED_ARRAY,
      source.liverSpecificContrastEnhancement
    );

    return out;
  }
}
