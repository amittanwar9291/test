import { Injectable } from '@angular/core';

import { OsteochondralInterfaceApiModel } from '@models/kneeMRT/api/osteochondral-interface/osteochondral-interface-api.model';
import { OsteochondralInterfaceUiModel } from '@models/kneeMRT/ui/osteochondral-interface/osteochondral-interface-ui.model';
import { OsteochondralInterfaceFindingApiModel } from '@models/kneeMRT/api/osteochondral-interface/osteochondral-interface-finding-api.model';
import { OsteochondralInterfaceFindingUiModel } from '@models/kneeMRT/ui/osteochondral-interface/osteochondral-interface-finding-ui.model';

import { OsteochondralInterfaceFindingsMapper } from './osteochondral-interface-finding.mapper';

import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class OsteochondralInterfaceMapper implements IMapper<OsteochondralInterfaceApiModel, OsteochondralInterfaceUiModel> {
  constructor(private osteochondralInterfaceFindingsMapper: OsteochondralInterfaceFindingsMapper) {
    automapper
      .createMap('OsteochondralInterface_KneeMRT_UiModel', 'OsteochondralInterface_KneeMRT_ApiModel')
      .convertToType(OsteochondralInterfaceApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('OsteochondralInterface_KneeMRT_ApiModel', 'OsteochondralInterface_KneeMRT_UiModel')
      .convertToType(OsteochondralInterfaceUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: OsteochondralInterfaceUiModel, out: OsteochondralInterfaceApiModel): OsteochondralInterfaceApiModel {
    out = automapper.map('OsteochondralInterface_KneeMRT_UiModel', 'OsteochondralInterface_KneeMRT_ApiModel', source);

    out.findings.length = 0;

    for (const finding of source.findings) {
      out.findings.push(this.osteochondralInterfaceFindingsMapper.mapToAPI(finding, new OsteochondralInterfaceFindingApiModel()));
    }

    return out;
  }

  mapToUI(source: OsteochondralInterfaceApiModel, out: OsteochondralInterfaceUiModel): OsteochondralInterfaceUiModel {
    out = automapper.map('OsteochondralInterface_KneeMRT_ApiModel', 'OsteochondralInterface_KneeMRT_UiModel', source);

    out.findings.length = 0;

    for (const finding of source.findings) {
      out.findings.push(this.osteochondralInterfaceFindingsMapper.mapToUI(finding, new OsteochondralInterfaceFindingUiModel()));
    }

    return out;
  }
}
