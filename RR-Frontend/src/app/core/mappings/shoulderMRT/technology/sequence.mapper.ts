import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { SequenceApiModel } from '@models/shoulderMRT/api/technology/sequence-api.model';
import { SequenceUiModel } from '@models/shoulderMRT/ui/technology/sequence-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SequenceMapper implements IMapper<SequenceApiModel, SequenceUiModel> {
  constructor() {
    automapper.createMap('Sequence_ShoulderMRT_ApiModel', 'Sequence_ShoulderMRT_UiModel').convertToType(SequenceUiModel);
    automapper.createMap('Sequence_ShoulderMRT_UiModel', 'Sequence_ShoulderMRT_ApiModel').convertToType(SequenceApiModel);
  }

  mapToAPI(source: SequenceUiModel, out: SequenceApiModel): SequenceApiModel {
    out = automapper.map('Sequence_ShoulderMRT_UiModel', 'Sequence_ShoulderMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SequenceApiModel, out: SequenceUiModel): SequenceUiModel {
    out = automapper.map('Sequence_ShoulderMRT_ApiModel', 'Sequence_ShoulderMRT_UiModel', source);
    return out;
  }
}
