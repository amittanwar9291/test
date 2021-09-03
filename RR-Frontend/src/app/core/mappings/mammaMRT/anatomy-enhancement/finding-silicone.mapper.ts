import { Injectable } from '@angular/core';

import { FindingSiliconeApi } from '@models/mammaMRT/api/anatomy-enhancement/finding-silicone-api';
import { FindingSiliconeUi } from '@models/mammaMRT/ui/anatomy-enhancement/finding-silicone-ui';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class FindingSiliconeMapper implements IMapper<FindingSiliconeApi, FindingSiliconeUi> {
  constructor(private enumMapper: EnumMapper) {
    automapper.createMap('FindingSilicone_MammaMRT_UiModel', 'FindingSilicone_MammaMRT_ApiModel').convertToType(FindingSiliconeApi);
    automapper.createMap('FindingSilicone_MammaMRT_ApiModel', 'FindingSilicone_MammaMRT_UiModel').convertToType(FindingSiliconeUi);
  }
  mapToAPI(source: FindingSiliconeUi, out: FindingSiliconeApi): FindingSiliconeApi {
    out = automapper.map('FindingSilicone_MammaMRT_UiModel', 'FindingSilicone_MammaMRT_ApiModel', source);
    out.location = this.enumMapper.mapToString(source.location);
    return out;
  }
  mapToUI(source: FindingSiliconeApi, out: FindingSiliconeUi): FindingSiliconeUi {
    out = automapper.map('FindingSilicone_MammaMRT_ApiModel', 'FindingSilicone_MammaMRT_UiModel', source);
    this.enumMapper.mapToObject(source.location, out.location);
    return out;
  }
}
