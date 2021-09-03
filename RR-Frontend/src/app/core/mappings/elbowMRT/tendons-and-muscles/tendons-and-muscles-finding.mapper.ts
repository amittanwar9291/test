import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { TendonsAndMusclesFindingApiModel } from '@models/elbowMRT/api/tendons-and-muscles/tendons-and-muscles-finding-api.model';
import { TendonsAndMusclesFindingUiModel } from '@models/elbowMRT/ui/tendons-and-muscles/tendons-and-muscles-finding-ui.model';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class TendonsAndMusclesFindingMapper implements IMapper<TendonsAndMusclesFindingApiModel, TendonsAndMusclesFindingUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('TendonsAndMuscles_ElbowMRT_FindingUiModel', 'TendonsAndMuscles_ElbowMRT_FindingApiModel')
      .convertToType(TendonsAndMusclesFindingApiModel);
    automapper
      .createMap('TendonsAndMuscles_ElbowMRT_FindingApiModel', 'TendonsAndMuscles_ElbowMRT_FindingUiModel')
      .convertToType(TendonsAndMusclesFindingUiModel);
  }

  mapToAPI(source: TendonsAndMusclesFindingUiModel, out: TendonsAndMusclesFindingApiModel): TendonsAndMusclesFindingApiModel {
    out = automapper.map('TendonsAndMuscles_ElbowMRT_FindingUiModel', 'TendonsAndMuscles_ElbowMRT_FindingApiModel', source);
    out.signalT1w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT2w);
    return out;
  }

  mapToUI(source: TendonsAndMusclesFindingApiModel, out: TendonsAndMusclesFindingUiModel): TendonsAndMusclesFindingUiModel {
    out = automapper.map('TendonsAndMuscles_ElbowMRT_FindingApiModel', 'TendonsAndMuscles_ElbowMRT_FindingUiModel', source);
    out.signalT1w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT2w);
    return out;
  }
}
