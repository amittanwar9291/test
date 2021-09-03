import { Injectable } from '@angular/core';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

import { IMapper } from '@interfaces/mapper.interface';

import { SpatialRequirementFindingUiModel } from '@models/cardioMRT/ui/spatial-requirement/spatial-requirement-finding-ui.model';
import { SpatialRequirementFindingApiModel } from '@models/cardioMRT/api/spatial-requirement/spatial-requirement-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class SpatialRequirementFindingsMapper implements IMapper<SpatialRequirementFindingApiModel, SpatialRequirementFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper
      .createMap('SpatialRequirementFinding_CardioMRT_UiModel', 'SpatialRequirementFinding_CardioMRT_ApiModel')
      .convertToType(SpatialRequirementFindingApiModel);

    automapper
      .createMap('SpatialRequirementFinding_CardioMRT_ApiModel', 'SpatialRequirementFinding_CardioMRT_UiModel')
      .convertToType(SpatialRequirementFindingUiModel);
  }

  mapToAPI(source: SpatialRequirementFindingUiModel, out: SpatialRequirementFindingApiModel): SpatialRequirementFindingApiModel {
    out = automapper.map('SpatialRequirementFinding_CardioMRT_UiModel', 'SpatialRequirementFinding_CardioMRT_ApiModel', source);

    out.mainTumorLocalizer = this.enumMapper.mapToString(source.mainTumorLocalizer);
    out.nonTargetLesionLocalizer = this.enumMapper.mapToString(source.nonTargetLesionLocalizer);

    out.signalT1wCharacteristics = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT1wCharacteristics);
    out.signalT2wCharacteristics = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT2wCharacteristics);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: SpatialRequirementFindingApiModel, out: SpatialRequirementFindingUiModel): SpatialRequirementFindingUiModel {
    out = automapper.map('SpatialRequirementFinding_CardioMRT_ApiModel', 'SpatialRequirementFinding_CardioMRT_UiModel', source);

    this.enumMapper.mapToObject(source.mainTumorLocalizer, out.mainTumorLocalizer);
    this.enumMapper.mapToObject(source.nonTargetLesionLocalizer, out.nonTargetLesionLocalizer);

    out.signalT1wCharacteristics = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT1wCharacteristics);
    out.signalT2wCharacteristics = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT2wCharacteristics);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
