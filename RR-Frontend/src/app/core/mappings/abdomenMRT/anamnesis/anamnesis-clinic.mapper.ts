import { Injectable } from '@angular/core';
import { AnamnesisClinicApiModel } from '@models/abdomenMRT/api/anamnesis/anamnesis-clinic-api.model';
import { AnamnesisClinicUiModel } from '@models/abdomenMRT/ui/anamnesis/anamnesis-clinic-ui.model';
import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisClinicMapper implements IMapper<AnamnesisClinicApiModel, AnamnesisClinicUiModel> {
  constructor() {
    automapper
      .createMap('AnamnesisClinic_AbdomenMRT_UiModel', 'AnamnesisClinic_AbdomenMRT_ApiModel')
      .convertToType(AnamnesisClinicApiModel);
    automapper.createMap('AnamnesisClinic_AbdomenMRT_ApiModel', 'AnamnesisClinic_AbdomenMRT_UiModel').convertToType(AnamnesisClinicUiModel);
  }

  mapToAPI(source: AnamnesisClinicUiModel, out: AnamnesisClinicApiModel): AnamnesisClinicApiModel {
    out = automapper.map('AnamnesisClinic_AbdomenMRT_UiModel', 'AnamnesisClinic_AbdomenMRT_ApiModel', source);

    return out;
  }

  mapToUI(source: AnamnesisClinicApiModel, out: AnamnesisClinicUiModel): AnamnesisClinicUiModel {
    out = automapper.map('AnamnesisClinic_AbdomenMRT_ApiModel', 'AnamnesisClinic_AbdomenMRT_UiModel', source);

    return out;
  }
}
