import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { DifferentialDiagnosisApiModel } from '@models/shared/differential-diagnosis/differential-diagnosis-api.model';
import { DifferentialDiagnosisUiModel } from '@models/shared/differential-diagnosis/differential-diagnosis-ui.model';

@Injectable({
  providedIn: 'root'
})
export class DifferentialDiagnosisMapper implements IMapper<DifferentialDiagnosisApiModel, DifferentialDiagnosisUiModel> {
  constructor() {
    automapper.createMap('DifferentialDiagnosisApiModel', 'DifferentialDiagnosisUiModel').convertToType(DifferentialDiagnosisUiModel);
    automapper.createMap('DifferentialDiagnosisUiModel', 'DifferentialDiagnosisApiModel').convertToType(DifferentialDiagnosisApiModel);
  }

  mapToAPI(source: DifferentialDiagnosisUiModel, out: DifferentialDiagnosisApiModel): DifferentialDiagnosisApiModel {
    if (!source) {
      return null;
    }

    out = automapper.map('DifferentialDiagnosisUiModel', 'DifferentialDiagnosisApiModel', source);
    return out;
  }

  mapToUI(source: DifferentialDiagnosisApiModel, out: DifferentialDiagnosisUiModel): DifferentialDiagnosisUiModel {
    if (!source) {
      return new DifferentialDiagnosisUiModel();
    }

    out = automapper.map('DifferentialDiagnosisApiModel', 'DifferentialDiagnosisUiModel', source);
    return out;
  }
}
