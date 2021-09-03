import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { BonesFindingApiModel } from '@models/feetMRT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingMapper implements IMapper<BonesFindingApiModel, BonesFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper.createMap('BonesFinding_FeetMRT_ApiModel', 'BonesFinding_FeetMRT_UiModel').convertToType(BonesFindingUiModel);
    automapper.createMap('BonesFinding_FeetMRT_UiModel', 'BonesFinding_FeetMRT_ApiModel').convertToType(BonesFindingApiModel);
  }

  mapToAPI(source: BonesFindingUiModel, out: BonesFindingApiModel): BonesFindingApiModel {
    out = automapper.map('BonesFinding_FeetMRT_UiModel', 'BonesFinding_FeetMRT_ApiModel', source);
    out.threeDimensionalLocalization = this.enumMapper.mapToString(source.threeDimensionalLocalization);
    out.footThreeSidesLocalization = this.enumMapper.mapToString(source.footThreeSidesLocalization);
    out.signalT1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    return out;
  }

  mapToUI(source: BonesFindingApiModel, out: BonesFindingUiModel): BonesFindingUiModel {
    out = automapper.map('BonesFinding_FeetMRT_ApiModel', 'BonesFinding_FeetMRT_UiModel', source);
    this.enumMapper.mapToObject(source.threeDimensionalLocalization, out.threeDimensionalLocalization);
    this.enumMapper.mapToObject(source.footThreeSidesLocalization, out.footThreeSidesLocalization);
    out.signalT1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    return out;
  }
}
