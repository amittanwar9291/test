import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { CerebrospinalFluidSpaceApiModel } from '@models/headCT/api/cerebrospinal-fluid-space/cerebrospinal-fluid-space-api.model';
import { CerebrospinalFluidSpaceUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-ui.model';
import { CerebrospinalFluidSpaceFindingMapper } from '@mappings/headCT/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-mapper';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { CerebrospinalFluidSpaceFindingApiModel } from '@models/headCT/api/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class CerebrospinalFluidSpaceMapper implements IMapper<CerebrospinalFluidSpaceApiModel, CerebrospinalFluidSpaceUiModel> {
  constructor(private cerebrospinalFluidSpaceFindingMapper: CerebrospinalFluidSpaceFindingMapper) {
    automapper
      .createMap('CerebrospinalFluidSpace_HeadCT_UiModel', 'CerebrospinalFluidSpace_HeadCT_ApiModel')
      .convertToType(CerebrospinalFluidSpaceApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('CerebrospinalFluidSpace_HeadCT_ApiModel', 'CerebrospinalFluidSpace_HeadCT_UiModel')
      .convertToType(CerebrospinalFluidSpaceUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: CerebrospinalFluidSpaceUiModel, out: CerebrospinalFluidSpaceApiModel): CerebrospinalFluidSpaceApiModel {
    out = automapper.map('CerebrospinalFluidSpace_HeadCT_UiModel', 'CerebrospinalFluidSpace_HeadCT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.cerebrospinalFluidSpaceFindingMapper.mapToAPI(finding, new CerebrospinalFluidSpaceFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: CerebrospinalFluidSpaceApiModel, out: CerebrospinalFluidSpaceUiModel): CerebrospinalFluidSpaceUiModel {
    out = automapper.map('CerebrospinalFluidSpace_HeadCT_ApiModel', 'CerebrospinalFluidSpace_HeadCT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings?.forEach(finding => {
      out.findings.push(this.cerebrospinalFluidSpaceFindingMapper.mapToUI(finding, new CerebrospinalFluidSpaceFindingUiModel()));
    });
    return out;
  }
}
