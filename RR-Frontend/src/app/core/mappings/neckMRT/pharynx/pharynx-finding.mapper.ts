import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { PharynxFindingApiModel } from '@models/neckMRT/api/pharynx/pharynx-finding-api.model';
import { PharynxFindingUiModel } from '@models/neckMRT/ui/pharynx/pharynx-finding-ui.model';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class PharynxFindingMapper implements IMapper<PharynxFindingApiModel, PharynxFindingUiModel> {
  constructor(private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('PharynxFinding_NeckMRT_ApiModel', 'PharynxFinding_NeckMRT_UiModel').convertToType(PharynxFindingUiModel);
    automapper.createMap('PharynxFinding_NeckMRT_UiModel', 'PharynxFinding_NeckMRT_ApiModel').convertToType(PharynxFindingApiModel);
  }

  mapToAPI(source: PharynxFindingUiModel, out: PharynxFindingApiModel): PharynxFindingApiModel {
    out = automapper.map('PharynxFinding_NeckMRT_UiModel', 'PharynxFinding_NeckMRT_ApiModel', source);

    out.signalT1wType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1wType);
    out.signalT2wType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2wType);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: PharynxFindingApiModel, out: PharynxFindingUiModel): PharynxFindingUiModel {
    out = automapper.map('PharynxFinding_NeckMRT_ApiModel', 'PharynxFinding_NeckMRT_UiModel', source);

    out.signalT1wType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT1wType);
    out.signalT2wType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.signalT2wType);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
