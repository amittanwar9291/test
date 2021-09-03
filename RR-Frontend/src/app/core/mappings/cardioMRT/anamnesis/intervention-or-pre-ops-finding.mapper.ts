import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { InterventionOrPreOpsFindingApiModel } from '@models/cardioMRT/api/anamnesis/intervention-or-pre-ops-finding-api.model';
import { InterventionOrPreOpsFindingUiModel } from '@models/cardioMRT/ui/anamnesis/intervention-or-pre-ops-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class InterventionOrPreOpsFindingMapper implements IMapper<InterventionOrPreOpsFindingApiModel, InterventionOrPreOpsFindingUiModel> {
  constructor() {
    automapper
      .createMap('InterventionOrPreOpsFinding_CardioMRT_UiModel', 'InterventionOrPreOpsFinding_CardioMRT_ApiModel')
      .convertToType(InterventionOrPreOpsFindingApiModel);
    automapper
      .createMap('InterventionOrPreOpsFinding_CardioMRT_ApiModel', 'InterventionOrPreOpsFinding_CardioMRT_UiModel')
      .convertToType(InterventionOrPreOpsFindingUiModel);
  }

  mapToAPI(source: InterventionOrPreOpsFindingUiModel, out: InterventionOrPreOpsFindingApiModel): InterventionOrPreOpsFindingApiModel {
    out = automapper.map('InterventionOrPreOpsFinding_CardioMRT_UiModel', 'InterventionOrPreOpsFinding_CardioMRT_ApiModel', source);

    return out;
  }

  mapToUI(source: InterventionOrPreOpsFindingApiModel, out: InterventionOrPreOpsFindingUiModel): InterventionOrPreOpsFindingUiModel {
    out = automapper.map('InterventionOrPreOpsFinding_CardioMRT_ApiModel', 'InterventionOrPreOpsFinding_CardioMRT_UiModel', source);

    return out;
  }
}
