import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SequenceApiModel } from '@models/elbowMRT/api/technology/sequence-api.model';
import { SequenceUiModel } from '@models/elbowMRT/ui/technology/sequence-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SequenceMapper implements IMapper<SequenceApiModel, SequenceUiModel> {
  constructor() {
    automapper.createMap('Sequence_ElbowMRT_ApiModel', 'Sequence_ElbowMRT_UiModel').convertToType(SequenceUiModel);
    automapper.createMap('Sequence_ElbowMRT_UiModel', 'Sequence_ElbowMRT_ApiModel').convertToType(SequenceApiModel);
  }

  mapToAPI(source: SequenceUiModel, out: SequenceApiModel): SequenceApiModel {
    out = automapper.map('Sequence_ElbowMRT_UiModel', 'Sequence_ElbowMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SequenceApiModel, out: SequenceUiModel): SequenceUiModel {
    out = automapper.map('Sequence_ElbowMRT_ApiModel', 'Sequence_ElbowMRT_UiModel', source);
    return out;
  }
}
