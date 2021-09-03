import { Injectable } from '@angular/core';

import { FindingsVentriclesApiModel } from '@models/cardioMRT/api/findings-ventricles/findings-ventricles-api.model';
import { FindingsVentriclesUiModel } from '@models/cardioMRT/ui/findings-ventricles/findings-ventricles-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class FindingsVentriclesMapper implements IMapper<FindingsVentriclesApiModel, FindingsVentriclesUiModel> {
  constructor(private referencePictureMapper: ReferencePictureMapper) {
    automapper
      .createMap('FindingsVentricles_CardioMRT_UiModel', 'FindingsVentricles_CardioMRT_ApiModel')
      .convertToType(FindingsVentriclesApiModel);
    automapper
      .createMap('FindingsVentricles_CardioMRT_ApiModel', 'FindingsVentricles_CardioMRT_UiModel')
      .convertToType(FindingsVentriclesUiModel);
  }

  mapToAPI(source: FindingsVentriclesUiModel, out: FindingsVentriclesApiModel): FindingsVentriclesApiModel {
    out = automapper.map('FindingsVentricles_CardioMRT_UiModel', 'FindingsVentricles_CardioMRT_ApiModel', source);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: FindingsVentriclesApiModel, out: FindingsVentriclesUiModel): FindingsVentriclesUiModel {
    out = automapper.map('FindingsVentricles_CardioMRT_ApiModel', 'FindingsVentricles_CardioMRT_UiModel', source);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
