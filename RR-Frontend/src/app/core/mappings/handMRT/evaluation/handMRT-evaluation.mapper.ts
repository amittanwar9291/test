import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { EvaluationApiModel } from '@models/handMRT/api/evaluation/evaluation-api.model';
import { EvaluationUiModel } from '@models/handMRT/ui/evaluation/evaluation-ui.model';

@Injectable({
  providedIn: 'root'
})
export class HandMRTEvaluationMapper implements IMapper<EvaluationApiModel, EvaluationUiModel> {
  constructor() {
    automapper.createMap('Evaluation_HandMRT_UiModel', 'Evaluation_HandMRT_ApiModel').convertToType(EvaluationApiModel);
    automapper.createMap('Evaluation_HandMRT_ApiModel', 'Evaluation_HandMRT_UiModel').convertToType(EvaluationUiModel);
  }

  mapToAPI(source: EvaluationUiModel, out: EvaluationApiModel): EvaluationApiModel {
    out = automapper.map('Evaluation_HandMRT_UiModel', 'Evaluation_HandMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: EvaluationApiModel, out: EvaluationUiModel): EvaluationUiModel {
    out = automapper.map('Evaluation_HandMRT_ApiModel', 'Evaluation_HandMRT_UiModel', source);
    return out;
  }
}
