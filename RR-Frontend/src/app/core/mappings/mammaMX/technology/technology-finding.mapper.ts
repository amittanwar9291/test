import { Injectable } from '@angular/core';
import { TechnologyFindingUiModel } from '@models/mammaMX/ui/technology/technology-finding-ui.model';
import { TechnologyFindingApiModel } from '@models/mammaMX/api/technology/technology-finding-api.model';
import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class TechnologyFindingMapper implements IMapper<TechnologyFindingApiModel, TechnologyFindingUiModel> {
  constructor() {
    automapper
      .createMap('TechnologyFinding_MammaMRT_UiModel', 'TechnologyFinding_MammaMRT_ApiModel')
      .convertToType(TechnologyFindingApiModel);
    automapper
      .createMap('TechnologyFinding_MammaMRT_ApiModel', 'TechnologyFinding_MammaMRT_UiModel')
      .convertToType(TechnologyFindingUiModel);
  }

  mapToAPI(source: TechnologyFindingUiModel, out: TechnologyFindingApiModel): TechnologyFindingApiModel {
    out = automapper.map('TechnologyFinding_MammaMRT_UiModel', 'TechnologyFinding_MammaMRT_ApiModel', source);

    return out;
  }

  mapToUI(source: TechnologyFindingApiModel, out: TechnologyFindingUiModel): TechnologyFindingUiModel {
    out = automapper.map('TechnologyFinding_MammaMRT_ApiModel', 'TechnologyFinding_MammaMRT_UiModel', source);

    return out;
  }
}
