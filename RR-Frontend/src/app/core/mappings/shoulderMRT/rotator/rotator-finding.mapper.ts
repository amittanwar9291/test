import { Injectable } from '@angular/core';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

import { RotatorFindingApiModel } from '@models/shoulderMRT/api/rotator/rotator-finding-api.model';
import { RotatorFindingUiModel } from '@models/shoulderMRT/ui/rotator/rotator-finding-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class RotatorFindingMapper implements IMapper<RotatorFindingApiModel, RotatorFindingUiModel> {
  constructor(private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('RotatorFinding_ShoulderMRT_ApiModel', 'RotatorFinding_ShoulderMRT_UiModel').convertToType(RotatorFindingUiModel);
    automapper.createMap('RotatorFinding_ShoulderMRT_UiModel', 'RotatorFinding_ShoulderMRT_ApiModel').convertToType(RotatorFindingApiModel);
  }

  mapToAPI(source: RotatorFindingUiModel, out: RotatorFindingApiModel): RotatorFindingApiModel {
    out = automapper.map('RotatorFinding_ShoulderMRT_UiModel', 'RotatorFinding_ShoulderMRT_ApiModel', source);
    out.type = source.findingType;

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: RotatorFindingApiModel, out: RotatorFindingUiModel): RotatorFindingUiModel {
    out = automapper.map('RotatorFinding_ShoulderMRT_ApiModel', 'RotatorFinding_ShoulderMRT_UiModel', source);
    out.findingType = source.type;

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
