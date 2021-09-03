import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { KidneysFindingMapper } from '@mappings/abdomenMRT/kidneys/kidneys-finding.mapper';

import { KidneysApiModel } from '@models/abdomenMRT/api/kidneys/kidneys-api.model';
import { KidneysUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-ui.model';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { KidneysFindingApiModel } from '@models/abdomenMRT/api/kidneys/kidneys-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class KidneysMapper implements IMapper<KidneysApiModel, KidneysUiModel> {
  constructor(private kidneysFindingMapper: KidneysFindingMapper) {
    automapper
      .createMap('Kidneys_AbdomenMRT_UiModel', 'Kidneys_AbdomenMRT_ApiModel')
      .convertToType(KidneysApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());

    automapper
      .createMap('Kidneys_AbdomenMRT_ApiModel', 'Kidneys_AbdomenMRT_UiModel')
      .convertToType(KidneysUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: KidneysUiModel, out: KidneysApiModel): KidneysApiModel {
    out = automapper.map('Kidneys_AbdomenMRT_UiModel', 'Kidneys_AbdomenMRT_ApiModel', source);

    out.findings = source.findings.map(
      (finding: KidneysFindingUiModel): KidneysFindingApiModel => {
        return this.kidneysFindingMapper.mapToAPI(finding, new KidneysFindingApiModel());
      }
    );

    return out;
  }

  mapToUI(source: KidneysApiModel, out: KidneysUiModel): KidneysUiModel {
    out = automapper.map('Kidneys_AbdomenMRT_ApiModel', 'Kidneys_AbdomenMRT_UiModel', source);

    out.findings = source.findings.map(
      (finding: KidneysFindingApiModel): KidneysFindingUiModel => {
        return this.kidneysFindingMapper.mapToUI(finding, new KidneysFindingUiModel());
      }
    );

    return out;
  }
}
