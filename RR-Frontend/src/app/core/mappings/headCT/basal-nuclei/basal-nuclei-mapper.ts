import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { BasalNucleiApiModel } from '@models/headCT/api/basal-nuclei/basal-nuclei-api.model';
import { BasalNucleiFindingApiModel } from '@models/headCT/api/basal-nuclei/basal-nuclei-finding-api.model';
import { BasalNucleiFindingUiModel } from '@models/headCT/ui/basal-nuclei/basal-nuclei-finding-ui.model';
import { BasalNucleiUiModel } from '@models/headCT/ui/basal-nuclei/basal-nuclei-ui.model';
import { BasalNucleiFindingMapper } from './basal-nuclei-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class BasalNucleiMapper implements IMapper<BasalNucleiApiModel, BasalNucleiUiModel> {
  constructor(private basalNucleiFindingMapper: BasalNucleiFindingMapper) {
    automapper
      .createMap('BasalNuclei_HeadCT_UiModel', 'BasalNuclei_HeadCT_ApiModel')
      .convertToType(BasalNucleiApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('BasalNuclei_HeadCT_ApiModel', 'BasalNuclei_HeadCT_UiModel')
      .convertToType(BasalNucleiUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: BasalNucleiUiModel, out: BasalNucleiApiModel): BasalNucleiApiModel {
    out = automapper.map('BasalNuclei_HeadCT_UiModel', 'BasalNuclei_HeadCT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.basalNucleiFindingMapper.mapToAPI(finding, new BasalNucleiFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: BasalNucleiApiModel, out: BasalNucleiUiModel): BasalNucleiUiModel {
    out = automapper.map('BasalNuclei_HeadCT_ApiModel', 'BasalNuclei_HeadCT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source?.findings?.forEach(finding => {
      out.findings.push(this.basalNucleiFindingMapper.mapToUI(finding, new BasalNucleiFindingUiModel()));
    });
    return out;
  }
}
