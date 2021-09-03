import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { CorrelationApiModel } from '@models/shared/page-correlation/api/correlation-api.model';
import { CorrelationUiModel } from '@models/shared/page-correlation/ui/correlation-ui.model';

@Injectable({
  providedIn: 'root'
})
export class CorrelationMapper implements IMapper<CorrelationApiModel, CorrelationUiModel> {
  constructor() {
    automapper.createMap('CorrelationUiModel', 'CorrelationApiModel').convertToType(CorrelationApiModel);

    automapper.createMap('CorrelationApiModel', 'CorrelationUiModel').convertToType(CorrelationUiModel);
  }

  mapToAPI(source: CorrelationUiModel, out: CorrelationApiModel): CorrelationApiModel {
    out = automapper.map('CorrelationUiModel', 'CorrelationApiModel', source);
    out.mammographyFindingId = source.leftFindingId;
    out.mammographyFindingType = source.leftFindingType;
    out.ultrasoundFindingId = source.rightFindingId;
    out.ultrasoundFindingType = source.rightFindingType;

    return out;
  }

  mapToUI(source: CorrelationApiModel, out: CorrelationUiModel): CorrelationUiModel {
    out = automapper.map('CorrelationApiModel', 'CorrelationUiModel', source);
    out.leftFindingId = source.mammographyFindingId;
    out.leftFindingType = source.mammographyFindingType;
    out.rightFindingId = source.ultrasoundFindingId;
    out.rightFindingType = source.ultrasoundFindingType;

    if (source.isNoCorrelation) {
      out.rightFindingSelectedOption = 'NoSonographicCorrelation';
    } else {
      out.rightFindingSelectedOption = source.ultrasoundFindingId ? source.ultrasoundFindingId : 'None';
    }

    return out;
  }
}
