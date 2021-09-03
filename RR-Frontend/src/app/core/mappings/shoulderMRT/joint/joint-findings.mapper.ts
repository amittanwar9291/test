import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { JointFindingApiModel } from '@models/shoulderMRT/api/joint/joint-finding-api.model';
import { JointFindingUiModel } from '@models/shoulderMRT/ui/joint/joint-finding-ui.model';

import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class JointFindingsMapper implements IMapper<JointFindingApiModel, JointFindingUiModel> {
  constructor(private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('JointFinding_ShoulderMRT_ApiModel', 'JointFinding_ShoulderMRT_UiModel').convertToType(JointFindingUiModel);
    automapper.createMap('JointFinding_ShoulderMRT_UiModel', 'JointFinding_ShoulderMRT_ApiModel').convertToType(JointFindingApiModel);
  }

  mapToAPI(source: JointFindingUiModel, out: JointFindingApiModel): JointFindingApiModel {
    out = automapper.map('JointFinding_ShoulderMRT_UiModel', 'JointFinding_ShoulderMRT_ApiModel', source);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: JointFindingApiModel, out: JointFindingUiModel): JointFindingUiModel {
    out = automapper.map('JointFinding_ShoulderMRT_ApiModel', 'JointFinding_ShoulderMRT_UiModel', source);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
