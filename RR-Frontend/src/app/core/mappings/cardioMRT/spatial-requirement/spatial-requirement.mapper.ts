import { Injectable } from '@angular/core';

import { SpatialRequirementApiModel } from '@models/cardioMRT/api/spatial-requirement/spatial-requirement-api.model';
import { SpatialRequirementUiModel } from '@models/cardioMRT/ui/spatial-requirement/spatial-requirement-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { SpatialRequirementFindingsMapper } from '@mappings/cardioMRT/spatial-requirement/spatial-requirement-findings.mapper';
import { SpatialRequirementFindingApiModel } from '@models/cardioMRT/api/spatial-requirement/spatial-requirement-finding-api.model';
import { SpatialRequirementFindingUiModel } from '@models/cardioMRT/ui/spatial-requirement/spatial-requirement-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SpatialRequirementMapper implements IMapper<SpatialRequirementApiModel, SpatialRequirementUiModel> {
  constructor(private spatialRequirementFindingsMapper: SpatialRequirementFindingsMapper) {
    automapper
      .createMap('SpatialRequirement_CardioMRT_UiModel', 'SpatialRequirement_CardioMRT_ApiModel')
      .convertToType(SpatialRequirementApiModel);
    automapper
      .createMap('SpatialRequirement_CardioMRT_ApiModel', 'SpatialRequirement_CardioMRT_UiModel')
      .convertToType(SpatialRequirementUiModel);
  }

  mapToAPI(source: SpatialRequirementUiModel, out: SpatialRequirementApiModel): SpatialRequirementApiModel {
    out = automapper.map('SpatialRequirement_CardioMRT_UiModel', 'SpatialRequirement_CardioMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.spatialRequirementFindingsMapper.mapToAPI(finding, new SpatialRequirementFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: SpatialRequirementApiModel, out: SpatialRequirementUiModel): SpatialRequirementUiModel {
    out = automapper.map('SpatialRequirement_CardioMRT_ApiModel', 'SpatialRequirement_CardioMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.spatialRequirementFindingsMapper.mapToUI(finding, new SpatialRequirementFindingUiModel()));
    });
    return out;
  }
}
