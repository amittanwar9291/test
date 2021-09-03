import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

import { LabrumAndRibbonsFindingApiModel } from '@models/shoulderMRT/api/labrum-and-ribbons/labrum-and-ribbons-findings-api.model';
import { LabrumAndRibbonsFindingUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-findings-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LabrumAndRibbonsFindingsMapper implements IMapper<LabrumAndRibbonsFindingApiModel, LabrumAndRibbonsFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper
      .createMap('LabrumAndRibbonsFinding_ShoulderMRT_ApiModel', 'LabrumAndRibbonsFinding_ShoulderMRT_UiModel')
      .convertToType(LabrumAndRibbonsFindingUiModel);
    automapper
      .createMap('LabrumAndRibbonsFinding_ShoulderMRT_UiModel', 'LabrumAndRibbonsFinding_ShoulderMRT_ApiModel')
      .convertToType(LabrumAndRibbonsFindingApiModel);
  }

  mapToAPI(source: LabrumAndRibbonsFindingUiModel, out: LabrumAndRibbonsFindingApiModel): LabrumAndRibbonsFindingApiModel {
    out = automapper.map('LabrumAndRibbonsFinding_ShoulderMRT_UiModel', 'LabrumAndRibbonsFinding_ShoulderMRT_ApiModel', source);

    out.labrumLocation = this.enumMapper.mapToString(source.labrumLocation);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: LabrumAndRibbonsFindingApiModel, out: LabrumAndRibbonsFindingUiModel): LabrumAndRibbonsFindingUiModel {
    out = automapper.map('LabrumAndRibbonsFinding_ShoulderMRT_ApiModel', 'LabrumAndRibbonsFinding_ShoulderMRT_UiModel', source);

    this.enumMapper.mapToObject(source.labrumLocation, out.labrumLocation);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
