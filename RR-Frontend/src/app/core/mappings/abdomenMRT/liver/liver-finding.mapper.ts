import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';
import { LiverFindingApiModel } from '@models/abdomenMRT/api/liver/liver-finding-api.model';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LiverFindingMapper implements IMapper<LiverFindingApiModel, LiverFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('LiverFinding_AbdomenMRT_ApiModel', 'LiverFinding_AbdomenMRT_UiModel').convertToType(LiverFindingUiModel);
    automapper.createMap('LiverFinding_AbdomenMRT_UiModel', 'LiverFinding_AbdomenMRT_ApiModel').convertToType(LiverFindingApiModel);
  }

  mapToAPI(source: LiverFindingUiModel, out: LiverFindingApiModel): LiverFindingApiModel {
    out = automapper.map('LiverFinding_AbdomenMRT_UiModel', 'LiverFinding_AbdomenMRT_ApiModel', source);

    out.liverSegmentsLocations = this.enumMapper.mapToString(source.liverSegmentsLocations);
    out.liverPathologyLocations = this.enumMapper.mapToString(source.liverPathologyLocations);
    out.liverPathologyLocations2 = this.enumMapper.mapToString(source.liverPathologyLocations2);

    out.t1WSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignalType);
    out.t2WSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignalType);
    out.earlyArterial = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.earlyArterial);
    out.lateArterial = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.lateArterial);
    out.portalVenous = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.portalVenous);
    out.venous = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.venous);
    out.equilibrium = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.equilibrium);
    out.liverSpecificContrastEnhancement = this.sliderMapper.mapSignalToAPI(
      FIVE_INPUT__GRADE_REVERSED_ARRAY,
      source.liverSpecificContrastEnhancement
    );

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: LiverFindingApiModel, out: LiverFindingUiModel): LiverFindingUiModel {
    out = automapper.map('LiverFinding_AbdomenMRT_ApiModel', 'LiverFinding_AbdomenMRT_UiModel', source);

    this.enumMapper.mapToObject(source.liverSegmentsLocations, out.liverSegmentsLocations);
    this.enumMapper.mapToObject(source.liverPathologyLocations, out.liverPathologyLocations);
    this.enumMapper.mapToObject(source.liverPathologyLocations2, out.liverPathologyLocations2);

    out.t1WSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1WSignalType);
    out.t2WSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2WSignalType);
    out.earlyArterial = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.earlyArterial);
    out.lateArterial = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.lateArterial);
    out.portalVenous = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.portalVenous);
    out.venous = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.venous);
    out.equilibrium = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.equilibrium);
    out.liverSpecificContrastEnhancement = this.sliderMapper.mapSignalToUI(
      FIVE_INPUT__GRADE_REVERSED_ARRAY,
      source.liverSpecificContrastEnhancement
    );

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
