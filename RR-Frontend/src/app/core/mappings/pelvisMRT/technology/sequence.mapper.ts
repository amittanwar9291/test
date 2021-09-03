import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { SequenceUiModel } from '@models/pelvisMRT/ui/technology/sequence-ui.model';
import { SequenceApiModel } from '@models/pelvisMRT/api/technology/sequence-api.model';

@Injectable({
  providedIn: 'root'
})
export class SequenceMapper implements IMapper<SequenceApiModel, SequenceUiModel> {
  constructor() {
    automapper.createMap('Sequence_PelvisMRT_ApiModel', 'Sequence_PelvisMRT_UiModel').convertToType(SequenceUiModel);
    automapper.createMap('Sequence_PelvisMRT_UiModel', 'Sequence_PelvisMRT_ApiModel').convertToType(SequenceApiModel);
  }

  mapToAPI(source: SequenceUiModel, out: SequenceApiModel): SequenceApiModel {
    out = automapper.map('Sequence_PelvisMRT_UiModel', 'Sequence_PelvisMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SequenceApiModel, out: SequenceUiModel): SequenceUiModel {
    out = automapper.map('Sequence_PelvisMRT_ApiModel', 'Sequence_PelvisMRT_UiModel', source);
    return out;
  }
}
