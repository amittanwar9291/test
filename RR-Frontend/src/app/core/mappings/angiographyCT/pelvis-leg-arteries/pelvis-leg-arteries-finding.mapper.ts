import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { PelvisLegArteriesFindingApiModel } from '@models/angiographyCT/api/pelvis-leg-arteries/pelvis-leg-arteries-finding-api.model';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class PelvisLegArteriesFindingMapper implements IMapper<PelvisLegArteriesFindingApiModel, PelvisLegArteriesFindingUiModel> {
  constructor() {
    automapper
      .createMap('PelvisLegArteriesFinding_AngioCT_UiModel', 'PelvisLegArteriesFinding_AngioCT_ApiModel')
      .convertToType(PelvisLegArteriesFindingApiModel);

    automapper
      .createMap('PelvisLegArteriesFinding_AngioCT_ApiModel', 'PelvisLegArteriesFinding_AngioCT_UiModel')
      .convertToType(PelvisLegArteriesFindingUiModel);
  }

  mapToAPI(source: PelvisLegArteriesFindingUiModel, out: PelvisLegArteriesFindingApiModel): PelvisLegArteriesFindingApiModel {
    out = automapper.map('PelvisLegArteriesFinding_AngioCT_UiModel', 'PelvisLegArteriesFinding_AngioCT_ApiModel', source);
    return out;
  }

  mapToUI(source: PelvisLegArteriesFindingApiModel, out: PelvisLegArteriesFindingUiModel): PelvisLegArteriesFindingUiModel {
    out = automapper.map('PelvisLegArteriesFinding_AngioCT_ApiModel', 'PelvisLegArteriesFinding_AngioCT_UiModel', source);

    return out;
  }
}
