import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { LymphNodeDetailsApiModel } from '@models/mammaMX/api/lymph-nodes/lymph-node-details-api.model';
import { LymphNodeDetailsUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-node-details-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LymphNodeDetailsMapper implements IMapper<LymphNodeDetailsApiModel, LymphNodeDetailsUiModel> {
  constructor() {
    automapper.createMap('LymphNodeDetails_MammaMX_UiModel', 'LymphNodeDetails_MammaMX_ApiModel').convertToType(LymphNodeDetailsApiModel);

    automapper.createMap('LymphNodeDetails_MammaMX_ApiModel', 'LymphNodeDetails_MammaMX_UiModel').convertToType(LymphNodeDetailsUiModel);
  }

  mapToAPI(source: LymphNodeDetailsUiModel, out: LymphNodeDetailsApiModel): LymphNodeDetailsApiModel {
    out = automapper.map('LymphNodeDetails_MammaMX_UiModel', 'LymphNodeDetails_MammaMX_ApiModel', source);

    return out;
  }

  mapToUI(source: LymphNodeDetailsApiModel, out: LymphNodeDetailsUiModel): LymphNodeDetailsUiModel {
    out = automapper.map('LymphNodeDetails_MammaMX_ApiModel', 'LymphNodeDetails_MammaMX_UiModel', source);

    return out;
  }
}
