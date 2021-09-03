import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { PleuraFindingApiModel } from '@models/thoraxMRT/api/pleura/pleura-finding-api.model';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class PleuraFindingsMapper implements IMapper<PleuraFindingApiModel, PleuraFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('PleuraFinding_ThoraxMRT_UiModel', 'PleuraFinding_ThoraxMRT_ApiModel').convertToType(PleuraFindingApiModel);
    automapper.createMap('PleuraFinding_ThoraxMRT_ApiModel', 'PleuraFinding_ThoraxMRT_UiModel').convertToType(PleuraFindingUiModel);
  }

  mapToAPI(source: PleuraFindingUiModel, out: PleuraFindingApiModel): PleuraFindingApiModel {
    out = automapper.map('PleuraFinding_ThoraxMRT_UiModel', 'PleuraFinding_ThoraxMRT_ApiModel', source);

    out.thickenedCutisBreastLocation = this.enumMapper.mapToString(source.thickenedCutisBreastLocation);
    out.massBreastLocation = this.enumMapper.mapToString(source.massBreastLocation);
    out.ribLocations = this.enumMapper.mapToString(source.ribLocations);
    out.spineLocations = this.enumMapper.mapToString(source.spineLocations);
    out.spineLocations = this.enumMapper.mapToString(source.spineLocations);

    out.t1wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: PleuraFindingApiModel, out: PleuraFindingUiModel): PleuraFindingUiModel {
    out = automapper.map('PleuraFinding_ThoraxMRT_ApiModel', 'PleuraFinding_ThoraxMRT_UiModel', source);

    this.enumMapper.mapToObject(source.thickenedCutisBreastLocation, out.thickenedCutisBreastLocation);
    this.enumMapper.mapToObject(source.massBreastLocation, out.massBreastLocation);
    this.enumMapper.mapToObject(source.ribLocations, out.ribLocations);
    this.enumMapper.mapToObject(source.spineLocations, out.spineLocations);
    out.t1wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );
    return out;
  }
}
