import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { SequenceApiModel } from '@models/thoraxMRT/api/technology/sequence-api.model';
import { SequenceUiModel } from '@models/thoraxMRT/ui/technology/sequence-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SequenceMapper implements IMapper<SequenceApiModel, SequenceUiModel> {
  constructor() {
    automapper.createMap('Sequence_ThoraxMRT_ApiModel', 'Sequence_ThoraxMRT_UiModel').convertToType(SequenceUiModel);
    automapper.createMap('Sequence_ThoraxMRT_UiModel', 'Sequence_ThoraxMRT_ApiModel').convertToType(SequenceApiModel);
  }

  mapToAPI(source: SequenceUiModel, out: SequenceApiModel): SequenceApiModel {
    out = automapper.map('Sequence_ThoraxMRT_UiModel', 'Sequence_ThoraxMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SequenceApiModel, out: SequenceUiModel): SequenceUiModel {
    out = automapper.map('Sequence_ThoraxMRT_ApiModel', 'Sequence_ThoraxMRT_UiModel', source);
    return out;
  }
}
