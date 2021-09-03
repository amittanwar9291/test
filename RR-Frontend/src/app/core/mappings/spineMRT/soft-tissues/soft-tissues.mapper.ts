import { Injectable } from '@angular/core';

import { SoftTissuesApiModel } from '@models/spineMRT/api/soft-tissues/soft-tissues-api.model';
import { SoftTissuesUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

import { SoftTissuesFindingsMapper } from '@mappings/spineMRT/soft-tissues/soft-tissues-finding.mapper';
import { SoftTissuesFindingApiModel } from '@models/spineMRT/api/soft-tissues/soft-tissues-finding-api.model';
import { SoftTissuesFindingUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SoftTissuesMapper implements IMapper<SoftTissuesApiModel, SoftTissuesUiModel> {
  constructor(private softTissuesFindingsMapper: SoftTissuesFindingsMapper) {
    automapper.createMap('SoftTissues_SpineMRT_UiModel', 'SoftTissues_SpineMRT_ApiModel').convertToType(SoftTissuesApiModel);
    automapper.createMap('SoftTissues_SpineMRT_ApiModel', 'SoftTissues_SpineMRT_UiModel').convertToType(SoftTissuesUiModel);
  }

  mapToAPI(source: SoftTissuesUiModel, out: SoftTissuesApiModel): SoftTissuesApiModel {
    out = automapper.map('SoftTissues_SpineMRT_UiModel', 'SoftTissues_SpineMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.softTissuesFindingsMapper.mapToAPI(finding, new SoftTissuesFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: SoftTissuesApiModel, out: SoftTissuesUiModel): SoftTissuesUiModel {
    out = automapper.map('SoftTissues_SpineMRT_ApiModel', 'SoftTissues_SpineMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.softTissuesFindingsMapper.mapToUI(finding, new SoftTissuesFindingUiModel()));
    });
    return out;
  }
}
