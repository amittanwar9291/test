import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';

import { LymphNodesFindingApiModel } from '@models/pelvisMRT/api/lymph-nodes/lymph-nodes-finding-api.model';
import { LymphNodesFindingUiModel } from '@models/pelvisMRT/ui/lymph-nodes/lymph-nodes-finding-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class LymphNodesFindingMapper implements IMapper<LymphNodesFindingApiModel, LymphNodesFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper
      .createMap('LymphNodesFinding_PelvisMRT_ApiModel', 'LymphNodesFinding_PelvisMRT_UiModel')
      .convertToType(LymphNodesFindingUiModel);
    automapper
      .createMap('LymphNodesFinding_PelvisMRT_UiModel', 'LymphNodesFinding_PelvisMRT_ApiModel')
      .convertToType(LymphNodesFindingApiModel);
  }

  mapToAPI(source: LymphNodesFindingUiModel, out: LymphNodesFindingApiModel): LymphNodesFindingApiModel {
    out = automapper.map('LymphNodesFinding_PelvisMRT_UiModel', 'LymphNodesFinding_PelvisMRT_ApiModel', source);

    out.localizationType = this.enumMapper.mapToString(source.localizationType);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: LymphNodesFindingApiModel, out: LymphNodesFindingUiModel): LymphNodesFindingUiModel {
    out = automapper.map('LymphNodesFinding_PelvisMRT_ApiModel', 'LymphNodesFinding_PelvisMRT_UiModel', source);

    this.enumMapper.mapToObject(source.localizationType, out.localizationType);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
