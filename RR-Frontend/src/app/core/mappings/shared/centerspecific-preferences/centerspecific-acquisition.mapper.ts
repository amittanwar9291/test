import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { CenterspecificPreferencesAcquisitionApiModel } from '@models/shared/centerspecific-preferences/api/centerspecific-preferences-acquisition-api.model';
import { CenterspecificPreferencesAcquisitionUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-acquisition-ui.model';
import { CenterspecificReconstructionsMapper } from '@mappings/shared/centerspecific-preferences/centerspecific-reconstructions.mapper';
import { CenterspecificPreferencesReconstructionUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-reconstruction-ui.model';
import { CenterspecificPreferencesReconstructionApiModel } from '@models/shared/centerspecific-preferences/api/centerspecific-preferences-reconstruction-api.model';

@Injectable({
  providedIn: 'root'
})
export class CenterspecificAcquisitionMapper
  implements IMapper<CenterspecificPreferencesAcquisitionApiModel, CenterspecificPreferencesAcquisitionUiModel> {
  constructor(private reconstructionsMapper: CenterspecificReconstructionsMapper) {
    automapper.createMap('CSP_Acquisition_ApiModel', 'CSP_Acquisition_UiModel').convertToType(CenterspecificPreferencesAcquisitionUiModel);

    automapper.createMap('CSP_Acquisition_UiModel', 'CSP_Acquisition_ApiModel').convertToType(CenterspecificPreferencesAcquisitionApiModel);
  }

  mapToAPI(
    source: CenterspecificPreferencesAcquisitionUiModel,
    out: CenterspecificPreferencesAcquisitionApiModel
  ): CenterspecificPreferencesAcquisitionApiModel {
    out = automapper.map('CSP_Acquisition_UiModel', 'CSP_Acquisition_ApiModel', source);

    out.reconstructions.splice(0, out.reconstructions.length);
    source.reconstructions.forEach(reconstruction => {
      out.reconstructions.push(this.reconstructionsMapper.mapToAPI(reconstruction, new CenterspecificPreferencesReconstructionApiModel()));
    });

    return out;
  }

  mapToUI(
    source: CenterspecificPreferencesAcquisitionApiModel,
    out: CenterspecificPreferencesAcquisitionUiModel
  ): CenterspecificPreferencesAcquisitionUiModel {
    out = automapper.map('CSP_Acquisition_ApiModel', 'CSP_Acquisition_UiModel', source);

    out.reconstructions.splice(0, out.reconstructions.length);
    source.reconstructions.forEach(reconstruction => {
      out.reconstructions.push(this.reconstructionsMapper.mapToUI(reconstruction, new CenterspecificPreferencesReconstructionUiModel()));
    });

    return out;
  }
}
