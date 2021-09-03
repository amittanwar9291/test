import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { IndicationFindingApiModel } from '@models/thoraxMRT/api/anamnesis/indication-finding-api.model';
import { IndicationFindingUiModel } from '@models/thoraxMRT/ui/anamnesis/indication-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class IndicationFindingMapper implements IMapper<IndicationFindingApiModel, IndicationFindingUiModel> {
  constructor() {
    automapper
      .createMap('IndicationFinding_ThoraxMRT_UiModel', 'IndicationFinding_ThoraxMRT_ApiModel')
      .convertToType(IndicationFindingApiModel);
    automapper
      .createMap('IndicationFinding_ThoraxMRT_ApiModel', 'IndicationFinding_ThoraxMRT_UiModel')
      .convertToType(IndicationFindingUiModel);
  }

  mapToAPI(source: IndicationFindingUiModel, out: IndicationFindingApiModel): IndicationFindingApiModel {
    out = automapper.map('IndicationFinding_ThoraxMRT_UiModel', 'IndicationFinding_ThoraxMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: IndicationFindingApiModel, out: IndicationFindingUiModel): IndicationFindingUiModel {
    out = automapper.map('IndicationFinding_ThoraxMRT_ApiModel', 'IndicationFinding_ThoraxMRT_UiModel', source);
    return out;
  }
}
