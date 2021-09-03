import { IMapper } from '@interfaces/mapper.interface';
import { SoftTissueUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-ui.model';
import { SoftTissueApiModel } from '@models/feetMRT/api/soft-tissue/soft-tissue-api.model';
import { Injectable } from '@angular/core';
import { SoftTissueFindingMapper } from '@mappings/feetMRT/soft-tissue/soft-tissue-finding.mapper';
import { SoftTissueFindingApiModel } from '@models/feetMRT/api/soft-tissue/soft-tissue-finding-api.model';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueMapper implements IMapper<SoftTissueApiModel, SoftTissueUiModel> {
  constructor(private softTissueFindingMapper: SoftTissueFindingMapper) {
    automapper
      .createMap('SoftTissue_FeetMRT_ApiModel', 'SoftTissue_FeetMRT_UiModel')
      .convertToType(SoftTissueUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('SoftTissue_FeetMRT_UiModel', 'SoftTissue_FeetMRT_ApiModel')
      .convertToType(SoftTissueApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: SoftTissueUiModel, out: SoftTissueApiModel): SoftTissueApiModel {
    out = automapper.map('SoftTissue_FeetMRT_UiModel', 'SoftTissue_FeetMRT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => out.findings.push(this.softTissueFindingMapper.mapToAPI(finding, new SoftTissueFindingApiModel())));
    return out;
  }

  mapToUI(source: SoftTissueApiModel, out: SoftTissueUiModel): SoftTissueUiModel {
    out = automapper.map('SoftTissue_FeetMRT_ApiModel', 'SoftTissue_FeetMRT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => out.findings.push(this.softTissueFindingMapper.mapToUI(finding, new SoftTissueFindingUiModel())));
    return out;
  }
}
