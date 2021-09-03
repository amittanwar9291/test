import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

import { BonesFindingApiModel } from '@models/shoulderMRT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';

const SIGNAL_ARRAY = ['None', 'Hypo', 'LowHypo', 'Iso', 'LowHyper', 'Hyper'];

@Injectable({
  providedIn: 'root'
})
export class BonesFindingMapper implements IMapper<BonesFindingApiModel, BonesFindingUiModel> {
  constructor(private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('BonesFinding_ShoulderMRT_ApiModel', 'BonesFinding_ShoulderMRT_UiModel').convertToType(BonesFindingUiModel);
    automapper.createMap('BonesFinding_ShoulderMRT_UiModel', 'BonesFinding_ShoulderMRT_ApiModel').convertToType(BonesFindingApiModel);
  }

  mapToAPI(source: BonesFindingUiModel, out: BonesFindingApiModel): BonesFindingApiModel {
    out = automapper.map('BonesFinding_ShoulderMRT_UiModel', 'BonesFinding_ShoulderMRT_ApiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToAPI(SIGNAL_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(SIGNAL_ARRAY, source.signalT2w);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: BonesFindingApiModel, out: BonesFindingUiModel): BonesFindingUiModel {
    out = automapper.map('BonesFinding_ShoulderMRT_ApiModel', 'BonesFinding_ShoulderMRT_UiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToUI(SIGNAL_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(SIGNAL_ARRAY, source.signalT2w);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
