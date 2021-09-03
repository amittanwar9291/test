import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { LymphNodeFindingMapper } from '@mappings/mammaMX/lymph-nodes/lymph-node-finding.mapper';

import { LymphNodesApiModel } from '@models/mammaMX/api/lymph-nodes/lymph-nodes-api.model';
import { LymphNodesUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-nodes-ui.model';
import { LymphNodesFindingUiModel } from '@models/mammaMX/ui/lymph-nodes/lymph-nodes-finding-ui.model';
import { LymphNodesFindingApiModel } from '@models/mammaMX/api/lymph-nodes/lymph-nodes-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class LymphNodesMapper implements IMapper<LymphNodesApiModel, LymphNodesUiModel> {
  constructor(private lymphNodesFindingMapper: LymphNodeFindingMapper) {
    automapper
      .createMap('LymphNodes_MammaMX_UiModel', 'LymphNodes_MammaMX_ApiModel')
      .convertToType(LymphNodesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('LymphNodes_MammaMX_ApiModel', 'LymphNodes_MammaMX_UiModel')
      .convertToType(LymphNodesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LymphNodesUiModel, out: LymphNodesApiModel): LymphNodesApiModel {
    out = automapper.map('LymphNodes_MammaMX_UiModel', 'LymphNodes_MammaMX_ApiModel', source);

    out.findings = source.findings.map(
      (finding: LymphNodesFindingUiModel): LymphNodesFindingApiModel => {
        return this.lymphNodesFindingMapper.mapToAPI(finding, new LymphNodesFindingApiModel());
      }
    );

    return out;
  }

  mapToUI(source: LymphNodesApiModel, out: LymphNodesUiModel): LymphNodesUiModel {
    out = automapper.map('LymphNodes_MammaMX_ApiModel', 'LymphNodes_MammaMX_UiModel', source);

    out.findings = source.findings.map(
      (finding: LymphNodesFindingApiModel): LymphNodesFindingUiModel => {
        return this.lymphNodesFindingMapper.mapToUI(finding, new LymphNodesFindingUiModel());
      }
    );

    return out;
  }
}
