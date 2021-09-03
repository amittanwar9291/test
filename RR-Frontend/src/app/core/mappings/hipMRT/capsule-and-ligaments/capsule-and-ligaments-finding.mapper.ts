import { CapsuleAndLigamentsFindingApiModel } from '@models/hipMRT/api/capsule-and-ligaments/capsule-and-ligaments-finding-api.model';
import { IMapper } from '@interfaces/mapper.interface';
import { CapsuleAndLigamentsFindingUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-finding-ui.model';
import { Injectable } from '@angular/core';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class CapsuleAndLigamentsFindingMapper implements IMapper<CapsuleAndLigamentsFindingApiModel, CapsuleAndLigamentsFindingUiModel> {
  constructor(private sliderMapper: SliderMapper) {
    {
      automapper
        .createMap('CapsuleAndLigamentsFinding_HipMRT_ApiModel', 'CapsuleAndLigamentsFinding_HipMRT_UiModel')
        .convertToType(CapsuleAndLigamentsFindingUiModel);
      automapper
        .createMap('CapsuleAndLigamentsFinding_HipMRT_UiModel', 'CapsuleAndLigamentsFinding_HipMRT_ApiModel')
        .convertToType(CapsuleAndLigamentsFindingApiModel);
    }
  }

  mapToAPI(source: CapsuleAndLigamentsFindingUiModel, out: CapsuleAndLigamentsFindingApiModel): CapsuleAndLigamentsFindingApiModel {
    out = automapper.map('CapsuleAndLigamentsFinding_HipMRT_UiModel', 'CapsuleAndLigamentsFinding_HipMRT_ApiModel', source);
    out.t1wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignal);
    return out;
  }
  mapToUI(source: CapsuleAndLigamentsFindingApiModel, out: CapsuleAndLigamentsFindingUiModel): CapsuleAndLigamentsFindingUiModel {
    out = automapper.map('CapsuleAndLigamentsFinding_HipMRT_UiModel', 'CapsuleAndLigamentsFinding_HipMRT_ApiModel', source);
    out.t1wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignal);
    return out;
  }
}
