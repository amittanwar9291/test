import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { LarynxApiModel } from '@models/neckMRT/api/larynx/larynx-api.model';
import { LarynxUiModel } from '@models/neckMRT/ui/larynx/larynx-ui.model';
import { LarynxFindingApiModel } from '@models/neckMRT/api/larynx/larynx-finding-api.model';
import { LarynxFindingUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-ui.model';

import { LarynxFindingMapper } from '@mappings/neckMRT/larynx/larynx-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class LarynxMapper implements IMapper<LarynxApiModel, LarynxUiModel> {
  constructor(private larynxFindingMapper: LarynxFindingMapper) {
    automapper.createMap('Larynx_NeckMRT_UiModel', 'Larynx_NeckMRT_ApiModel').convertToType(LarynxApiModel);
    automapper.createMap('Larynx_NeckMRT_ApiModel', 'Larynx_NeckMRT_UiModel').convertToType(LarynxUiModel);
  }

  mapToAPI(source: LarynxUiModel, out: LarynxApiModel): LarynxApiModel {
    out = automapper.map('Larynx_NeckMRT_UiModel', 'Larynx_NeckMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.larynxFindingMapper.mapToAPI(finding, new LarynxFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: LarynxApiModel, out: LarynxUiModel): LarynxUiModel {
    out = automapper.map('Larynx_NeckMRT_ApiModel', 'Larynx_NeckMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.larynxFindingMapper.mapToUI(finding, new LarynxFindingUiModel()));
    });

    return out;
  }
}
