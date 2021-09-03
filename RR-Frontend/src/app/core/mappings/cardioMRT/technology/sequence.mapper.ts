import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SequenceApiModel } from '@models/cardioMRT/api/technology/sequence-api.model';
import { SequenceUiModel } from '@models/cardioMRT/ui/technology/sequence-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SequenceMapper implements IMapper<SequenceApiModel, SequenceUiModel> {
  constructor() {
    automapper.createMap('Sequence_CardioMRT_ApiModel', 'Sequence_CardioMRT_UiModel').convertToType(SequenceUiModel);
    automapper.createMap('Sequence_CardioMRT_UiModel', 'Sequence_CardioMRT_ApiModel').convertToType(SequenceApiModel);
  }

  mapToAPI(source: SequenceUiModel, out: SequenceApiModel): SequenceApiModel {
    out = automapper.map('Sequence_CardioMRT_UiModel', 'Sequence_CardioMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SequenceApiModel, out: SequenceUiModel): SequenceUiModel {
    out = automapper.map('Sequence_CardioMRT_ApiModel', 'Sequence_CardioMRT_UiModel', source);
    return out;
  }
}
