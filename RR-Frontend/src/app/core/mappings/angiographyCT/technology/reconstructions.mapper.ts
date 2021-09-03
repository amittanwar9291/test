import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { ReconstructionFindingUiModel } from '@models/angiographyCT/ui/technology/reconstruction-finding-ui.model';
import { ReconstructionFindingApiModel } from '@models/angiographyCT/api/technology/reconstruction-finding-api.model';
import { ReconstructionUiBaseModel } from '@models/shared/newTechnology/ui/reconstruction-ui-base.model';
import { ReconstructionApiBaseModel } from '@models/shared/newTechnology/api/reconstruction-api-base.model';

@Injectable({
  providedIn: 'root'
})
export class ReconstructionsMapper implements IMapper<ReconstructionUiBaseModel, ReconstructionApiBaseModel> {
  constructor() {
    automapper
      .createMap('Reconstruction_AngiographyCT_ApiModel', 'Reconstruction_AngiographyCT_UiModel')
      .convertToType(ReconstructionFindingUiModel);
    automapper
      .createMap('Reconstruction_AngiographyCT_UiModel', 'Reconstruction_AngiographyCT_ApiModel')
      .convertToType(ReconstructionFindingApiModel);
  }

  mapToAPI(source: ReconstructionFindingUiModel, out: ReconstructionFindingApiModel): ReconstructionFindingApiModel {
    out = automapper.map('Reconstruction_AngiographyCT_UiModel', 'Reconstruction_AngiographyCT_ApiModel', source);
    return out;
  }

  mapToUI(source: ReconstructionFindingApiModel, out: ReconstructionFindingUiModel): ReconstructionFindingUiModel {
    out = automapper.map('Reconstruction_AngiographyCT_ApiModel', 'Reconstruction_AngiographyCT_UiModel', source);
    return out;
  }
}
