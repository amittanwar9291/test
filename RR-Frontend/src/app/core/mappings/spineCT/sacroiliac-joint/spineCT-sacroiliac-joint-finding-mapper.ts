import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { SacroiliacJointFindingUiModel } from '@models/spineCT/ui/sacroiliac-joint/sacroiliac-joint-finding-ui.model';
import { SacroiliacJointFindingApiModel } from '@models/spineCT/api/sacroiliac-joint/sacroiliac-joint-finding-api.model';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class SpineCTSacroiliacJointFindingMapper implements IMapper<SacroiliacJointFindingApiModel, SacroiliacJointFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper
      .createMap('SacroiliacJointFinding_SpineCT_ApiModel', 'SacroiliacJointFinding_SpineCT_UiModel')
      .convertToType(SacroiliacJointFindingUiModel);
    automapper
      .createMap('SacroiliacJointFinding_SpineCT_UiModel', 'SacroiliacJointFinding_SpineCT_ApiModel')
      .convertToType(SacroiliacJointFindingApiModel);
  }

  mapToAPI(source: SacroiliacJointFindingUiModel, out: SacroiliacJointFindingApiModel): SacroiliacJointFindingApiModel {
    out = automapper.map('SacroiliacJointFinding_SpineCT_UiModel', 'SacroiliacJointFinding_SpineCT_ApiModel', source);
    out.pelvisLocation = this.enumMapper.mapToString(source.pelvisLocation);

    const apiPicture = this.referencePictureMapper.mapToAPI(source.referencePicture);

    out = {
      ...out,
      ...apiPicture
    };

    out.imageFile = apiPicture.uploadedImageFile;

    return out;
  }

  mapToUI(source: SacroiliacJointFindingApiModel, out: SacroiliacJointFindingUiModel): SacroiliacJointFindingUiModel {
    out = automapper.map('SacroiliacJointFinding_SpineCT_ApiModel', 'SacroiliacJointFinding_SpineCT_UiModel', source);
    this.enumMapper.mapToObject(source.pelvisLocation, out.pelvisLocation);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.imageFile,
      source.imageFileId
    );

    return out;
  }
}
