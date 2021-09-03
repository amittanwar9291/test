import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { SoftTissuesApiModel } from '@models/neckMRT/api/soft-tissues/soft-tissues-api.model';
import { SoftTissuesUiModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-ui.model';
import { SoftTissuesFindingMapper } from '@mappings/neckMRT/soft-tissues/soft-tissues-finding.mapper';
import { SoftTissuesFindingUiModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { SoftTissuesFindingApiModel } from '@models/neckMRT/api/soft-tissues/soft-tissues-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class SoftTissuesMapper implements IMapper<SoftTissuesApiModel, SoftTissuesUiModel> {
  constructor(private softTissuesFindingMapper: SoftTissuesFindingMapper) {
    automapper
      .createMap('SoftTissues_NeckMRT_UiModel', 'SoftTissues_NeckMRT_ApiModel')
      .convertToType(SoftTissuesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());

    automapper
      .createMap('SoftTissues_NeckMRT_ApiModel', 'SoftTissues_NeckMRT_UiModel')
      .convertToType(SoftTissuesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: SoftTissuesUiModel, out: SoftTissuesApiModel): SoftTissuesApiModel {
    out = automapper.map('SoftTissues_NeckMRT_UiModel', 'SoftTissues_NeckMRT_ApiModel', source);

    out.findings = source.findings.map(
      (finding: SoftTissuesFindingUiModel): SoftTissuesFindingApiModel => {
        return this.softTissuesFindingMapper.mapToAPI(finding, new SoftTissuesFindingApiModel());
      }
    );

    return out;
  }

  mapToUI(source: SoftTissuesApiModel, out: SoftTissuesUiModel): SoftTissuesUiModel {
    out = automapper.map('SoftTissues_NeckMRT_ApiModel', 'SoftTissues_NeckMRT_UiModel', source);

    out.findings = source.findings.map(
      (finding: SoftTissuesFindingApiModel): SoftTissuesFindingUiModel => {
        return this.softTissuesFindingMapper.mapToUI(finding, new SoftTissuesFindingUiModel());
      }
    );

    return out;
  }
}
