import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import { BonesFindingApiModel } from '@models/hipMRT/api/bones/bones-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingsMapper implements IMapper<BonesFindingApiModel, BonesFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('BonesFinding_HipMRT_ApiModel', 'BonesFinding_HipMRT_UiModel').convertToType(BonesFindingUiModel);
    automapper.createMap('BonesFinding_HipMRT_UiModel', 'BonesFinding_HipMRT_ApiModel').convertToType(BonesFindingApiModel);
  }

  mapToAPI(source: BonesFindingUiModel, out: BonesFindingApiModel): BonesFindingApiModel {
    out = automapper.map('BonesFinding_HipMRT_UiModel', 'BonesFinding_HipMRT_ApiModel', source);

    out.hipSpecificLocalizations = this.enumMapper.mapToString(source.hipSpecificLocalizations);

    out.t1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2w);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: BonesFindingApiModel, out: BonesFindingUiModel): BonesFindingUiModel {
    out = automapper.map('BonesFinding_HipMRT_ApiModel', 'BonesFinding_HipMRT_UiModel', source);

    this.enumMapper.mapToObject(source.hipSpecificLocalizations, out.hipSpecificLocalizations);

    out.t1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2w);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
