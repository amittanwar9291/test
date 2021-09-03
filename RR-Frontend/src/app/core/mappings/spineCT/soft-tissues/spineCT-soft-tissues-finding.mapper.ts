import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SoftTissuesFindingApiModel, SoftTissuesFindingUiModel } from '@models/spineCT';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineDirectionalLocationMapper } from '@mappings/spineMRT/shared/spine-directional-location/spine-directional-location.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class SpineCTSoftTissuesFindingMapper implements IMapper<SoftTissuesFindingApiModel, SoftTissuesFindingUiModel> {
  constructor(
    private enumMapper: EnumMapper,
    private spineDirectionalLocationMapper: SpineDirectionalLocationMapper,
    private referencePictureMapper: ReferencePictureMapper
  ) {
    automapper
      .createMap('SoftTissuesFinding_SpineCT_ApiModel', 'SoftTissuesFinding_SpineCT_UiModel')
      .convertToType(SoftTissuesFindingUiModel);
    automapper
      .createMap('SoftTissuesFinding_SpineCT_UiModel', 'SoftTissuesFinding_SpineCT_ApiModel')
      .convertToType(SoftTissuesFindingApiModel);
  }

  mapToAPI(source: SoftTissuesFindingUiModel, out: SoftTissuesFindingApiModel): SoftTissuesFindingApiModel {
    out = automapper.map('SoftTissuesFinding_SpineCT_UiModel', 'SoftTissuesFinding_SpineCT_ApiModel', source);

    out.spineLocation = this.enumMapper.mapToString(source.spineLocation);
    out.spineAxialLocation = this.enumMapper.mapToString(source.spineAxialLocation);
    out.spineLocationBones = this.spineDirectionalLocationMapper.mapToString(source.spineLocationBones);
    out.moreThanOneLesionSpineLocation = this.enumMapper.mapToString(source.moreThanOneLesionSpineLocation);

    out = { ...out, ...this.referencePictureMapper.mapToAPI(source.referencePicture) };

    return out;
  }

  mapToUI(source: SoftTissuesFindingApiModel, out: SoftTissuesFindingUiModel): SoftTissuesFindingUiModel {
    out = automapper.map('SoftTissuesFinding_SpineCT_ApiModel', 'SoftTissuesFinding_SpineCT_UiModel', source);

    this.enumMapper.mapToObject(source.spineLocation, out.spineLocation);
    this.enumMapper.mapToObject(source.spineAxialLocation, out.spineAxialLocation);
    this.spineDirectionalLocationMapper.mapToObject(source.spineLocationBones, out.spineLocationBones);
    this.enumMapper.mapToObject(source.moreThanOneLesionSpineLocation, out.moreThanOneLesionSpineLocation);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.imageFile,
      source.imageFileId
    );

    return out;
  }
}
