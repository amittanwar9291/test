import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { FIVE_INPUT__GRADE_REVERSED_ARRAY } from '@mappings/shared/slider/sliderConstants';
import { MediastinumFindingApiModel } from '@models/thoraxMRT/api/mediastinum/mediastinum-finding-api.model';
import { MediastinumFindingUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class MediastinumFindingsMapper implements IMapper<MediastinumFindingApiModel, MediastinumFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper
      .createMap('MediastinumFinding_ThoraxMRT_UiModel', 'MediastinumFinding_ThoraxMRT_ApiModel')
      .convertToType(MediastinumFindingApiModel);

    automapper
      .createMap('MediastinumFinding_ThoraxMRT_ApiModel', 'MediastinumFinding_ThoraxMRT_UiModel')
      .convertToType(MediastinumFindingUiModel);
  }

  mapToAPI(source: MediastinumFindingUiModel, out: MediastinumFindingApiModel): MediastinumFindingApiModel {
    out = automapper.map('MediastinumFinding_ThoraxMRT_UiModel', 'MediastinumFinding_ThoraxMRT_ApiModel', source);

    out.lungsLocation = this.enumMapper.mapToString(source.lungsLocation);
    out.localizationType = this.enumMapper.mapToString(source.localizationType);
    out.t1wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToAPI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);

    return out;
  }

  mapToUI(source: MediastinumFindingApiModel, out: MediastinumFindingUiModel): MediastinumFindingUiModel {
    out = automapper.map('MediastinumFinding_ThoraxMRT_ApiModel', 'MediastinumFinding_ThoraxMRT_UiModel', source);

    this.enumMapper.mapToObject(source.lungsLocation, out.lungsLocation);
    this.enumMapper.mapToObject(source.localizationType, out.localizationType);
    out.t1wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t1wSignalType);
    out.t2wSignalType = this.sliderMapper.mapSignalToUI(FIVE_INPUT__GRADE_REVERSED_ARRAY, source.t2wSignalType);

    return out;
  }
}
