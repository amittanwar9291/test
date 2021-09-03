import { Injectable } from '@angular/core';

import { PatellaApiModel } from '@models/kneeMRT/api/patella/patella-api.model';
import { PatellaUiModel } from '@models/kneeMRT/ui/patella/patella-ui.model';
import { PatellaFindingApiModel } from '@models/kneeMRT/api/patella/patella-finding-api.model';
import { PatellaFindingUiModel } from '@models/kneeMRT/ui/patella/patella-finding-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { PatellaFindingMapper } from './patella-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class PatellaMapper implements IMapper<PatellaApiModel, PatellaUiModel> {
  constructor(private patellaFindingMapper: PatellaFindingMapper) {
    automapper
      .createMap('Patella_KneeMRT_UiModel', 'Patella_KneeMRT_ApiModel')
      .convertToType(PatellaApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Patella_KneeMRT_ApiModel', 'Patella_KneeMRT_UiModel')
      .convertToType(PatellaUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: PatellaUiModel, out: PatellaApiModel): PatellaApiModel {
    out = automapper.map('Patella_KneeMRT_UiModel', 'Patella_KneeMRT_ApiModel', source);

    out.findings.length = 0;

    for (const finding of source.findings) {
      out.findings.push(this.patellaFindingMapper.mapToAPI(finding, new PatellaFindingApiModel()));
    }

    return out;
  }

  mapToUI(source: PatellaApiModel, out: PatellaUiModel): PatellaUiModel {
    out = automapper.map('Patella_KneeMRT_ApiModel', 'Patella_KneeMRT_UiModel', source);

    out.findings.length = 0;

    for (const finding of source.findings) {
      out.findings.push(this.patellaFindingMapper.mapToUI(finding, new PatellaFindingUiModel()));
    }

    return out;
  }
}
