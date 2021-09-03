import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { SoftTissueApiModel } from '@models/handMRT/api/soft-tissue/soft-tissue-api.model';
import { SoftTissueUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-ui.model';
import { SoftTissueFindingUiModel } from '@models/handMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { SoftTissueFindingApiModel } from '@models/handMRT/api/soft-tissue/soft-tissue-finding-api.model';
import { SoftTissueFindingMapper } from '@mappings/handMRT/soft-tissue/soft-tissue-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueMapper implements IMapper<SoftTissueApiModel, SoftTissueUiModel> {
  constructor(private findingMapper: SoftTissueFindingMapper) {
    automapper
      .createMap('SoftTissue_HandMRT_ApiModel', 'SoftTissue_HandMRT_UiModel')
      .convertToType(SoftTissueUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
    automapper
      .createMap('SoftTissue_HandMRT_UiModel', 'SoftTissue_HandMRT_ApiModel')
      .convertToType(SoftTissueApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: SoftTissueUiModel, out: SoftTissueApiModel): SoftTissueApiModel {
    out = automapper.map('SoftTissue_HandMRT_UiModel', 'SoftTissue_HandMRT_ApiModel', source);
    out.findings.length = 0;
    source.findings.forEach((finding: SoftTissueFindingUiModel) => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new SoftTissueFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: SoftTissueApiModel, out: SoftTissueUiModel): SoftTissueUiModel {
    out = automapper.map('SoftTissue_HandMRT_ApiModel', 'SoftTissue_HandMRT_UiModel', source);
    out.findings.length = 0;
    source.findings.forEach((finding: SoftTissueFindingApiModel) => {
      out.findings.push(this.findingMapper.mapToUI(finding, new SoftTissueFindingUiModel()));
    });

    return out;
  }
}
