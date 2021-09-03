import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { PelvicFloorFindingApiModel } from '@models/pelvisMRT/api/pelvic-floor/pelvic-floor-finding-api.model';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class PelvicFloorFindingMapper implements IMapper<PelvicFloorFindingApiModel, PelvicFloorFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('PelvicFloorFinding_PelvisMRT_ApiModel', 'PelvicFloorFinding_PelvisMRT_UiModel')
      .convertToType(PelvicFloorFindingUiModel);
    automapper
      .createMap('PelvicFloorFinding_PelvisMRT_UiModel', 'PelvicFloorFinding_PelvisMRT_ApiModel')
      .convertToType(PelvicFloorFindingApiModel);
  }

  mapToAPI(source: PelvicFloorFindingUiModel, out: PelvicFloorFindingApiModel): PelvicFloorFindingApiModel {
    out = automapper.map('PelvicFloorFinding_PelvisMRT_UiModel', 'PelvicFloorFinding_PelvisMRT_ApiModel', source);

    return out;
  }

  mapToUI(source: PelvicFloorFindingApiModel, out: PelvicFloorFindingUiModel): PelvicFloorFindingUiModel {
    out = automapper.map('PelvicFloorFinding_PelvisMRT_ApiModel', 'PelvicFloorFinding_PelvisMRT_UiModel', source);

    return out;
  }
}
