import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { LymphNodeApiModel } from '@models/mammaMRT/api/lymph-node/lymph-node-api.model';
import { LymphNodeUiModel } from '@models/mammaMRT/ui/lymph-node/lymph-node-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LymphNodeMapper implements IMapper<LymphNodeApiModel, LymphNodeUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper.createMap('LymphNode_MammaMRT_ApiModel', 'LymphNode_MammaMRT_UiModel').convertToType(LymphNodeUiModel);
    automapper.createMap('LymphNode_MammaMRT_UiModel', 'LymphNode_MammaMRT_ApiModel').convertToType(LymphNodeApiModel);
  }

  mapToAPI(source: LymphNodeUiModel, out: LymphNodeApiModel): LymphNodeApiModel {
    out = automapper.map('LymphNode_MammaMRT_UiModel', 'LymphNode_MammaMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: LymphNodeApiModel, out: LymphNodeUiModel): LymphNodeUiModel {
    out = automapper.map('LymphNode_MammaMRT_ApiModel', 'LymphNode_MammaMRT_UiModel', source);
    return out;
  }
}
