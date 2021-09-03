import { Injectable } from '@angular/core';

import { MediastinumApiModel } from '@models/thoraxCT/api/mediastinum/mediastinum-api.model';
import { MediastinumUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { MediastinumFindingsMapper } from '@mappings/thoraxCT/mediastinum/mediastinum-findings.mapper';
import { MediastinumFindingApiModel } from '@models/thoraxCT/api/mediastinum/mediastinum-finding-api.model';
import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class MediastinumMapper implements IMapper<MediastinumApiModel, MediastinumUiModel> {
  constructor(private mediastinumFindingsMapper: MediastinumFindingsMapper) {
    automapper.createMap('Mediastinum_ThoraxCT_UiModel', 'Mediastinum_ThoraxCT_ApiModel').convertToType(MediastinumApiModel);
    automapper.createMap('Mediastinum_ThoraxCT_ApiModel', 'Mediastinum_ThoraxCT_UiModel').convertToType(MediastinumUiModel);
  }

  mapToAPI(source: MediastinumUiModel, out: MediastinumApiModel): MediastinumApiModel {
    out = automapper.map('Mediastinum_ThoraxCT_UiModel', 'Mediastinum_ThoraxCT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.mediastinumFindingsMapper.mapToAPI(finding, new MediastinumFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: MediastinumApiModel, out: MediastinumUiModel): MediastinumUiModel {
    out = automapper.map('Mediastinum_ThoraxCT_ApiModel', 'Mediastinum_ThoraxCT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.mediastinumFindingsMapper.mapToUI(finding, new MediastinumFindingUiModel()));
    });
    return out;
  }
}
