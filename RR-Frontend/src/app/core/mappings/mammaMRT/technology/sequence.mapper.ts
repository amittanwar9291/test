import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SequenceUiModel } from '@models/mammaMRT/ui/technology/sequence-ui.model';
import { SequenceApiModel } from '@models/mammaMRT/api/technology/sequence-api.model';

@Injectable({
  providedIn: 'root'
})
export class SequenceMapper implements IMapper<SequenceApiModel, SequenceUiModel> {
  constructor() {
    automapper.createMap('Sequence_MammaMRT_ApiModel', 'Sequence_MammaMRT_UiModel').convertToType(SequenceUiModel);
    automapper.createMap('Sequence_MammaMRT_UiModel', 'Sequence_MammaMRT_ApiModel').convertToType(SequenceApiModel);
  }

  mapToAPI(source: SequenceUiModel, out: SequenceApiModel): SequenceApiModel {
    out = automapper.map('Sequence_MammaMRT_UiModel', 'Sequence_MammaMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SequenceApiModel, out: SequenceUiModel): SequenceUiModel {
    out = automapper.map('Sequence_MammaMRT_ApiModel', 'Sequence_MammaMRT_UiModel', source);
    return out;
  }
}
