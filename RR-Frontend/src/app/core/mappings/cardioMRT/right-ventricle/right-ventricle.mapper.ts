import { Injectable } from '@angular/core';

import { RightVentricleUiModel } from '@models/cardioMRT/ui/right-ventricle/right-ventricle-ui.model';
import { RightVentricleApiModel } from '@models/cardioMRT/api/right-ventricle/right-ventricle-api.model';

import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class RightVentricleMapper implements IMapper<RightVentricleApiModel, RightVentricleUiModel> {
  constructor() {
    automapper.createMap('RightVentricle_CardioMRT_UiModel', 'RightVentricle_CardioMRT_ApiModel').convertToType(RightVentricleApiModel);
    automapper.createMap('RightVentricle_CardioMRT_ApiModel', 'RightVentricle_CardioMRT_UiModel').convertToType(RightVentricleUiModel);
  }

  mapToAPI(source: RightVentricleUiModel, out: RightVentricleApiModel): RightVentricleApiModel {
    out = automapper.map('RightVentricle_CardioMRT_UiModel', 'RightVentricle_CardioMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: RightVentricleApiModel, out: RightVentricleUiModel): RightVentricleUiModel {
    out = automapper.map('RightVentricle_CardioMRT_ApiModel', 'RightVentricle_CardioMRT_UiModel', source);
    return out;
  }
}
