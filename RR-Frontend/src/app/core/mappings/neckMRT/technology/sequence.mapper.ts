import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SequenceApiModel } from '@models/neckMRT/api/technology/sequence-api.model';
import { SequenceUiModel } from '@models/neckMRT/ui/technology/sequence-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SequenceMapper implements IMapper<SequenceApiModel, SequenceUiModel> {
  constructor() {
    automapper.createMap('Sequence_NeckMRT_ApiModel', 'Sequence_NeckMRT_UiModel').convertToType(SequenceUiModel);
    automapper.createMap('Sequence_NeckMRT_UiModel', 'Sequence_NeckMRT_ApiModel').convertToType(SequenceApiModel);
  }

  mapToAPI(source: SequenceUiModel, out: SequenceApiModel): SequenceApiModel {
    out = automapper.map('Sequence_NeckMRT_UiModel', 'Sequence_NeckMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SequenceApiModel, out: SequenceUiModel): SequenceUiModel {
    out = automapper.map('Sequence_NeckMRT_ApiModel', 'Sequence_NeckMRT_UiModel', source);
    return out;
  }
}
