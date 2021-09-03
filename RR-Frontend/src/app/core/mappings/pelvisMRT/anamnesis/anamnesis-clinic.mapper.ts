import { AnamnesisClinicFindingApiModel } from '@models/pelvisMRT/api/anamnesis/anamnesis-clinic-finding-api.model';
import { AnamnesisClinicFindingUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-clinic-finding-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisClinicMapper implements IMapper<AnamnesisClinicFindingApiModel, AnamnesisClinicFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('AnamnesisClinic_PelvisMRT_UiModel', 'AnamnesisClinic_PelvisMRT_ApiModel')
      .convertToType(AnamnesisClinicFindingApiModel);

    automapper
      .createMap('AnamnesisClinic_PelvisMRT_ApiModel', 'AnamnesisClinic_PelvisMRT_UiModel')
      .convertToType(AnamnesisClinicFindingUiModel);
  }

  mapToAPI(source: AnamnesisClinicFindingUiModel, out: AnamnesisClinicFindingApiModel): AnamnesisClinicFindingApiModel {
    out = automapper.map('AnamnesisClinic_PelvisMRT_UiModel', 'AnamnesisClinic_PelvisMRT_ApiModel', source);

    return out;
  }

  mapToUI(source: AnamnesisClinicFindingApiModel, out: AnamnesisClinicFindingUiModel): AnamnesisClinicFindingUiModel {
    out = automapper.map('AnamnesisClinic_PelvisMRT_ApiModel', 'AnamnesisClinic_PelvisMRT_UiModel', source);

    return out;
  }
}
