import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { PatientApiModel } from '@models/shared/patient/patient-api.model';
import { PatientUiModel } from '@models/shared/patient/patient-ui.model';

@Injectable({
  providedIn: 'root'
})
export class PatientMapper implements IMapper<PatientApiModel, PatientUiModel> {
  constructor() {
    automapper.createMap('Patient_InstituteManager_ApiModel', 'Patient_InstituteManager_UiModel').convertToType(PatientUiModel);
    automapper.createMap('Patient_InstituteManager_UiModel', 'Patient_InstituteManager_ApiModel').convertToType(PatientApiModel);
  }

  mapToAPI(source: PatientUiModel, out: PatientApiModel): PatientApiModel {
    out = automapper.map('Patient_InstituteManager_UiModel', 'Patient_InstituteManager_ApiModel', source);
    out.birthDate = source.birthDate.toDateString();

    return out;
  }

  mapToUI(source: PatientApiModel, out: PatientUiModel): PatientUiModel {
    out = automapper.map('Patient_InstituteManager_ApiModel', 'Patient_InstituteManager_UiModel', source);
    out.birthDate = new Date(source.birthDate);

    return out;
  }
}
