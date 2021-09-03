import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { SequenceApiModel } from '@models/spineMRT/api/technology/sequence-api.model';
import { SequenceUiModel } from '@models/spineMRT/ui/technology/sequence-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SequenceMapper implements IMapper<SequenceApiModel, SequenceUiModel> {
  constructor() {
    automapper.createMap('Sequence_SpineMRT_ApiModel', 'Sequence_SpineMRT_UiModel').convertToType(SequenceUiModel);
    automapper.createMap('Sequence_SpineMRT_UiModel', 'Sequence_SpineMRT_ApiModel').convertToType(SequenceApiModel);
  }

  mapToAPI(source: SequenceUiModel, out: SequenceApiModel): SequenceApiModel {
    out = automapper.map('Sequence_SpineMRT_UiModel', 'Sequence_SpineMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SequenceApiModel, out: SequenceUiModel): SequenceUiModel {
    out = automapper.map('Sequence_SpineMRT_ApiModel', 'Sequence_SpineMRT_UiModel', source);
    return out;
  }
}
