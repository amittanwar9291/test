import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MeningesFindingApiModel } from '@models/headCT/api/meninges/meninges-finding-api.model';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';
import { FileApiModel } from '@models/shared/uploader/file-api.model';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class MeningesFindingMapper implements IMapper<MeningesFindingApiModel, MeningesFindingUiModel> {
  constructor(private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('MeningesFinding_HeadCT_ApiModel', 'MeningesFinding_HeadCT_UiModel').convertToType(MeningesFindingUiModel);
    automapper.createMap('MeningesFinding_HeadCT_UiModel', 'MeningesFinding_HeadCT_ApiModel').convertToType(MeningesFindingApiModel);
  }

  mapToAPI(source: MeningesFindingUiModel, out: MeningesFindingApiModel): MeningesFindingApiModel {
    out = automapper.map('MeningesFinding_HeadCT_UiModel', 'MeningesFinding_HeadCT_ApiModel', source);

    out.serialNumber = source.referencePicture.serialNumber;
    out.pictureNumber = source.referencePicture.pictureNumber;
    out.imageFileId = source.referencePicture.imageFileId;
    out.imageFile = source.referencePicture.uploadedImageFile as FileApiModel;

    return out;
  }

  mapToUI(source: MeningesFindingApiModel, out: MeningesFindingUiModel): MeningesFindingUiModel {
    out = automapper.map('MeningesFinding_HeadCT_ApiModel', 'MeningesFinding_HeadCT_UiModel', source);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.imageFile,
      source.imageFileId
    );

    return out;
  }
}
