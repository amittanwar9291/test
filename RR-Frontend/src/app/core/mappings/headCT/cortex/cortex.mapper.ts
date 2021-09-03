import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { CortexApiModel } from '@models/headCT/api/cortex/cortex-api.model';
import { CortexUiModel } from '@models/headCT/ui/cortex/cortex-ui.model';
import { CortexFindingMapper } from '@mappings/headCT/cortex/cortex-finding.mapper';
import { CortexFindingApiModel } from '@models/headCT/api/cortex/cortex-finding-api.model';
import { CortexFindingUiModel } from '@models/headCT/ui/cortex/cortex-finding-ui-model';

@Injectable({
  providedIn: 'root'
})
export class CortexMapper implements IMapper<CortexApiModel, CortexUiModel> {
  constructor(private cortexFindingMapper: CortexFindingMapper) {
    automapper
      .createMap('Cortex_HeadCT_UiModel', 'Cortex_HeadCT_ApiModel')
      .convertToType(CortexApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Cortex_HeadCT_ApiModel', 'Cortex_HeadCT_UiModel')
      .convertToType(CortexUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: CortexUiModel, out: CortexApiModel): CortexApiModel {
    out = automapper.map('Cortex_HeadCT_UiModel', 'Cortex_HeadCT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.cortexFindingMapper.mapToAPI(finding, new CortexFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: CortexApiModel, out: CortexUiModel): CortexUiModel {
    out = automapper.map('Cortex_HeadCT_ApiModel', 'Cortex_HeadCT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.cortexFindingMapper.mapToUI(finding, new CortexFindingUiModel()));
    });
    return out;
  }
}
