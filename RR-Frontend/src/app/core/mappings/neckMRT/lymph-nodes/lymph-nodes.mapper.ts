import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { LymphNodesApiModel } from '@models/neckMRT/api/lymph-nodes/lymph-nodes-api.model';
import { LymphNodesUiModel } from '@models/neckMRT/ui/lymph-nodes/lymph-nodes-ui.model';
import { LymphNodesFindingApiModel } from '@models/neckMRT/api/lymph-nodes/lymph-nodes-finding-api.model';
import { LymphNodesFindingUiModel } from '@models/neckMRT/ui/lymph-nodes/lymph-nodes-finding-ui.model';
import { LymphNodesFindingMapper } from '@mappings/neckMRT/lymph-nodes/lymph-nodes-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class LymphNodesMapper implements IMapper<LymphNodesApiModel, LymphNodesUiModel> {
  constructor(private lymphNodesFindingMapper: LymphNodesFindingMapper) {
    automapper.createMap('LymphNodes_NeckMRT_UiModel', 'LymphNodes_NeckMRT_ApiModel').convertToType(LymphNodesApiModel);
    automapper.createMap('LymphNodes_NeckMRT_ApiModel', 'LymphNodes_NeckMRT_UiModel').convertToType(LymphNodesUiModel);
  }

  mapToAPI(source: LymphNodesUiModel, out: LymphNodesApiModel): LymphNodesApiModel {
    out = automapper.map('LymphNodes_NeckMRT_UiModel', 'LymphNodes_NeckMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.lymphNodesFindingMapper.mapToAPI(finding, new LymphNodesFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: LymphNodesApiModel, out: LymphNodesUiModel): LymphNodesUiModel {
    out = automapper.map('LymphNodes_NeckMRT_ApiModel', 'LymphNodes_NeckMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.lymphNodesFindingMapper.mapToUI(finding, new LymphNodesFindingUiModel()));
    });

    return out;
  }
}
