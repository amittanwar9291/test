import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { LymphNodeStationsFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymph-node-stations-finding-ui.model';
import { LymphNodeStationsFindingApiModel } from '@models/abdomenMRT/api/lymphatic-system/lymph-node-stations-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class LymphNodeStationsFindingMapper implements IMapper<LymphNodeStationsFindingApiModel, LymphNodeStationsFindingUiModel> {
  constructor() {
    automapper
      .createMap('LymphNodeStationsFinding_AbdomenMRT_UiModel', 'LymphNodeStationsFinding_AbdomenMRT_ApiModel')
      .convertToType(LymphNodeStationsFindingApiModel);

    automapper
      .createMap('LymphNodeStationsFinding_AbdomenMRT_ApiModel', 'LymphNodeStationsFinding_AbdomenMRT_UiModel')
      .convertToType(LymphNodeStationsFindingUiModel);
  }

  mapToAPI(source: LymphNodeStationsFindingUiModel, out: LymphNodeStationsFindingApiModel): LymphNodeStationsFindingApiModel {
    out = automapper.map('LymphNodeStationsFinding_AbdomenMRT_UiModel', 'LymphNodeStationsFinding_AbdomenMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: LymphNodeStationsFindingApiModel, out: LymphNodeStationsFindingUiModel): LymphNodeStationsFindingUiModel {
    out = automapper.map('LymphNodeStationsFinding_AbdomenMRT_ApiModel', 'LymphNodeStationsFinding_AbdomenMRT_UiModel', source);
    return out;
  }
}
