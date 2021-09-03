import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SequenceApiModel } from '@models/handMRT/api/technology/sequence-api.model';
import { SequenceUiModel } from '@models/handMRT/ui/technology/sequence-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SequenceMapper implements IMapper<SequenceApiModel, SequenceUiModel> {
  constructor() {
    automapper.createMap('Sequence_HandMRT_ApiModel', 'Sequence_HandMRT_UiModel').convertToType(SequenceUiModel);
    automapper.createMap('Sequence_HandMRT_UiModel', 'Sequence_HandMRT_ApiModel').convertToType(SequenceApiModel);
  }

  mapToAPI(source: SequenceUiModel, out: SequenceApiModel): SequenceApiModel {
    out = automapper.map('Sequence_HandMRT_UiModel', 'Sequence_HandMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SequenceApiModel, out: SequenceUiModel): SequenceUiModel {
    out = automapper.map('Sequence_HandMRT_ApiModel', 'Sequence_HandMRT_UiModel', source);
    return out;
  }
}
