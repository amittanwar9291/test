import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { TechnologyApiModel } from '@models/abdomenCT/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/abdomenCT/ui/technology/technology-ui.model';

@Injectable({
  providedIn: 'root'
})
export class TechnologyMapper implements IMapper<TechnologyApiModel, TechnologyUiModel> {
  constructor() {
    automapper.createMap('Technology_AbdomenCT_UiModel', 'Technology_AbdomenCT_ApiModel').convertToType(TechnologyApiModel);
    automapper.createMap('Technology_AbdomenCT_ApiModel', 'Technology_AbdomenCT_UiModel').convertToType(TechnologyUiModel);
  }

  mapToAPI(source: TechnologyUiModel, out: TechnologyApiModel): TechnologyApiModel {
    out = automapper.map('Technology_AbdomenCT_UiModel', 'Technology_AbdomenCT_ApiModel', source);
    return out;
  }

  mapToUI(source: TechnologyApiModel, out: TechnologyUiModel): TechnologyUiModel {
    out = automapper.map('Technology_AbdomenCT_ApiModel', 'Technology_AbdomenCT_UiModel', source);
    return out;
  }
}
