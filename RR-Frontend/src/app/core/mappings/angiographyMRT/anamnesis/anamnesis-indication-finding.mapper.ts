import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { AnamnesisIndicationFindingApiModel } from '@models/angiographyMRT/api/anamnesis/anamnesis-indication-finding-api.model';
import { AnamnesisIndicationFindingUiModel } from '@models/angiographyMRT/ui/anamnesis/anamnesis-indication-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisIndicationFindingMapper implements IMapper<AnamnesisIndicationFindingApiModel, AnamnesisIndicationFindingUiModel> {
  constructor() {
    automapper
      .createMap('AnamnesisIndicationFinding_AngioMRT_UiModel', 'AnamnesisIndicationFinding_AngioMRT_ApiModel')
      .convertToType(AnamnesisIndicationFindingApiModel);
    automapper
      .createMap('AnamnesisIndicationFinding_AngioMRT_ApiModel', 'AnamnesisIndicationFinding_AngioMRT_UiModel')
      .convertToType(AnamnesisIndicationFindingUiModel);
  }

  mapToAPI(source: AnamnesisIndicationFindingUiModel, out: AnamnesisIndicationFindingApiModel): AnamnesisIndicationFindingApiModel {
    out = automapper.map('AnamnesisIndicationFinding_AngioMRT_UiModel', 'AnamnesisIndicationFinding_AngioMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: AnamnesisIndicationFindingApiModel, out: AnamnesisIndicationFindingUiModel): AnamnesisIndicationFindingUiModel {
    out = automapper.map('AnamnesisIndicationFinding_AngioMRT_ApiModel', 'AnamnesisIndicationFinding_AngioMRT_UiModel', source);
    return out;
  }
}
