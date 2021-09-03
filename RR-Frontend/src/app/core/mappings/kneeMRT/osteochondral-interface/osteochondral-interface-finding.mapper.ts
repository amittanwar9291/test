import { Injectable } from '@angular/core';

import { OsteochondralInterfaceFindingApiModel } from '@models/kneeMRT/api/osteochondral-interface/osteochondral-interface-finding-api.model';
import { OsteochondralInterfaceFindingUiModel } from '@models/kneeMRT/ui/osteochondral-interface/osteochondral-interface-finding-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class OsteochondralInterfaceFindingsMapper
  implements IMapper<OsteochondralInterfaceFindingApiModel, OsteochondralInterfaceFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('OsteochondralInterfaceFinding_KneeMRT_ApiModel', 'OsteochondralInterfaceFinding_KneeMRT_UiModel')
      .convertToType(OsteochondralInterfaceFindingUiModel);
    automapper
      .createMap('OsteochondralInterfaceFinding_KneeMRT_UiModel', 'OsteochondralInterfaceFinding_KneeMRT_ApiModel')
      .convertToType(OsteochondralInterfaceFindingApiModel);
  }

  mapToAPI(
    source: OsteochondralInterfaceFindingUiModel,
    out: OsteochondralInterfaceFindingApiModel
  ): OsteochondralInterfaceFindingApiModel {
    out = automapper.map('OsteochondralInterfaceFinding_KneeMRT_UiModel', 'OsteochondralInterfaceFinding_KneeMRT_ApiModel', source);
    out.location = this.enumMapper.mapToString(source.location);

    return out;
  }

  mapToUI(source: OsteochondralInterfaceFindingApiModel, out: OsteochondralInterfaceFindingUiModel): OsteochondralInterfaceFindingUiModel {
    out = automapper.map('OsteochondralInterfaceFinding_KneeMRT_ApiModel', 'OsteochondralInterfaceFinding_KneeMRT_UiModel', source);
    this.enumMapper.mapToObject(source.location, out.location);

    return out;
  }
}
