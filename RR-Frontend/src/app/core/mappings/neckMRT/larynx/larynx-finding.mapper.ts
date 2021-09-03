import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { LarynxFindingApiModel } from '@models/neckMRT/api/larynx/larynx-finding-api.model';
import { LarynxFindingUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-ui.model';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class LarynxFindingMapper implements IMapper<LarynxFindingApiModel, LarynxFindingUiModel> {
  constructor(private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('LarynxFinding_NeckMRT_ApiModel', 'LarynxFinding_NeckMRT_UiModel').convertToType(LarynxFindingUiModel);
    automapper.createMap('LarynxFinding_NeckMRT_UiModel', 'LarynxFinding_NeckMRT_ApiModel').convertToType(LarynxFindingApiModel);
  }

  mapToAPI(source: LarynxFindingUiModel, out: LarynxFindingApiModel): LarynxFindingApiModel {
    out = automapper.map('LarynxFinding_NeckMRT_UiModel', 'LarynxFinding_NeckMRT_ApiModel', source);
    out.t1wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: LarynxFindingApiModel, out: LarynxFindingUiModel): LarynxFindingUiModel {
    out = automapper.map('LarynxFinding_NeckMRT_ApiModel', 'LarynxFinding_NeckMRT_UiModel', source);
    out.t1wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.t2wSignal);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
