import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { BasalNucleiApiModel } from '@models/headMRT/api/basal_nuclei/basal-nuclei-api.model';
import { BasalNucleiUiModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-ui.model';
import { BasalNucleiFindingMapper } from '@mappings/headMRT/basal_nuclei/basal-nuclei-finding.mapper';
import { BasalNucleiFindingApiModel } from '@models/headMRT/api/basal_nuclei/basal-nuclei-finding-api.model';
import { BasalNucleiFindingUiModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BasalNucleiMapper implements IMapper<BasalNucleiApiModel, BasalNucleiUiModel> {
  constructor(private basalNucleiFindingMapper: BasalNucleiFindingMapper) {
    automapper
      .createMap('BasalNuclei_HeadMRT_UiModel', 'BasalNuclei_HeadMRT_ApiModel')
      .convertToType(BasalNucleiApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('BasalNuclei_HeadMRT_ApiModel', 'BasalNuclei_HeadMRT_UiModel')
      .convertToType(BasalNucleiUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: BasalNucleiUiModel, out: BasalNucleiApiModel): BasalNucleiApiModel {
    out = automapper.map('BasalNuclei_HeadMRT_UiModel', 'BasalNuclei_HeadMRT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.basalNucleiFindingMapper.mapToAPI(finding, new BasalNucleiFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: BasalNucleiApiModel, out: BasalNucleiUiModel): BasalNucleiUiModel {
    out = automapper.map('BasalNuclei_HeadMRT_ApiModel', 'BasalNuclei_HeadMRT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source?.findings?.forEach(finding => {
      out.findings.push(this.basalNucleiFindingMapper.mapToUI(finding, new BasalNucleiFindingUiModel()));
    });
    return out;
  }
}
