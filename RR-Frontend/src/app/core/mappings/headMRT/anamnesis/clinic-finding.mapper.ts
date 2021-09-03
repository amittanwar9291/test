import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { ClinicFindingApiModel } from '@models/headMRT/api/anamnesis/clinic-finding-api.model';
import { ClinicFindingUiModel } from '@models/headMRT/ui/anamnesis/clinic-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class ClinicFindingMapper implements IMapper<ClinicFindingApiModel, ClinicFindingUiModel> {
  constructor() {
    automapper.createMap('ClinicFinding_HeadMRT_UiModel', 'ClinicFinding_HeadMRT_ApiModel').convertToType(ClinicFindingApiModel);
    automapper.createMap('ClinicFinding_HeadMRT_ApiModel', 'ClinicFinding_HeadMRT_UiModel').convertToType(ClinicFindingUiModel);
  }

  mapToAPI(source: ClinicFindingUiModel, out: ClinicFindingApiModel): ClinicFindingApiModel {
    out = automapper.map('ClinicFinding_HeadMRT_UiModel', 'ClinicFinding_HeadMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: ClinicFindingApiModel, out: ClinicFindingUiModel): ClinicFindingUiModel {
    out = automapper.map('ClinicFinding_HeadMRT_ApiModel', 'ClinicFinding_HeadMRT_UiModel', source);
    return out;
  }
}
