import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

import { SpleenFindingApiModel } from '@models/abdomenMRT/api/spleen/spleen-finding-api.model';
import { SpleenFindingUiModel } from '@models/abdomenMRT/ui/spleen/spleen-finding-ui.model';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';

@Injectable({
  providedIn: 'root'
})
export class SpleenFindingMapper implements IMapper<SpleenFindingApiModel, SpleenFindingUiModel> {
  constructor(private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('SpleenFinding_AbdomenMRT_UiModel', 'SpleenFinding_AbdomenMRT_ApiModel').convertToType(SpleenFindingApiModel);
    automapper.createMap('SpleenFinding_AbdomenMRT_ApiModel', 'SpleenFinding_AbdomenMRT_UiModel').convertToType(SpleenFindingUiModel);
  }

  mapToAPI(source: SpleenFindingUiModel, out: SpleenFindingApiModel): SpleenFindingApiModel {
    out = automapper.map('SpleenFinding_AbdomenMRT_UiModel', 'SpleenFinding_AbdomenMRT_ApiModel', source);

    out.t1w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2w);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: SpleenFindingApiModel, out: SpleenFindingUiModel): SpleenFindingUiModel {
    out = automapper.map('SpleenFinding_AbdomenMRT_ApiModel', 'SpleenFinding_AbdomenMRT_UiModel', source);

    out.t1w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1w);
    out.t2w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2w);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
