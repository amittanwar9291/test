import { Injectable } from '@angular/core';

import { FindingMamillaApi } from '@models/mammaMRT/api/anatomy-enhancement/finding-mamilla-api';
import { FindingMamillaUi } from '@models/mammaMRT/ui/anatomy-enhancement/finding-mamilla-ui';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class FindingMamillaMapper implements IMapper<FindingMamillaApi, FindingMamillaUi> {
  constructor(private enumMapper: EnumMapper) {
    automapper.createMap('FindingMamilla_MammaMRT_UiModel', 'FindingMamilla_MammaMRT_ApiModel').convertToType(FindingMamillaApi);
    automapper.createMap('FindingMamilla_MammaMRT_ApiModel', 'FindingMamilla_MammaMRT_UiModel').convertToType(FindingMamillaUi);
  }
  mapToAPI(source: FindingMamillaUi, out: FindingMamillaApi): FindingMamillaApi {
    out = automapper.map('FindingMamilla_MammaMRT_UiModel', 'FindingMamilla_MammaMRT_ApiModel', source);
    return out;
  }
  mapToUI(source: FindingMamillaApi, out: FindingMamillaUi): FindingMamillaUi {
    out = automapper.map('FindingMamilla_MammaMRT_ApiModel', 'FindingMamilla_MammaMRT_UiModel', source);
    return out;
  }
}
