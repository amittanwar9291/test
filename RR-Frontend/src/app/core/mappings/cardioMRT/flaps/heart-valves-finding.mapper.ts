import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { HeartValvesFindingApiModel } from '@models/cardioMRT/api/flaps/heart-valves-finding-api.model';
import { HeartValvesFindingUiModel } from '@models/cardioMRT/ui/flaps/heart-valves-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class HeartValvesFindingMapper implements IMapper<HeartValvesFindingApiModel, HeartValvesFindingUiModel> {
  constructor() {
    automapper
      .createMap('HeartValvesFinding_CardioMRT_UiModel', 'HeartValvesFinding_CardioMRT_ApiModel')
      .convertToType(HeartValvesFindingApiModel);
    automapper
      .createMap('HeartValvesFinding_CardioMRT_ApiModel', 'HeartValvesFinding_CardioMRT_UiModel')
      .convertToType(HeartValvesFindingUiModel);
  }

  mapToAPI(source: HeartValvesFindingUiModel, out: HeartValvesFindingApiModel): HeartValvesFindingApiModel {
    out = automapper.map('HeartValvesFinding_CardioMRT_UiModel', 'HeartValvesFinding_CardioMRT_ApiModel', source);

    return out;
  }

  mapToUI(source: HeartValvesFindingApiModel, out: HeartValvesFindingUiModel): HeartValvesFindingUiModel {
    out = automapper.map('HeartValvesFinding_CardioMRT_ApiModel', 'HeartValvesFinding_CardioMRT_UiModel', source);

    return out;
  }
}
