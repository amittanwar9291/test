import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { SequenceUiModel } from '@models/abdomenMRT/ui/technology/sequence-ui.model';
import { SequenceApiModel } from '@models/abdomenMRT/api/technology/sequence-api.model';

@Injectable({
  providedIn: 'root'
})
export class SequenceMapper implements IMapper<SequenceApiModel, SequenceUiModel> {
  constructor() {
    automapper.createMap('Sequence_AbdomenMRT_ApiModel', 'Sequence_AbdomenMRT_UiModel').convertToType(SequenceUiModel);
    automapper.createMap('Sequence_AbdomenMRT_UiModel', 'Sequence_AbdomenMRT_ApiModel').convertToType(SequenceApiModel);
  }

  mapToAPI(source: SequenceUiModel, out: SequenceApiModel): SequenceApiModel {
    out = automapper.map('Sequence_AbdomenMRT_UiModel', 'Sequence_AbdomenMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SequenceApiModel, out: SequenceUiModel): SequenceUiModel {
    out = automapper.map('Sequence_AbdomenMRT_ApiModel', 'Sequence_AbdomenMRT_UiModel', source);
    return out;
  }
}
