import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

@Injectable({
  providedIn: 'root'
})
export class PatientInformationMapper implements IMapper<PatientInformationApiModel, PatientInformationUiModel> {
  constructor() {
    automapper.createMap('PatientInformationUiModel', 'PatientInformationApiModel').convertToType(PatientInformationApiModel);
    automapper.createMap('PatientInformationApiModel', 'PatientInformationUiModel').convertToType(PatientInformationUiModel);
  }

  mapToAPI(source: PatientInformationUiModel, out: PatientInformationApiModel): PatientInformationApiModel {
    out = automapper.map('PatientInformationUiModel', 'PatientInformationApiModel', source);

    out.weight = source.bmiCalculator.weight;
    out.height = source.bmiCalculator.height;

    return out;
  }

  mapToUI(source: PatientInformationApiModel, out: PatientInformationUiModel): PatientInformationUiModel {
    out = automapper.map('PatientInformationApiModel', 'PatientInformationUiModel', source);

    out.bmiCalculator.weight = source.weight;
    out.bmiCalculator.height = source.height;
    out.bmiCalculator.bmiResult = source.bmi.value;

    return out;
  }
}
