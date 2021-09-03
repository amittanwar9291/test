import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { BonesFindingApiModel } from '@models/elbowMRT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingMapper implements IMapper<BonesFindingApiModel, BonesFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper.createMap('BonesFinding_ElbowMRT_UiModel', 'BonesFinding_ElbowMRT_ApiModel').convertToType(BonesFindingApiModel);
    automapper.createMap('BonesFinding_ElbowMRT_ApiModel', 'BonesFinding_ElbowMRT_UiModel').convertToType(BonesFindingUiModel);
  }

  mapToAPI(source: BonesFindingUiModel, out: BonesFindingApiModel): BonesFindingApiModel {
    out = automapper.map('BonesFinding_ElbowMRT_UiModel', 'BonesFinding_ElbowMRT_ApiModel', source);
    out.signalT1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);
    return out;
  }

  mapToUI(source: BonesFindingApiModel, out: BonesFindingUiModel): BonesFindingUiModel {
    out = automapper.map('BonesFinding_ElbowMRT_ApiModel', 'BonesFinding_ElbowMRT_UiModel', source);
    out.signalT1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);
    return out;
  }
}
