import { Injectable } from '@angular/core';

import { PatellaFindingApiModel } from '@models/kneeMRT/api/patella/patella-finding-api.model';
import { PatellaFindingUiModel } from '@models/kneeMRT/ui/patella/patella-finding-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class PatellaFindingMapper implements IMapper<PatellaFindingApiModel, PatellaFindingUiModel> {
  constructor() {
    automapper.createMap('PatellaFinding_KneeMRT_ApiModel', 'PatellaFinding_KneeMRT_UiModel').convertToType(PatellaFindingUiModel);
    automapper.createMap('PatellaFinding_KneeMRT_UiModel', 'PatellaFinding_KneeMRT_ApiModel').convertToType(PatellaFindingApiModel);
  }

  mapToAPI(source: PatellaFindingUiModel, out: PatellaFindingApiModel): PatellaFindingApiModel {
    out = automapper.map('PatellaFinding_KneeMRT_UiModel', 'PatellaFinding_KneeMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: PatellaFindingApiModel, out: PatellaFindingUiModel): PatellaFindingUiModel {
    out = automapper.map('PatellaFinding_KneeMRT_ApiModel', 'PatellaFinding_KneeMRT_UiModel', source);
    return out;
  }
}
