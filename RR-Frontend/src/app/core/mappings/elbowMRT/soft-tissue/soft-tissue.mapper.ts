import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SoftTissueUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-ui.model';
import { SoftTissueApiModel } from '@models/elbowMRT/api/soft-tissue/soft-tissue-api.model';
import { SoftTissueFindingUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { SoftTissueFindingApiModel } from '@models/elbowMRT/api/soft-tissue/soft-tissue-finding-api.model';
import { SoftTissueFindingMapper } from '@mappings/elbowMRT/soft-tissue/soft-tissue-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueMapper implements IMapper<SoftTissueApiModel, SoftTissueUiModel> {
  constructor(private softTissueFindingMapper: SoftTissueFindingMapper) {
    automapper
      .createMap('SoftTissue_ElbowMRT_ApiModel', 'SoftTissue_ElbowMRT_UiModel')
      .convertToType(SoftTissueUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('SoftTissue_ElbowMRT_UiModel', 'SoftTissue_ElbowMRT_ApiModel')
      .convertToType(SoftTissueApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: SoftTissueUiModel, out: SoftTissueApiModel): SoftTissueApiModel {
    out = automapper.map('SoftTissue_ElbowMRT_UiModel', 'SoftTissue_ElbowMRT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => out.findings.push(this.softTissueFindingMapper.mapToAPI(finding, new SoftTissueFindingApiModel())));
    return out;
  }

  mapToUI(source: SoftTissueApiModel, out: SoftTissueUiModel): SoftTissueUiModel {
    out = automapper.map('SoftTissue_ElbowMRT_ApiModel', 'SoftTissue_ElbowMRT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => out.findings.push(this.softTissueFindingMapper.mapToUI(finding, new SoftTissueFindingUiModel())));
    return out;
  }
}
