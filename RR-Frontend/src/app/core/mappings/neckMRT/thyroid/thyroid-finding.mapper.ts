import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { ThyroidFindingApiModel } from '@models/neckMRT/api/thyroid/thyroid-finding-api.model';
import { ThyroidFindingUiModel } from '@models/neckMRT/ui/thyroid/thyroid-finding-ui.model';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class ThyroidFindingMapper implements IMapper<ThyroidFindingApiModel, ThyroidFindingUiModel> {
  constructor(private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('ThyroidFinding_NeckMRT_ApiModel', 'ThyroidFinding_NeckMRT_UiModel').convertToType(ThyroidFindingUiModel);
    automapper.createMap('ThyroidFinding_NeckMRT_UiModel', 'ThyroidFinding_NeckMRT_ApiModel').convertToType(ThyroidFindingApiModel);
  }

  mapToAPI(source: ThyroidFindingUiModel, out: ThyroidFindingApiModel): ThyroidFindingApiModel {
    out = automapper.map('ThyroidFinding_NeckMRT_UiModel', 'ThyroidFinding_NeckMRT_ApiModel', source);

    out.t1wSignalType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignalType);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: ThyroidFindingApiModel, out: ThyroidFindingUiModel): ThyroidFindingUiModel {
    out = automapper.map('ThyroidFinding_NeckMRT_ApiModel', 'ThyroidFinding_NeckMRT_UiModel', source);

    out.t1wSignalType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignalType);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
