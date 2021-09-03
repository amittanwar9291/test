import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { AdrenalGlandsFindingApiModel } from '@models/abdomenMRT/api/adrenal-glands/adrenal-glands-finding-api.model';
import { AdrenalGlandsFindingUiModel } from '@models/abdomenMRT/ui/adrenal-glands/adrenal-glands-finding-ui.model';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class AdrenalGlandsFindingMapper implements IMapper<AdrenalGlandsFindingApiModel, AdrenalGlandsFindingUiModel> {
  constructor(private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper
      .createMap('AdrenalGlandsFinding_AbdomenMRT_UiModel', 'AdrenalGlandsFinding_AbdomenMRT_ApiModel')
      .convertToType(AdrenalGlandsFindingApiModel);
    automapper
      .createMap('AdrenalGlandsFinding_AbdomenMRT_ApiModel', 'AdrenalGlandsFinding_AbdomenMRT_UiModel')
      .convertToType(AdrenalGlandsFindingUiModel);
  }

  mapToAPI(source: AdrenalGlandsFindingUiModel, out: AdrenalGlandsFindingApiModel): AdrenalGlandsFindingApiModel {
    out = automapper.map('AdrenalGlandsFinding_AbdomenMRT_UiModel', 'AdrenalGlandsFinding_AbdomenMRT_ApiModel', source);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    out.singalT1wType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.singalT1wType);
    out.singalT2wType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.singalT2wType);

    return out;
  }

  mapToUI(source: AdrenalGlandsFindingApiModel, out: AdrenalGlandsFindingUiModel): AdrenalGlandsFindingUiModel {
    out = automapper.map('AdrenalGlandsFinding_AbdomenMRT_ApiModel', 'AdrenalGlandsFinding_AbdomenMRT_UiModel', source);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    out.singalT1wType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.singalT1wType);
    out.singalT2wType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.singalT2wType);

    return out;
  }
}
