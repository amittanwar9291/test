import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SellarRegionApiModel } from '@models/headMRT/api/sellar-region/sellar-region-api.model';
import { SellarRegionUiModel } from '@models/headMRT/ui/sellar-region/sellar-region-ui.model';
import { SellarRegionFindingMapper } from '@mappings/headMRT/sellar-region/sellar-region-finding.mapper';
import { SellarRegionFindingApiModel } from '@models/headMRT/api/sellar-region/sellar-region-finding-api.model';
import { SellarRegionFindingUiModel } from '@models/headMRT/ui/sellar-region/sellar-region-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SellarRegionMapper implements IMapper<SellarRegionApiModel, SellarRegionUiModel> {
  constructor(private sellarRegionFindingMapper: SellarRegionFindingMapper) {
    automapper
      .createMap('SellarRegion_HeadMRT_UiModel', 'SellarRegion_HeadMRT_ApiModel')
      .convertToType(SellarRegionApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('SellarRegion_HeadMRT_ApiModel', 'SellarRegion_HeadMRT_UiModel')
      .convertToType(SellarRegionUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: SellarRegionUiModel, out: SellarRegionApiModel): SellarRegionApiModel {
    out = automapper.map('SellarRegion_HeadMRT_UiModel', 'SellarRegion_HeadMRT_ApiModel', source);
    out.findings.splice(0, out.findings.length);

    source.findings.forEach(finding => {
      out.findings.push(this.sellarRegionFindingMapper.mapToAPI(finding, new SellarRegionFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: SellarRegionApiModel, out: SellarRegionUiModel): SellarRegionUiModel {
    out = automapper.map('SellarRegion_HeadMRT_ApiModel', 'SellarRegion_HeadMRT_UiModel', source);
    out.findings.splice(0, out.findings.length);

    source?.findings?.forEach(finding => {
      out.findings.push(this.sellarRegionFindingMapper.mapToUI(finding, new SellarRegionFindingUiModel()));
    });
    return out;
  }
}
