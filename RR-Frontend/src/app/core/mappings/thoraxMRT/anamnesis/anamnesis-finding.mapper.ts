import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { AnamnesisFindingApiModel } from '@models/thoraxMRT/api/anamnesis/anamnesis-finding-api.model';
import { AnamnesisFindingUiModel } from '@models/thoraxMRT/ui/anamnesis/anamnesis-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisFindingMapper implements IMapper<AnamnesisFindingApiModel, AnamnesisFindingUiModel> {
  constructor() {
    automapper
      .createMap('AnamnesisFinding_ThoraxMRT_UiModel', 'AnamnesisFinding_ThoraxMRT_ApiModel')
      .convertToType(AnamnesisFindingApiModel);
    automapper
      .createMap('AnamnesisFinding_ThoraxMRT_ApiModel', 'AnamnesisFinding_ThoraxMRT_UiModel')
      .convertToType(AnamnesisFindingUiModel);
  }

  mapToAPI(source: AnamnesisFindingUiModel, out: AnamnesisFindingApiModel): AnamnesisFindingApiModel {
    out = automapper.map('AnamnesisFinding_ThoraxMRT_UiModel', 'AnamnesisFinding_ThoraxMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: AnamnesisFindingApiModel, out: AnamnesisFindingUiModel): AnamnesisFindingUiModel {
    out = automapper.map('AnamnesisFinding_ThoraxMRT_ApiModel', 'AnamnesisFinding_ThoraxMRT_UiModel', source);
    return out;
  }
}
