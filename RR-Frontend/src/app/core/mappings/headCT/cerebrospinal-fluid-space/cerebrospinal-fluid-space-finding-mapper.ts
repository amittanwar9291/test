import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';
import { FileApiModel } from '@models/shared/uploader/file-api.model';
import { CerebrospinalFluidSpaceFindingApiModel } from '@models/headCT/api/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-api.model';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class CerebrospinalFluidSpaceFindingMapper
  implements IMapper<CerebrospinalFluidSpaceFindingApiModel, CerebrospinalFluidSpaceFindingUiModel> {
  constructor(private referencePictureMapper: ReferencePictureMapper) {
    automapper
      .createMap('CerebrospinalFluidSpaceFinding_HeadCT_ApiModel', 'CerebrospinalFluidSpaceFinding_HeadCT_UiModel')
      .convertToType(CerebrospinalFluidSpaceFindingUiModel);
    automapper
      .createMap('CerebrospinalFluidSpaceFinding_HeadCT_UiModel', 'CerebrospinalFluidSpaceFinding_HeadCT_ApiModel')
      .convertToType(CerebrospinalFluidSpaceFindingApiModel);
  }

  mapToAPI(
    source: CerebrospinalFluidSpaceFindingUiModel,
    out: CerebrospinalFluidSpaceFindingApiModel
  ): CerebrospinalFluidSpaceFindingApiModel {
    out = automapper.map('CerebrospinalFluidSpaceFinding_HeadCT_UiModel', 'CerebrospinalFluidSpaceFinding_HeadCT_ApiModel', source);

    out.serialNumber = source.referencePicture.serialNumber;
    out.pictureNumber = source.referencePicture.pictureNumber;
    out.imageFileId = source.referencePicture.imageFileId;
    out.imageFile = source.referencePicture.uploadedImageFile as FileApiModel;

    return out;
  }

  mapToUI(
    source: CerebrospinalFluidSpaceFindingApiModel,
    out: CerebrospinalFluidSpaceFindingUiModel
  ): CerebrospinalFluidSpaceFindingUiModel {
    out = automapper.map('CerebrospinalFluidSpaceFinding_HeadCT_ApiModel', 'CerebrospinalFluidSpaceFinding_HeadCT_UiModel', source);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.imageFile,
      source.imageFileId
    );

    return out;
  }
}
