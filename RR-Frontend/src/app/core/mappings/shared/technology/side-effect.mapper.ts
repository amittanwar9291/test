import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SideEffectUiBaseModel } from '@models/shared/newTechnology/ui/side-effect-ui-base.model';
import { SideEffectApiBaseModel } from '@models/shared/newTechnology/api/side-effect-api-base.model';

@Injectable({
  providedIn: 'root'
})
export class SideEffectMapper implements IMapper<SideEffectApiBaseModel, SideEffectUiBaseModel> {
  constructor() {
    automapper.createMap('SideEffect_ApiModel', 'SideEffect_UiModel').convertToType(SideEffectUiBaseModel);
    automapper.createMap('SideEffect_UiModel', 'SideEffect_ApiModel').convertToType(SideEffectApiBaseModel);
  }

  mapToAPI(source: SideEffectUiBaseModel, out: SideEffectApiBaseModel): SideEffectApiBaseModel {
    out = automapper.map('SideEffect_UiModel', 'SideEffect_ApiModel', source);
    return out;
  }

  mapToUI(source: SideEffectApiBaseModel, out: SideEffectUiBaseModel): SideEffectUiBaseModel {
    out = automapper.map('SideEffect_ApiModel', 'SideEffect_UiModel', source);
    return out;
  }
}
