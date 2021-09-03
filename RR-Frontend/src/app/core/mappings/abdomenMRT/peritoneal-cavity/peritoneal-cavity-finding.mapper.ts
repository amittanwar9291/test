import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { PeritonealCavityFindingApiModel } from '@models/abdomenMRT/api/peritoneal-cavity/peritoneal-cavity-finding-api.model';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class PeritonealCavityFindingMapper implements IMapper<PeritonealCavityFindingApiModel, PeritonealCavityFindingUiModel> {
  constructor(private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper
      .createMap('PeritonealCavityFinding_AbdomenMRT_UiModel', 'PeritonealCavityFinding_AbdomenMRT_ApiModel')
      .convertToType(PeritonealCavityFindingApiModel);
    automapper
      .createMap('PeritonealCavityFinding_AbdomenMRT_ApiModel', 'PeritonealCavityFinding_AbdomenMRT_UiModel')
      .convertToType(PeritonealCavityFindingUiModel);
  }

  mapToUI(source: PeritonealCavityFindingApiModel, out: PeritonealCavityFindingUiModel): PeritonealCavityFindingUiModel {
    out = automapper.map('PeritonealCavityFinding_AbdomenMRT_ApiModel', 'PeritonealCavityFinding_AbdomenMRT_UiModel', source);

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

  mapToAPI(source: PeritonealCavityFindingUiModel, out: PeritonealCavityFindingApiModel): PeritonealCavityFindingApiModel {
    out = automapper.map('PeritonealCavityFinding_AbdomenMRT_UiModel', 'PeritonealCavityFinding_AbdomenMRT_ApiModel', source);

    out.t1wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignal);
    out.t2wSignal = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignal);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }
}
