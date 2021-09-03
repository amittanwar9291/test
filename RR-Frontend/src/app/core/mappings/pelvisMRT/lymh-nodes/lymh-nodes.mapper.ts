import { Injectable } from '@angular/core';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { LymphNodesFindingMapper } from '@mappings/pelvisMRT/lymh-nodes/lymh-nodes-finding.mapper';

import { IMapper } from '@interfaces/mapper.interface';

import { LymphNodesFindingApiModel } from '@models/pelvisMRT/api/lymph-nodes/lymph-nodes-finding-api.model';
import { LymphNodesFindingUiModel } from '@models/pelvisMRT/ui/lymph-nodes/lymph-nodes-finding-ui.model';
import { LymphNodesApiModel } from '@models/pelvisMRT/api/lymph-nodes/lymph-nodes-api.model';
import { LymphNodesUiModel } from '@models/pelvisMRT/ui/lymph-nodes/lymph-nodes-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LymphNodesMapper implements IMapper<LymphNodesApiModel, LymphNodesUiModel> {
  constructor(private enumMapper: EnumMapper, private findingMapper: LymphNodesFindingMapper) {
    automapper
      .createMap('LymphNodes_PelvisMRT_UiModel', 'LymphNodes_PelvisMRT_ApiModel')
      .convertToType(LymphNodesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
    automapper
      .createMap('LymphNodes_PelvisMRT_ApiModel', 'LymphNodes_PelvisMRT_UiModel')
      .convertToType(LymphNodesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: LymphNodesUiModel, out: LymphNodesApiModel): LymphNodesApiModel {
    out = automapper.map('LymphNodes_PelvisMRT_UiModel', 'LymphNodes_PelvisMRT_ApiModel', source);

    out.findings.length = 0;
    source.findings.forEach((finding: LymphNodesFindingUiModel) => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new LymphNodesFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: LymphNodesApiModel, out: LymphNodesUiModel): LymphNodesUiModel {
    out = automapper.map('LymphNodes_PelvisMRT_ApiModel', 'LymphNodes_PelvisMRT_UiModel', source);

    out.findings.length = 0;
    source.findings.forEach((finding: LymphNodesFindingApiModel) => {
      out.findings.push(this.findingMapper.mapToUI(finding, new LymphNodesFindingUiModel()));
    });

    return out;
  }
}
