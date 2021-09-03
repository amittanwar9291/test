import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { PriorInterventionsFindingApiModel } from '@models/angiographyCT/api/anamnesis/prior-interventions-finding-api.model';
import { PriorInterventionsFindingUiModel } from '@models/angiographyCT/ui/anamnesis/prior-interventions-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisPriorInterventionsMapper implements IMapper<PriorInterventionsFindingApiModel, PriorInterventionsFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('AnamnesisPriorInterventions_AngioCT_UiModel', 'AnamnesisIndication_AngioCT_ApiModel')
      .convertToType(PriorInterventionsFindingApiModel);

    automapper
      .createMap('AnamnesisIndication_AngioCT_ApiModel', 'AnamnesisPriorInterventions_AngioCT_UiModel')
      .convertToType(PriorInterventionsFindingUiModel);
  }

  mapToAPI(source: PriorInterventionsFindingUiModel, out: PriorInterventionsFindingApiModel): PriorInterventionsFindingApiModel {
    out = automapper.map('AnamnesisPriorInterventions_AngioCT_UiModel', 'AnamnesisIndication_AngioCT_ApiModel', source);

    return out;
  }

  mapToUI(source: PriorInterventionsFindingApiModel, out: PriorInterventionsFindingUiModel): PriorInterventionsFindingUiModel {
    out = automapper.map('AnamnesisIndication_AngioCT_ApiModel', 'AnamnesisPriorInterventions_AngioCT_UiModel', source);

    return out;
  }
}
