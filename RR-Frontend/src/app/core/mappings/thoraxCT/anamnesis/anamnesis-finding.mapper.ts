import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { AnamnesisFindingApiModel } from '@models/thoraxCT/api/anamnesis/anamnesis-finding-api.model';
import { AnamnesisFindingUiModel } from '@models/thoraxCT/ui/anamnesis/anamnesis-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisFindingMapper implements IMapper<AnamnesisFindingApiModel, AnamnesisFindingUiModel> {
  constructor() {
    automapper.createMap('AnamnesisFinding_ThoraxCT_UiModel', 'AnamnesisFinding_ThoraxCT_ApiModel').convertToType(AnamnesisFindingApiModel);
    automapper.createMap('AnamnesisFinding_ThoraxCT_ApiModel', 'AnamnesisFinding_ThoraxCT_UiModel').convertToType(AnamnesisFindingUiModel);
  }

  mapToAPI(source: AnamnesisFindingUiModel, out: AnamnesisFindingApiModel): AnamnesisFindingApiModel {
    out = automapper.map('AnamnesisFinding_ThoraxCT_UiModel', 'AnamnesisFinding_ThoraxCT_ApiModel', source);
    return out;
  }

  mapToUI(source: AnamnesisFindingApiModel, out: AnamnesisFindingUiModel): AnamnesisFindingUiModel {
    out = automapper.map('AnamnesisFinding_ThoraxCT_ApiModel', 'AnamnesisFinding_ThoraxCT_UiModel', source);
    return out;
  }
}
