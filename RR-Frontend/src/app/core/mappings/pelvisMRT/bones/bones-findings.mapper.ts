import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import { BonesFindingApiModel } from '@models/pelvisMRT/api/bones/bones-finding-api.model';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingsMapper implements IMapper<BonesFindingApiModel, BonesFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper.createMap('BonesFindingApiModel', 'BonesFindingUiModel').convertToType(BonesFindingUiModel);
    automapper.createMap('BonesFindingUiModel', 'BonesFindingApiModel').convertToType(BonesFindingApiModel);
  }

  mapToAPI(source: BonesFindingUiModel, out: BonesFindingApiModel): BonesFindingApiModel {
    out = automapper.map('BonesFindingUiModel', 'BonesFindingApiModel', source);

    out.hipLocalizer = this.enumMapper.mapToString(source.hipLocalizer);
    out.expansionHipLocalizer = this.enumMapper.mapToString(source.expansionHipLocalizer);
    out.singleSelectionTumorHipLocalizer = this.enumMapper.mapToString(source.singleSelectionTumorHipLocalizer);

    out.signalT1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    return out;
  }

  mapToUI(source: BonesFindingApiModel, out: BonesFindingUiModel): BonesFindingUiModel {
    out = automapper.map('BonesFindingApiModel', 'BonesFindingUiModel', source);

    this.enumMapper.mapToObject(source.hipLocalizer, out.hipLocalizer);
    this.enumMapper.mapToObject(source.expansionHipLocalizer, out.expansionHipLocalizer);
    this.enumMapper.mapToObject(source.singleSelectionTumorHipLocalizer, out.singleSelectionTumorHipLocalizer);

    out.signalT1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);
    return out;
  }
}
