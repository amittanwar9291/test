import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { GastrointestinalTractFindingApiModel } from '@models/abdomenMRT/api/gastrointestinal-tract/gastrointestinal-tract-finding-api.model';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';

@Injectable({
  providedIn: 'root'
})
export class GastrointestinalTractFindingMapper
  implements IMapper<GastrointestinalTractFindingApiModel, GastrointestinalTractFindingUiModel> {
  constructor(private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper
      .createMap('GastrointestinalTractFinding_AbdomenMRT_ApiModel', 'GastrointestinalTractFinding_AbdomenMRT_UiModel')
      .convertToType(GastrointestinalTractFindingUiModel);
    automapper
      .createMap('GastrointestinalTractFinding_AbdomenMRT_UiModel', 'GastrointestinalTractFinding_AbdomenMRT_ApiModel')
      .convertToType(GastrointestinalTractFindingApiModel);
  }

  mapToAPI(source: GastrointestinalTractFindingUiModel, out: GastrointestinalTractFindingApiModel): GastrointestinalTractFindingApiModel {
    out = automapper.map('GastrointestinalTractFinding_AbdomenMRT_UiModel', 'GastrointestinalTractFinding_AbdomenMRT_ApiModel', source);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    out.t1WSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignalType);
    out.t2WSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignalType);

    return out;
  }

  mapToUI(source: GastrointestinalTractFindingApiModel, out: GastrointestinalTractFindingUiModel): GastrointestinalTractFindingUiModel {
    out = automapper.map('GastrointestinalTractFinding_AbdomenMRT_ApiModel', 'GastrointestinalTractFinding_AbdomenMRT_UiModel', source);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    out.t1WSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignalType);
    out.t2WSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignalType);

    return out;
  }
}
