import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { SequenceApiModel } from '@models/kneeMRT/api/technology/sequence-api.model';
import { SequenceUiModel } from '@models/kneeMRT/ui/technology/sequence-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SequenceMapper implements IMapper<SequenceApiModel, SequenceUiModel> {
  constructor() {
    automapper.createMap('Sequence_KneeMRT_ApiModel', 'Sequence_KneeMRT_UiModel').convertToType(SequenceUiModel);
    automapper.createMap('Sequence_KneeMRT_UiModel', 'Sequence_KneeMRT_ApiModel').convertToType(SequenceApiModel);
  }

  mapToAPI(source: SequenceUiModel, out: SequenceApiModel): SequenceApiModel {
    out = automapper.map('Sequence_KneeMRT_UiModel', 'Sequence_KneeMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SequenceApiModel, out: SequenceUiModel): SequenceUiModel {
    out = automapper.map('Sequence_KneeMRT_ApiModel', 'Sequence_KneeMRT_UiModel', source);
    return out;
  }
}
