import { Injectable } from '@angular/core';

import { RatingApiModel } from '@models/mammaMRT/api/rating/rating-api.model';
import { RatingUiModel } from '@models/mammaMRT/ui/rating/rating-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class RatingMapper implements IMapper<RatingApiModel, RatingUiModel> {
  constructor() {
    automapper.createMap('Rating_MammaMRT_ApiModel', 'Rating_MammaMRT_UiModel').convertToType(RatingUiModel);
    automapper.createMap('Rating_MammaMRT_UiModel', 'Rating_MammaMRT_ApiModel').convertToType(RatingApiModel);
  }

  mapToAPI(source: RatingUiModel, out: RatingApiModel): RatingApiModel {
    out = automapper.map('Rating_MammaMRT_UiModel', 'Rating_MammaMRT_ApiModel', source);
    return out;
  }

  mapToUI(source: RatingApiModel, out: RatingUiModel): RatingUiModel {
    out = automapper.map('Rating_MammaMRT_ApiModel', 'Rating_MammaMRT_UiModel', source);
    return out;
  }
}
