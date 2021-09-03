import { IMapper } from '@interfaces/mapper.interface';
import { LungInterstitiumFindingApiModel } from '@models/thoraxCT/api/lung-interstitium/lung-interstitium-finding-api.model';
import { LungInterstitiumFindingUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-finding-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { Injectable } from '@angular/core';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class LungInterstitiumFindingsMapper implements IMapper<LungInterstitiumFindingApiModel, LungInterstitiumFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper
      .createMap('LungInterstitiumFinding_ThoraxCT_UiModel', 'LungInterstitiumFinding_ThoraxCT_ApiModel')
      .convertToType(LungInterstitiumFindingApiModel);
    automapper
      .createMap('LungInterstitiumFinding_ThoraxCT_ApiModel', 'LungInterstitiumFinding_ThoraxCT_UiModel')
      .convertToType(LungInterstitiumFindingUiModel);
  }

  mapToAPI(source: LungInterstitiumFindingUiModel, out: LungInterstitiumFindingApiModel): LungInterstitiumFindingApiModel {
    out = automapper.map('LungInterstitiumFinding_ThoraxCT_UiModel', 'LungInterstitiumFinding_ThoraxCT_ApiModel', source);

    out.lungsFlapsLocation1 = this.enumMapper.mapToString(source.lungsFlapsLocation1);
    out.lungsFlapsLocation2 = this.enumMapper.mapToString(source.lungsFlapsLocation2);
    out.lungsSegmentsLocation = this.enumMapper.mapToString(source.lungsSegmentsLocation);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };
    return out;
  }

  mapToUI(source: LungInterstitiumFindingApiModel, out: LungInterstitiumFindingUiModel): LungInterstitiumFindingUiModel {
    out = automapper.map('LungInterstitiumFinding_ThoraxCT_ApiModel', 'LungInterstitiumFinding_ThoraxCT_UiModel', source);

    this.enumMapper.mapToObject(source.lungsFlapsLocation1, out.lungsFlapsLocation1);
    this.enumMapper.mapToObject(source.lungsFlapsLocation2, out.lungsFlapsLocation2);
    this.enumMapper.mapToObject(source.lungsSegmentsLocation, out.lungsSegmentsLocation);

    this.enumMapper.mapToObject(source.lungsSegmentsLocation, out.lungsSegmentsLocation);
    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );
    return out;
  }
}
