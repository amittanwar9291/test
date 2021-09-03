import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { FacialSkullApiModel } from '@models/headCT/api/facial-skull/facial-skull-api.model';
import { FacialSkullUiModel } from '@models/headCT/ui/facial-skull/facial-skull-ui.model';

@Injectable({
  providedIn: 'root'
})
export class FacialSkullMapper implements IMapper<FacialSkullApiModel, FacialSkullUiModel> {
  constructor() {
    automapper.createMap('FacialSkull_HeadCT_UiModel', 'FacialSkull_HeadCT_ApiModel').convertToType(FacialSkullApiModel);
    automapper.createMap('FacialSkull_HeadCT_ApiModel', 'FacialSkull_HeadCT_UiModel').convertToType(FacialSkullUiModel);
  }

  mapToAPI(source: FacialSkullUiModel, out: FacialSkullApiModel): FacialSkullApiModel {
    out = automapper.map('FacialSkull_HeadCT_UiModel', 'FacialSkull_HeadCT_ApiModel', source);
    return out;
  }

  mapToUI(source: FacialSkullApiModel, out: FacialSkullUiModel): FacialSkullUiModel {
    out = automapper.map('FacialSkull_HeadCT_ApiModel', 'FacialSkull_HeadCT_UiModel', source);
    return out;
  }
}
