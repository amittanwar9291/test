import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SpineCTSoftTissuesFindingMapper } from '@mappings/spineCT/soft-tissues/spineCT-soft-tissues-finding.mapper';

import { SoftTissuesUiModel, SoftTissuesApiModel, SoftTissuesFindingUiModel, SoftTissuesFindingApiModel } from '@models/spineCT';

@Injectable({
  providedIn: 'root'
})
export class SpineCTSoftTissuesMapper implements IMapper<SoftTissuesApiModel, SoftTissuesUiModel> {
  constructor(private findingMapper: SpineCTSoftTissuesFindingMapper) {
    automapper
      .createMap('SoftTissues_SpineCT_UiModel', 'SoftTissues_SpineCT_ApiModel')
      .convertToType(SoftTissuesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('SoftTissues_SpineCT_ApiModel', 'SoftTissues_SpineCT_UiModel')
      .convertToType(SoftTissuesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: SoftTissuesUiModel, out: SoftTissuesApiModel): SoftTissuesApiModel {
    out = automapper.map('SoftTissues_SpineCT_UiModel', 'SoftTissues_SpineCT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new SoftTissuesFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: SoftTissuesApiModel, out: SoftTissuesUiModel): SoftTissuesUiModel {
    out = automapper.map('SoftTissues_SpineCT_ApiModel', 'SoftTissues_SpineCT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.findingMapper.mapToUI(finding, new SoftTissuesFindingUiModel()));
    });
    return out;
  }
}
