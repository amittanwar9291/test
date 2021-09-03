import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { BonesFindingApiModel } from '@models/handMRT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingMapper implements IMapper<BonesFindingApiModel, BonesFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('BonesFinding_HandMRT_ApiModel', 'BonesFinding_HandMRT_UiModel').convertToType(BonesFindingUiModel);
    automapper.createMap('BonesFinding_HandMRT_UiModel', 'BonesFinding_HandMRT_ApiModel').convertToType(BonesFindingApiModel);
  }

  mapToAPI(source: BonesFindingUiModel, out: BonesFindingApiModel): BonesFindingApiModel {
    out = automapper.map('BonesFinding_HandMRT_UiModel', 'BonesFinding_HandMRT_ApiModel', source);

    out.involvedBonesType = this.enumMapper.mapToString(source.involvedBonesType);
    out.handJointsLocalizer = this.enumMapper.mapToString(source.handJointsLocalizer);
    out.involvedBonesLocalizer = this.enumMapper.mapToString(source.involvedBonesLocalizer);

    out.signalT1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: BonesFindingApiModel, out: BonesFindingUiModel): BonesFindingUiModel {
    out = automapper.map('BonesFinding_HandMRT_ApiModel', 'BonesFinding_HandMRT_UiModel', source);

    this.enumMapper.mapToObject(source.handJointsLocalizer, out.handJointsLocalizer);
    this.enumMapper.mapToObject(source.involvedBonesLocalizer, out.involvedBonesLocalizer);
    this.enumMapper.mapToObject(source.involvedBonesType, out.involvedBonesType);

    out.signalT1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
