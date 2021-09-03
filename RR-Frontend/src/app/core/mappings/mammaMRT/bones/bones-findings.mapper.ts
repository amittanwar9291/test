import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { BonesFindingApiModel } from '@models/mammaMRT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/mammaMRT/ui/bones/bones-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BonesFindingsMapper implements IMapper<BonesFindingApiModel, BonesFindingUiModel> {
  constructor() {
    automapper.createMap('BonesFinding_MammaMRT_ApiModel', 'BonesFinding_MammaMRT_UiModel').convertToType(BonesFindingUiModel);
    automapper.createMap('BonesFinding_MammaMRT_UiModel', 'BonesFinding_MammaMRT_ApiModel').convertToType(BonesFindingApiModel);
  }

  mapToAPI(source: BonesFindingUiModel, out: BonesFindingApiModel): BonesFindingApiModel {
    out = automapper.map('BonesFinding_MammaMRT_UiModel', 'BonesFinding_MammaMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: BonesFindingApiModel, out: BonesFindingUiModel): BonesFindingUiModel {
    out = automapper.map('BonesFinding_MammaMRT_ApiModel', 'BonesFinding_MammaMRT_UiModel', source);
    return out;
  }
}
