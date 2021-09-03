import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MediastinumFindingApiModel } from '@models/thoraxCT/api/mediastinum/mediastinum-finding-api.model';
import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class MediastinumFindingsMapper implements IMapper<MediastinumFindingApiModel, MediastinumFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('MediastinumFinding_ThoraxCT_UiModel', 'MediastinumFinding_ThoraxCT_ApiModel')
      .convertToType(MediastinumFindingApiModel);

    automapper
      .createMap('MediastinumFinding_ThoraxCT_ApiModel', 'MediastinumFinding_ThoraxCT_UiModel')
      .convertToType(MediastinumFindingUiModel);
  }

  mapToAPI(source: MediastinumFindingUiModel, out: MediastinumFindingApiModel): MediastinumFindingApiModel {
    out = automapper.map('MediastinumFinding_ThoraxCT_UiModel', 'MediastinumFinding_ThoraxCT_ApiModel', source);

    out.lungsLocation = this.enumMapper.mapToString(source.lungsLocation);
    return out;
  }

  mapToUI(source: MediastinumFindingApiModel, out: MediastinumFindingUiModel): MediastinumFindingUiModel {
    out = automapper.map('MediastinumFinding_ThoraxCT_ApiModel', 'MediastinumFinding_ThoraxCT_UiModel', source);

    this.enumMapper.mapToObject(source.lungsLocation, out.lungsLocation);

    return out;
  }
}
