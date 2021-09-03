import { IMapper } from '@interfaces/mapper.interface';
import { MammographyFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-ui.model';
import { MammographyFindingApiModel } from '@models/mammaMX/api/mammography-finding/mammography-finding-api.model';
import { MammographyFindingFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-finding-ui.model';
import { MammographyFindingFindingApiModel } from '@models/mammaMX/api/mammography-finding/mammography-finding-finding-api.model';
import { MammographyFindingFindingMapper } from '@mappings/mammaMX/mammography-finding/mammography-finding-finding.mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MammographyFindingMapper implements IMapper<MammographyFindingApiModel, MammographyFindingUiModel> {
  constructor(private findingMapper: MammographyFindingFindingMapper) {
    automapper
      .createMap('MammographyFinding_MammaMX_UiModel', 'MammographyFinding_MammaMX_ApiModel')
      .convertToType(MammographyFindingApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('MammographyFinding_MammaMX_ApiModel', 'MammographyFinding_MammaMX_UiModel')
      .convertToType(MammographyFindingUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: MammographyFindingUiModel, out: MammographyFindingApiModel): MammographyFindingApiModel {
    out = automapper.map('MammographyFinding_MammaMX_UiModel', 'MammographyFinding_MammaMX_ApiModel', source);

    out.findings = source.findings.map(finding => this.findingMapper.mapToAPI(finding, new MammographyFindingFindingApiModel()));

    return out;
  }

  mapToUI(source: MammographyFindingApiModel, out: MammographyFindingUiModel): MammographyFindingUiModel {
    out = automapper.map('MammographyFinding_MammaMX_ApiModel', 'MammographyFinding_MammaMX_UiModel', source);

    out.findings = source.findings.map(finding => this.findingMapper.mapToUI(finding, new MammographyFindingFindingUiModel()));

    return out;
  }
}
