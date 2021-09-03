import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MediastinumFindingsMapper } from '@mappings/thoraxMRT/mediastinum/mediastinum-findings.mapper';
import { MediastinumFindingApiModel } from '@models/thoraxMRT/api/mediastinum/mediastinum-finding-api.model';
import { MediastinumFindingUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-finding-ui.model';
import { MediastinumApiModel } from '@models/thoraxMRT/api/mediastinum/mediastinum-api.model';
import { MediastinumUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-ui.model';

@Injectable({
  providedIn: 'root'
})
export class MediastinumMapper implements IMapper<MediastinumApiModel, MediastinumUiModel> {
  constructor(private mediastinumFindingsMapper: MediastinumFindingsMapper) {
    automapper.createMap('Mediastinum_ThoraxMRT_UiModel', 'Mediastinum_ThoraxMRT_ApiModel').convertToType(MediastinumApiModel);
    automapper.createMap('Mediastinum_ThoraxMRT_ApiModel', 'Mediastinum_ThoraxMRT_UiModel').convertToType(MediastinumUiModel);
  }

  mapToAPI(source: MediastinumUiModel, out: MediastinumApiModel): MediastinumApiModel {
    out = automapper.map('Mediastinum_ThoraxMRT_UiModel', 'Mediastinum_ThoraxMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.mediastinumFindingsMapper.mapToAPI(finding, new MediastinumFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: MediastinumApiModel, out: MediastinumUiModel): MediastinumUiModel {
    out = automapper.map('Mediastinum_ThoraxMRT_ApiModel', 'Mediastinum_ThoraxMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.mediastinumFindingsMapper.mapToUI(finding, new MediastinumFindingUiModel()));
    });

    return out;
  }
}
