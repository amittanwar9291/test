import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SellarRegionFindingApiModel } from '@models/headCT/api/sellar-region/sellar-region-finding-api.model';
import { SellarRegionFindingUiModel } from '@models/headCT/ui/sellar-region/sellar-region-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SellarRegionFindingMapper implements IMapper<SellarRegionFindingApiModel, SellarRegionFindingUiModel> {
  constructor() {
    automapper
      .createMap('SellarRegionFinding_HeadCT_UiModel', 'SellarRegionFinding_HeadCT_ApiModel')
      .convertToType(SellarRegionFindingApiModel);
    automapper
      .createMap('SellarRegionFinding_HeadCT_ApiModel', 'SellarRegionFinding_HeadCT_UiModel')
      .convertToType(SellarRegionFindingUiModel);
  }

  mapToAPI(source: SellarRegionFindingUiModel, out: SellarRegionFindingApiModel): SellarRegionFindingApiModel {
    out = automapper.map('SellarRegionFinding_HeadCT_UiModel', 'SellarRegionFinding_HeadCT_ApiModel', source);

    return out;
  }

  mapToUI(source: SellarRegionFindingApiModel, out: SellarRegionFindingUiModel): SellarRegionFindingUiModel {
    out = automapper.map('SellarRegionFinding_HeadCT_ApiModel', 'SellarRegionFinding_HeadCT_UiModel', source);

    return out;
  }
}
