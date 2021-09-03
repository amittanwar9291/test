import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

import { BonesFindingApiModel } from '@models/spineMRT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';

import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingsMapper implements IMapper<BonesFindingApiModel, BonesFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper.createMap('BonesFinding_SpineMRT_UiModel', 'BonesFinding_SpineMRT_ApiModel').convertToType(BonesFindingApiModel);
    automapper.createMap('BonesFinding_SpineMRT_ApiModel', 'BonesFinding_SpineMRT_UiModel').convertToType(BonesFindingUiModel);
  }

  mapToAPI(source: BonesFindingUiModel, out: BonesFindingApiModel): BonesFindingApiModel {
    out = automapper.map('BonesFinding_SpineMRT_UiModel', 'BonesFinding_SpineMRT_ApiModel', source);

    out.spineLocation = this.enumMapper.mapToString(source.spineLocation);
    out.spineLocation2 = this.enumMapper.mapToString(source.spineLocation2);
    out.spineLocation3 = this.enumMapper.mapToString(source.spineLocation3);
    out.traumaLocation = this.enumMapper.mapToString(source.traumaLocation);

    out.t1wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignal);
    out.signalSTIR = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalSTIR);

    return out;
  }

  mapToUI(source: BonesFindingApiModel, out: BonesFindingUiModel): BonesFindingUiModel {
    out = automapper.map('BonesFinding_SpineMRT_ApiModel', 'BonesFinding_SpineMRT_UiModel', source);

    this.enumMapper.mapToObject(source.spineLocation, out.spineLocation);
    this.enumMapper.mapToObject(source.spineLocation2, out.spineLocation2);
    this.enumMapper.mapToObject(source.spineLocation3, out.spineLocation3);
    this.enumMapper.mapToObject(source.traumaLocation, out.traumaLocation);

    out.t1wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignal);
    out.signalSTIR = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalSTIR);

    return out;
  }
}
