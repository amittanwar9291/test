import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { CenterspecificPreferencesReconstructionUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-reconstruction-ui.model';
import { CenterspecificPreferencesReconstructionApiModel } from '@models/shared/centerspecific-preferences/api/centerspecific-preferences-reconstruction-api.model';

@Injectable({
  providedIn: 'root'
})
export class CenterspecificReconstructionsMapper
  implements IMapper<CenterspecificPreferencesReconstructionApiModel, CenterspecificPreferencesReconstructionUiModel> {
  constructor() {
    automapper
      .createMap('CSP_Reconstructions_ApiModel', 'CSP_Reconstructions_UiModel')
      .convertToType(CenterspecificPreferencesReconstructionUiModel);
    automapper
      .createMap('CSP_Reconstructions_UiModel', 'CSP_Reconstructions_ApiModel')
      .convertToType(CenterspecificPreferencesReconstructionApiModel);
  }

  mapToAPI(
    source: CenterspecificPreferencesReconstructionUiModel,
    out: CenterspecificPreferencesReconstructionApiModel
  ): CenterspecificPreferencesReconstructionApiModel {
    out = automapper.map('CSP_Reconstructions_UiModel', 'CSP_Reconstructions_ApiModel', source);
    return out;
  }

  mapToUI(
    source: CenterspecificPreferencesReconstructionApiModel,
    out: CenterspecificPreferencesReconstructionUiModel
  ): CenterspecificPreferencesReconstructionUiModel {
    out = automapper.map('CSP_Reconstructions_ApiModel', 'CSP_Reconstructions_UiModel', source);
    return out;
  }
}
