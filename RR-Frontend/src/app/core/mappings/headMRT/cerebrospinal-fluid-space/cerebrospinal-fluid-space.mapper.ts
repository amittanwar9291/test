import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { CerebrospinalFluidSpaceApiModel } from '@models/headMRT/api/cerebrospinal-fluid-space/cerebrospinal-fluid-space-api.model';
import { CerebrospinalFluidSpaceFindingApiModel } from '@models/headMRT/api/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-api.model';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { CerebrospinalFluidSpaceUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-ui.model';
import { CerebrospinalFluidSpaceFindingMapper } from './cerebrospinal-fluid-space-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class CerebrospinalFluidSpaceMapper implements IMapper<CerebrospinalFluidSpaceApiModel, CerebrospinalFluidSpaceUiModel> {
  constructor(private cerebrospinalFluidSpaceFindingMapper: CerebrospinalFluidSpaceFindingMapper) {
    automapper
      .createMap('CerebrospinalFluidSpace_HeadMRT_UiModel', 'CerebrospinalFluidSpace_HeadMRT_ApiModel')
      .convertToType(CerebrospinalFluidSpaceApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('CerebrospinalFluidSpace_HeadMRT_ApiModel', 'CerebrospinalFluidSpace_HeadMRT_UiModel')
      .convertToType(CerebrospinalFluidSpaceUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: CerebrospinalFluidSpaceUiModel, out: CerebrospinalFluidSpaceApiModel): CerebrospinalFluidSpaceApiModel {
    out = automapper.map('CerebrospinalFluidSpace_HeadMRT_UiModel', 'CerebrospinalFluidSpace_HeadMRT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.cerebrospinalFluidSpaceFindingMapper.mapToAPI(finding, new CerebrospinalFluidSpaceFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: CerebrospinalFluidSpaceApiModel, out: CerebrospinalFluidSpaceUiModel): CerebrospinalFluidSpaceUiModel {
    out = automapper.map('CerebrospinalFluidSpace_HeadMRT_ApiModel', 'CerebrospinalFluidSpace_HeadMRT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.cerebrospinalFluidSpaceFindingMapper.mapToUI(finding, new CerebrospinalFluidSpaceFindingUiModel()));
    });
    return out;
  }
}
