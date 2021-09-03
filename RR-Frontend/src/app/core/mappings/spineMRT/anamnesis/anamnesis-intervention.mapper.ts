import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { AnamnesisInterventionUiModel } from '@models/spineMRT/ui/anamnesis/anamnesis-intervention-ui.model';
import { AnamnesisInterventionApiModel } from '@models/spineMRT/api/anamnesis/anamnesis-intervention-api.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisInterventionsMapper implements IMapper<AnamnesisInterventionApiModel, AnamnesisInterventionUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('AnamnesisIntervention_SpineMRT_ApiModel', 'AnamnesisIntervention_SpineMRT_UiModel')
      .convertToType(AnamnesisInterventionUiModel);
    automapper
      .createMap('AnamnesisIntervention_SpineMRT_UiModel', 'AnamnesisIntervention_SpineMRT_ApiModel')
      .convertToType(AnamnesisInterventionApiModel);
  }

  mapToAPI(source: AnamnesisInterventionUiModel, out: AnamnesisInterventionApiModel): AnamnesisInterventionApiModel {
    out = automapper.map('AnamnesisIntervention_SpineMRT_UiModel', 'AnamnesisIntervention_SpineMRT_ApiModel', source);
    out.spineLocation = this.enumMapper.mapToString(source.spineLocation);
    return out;
  }

  mapToUI(source: AnamnesisInterventionApiModel, out: AnamnesisInterventionUiModel): AnamnesisInterventionUiModel {
    out = automapper.map('AnamnesisIntervention_SpineMRT_ApiModel', 'AnamnesisIntervention_SpineMRT_UiModel', source);
    this.enumMapper.mapToObject(source.spineLocation, out.spineLocation);
    return out;
  }
}
