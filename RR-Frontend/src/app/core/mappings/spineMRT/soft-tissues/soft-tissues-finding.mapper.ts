import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineDirectionalLocationMapper } from '../shared/spine-directional-location/spine-directional-location.mapper';

import { SoftTissuesFindingApiModel } from '@models/spineMRT/api/soft-tissues/soft-tissues-finding-api.model';
import { SoftTissuesFindingUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

@Injectable({
  providedIn: 'root'
})
export class SoftTissuesFindingsMapper implements IMapper<SoftTissuesFindingApiModel, SoftTissuesFindingUiModel> {
  constructor(
    private enumMapper: EnumMapper,
    private sliderMapper: SliderMapper,
    private spineDirectionalLocationMapper: SpineDirectionalLocationMapper
  ) {
    automapper
      .createMap('SoftTissuesFinding_SpineMRT_ApiModel', 'SoftTissuesFinding_SpineMRT_UiModel')
      .convertToType(SoftTissuesFindingUiModel);
    automapper
      .createMap('SoftTissuesFinding_SpineMRT_UiModel', 'SoftTissuesFinding_SpineMRT_ApiModel')
      .convertToType(SoftTissuesFindingApiModel);
  }

  mapToAPI(source: SoftTissuesFindingUiModel, out: SoftTissuesFindingApiModel): SoftTissuesFindingApiModel {
    out = automapper.map('SoftTissuesFinding_SpineMRT_UiModel', 'SoftTissuesFinding_SpineMRT_ApiModel', source);

    out.spineLocation1 = this.enumMapper.mapToString(source.spineLocation1);
    out.spineAxialLocation = this.enumMapper.mapToString(source.spineAxialLocation);
    out.spineLocationBones = this.spineDirectionalLocationMapper.mapToString(source.spineLocationBones);
    out.spineLocation2 = this.enumMapper.mapToString(source.spineLocation2);
    out.spineLocationDisks1 = this.spineDirectionalLocationMapper.mapToString(source.spineLocationDisks1);
    out.spineLocationDisks2 = this.spineDirectionalLocationMapper.mapToString(source.spineLocationDisks2);
    out.spineLocationDisks3 = this.spineDirectionalLocationMapper.mapToString(source.spineLocationDisks3);

    out.signalT1w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT2w);

    return out;
  }

  mapToUI(source: SoftTissuesFindingApiModel, out: SoftTissuesFindingUiModel): SoftTissuesFindingUiModel {
    out = automapper.map('SoftTissuesFinding_SpineMRT_ApiModel', 'SoftTissuesFinding_SpineMRT_UiModel', source);

    this.enumMapper.mapToObject(source.spineLocation1, out.spineLocation1);
    this.enumMapper.mapToObject(source.spineAxialLocation, out.spineAxialLocation);
    this.spineDirectionalLocationMapper.mapToObject(source.spineLocationBones, out.spineLocationBones);
    this.enumMapper.mapToObject(source.spineLocation2, out.spineLocation2);
    this.spineDirectionalLocationMapper.mapToObject(source.spineLocationDisks1, out.spineLocationDisks1);
    this.spineDirectionalLocationMapper.mapToObject(source.spineLocationDisks2, out.spineLocationDisks2);
    this.spineDirectionalLocationMapper.mapToObject(source.spineLocationDisks3, out.spineLocationDisks3);

    out.signalT1w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT2w);

    return out;
  }
}
