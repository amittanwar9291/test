import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { IndicationFindingApiModel } from '@models/cardioMRT/api/anamnesis/indication-finding.api.model';
import { IndicationFindingUiModel } from '@models/cardioMRT/ui/anamnesis/indication-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class IndicationFindingMapper implements IMapper<IndicationFindingApiModel, IndicationFindingUiModel> {
  constructor() {
    automapper
      .createMap('IndicationFinding_CardioMRT_UiModel', 'IndicationFinding_CardioMRT_ApiModel')
      .convertToType(IndicationFindingApiModel);
    automapper
      .createMap('IndicationFinding_CardioMRT_ApiModel', 'IndicationFinding_CardioMRT_UiModel')
      .convertToType(IndicationFindingUiModel);
  }

  mapToAPI(source: IndicationFindingUiModel, out: IndicationFindingApiModel): IndicationFindingApiModel {
    out = automapper.map('IndicationFinding_CardioMRT_UiModel', 'IndicationFinding_CardioMRT_ApiModel', source);

    return out;
  }

  mapToUI(source: IndicationFindingApiModel, out: IndicationFindingUiModel): IndicationFindingUiModel {
    out = automapper.map('IndicationFinding_CardioMRT_ApiModel', 'IndicationFinding_CardioMRT_UiModel', source);

    return out;
  }
}
