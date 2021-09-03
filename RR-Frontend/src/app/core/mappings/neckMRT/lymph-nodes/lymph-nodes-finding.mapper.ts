import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';
import { LymphNodesFindingApiModel } from '@models/neckMRT/api/lymph-nodes/lymph-nodes-finding-api.model';
import { LymphNodesFindingUiModel } from '@models/neckMRT/ui/lymph-nodes/lymph-nodes-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LymphNodesFindingMapper implements IMapper<LymphNodesFindingApiModel, LymphNodesFindingUiModel> {
  constructor(private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('LymphNodesFinding_NeckMRT_ApiModel', 'LymphNodesFinding_NeckMRT_UiModel').convertToType(LymphNodesFindingUiModel);
    automapper
      .createMap('LymphNodesFinding_NeckMRT_UiModel', 'LymphNodesFinding_NeckMRT_ApiModel')
      .convertToType(LymphNodesFindingApiModel);
  }

  mapToAPI(source: LymphNodesFindingUiModel, out: LymphNodesFindingApiModel): LymphNodesFindingApiModel {
    out = automapper.map('LymphNodesFinding_NeckMRT_UiModel', 'LymphNodesFinding_NeckMRT_ApiModel', source);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: LymphNodesFindingApiModel, out: LymphNodesFindingUiModel): LymphNodesFindingUiModel {
    out = automapper.map('LymphNodesFinding_NeckMRT_ApiModel', 'LymphNodesFinding_NeckMRT_UiModel', source);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
