import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { ClinicSymptomsFindingApiModel } from '@models/headCT/api/anamnesis/clinic-symptoms-finding-api.model';
import { ClinicSymptomsFindingUiModel } from '@models/headCT/ui/anamnesis/clinic-symptoms-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class ClinicSymptomsFindingMapper implements IMapper<ClinicSymptomsFindingApiModel, ClinicSymptomsFindingUiModel> {
  constructor() {
    automapper
      .createMap('ClinicSymptomsFinding_headCT_UiModel', 'ClinicSymptomsFinding_headCT_ApiModel')
      .convertToType(ClinicSymptomsFindingApiModel);
    automapper
      .createMap('ClinicSymptomsFinding_headCT_ApiModel', 'ClinicSymptomsFinding_headCT_UiModel')
      .convertToType(ClinicSymptomsFindingUiModel);
  }

  mapToAPI(source: ClinicSymptomsFindingUiModel, out: ClinicSymptomsFindingApiModel): ClinicSymptomsFindingApiModel {
    out = automapper.map('ClinicSymptomsFinding_headCT_UiModel', 'ClinicSymptomsFinding_headCT_ApiModel', source);
    return out;
  }

  mapToUI(source: ClinicSymptomsFindingApiModel, out: ClinicSymptomsFindingUiModel): ClinicSymptomsFindingUiModel {
    out = automapper.map('ClinicSymptomsFinding_headCT_ApiModel', 'ClinicSymptomsFinding_headCT_UiModel', source);
    return out;
  }
}
