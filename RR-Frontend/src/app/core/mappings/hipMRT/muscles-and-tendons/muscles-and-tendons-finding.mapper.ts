import { Injectable } from '@angular/core';

import { MusclesAndTendonsFindingApiModel } from '@models/hipMRT/api/muscles-and-tendons/muscles-and-tendons-finding-api.model';
import { MusclesAndTendonsFindingUiModel } from '@models/hipMRT/ui/muscles-and-tendons/muscles-and-tendons-finding-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class MusclesAndTendonsFindingMapper implements IMapper<MusclesAndTendonsFindingApiModel, MusclesAndTendonsFindingUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    automapper
      .createMap('MusclesAndTendonsFinding_HipMRT_ApiModel', 'MusclesAndTendonsFinding_HipMRT_UiModel')
      .convertToType(MusclesAndTendonsFindingUiModel);
    automapper
      .createMap('MusclesAndTendonsFinding_HipMRT_UiModel', 'MusclesAndTendonsFinding_HipMRT_ApiModel')
      .convertToType(MusclesAndTendonsFindingApiModel);
  }

  mapToAPI(source: MusclesAndTendonsFindingUiModel, out: MusclesAndTendonsFindingApiModel): MusclesAndTendonsFindingApiModel {
    out = automapper.map('MusclesAndTendonsFinding_HipMRT_UiModel', 'MusclesAndTendonsFinding_HipMRT_ApiModel', source);
    out.t1wSignalCharacteristics = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignalCharacteristics);
    out.t2wSignalCharacteristics = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignalCharacteristics);
    return out;
  }

  mapToUI(source: MusclesAndTendonsFindingApiModel, out: MusclesAndTendonsFindingUiModel): MusclesAndTendonsFindingUiModel {
    out = automapper.map('MusclesAndTendonsFinding_HipMRT_ApiModel', 'MusclesAndTendonsFinding_HipMRT_UiModel', source);
    out.t1wSignalCharacteristics = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignalCharacteristics);
    out.t2wSignalCharacteristics = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignalCharacteristics);
    return out;
  }
}
