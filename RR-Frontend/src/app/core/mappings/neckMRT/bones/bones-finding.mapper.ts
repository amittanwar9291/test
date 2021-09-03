import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

import { BonesFindingUiModel } from '@models/neckMRT/ui/bones/bones-finding-ui.model';
import { BonesFindingApiModel } from '@models/neckMRT/api/bones/bones-finding-api.model';
import { IMapper } from '@interfaces/mapper.interface';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingMapper implements IMapper<BonesFindingApiModel, BonesFindingUiModel> {
  constructor(private sliderMapper: SliderMapper, private enumMapper: EnumMapper) {
    automapper.createMap('BonesFinding_NeckMRT_UiModel', 'BonesFinding_NeckMRT_ApiModel').convertToType(BonesFindingApiModel);
    automapper.createMap('BonesFinding_NeckMRT_ApiModel', 'BonesFinding_NeckMRT_UiModel').convertToType(BonesFindingUiModel);
  }

  mapToAPI(source: BonesFindingUiModel, out: BonesFindingApiModel): BonesFindingApiModel {
    out = automapper.map('BonesFinding_NeckMRT_UiModel', 'BonesFinding_NeckMRT_ApiModel', source);

    out.t1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2w);

    out.spineLocations = this.enumMapper.mapToString(source.spineLocations);
    out.spondylodesisSpineLocations = this.enumMapper.mapToString(source.spondylodesisSpineLocations);
    out.spondylodesisTraumaLocations = this.enumMapper.mapToString(source.spondylodesisTraumaLocations);
    out.osteosynthesisSpineLocations = this.enumMapper.mapToString(source.osteosynthesisSpineLocations);
    out.prothesisSpineLocations = this.enumMapper.mapToString(source.prothesisSpineLocations);
    out.vertebroplastySpineLocations = this.enumMapper.mapToString(source.vertebroplastySpineLocations);
    out.spineAxialLocations = this.enumMapper.mapToString(source.spineAxialLocations);
    out.spinalCanalLocations = this.enumMapper.mapToString(source.spinalCanalLocations);

    return out;
  }

  mapToUI(source: BonesFindingApiModel, out: BonesFindingUiModel): BonesFindingUiModel {
    out = automapper.map('BonesFinding_NeckMRT_ApiModel', 'BonesFinding_NeckMRT_UiModel', source);

    out.t1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2w);

    this.enumMapper.mapToObject(source.spineLocations, out.spineLocations);
    this.enumMapper.mapToObject(source.spondylodesisSpineLocations, out.spondylodesisSpineLocations);
    this.enumMapper.mapToObject(source.spondylodesisTraumaLocations, out.spondylodesisTraumaLocations);
    this.enumMapper.mapToObject(source.osteosynthesisSpineLocations, out.osteosynthesisSpineLocations);
    this.enumMapper.mapToObject(source.prothesisSpineLocations, out.prothesisSpineLocations);
    this.enumMapper.mapToObject(source.vertebroplastySpineLocations, out.vertebroplastySpineLocations);
    this.enumMapper.mapToObject(source.spineAxialLocations, out.spineAxialLocations);
    this.enumMapper.mapToObject(source.spinalCanalLocations, out.spinalCanalLocations);

    return out;
  }
}
