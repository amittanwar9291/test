import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { CortexFindingApiModel } from '@models/headCT/api/cortex/cortex-finding-api.model';
import { CortexFindingUiModel } from '@models/headCT/ui/cortex/cortex-finding-ui-model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class CortexFindingMapper implements IMapper<CortexFindingApiModel, CortexFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper.createMap('CortexFinding_HeadCT_UiModel', 'CortexFinding_HeadCT_ApiModel').convertToType(CortexFindingApiModel);
    automapper.createMap('CortexFinding_HeadCT_ApiModel', 'CortexFinding_HeadCT_UiModel').convertToType(CortexFindingUiModel);
  }

  mapToAPI(source: CortexFindingUiModel, out: CortexFindingApiModel): CortexFindingApiModel {
    out = automapper.map('CortexFinding_HeadCT_UiModel', 'CortexFinding_HeadCT_ApiModel', source);
    out.cortexLocations = this.enumMapper.mapToString(source.cortexLocations);
    return out;
  }

  mapToUI(source: CortexFindingApiModel, out: CortexFindingUiModel): CortexFindingUiModel {
    out = automapper.map('CortexFinding_HeadCT_ApiModel', 'CortexFinding_HeadCT_UiModel', source);
    this.enumMapper.mapToObject(source.cortexLocations, out.cortexLocations);
    return out;
  }
}
