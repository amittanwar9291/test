import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';

import { TNMClassificationApiModel } from '@models/neckMRT/api/summary/tnmclassification-api.model';
import { TNMClassificationUiModel } from '@models/neckMRT/ui/summary/tnmclassification-ui.model';

@Injectable({
  providedIn: 'root'
})
export class TnmClassificationsFindingMapper implements IMapper<TNMClassificationApiModel, TNMClassificationUiModel> {
  constructor() {
    automapper
      .createMap('tnmClassifications_NeckMRT_ApiModel', 'tnmClassifications_NeckMRT_UiModel')
      .convertToType(TNMClassificationUiModel);
    automapper
      .createMap('tnmClassifications_NeckMRT_UiModel', 'tnmClassifications_NeckMRT_ApiModel')
      .convertToType(TNMClassificationApiModel);
  }

  mapToAPI(source: TNMClassificationUiModel, out: TNMClassificationApiModel): TNMClassificationApiModel {
    out = automapper.map('tnmClassifications_NeckMRT_UiModel', 'tnmClassifications_NeckMRT_ApiModel', source);

    return out;
  }

  mapToUI(source: TNMClassificationApiModel, out: TNMClassificationUiModel): TNMClassificationUiModel {
    out = automapper.map('tnmClassifications_NeckMRT_ApiModel', 'tnmClassifications_NeckMRT_UiModel', source);

    return out;
  }
}
