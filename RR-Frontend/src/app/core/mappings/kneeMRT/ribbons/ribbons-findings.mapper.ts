import { Injectable } from '@angular/core';

import { RibbonsFindingApiModel } from '@models/kneeMRT/api/ribbons/ribbons-finding-api.model';
import { RibbonsFindingUiModel } from '@models/kneeMRT/ui/ribbons/ribbons-finding-ui.model';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class RibbonsFindingsMapper implements IMapper<RibbonsFindingApiModel, RibbonsFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('RibbonsFinding_KneeMRT_UiModel', 'RibbonsFinding_KneeMRT_ApiModel').convertToType(RibbonsFindingApiModel);
    automapper.createMap('RibbonsFinding_KneeMRT_ApiModel', 'RibbonsFinding_KneeMRT_UiModel').convertToType(RibbonsFindingUiModel);
  }

  mapToAPI(source: RibbonsFindingUiModel, out: RibbonsFindingApiModel): RibbonsFindingApiModel {
    out = automapper.map('RibbonsFinding_KneeMRT_UiModel', 'RibbonsFinding_KneeMRT_ApiModel', source);

    out.gradeClassification = this.enumMapper.mapToString(source.gradeClassification);
    out.meniscusLocalization1 = this.enumMapper.mapToString(source.meniscusLocalization1);
    out.meniscusLocalization2 = this.enumMapper.mapToString(source.meniscusLocalization2);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: RibbonsFindingApiModel, out: RibbonsFindingUiModel): RibbonsFindingUiModel {
    out = automapper.map('RibbonsFinding_KneeMRT_ApiModel', 'RibbonsFinding_KneeMRT_UiModel', source);

    this.enumMapper.mapToObject(source.gradeClassification, out.gradeClassification);
    this.enumMapper.mapToObject(source.meniscusLocalization1, out.meniscusLocalization1);
    this.enumMapper.mapToObject(source.meniscusLocalization2, out.meniscusLocalization2);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
