import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { AbdomenFindingApiModel } from '@models/angiographyMRT/api/abdomen/abdomen-finding-api.model';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AbdomenFindingsMapper implements IMapper<AbdomenFindingApiModel, AbdomenFindingUiModel> {
  constructor() {
    automapper.createMap('AngioMRT_AbdomenFindingUiModel', 'AngioMRT_AbdomenFindingApiModel').convertToType(AbdomenFindingApiModel);
    automapper.createMap('AngioMRT_AbdomenFindingApiModel', 'AngioMRT_AbdomenFindingUiModel').convertToType(AbdomenFindingUiModel);
  }

  mapToAPI(source: AbdomenFindingUiModel, out: AbdomenFindingApiModel): AbdomenFindingApiModel {
    out = automapper.map('AngioMRT_AbdomenFindingUiModel', 'AngioMRT_AbdomenFindingApiModel', source);
    return out;
  }

  mapToUI(source: AbdomenFindingApiModel, out: AbdomenFindingUiModel): AbdomenFindingUiModel {
    out = automapper.map('AngioMRT_AbdomenFindingApiModel', 'AngioMRT_AbdomenFindingUiModel', source);
    return out;
  }
}
