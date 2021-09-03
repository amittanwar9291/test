import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { PelvisLegArteriesFindingApiModel } from '@models/angiographyMRT/api/pelvis-leg-arteries/pelvis-leg-arteries-finding-api.model';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class PelvisLegArteriesFindingMapper implements IMapper<PelvisLegArteriesFindingApiModel, PelvisLegArteriesFindingUiModel> {
  constructor() {
    automapper
      .createMap('PelvisLegArteriesFindingUiModel', 'PelvisLegArteriesFindingApiModel')
      .convertToType(PelvisLegArteriesFindingApiModel);

    automapper
      .createMap('PelvisLegArteriesFindingApiModel', 'PelvisLegArteriesFindingUiModel')
      .convertToType(PelvisLegArteriesFindingUiModel);
  }

  mapToAPI(source: PelvisLegArteriesFindingUiModel, out: PelvisLegArteriesFindingApiModel): PelvisLegArteriesFindingApiModel {
    out = automapper.map('PelvisLegArteriesFindingUiModel', 'PelvisLegArteriesFindingApiModel', source);
    return out;
  }

  mapToUI(source: PelvisLegArteriesFindingApiModel, out: PelvisLegArteriesFindingUiModel): PelvisLegArteriesFindingUiModel {
    out = automapper.map('PelvisLegArteriesFindingApiModel', 'PelvisLegArteriesFindingUiModel', source);

    return out;
  }
}
