import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { CenterspecificPreferencesSequenceApiModel } from '@models/shared/centerspecific-preferences/api/centerspecific-preferences-sequence-api.model';
import { CenterspecificPreferencesSequenceUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-sequence-ui.model';

@Injectable({
  providedIn: 'root'
})
export class CenterspecificSequencesMapper
  implements IMapper<CenterspecificPreferencesSequenceApiModel, CenterspecificPreferencesSequenceUiModel> {
  constructor() {
    automapper.createMap('CSP_Sequences_ApiModel', 'CSP_Sequences_UiModel').convertToType(CenterspecificPreferencesSequenceUiModel);
    automapper.createMap('CSP_Sequences_UiModel', 'CSP_Sequences_ApiModel').convertToType(CenterspecificPreferencesSequenceApiModel);
  }

  mapToAPI(
    source: CenterspecificPreferencesSequenceUiModel,
    out: CenterspecificPreferencesSequenceApiModel
  ): CenterspecificPreferencesSequenceApiModel {
    out = automapper.map('CSP_Sequences_UiModel', 'CSP_Sequences_ApiModel', source);
    return out;
  }

  mapToUI(
    source: CenterspecificPreferencesSequenceApiModel,
    out: CenterspecificPreferencesSequenceUiModel
  ): CenterspecificPreferencesSequenceUiModel {
    out = automapper.map('CSP_Sequences_ApiModel', 'CSP_Sequences_UiModel', source);
    return out;
  }
}
