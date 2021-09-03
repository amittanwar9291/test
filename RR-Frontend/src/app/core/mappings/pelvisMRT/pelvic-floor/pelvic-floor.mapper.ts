import { PelvicFloorApiModel } from '@models/pelvisMRT/api/pelvic-floor/pelvic-floor-api.model';
import { PelvicFloorUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { PelvicFloorFindingApiModel } from '@models/pelvisMRT/api/pelvic-floor/pelvic-floor-finding-api.model';
import { PelvicFloorFindingUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-finding-ui.model';
import { PelvicFloorFindingMapper } from '@mappings/pelvisMRT/pelvic-floor/pelvic-floor-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class PelvicFloorMapper implements IMapper<PelvicFloorApiModel, PelvicFloorUiModel> {
  constructor(private findingMapper: PelvicFloorFindingMapper) {
    automapper.createMap('PelvicFloor_PelvisMRT_UiModel', 'PelvicFloor_PelvisMRT_ApiModel').convertToType(PelvicFloorApiModel);
    automapper.createMap('PelvicFloor_PelvisMRT_ApiModel', 'PelvicFloor_PelvisMRT_UiModel').convertToType(PelvicFloorUiModel);
  }

  mapToAPI(source: PelvicFloorUiModel, out: PelvicFloorApiModel): PelvicFloorApiModel {
    out = automapper.map('PelvicFloor_PelvisMRT_UiModel', 'PelvicFloor_PelvisMRT_ApiModel', source);

    out.findings.length = 0;
    source.findings.forEach((finding: PelvicFloorFindingUiModel) => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new PelvicFloorFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: PelvicFloorApiModel, out: PelvicFloorUiModel): PelvicFloorUiModel {
    out = automapper.map('PelvicFloor_PelvisMRT_ApiModel', 'PelvicFloor_PelvisMRT_UiModel', source);

    out.findings.length = 0;
    source.findings.forEach((finding: PelvicFloorFindingApiModel) => {
      out.findings.push(this.findingMapper.mapToUI(finding, new PelvicFloorFindingUiModel()));
    });

    return out;
  }
}
