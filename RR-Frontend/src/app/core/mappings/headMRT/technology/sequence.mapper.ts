import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SequenceApiModel } from '@models/headMRT/api/technology/sequence-api.model';
import { SequenceUiModel } from '@models/headMRT/ui/technology/sequence-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SequenceMapper implements IMapper<SequenceApiModel, SequenceUiModel> {
  constructor() {
    automapper.createMap('Sequence_HeadMRT_ApiModel', 'Sequence_HeadMRT_UiModel').convertToType(SequenceUiModel);
    automapper.createMap('Sequence_HeadMRT_UiModel', 'Sequence_HeadMRT_ApiModel').convertToType(SequenceApiModel);
  }

  mapToAPI(source: SequenceUiModel, out: SequenceApiModel): SequenceApiModel {
    out = automapper.map('Sequence_HeadMRT_UiModel', 'Sequence_HeadMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: SequenceApiModel, out: SequenceUiModel): SequenceUiModel {
    out = automapper.map('Sequence_HeadMRT_ApiModel', 'Sequence_HeadMRT_UiModel', source);
    return out;
  }
}
