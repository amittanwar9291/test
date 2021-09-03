import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SoftTissueApiModel } from '@models/hipMRT/api/soft-tissue/soft-tissue-api-model';
import { SoftTissueUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-ui-model';
import { SoftTissueFindingMapper } from '@mappings/hipMRT/soft-tissue/soft-tissue-finding.mapper';
import { SoftTissueFindingApiModel } from '@models/hipMRT/api/soft-tissue/soft-tissue-finding-api.model';
import { SoftTissueFindingUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueMapper implements IMapper<SoftTissueApiModel, SoftTissueUiModel> {
  constructor(private softTissueFindingMapper: SoftTissueFindingMapper) {
    automapper.createMap('SoftTissue_HipMRT_ApiModel', 'SoftTissue_HipMRT_UiModel').convertToType(SoftTissueUiModel);
    automapper.createMap('SoftTissue_HipMRT_UiModel', 'SoftTissue_HipMRT_ApiModel').convertToType(SoftTissueApiModel);
  }

  mapToAPI(source: SoftTissueUiModel, out: SoftTissueApiModel): SoftTissueApiModel {
    out = automapper.map('SoftTissue_HipMRT_UiModel', 'SoftTissue_HipMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.softTissueFindingMapper.mapToAPI(finding, new SoftTissueFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: SoftTissueApiModel, out: SoftTissueUiModel): SoftTissueUiModel {
    out = automapper.map('SoftTissue_HipMRT_ApiModel', 'SoftTissue_HipMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.softTissueFindingMapper.mapToUI(finding, new SoftTissueFindingUiModel()));
    });

    return out;
  }
}
