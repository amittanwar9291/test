import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MethodApiModel } from '@models/angiographyMRT/api/technology/method-api.model';
import { MethodUiModel } from '@models/angiographyMRT/ui/technology/method-ui.model';

@Injectable({
  providedIn: 'root'
})
export class MethodMapper implements IMapper<MethodApiModel, MethodUiModel> {
  constructor() {
    automapper.createMap('MethodApiModel', 'MethodUiModel').convertToType(MethodUiModel);
    automapper.createMap('MethodUiModel', 'MethodApiModel').convertToType(MethodApiModel);
  }

  mapToAPI(source: MethodUiModel, out: MethodApiModel): MethodApiModel {
    out = automapper.map('MethodUiModel', 'MethodApiModel', source);
    return out;
  }

  mapToUI(source: MethodApiModel, out: MethodUiModel): MethodUiModel {
    out = automapper.map('MethodApiModel', 'MethodUiModel', source);
    return out;
  }
}
