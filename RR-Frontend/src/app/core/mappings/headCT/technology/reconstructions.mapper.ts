import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { ReconstructionUiBaseModel } from '@models/shared/newTechnology/ui/reconstruction-ui-base.model';
import { ReconstructionApiBaseModel } from '@models/shared/newTechnology/api/reconstruction-api-base.model';
import { ReconstructionFindingUiModel } from '@models/headCT/ui/technology/reconstruction-finding-ui.model';
import { ReconstructionFindingApiModel } from '@models/headCT/api/technology/reconstruction-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class ReconstructionsMapper implements IMapper<ReconstructionUiBaseModel, ReconstructionApiBaseModel> {
  constructor() {
    automapper.createMap('Reconstruction_HeadCT_ApiModel', 'Reconstruction_HeadCT_UiModel').convertToType(ReconstructionFindingUiModel);
    automapper.createMap('Reconstruction_HeadCT_UiModel', 'Reconstruction_HeadCT_ApiModel').convertToType(ReconstructionFindingApiModel);
  }

  mapToAPI(source: ReconstructionFindingUiModel, out: ReconstructionFindingApiModel): ReconstructionFindingApiModel {
    out = automapper.map('Reconstruction_HeadCT_UiModel', 'Reconstruction_HeadCT_ApiModel', source);
    return out;
  }

  mapToUI(source: ReconstructionFindingApiModel, out: ReconstructionFindingUiModel): ReconstructionFindingUiModel {
    out = automapper.map('Reconstruction_HeadCT_ApiModel', 'Reconstruction_HeadCT_UiModel', source);
    return out;
  }
}
