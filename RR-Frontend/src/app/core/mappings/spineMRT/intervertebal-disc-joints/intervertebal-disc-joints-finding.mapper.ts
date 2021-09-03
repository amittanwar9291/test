import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { IntervertebralDiscJointsFindingApiModel } from '@models/spineMRT/api/intervertebal-disc-joints/intervertebal-disc-joints-finding-api.model';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class IntervertebalDiscJointsFindingMapper
  implements IMapper<IntervertebralDiscJointsFindingApiModel, IntervertebralDiscJointsFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper
      .createMap('IntervertebralDiscJointsFinding_SpineMRT_ApiModel', 'IntervertebralDiscJointsFinding_SpineMRT_UIModel')
      .convertToType(IntervertebralDiscJointsFindingUiModel);
    automapper
      .createMap('IntervertebralDiscJointsFinding_SpineMRT_UIModel', 'IntervertebralDiscJointsFinding_SpineMRT_ApiModel')
      .convertToType(IntervertebralDiscJointsFindingApiModel);
  }

  mapToAPI(
    source: IntervertebralDiscJointsFindingUiModel,
    out: IntervertebralDiscJointsFindingApiModel
  ): IntervertebralDiscJointsFindingApiModel {
    out = automapper.map('IntervertebralDiscJointsFinding_SpineMRT_UIModel', 'IntervertebralDiscJointsFinding_SpineMRT_ApiModel', source);

    out.spineLocation = this.enumMapper.mapToString(source.spineLocation);
    out.spineAxialLocation = this.enumMapper.mapToString(source.spineAxialLocation);
    out.discLocation = this.enumMapper.mapToString(source.discLocation);

    out.anteriorSerialNumber = source.anteriorReferencePicture.serialNumber;
    out.anteriorPictureNumber = source.anteriorReferencePicture.pictureNumber;
    out.anteriorImageFile = this.referencePictureMapper.mapToAPI(source.anteriorReferencePicture).uploadedImageFile;

    out.posteriorSerialNumber = source.posteriorReferencePicture.serialNumber;
    out.posteriorPictureNumber = source.posteriorReferencePicture.pictureNumber;
    out.posteriorImageFile = this.referencePictureMapper.mapToAPI(source.posteriorReferencePicture).uploadedImageFile;

    out.marginalisSerialNumber = source.marginalisReferencePicture.serialNumber;
    out.marginalisPictureNumber = source.marginalisReferencePicture.pictureNumber;
    out.marginalisImageFile = this.referencePictureMapper.mapToAPI(source.marginalisReferencePicture).uploadedImageFile;

    out.discitisSerialNumber = source.discitisReferencePicture.serialNumber;
    out.discitisPictureNumber = source.discitisReferencePicture.pictureNumber;
    out.discitisImageFile = this.referencePictureMapper.mapToAPI(source.discitisReferencePicture).uploadedImageFile;

    out.periostitisSerialNumber = source.periostitisReferencePicture.serialNumber;
    out.periostitisPictureNumber = source.periostitisReferencePicture.pictureNumber;
    out.periostitisImageFile = this.referencePictureMapper.mapToAPI(source.periostitisReferencePicture).uploadedImageFile;

    return out;
  }

  mapToUI(
    source: IntervertebralDiscJointsFindingApiModel,
    out: IntervertebralDiscJointsFindingUiModel
  ): IntervertebralDiscJointsFindingUiModel {
    out = automapper.map('IntervertebralDiscJointsFinding_SpineMRT_ApiModel', 'IntervertebralDiscJointsFinding_SpineMRT_UIModel', source);

    this.enumMapper.mapToObject(source.spineLocation, out.spineLocation);
    this.enumMapper.mapToObject(source.spineAxialLocation, out.spineAxialLocation);
    this.enumMapper.mapToObject(source.discLocation, out.discLocation);

    out.anteriorReferencePicture.uploadedImageFile = source.anteriorImageFile;
    out.anteriorReferencePicture.serialNumber = source.anteriorSerialNumber;
    out.anteriorReferencePicture.pictureNumber = source.anteriorPictureNumber;

    out.posteriorReferencePicture.uploadedImageFile = source.posteriorImageFile;
    out.posteriorReferencePicture.serialNumber = source.posteriorSerialNumber;
    out.posteriorReferencePicture.pictureNumber = source.posteriorPictureNumber;

    out.marginalisReferencePicture.uploadedImageFile = source.marginalisImageFile;
    out.marginalisReferencePicture.serialNumber = source.marginalisSerialNumber;
    out.marginalisReferencePicture.pictureNumber = source.marginalisPictureNumber;

    out.discitisReferencePicture.uploadedImageFile = source.discitisImageFile;
    out.discitisReferencePicture.serialNumber = source.discitisSerialNumber;
    out.discitisReferencePicture.pictureNumber = source.discitisPictureNumber;

    out.periostitisReferencePicture.uploadedImageFile = source.periostitisImageFile;
    out.periostitisReferencePicture.serialNumber = source.periostitisSerialNumber;
    out.periostitisReferencePicture.pictureNumber = source.periostitisPictureNumber;

    return out;
  }
}
