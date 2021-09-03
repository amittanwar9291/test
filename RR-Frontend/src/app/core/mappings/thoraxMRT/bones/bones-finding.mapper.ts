import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { BonesFindingApiModel } from '@models/thoraxMRT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/thoraxMRT/ui/bones/bones-finding-ui.model';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingMapper implements IMapper<BonesFindingApiModel, BonesFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('BonesFinding_ThoraxMRT_UiModel', 'BonesFinding_ThoraxMRT_ApiModel').convertToType(BonesFindingApiModel);
    automapper.createMap('BonesFinding_ThoraxMRT_ApiModel', 'BonesFinding_ThoraxMRT_UiModel').convertToType(BonesFindingUiModel);
  }

  mapToAPI(source: BonesFindingUiModel, out: BonesFindingApiModel): BonesFindingApiModel {
    out = automapper.map('BonesFinding_ThoraxMRT_UiModel', 'BonesFinding_ThoraxMRT_ApiModel', source);

    out.ribLocalization = this.enumMapper.mapToString(source.ribLocalization);
    out.spineLocalization = this.enumMapper.mapToString(source.spineLocalization);
    out.vertebralBodyLocalization = this.enumMapper.mapToString(source.vertebralBodyLocalization);
    out.t1wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignal);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: BonesFindingApiModel, out: BonesFindingUiModel): BonesFindingUiModel {
    out = automapper.map('BonesFinding_ThoraxMRT_ApiModel', 'BonesFinding_ThoraxMRT_UiModel', source);

    this.enumMapper.mapToObject(source.ribLocalization, out.ribLocalization);
    this.enumMapper.mapToObject(source.spineLocalization, out.spineLocalization);
    this.enumMapper.mapToObject(source.vertebralBodyLocalization, out.vertebralBodyLocalization);
    out.t1wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignal);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
