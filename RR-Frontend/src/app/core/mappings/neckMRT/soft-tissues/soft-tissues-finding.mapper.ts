import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SoftTissuesFindingApiModel } from '@models/neckMRT/api/soft-tissues/soft-tissues-finding-api.model';
import { SoftTissuesFindingUiModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class SoftTissuesFindingMapper implements IMapper<SoftTissuesFindingApiModel, SoftTissuesFindingUiModel> {
  constructor(private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper, private enumMapper: EnumMapper) {
    automapper
      .createMap('SoftTissuesFinding_NeckMRT_ApiModel', 'SoftTissuesFinding_NeckMRT_UiModel')
      .convertToType(SoftTissuesFindingUiModel);
    automapper
      .createMap('SoftTissuesFinding_NeckMRT_UiModel', 'SoftTissuesFinding_NeckMRT_ApiModel')
      .convertToType(SoftTissuesFindingApiModel);
  }

  mapToAPI(source: SoftTissuesFindingUiModel, out: SoftTissuesFindingApiModel): SoftTissuesFindingApiModel {
    out = automapper.map('SoftTissuesFinding_NeckMRT_UiModel', 'SoftTissuesFinding_NeckMRT_ApiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    out.localizationReferenceVertebra = this.enumMapper.mapToString(source.localizationReferenceVertebra);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: SoftTissuesFindingApiModel, out: SoftTissuesFindingUiModel): SoftTissuesFindingUiModel {
    out = automapper.map('SoftTissuesFinding_NeckMRT_ApiModel', 'SoftTissuesFinding_NeckMRT_UiModel', source);

    out.signalT1w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1w);
    out.signalT2w = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2w);

    this.enumMapper.mapToObject(source.localizationReferenceVertebra, out.localizationReferenceVertebra);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
