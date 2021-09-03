import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineDirectionalLocationMapper } from '@mappings/spineMRT/shared/spine-directional-location/spine-directional-location.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

import { MyelonFindingAPIModel } from '@models/spineMRT/api/myelon/myelon-finding-api.model';
import { MyelonFindingUIModel } from '@models/spineMRT/ui/myelon/myelon-finding-ui.model';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class MyelonFindingMapper implements IMapper<MyelonFindingAPIModel, MyelonFindingUIModel> {
  constructor(
    private enumMapper: EnumMapper,
    private spineDirectionalLocationMapper: SpineDirectionalLocationMapper,
    private sliderMapper: SliderMapper
  ) {
    automapper.createMap('MyelonFinding_SpineMRT_ApiModel', 'MyelonFinding_SpineMRT_UiModel').convertToType(MyelonFindingUIModel);
    automapper.createMap('MyelonFinding_SpineMRT_UiModel', 'MyelonFinding_SpineMRT_ApiModel').convertToType(MyelonFindingAPIModel);
  }

  mapToAPI(source: MyelonFindingUIModel, out: MyelonFindingAPIModel): MyelonFindingAPIModel {
    out = automapper.map('MyelonFinding_SpineMRT_UiModel', 'MyelonFinding_SpineMRT_ApiModel', source);

    out.spineLocation = this.enumMapper.mapToString(source.spineLocation);
    out.spinalCanalLocation = this.enumMapper.mapToString(source.spinalCanalLocation);
    out.spineLocationNonTarget = this.enumMapper.mapToString(source.spineLocationNonTarget);
    out.spineLocationBones = this.spineDirectionalLocationMapper.mapToString(source.spineLocationBones);
    out.spineLocationDisks = this.spineDirectionalLocationMapper.mapToString(source.spineLocationDisks);

    out.t1wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);

    return out;
  }

  mapToUI(source: MyelonFindingAPIModel, out: MyelonFindingUIModel): MyelonFindingUIModel {
    out = automapper.map('MyelonFinding_SpineMRT_ApiModel', 'MyelonFinding_SpineMRT_UiModel', source);

    this.enumMapper.mapToObject(source.spineLocation, out.spineLocation);
    this.enumMapper.mapToObject(source.spinalCanalLocation, out.spinalCanalLocation);
    this.enumMapper.mapToObject(source.spineLocationNonTarget, out.spineLocationNonTarget);
    this.spineDirectionalLocationMapper.mapToObject(source.spineLocationBones, out.spineLocationBones);
    this.spineDirectionalLocationMapper.mapToObject(source.spineLocationDisks, out.spineLocationDisks);

    out.t1wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);

    return out;
  }
}
