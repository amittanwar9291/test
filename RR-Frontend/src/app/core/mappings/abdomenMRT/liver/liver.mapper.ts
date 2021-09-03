import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { LiverApiModel } from '@models/abdomenMRT/api/liver/liver-api.model';
import { LiverUiModel } from '@models/abdomenMRT/ui/liver/liver-ui.model';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { LiverFindingApiModel } from '@models/abdomenMRT/api/liver/liver-finding-api.model';
import { LiverFindingMapper } from '@mappings/abdomenMRT/liver/liver-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class LiverMapper implements IMapper<LiverApiModel, LiverUiModel> {
  constructor(private liverFindingMapper: LiverFindingMapper) {
    automapper
      .createMap('Liver_AbdomenMRT_UiModel', 'Liver_AbdomenMRT_ApiModel')
      .convertToType(LiverApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Liver_AbdomenMRT_ApiModel', 'Liver_AbdomenMRT_UiModel')
      .convertToType(LiverUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LiverUiModel, out: LiverApiModel): LiverApiModel {
    out = automapper.map('Liver_AbdomenMRT_UiModel', 'Liver_AbdomenMRT_ApiModel', source);
    out.findings.splice(0, out.findings.length);

    source.findings.forEach(finding => {
      out.findings.push(this.liverFindingMapper.mapToAPI(finding, new LiverFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: LiverApiModel, out: LiverUiModel): LiverUiModel {
    out = automapper.map('Liver_AbdomenMRT_ApiModel', 'Liver_AbdomenMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);

    source?.findings?.forEach(finding => {
      out.findings.push(this.liverFindingMapper.mapToUI(finding, new LiverFindingUiModel()));
    });
    return out;
  }
}
