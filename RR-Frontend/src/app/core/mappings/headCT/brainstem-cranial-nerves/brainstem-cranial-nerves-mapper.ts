import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { BrainstemCranialNervesApiModel } from '@models/headCT/api/brainstem-cranial-nerves/brainstem-cranial-nerves-api.model';
import { BrainstemCranialNervesUiModel } from '@models/headCT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BrainstemCranialNervesMapper implements IMapper<BrainstemCranialNervesApiModel, BrainstemCranialNervesUiModel> {
  constructor() {
    automapper
      .createMap('BrainstemCranialNerves_HeadCT_UiModel', 'BrainstemCranialNerves_HeadCT_ApiModel')
      .convertToType(BrainstemCranialNervesApiModel);
    automapper
      .createMap('BrainstemCranialNerves_HeadCT_ApiModel', 'BrainstemCranialNerves_HeadCT_UiModel')
      .convertToType(BrainstemCranialNervesUiModel);
  }

  mapToAPI(source: BrainstemCranialNervesUiModel, out: BrainstemCranialNervesApiModel): BrainstemCranialNervesApiModel {
    out = automapper.map('BrainstemCranialNerves_HeadCT_UiModel', 'BrainstemCranialNerves_HeadCT_ApiModel', source);
    return out;
  }

  mapToUI(source: BrainstemCranialNervesApiModel, out: BrainstemCranialNervesUiModel): BrainstemCranialNervesUiModel {
    out = automapper.map('BrainstemCranialNerves_HeadCT_ApiModel', 'BrainstemCranialNerves_HeadCT_UiModel', source);
    return out;
  }
}
