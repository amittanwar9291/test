import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SequenceApiModel } from '@models/feetMRT/api/technology/sequence-api.model';
import { SequenceUiModel } from '@models/feetMRT/ui/technology/sequence-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SequenceMapper implements IMapper<SequenceApiModel, SequenceUiModel> {
  constructor() {
    automapper.createMap('SequenceApi_FeetMRT_Model', 'Sequence_FeetMRT_UiModel').convertToType(SequenceUiModel);
    automapper.createMap('Sequence_FeetMRT_UiModel', 'SequenceApi_FeetMRT_Model').convertToType(SequenceApiModel);
  }

  mapToAPI(source: SequenceUiModel, out: SequenceApiModel): SequenceApiModel {
    out = automapper.map('Sequence_FeetMRT_UiModel', 'SequenceApi_FeetMRT_Model', source);
    return out;
  }

  mapToUI(source: SequenceApiModel, out: SequenceUiModel): SequenceUiModel {
    out = automapper.map('SequenceApi_FeetMRT_Model', 'Sequence_FeetMRT_UiModel', source);
    return out;
  }
}
