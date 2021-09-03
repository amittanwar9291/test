import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { AbdomenFindingApiModel } from '@models/angiographyCT/api/abdomen/abdomen-finding-api.model';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AbdomenFindingMapper implements IMapper<AbdomenFindingApiModel, AbdomenFindingUiModel> {
  constructor() {
    automapper
      .createMap('AbdomenFinding_AngiographyCT_ApiModel', 'AbdomenFinding_AngiographyCT_UiModel')
      .convertToType(AbdomenFindingUiModel);
    automapper
      .createMap('AbdomenFinding_AngiographyCT_UiModel', 'AbdomenFinding_AngiographyCT_ApiModel')
      .convertToType(AbdomenFindingApiModel);
  }

  mapToAPI(source: AbdomenFindingUiModel, out: AbdomenFindingApiModel): AbdomenFindingApiModel {
    out = automapper.map('AbdomenFinding_AngiographyCT_UiModel', 'AbdomenFinding_AngiographyCT_ApiModel', source);

    return out;
  }

  mapToUI(source: AbdomenFindingApiModel, out: AbdomenFindingUiModel): AbdomenFindingUiModel {
    out = automapper.map('AbdomenFinding_AngiographyCT_ApiModel', 'AbdomenFinding_AngiographyCT_UiModel', source);

    return out;
  }
}
