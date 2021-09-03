import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { BonesApiModel } from '@models/handMRT/api/bones/bones-api.model';
import { BonesUiModel } from '@models/handMRT/ui/bones/bones-ui.model';
import { BonesFindingMapper } from '@mappings/handMRT/bones/bones-finding.mapper';
import { BonesFindingApiModel } from '@models/handMRT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BonesMapper implements IMapper<BonesApiModel, BonesUiModel> {
  constructor(private findingMapper: BonesFindingMapper) {
    automapper
      .createMap('Bones_HandMRT_ApiModel', 'Bones_HandMRT_UiModel')
      .convertToType(BonesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
    automapper
      .createMap('Bones_HandMRT_UiModel', 'Bones_HandMRT_ApiModel')
      .convertToType(BonesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: BonesUiModel, out: BonesApiModel): BonesApiModel {
    out = automapper.map('Bones_HandMRT_UiModel', 'Bones_HandMRT_ApiModel', source);
    out.findings.length = 0;
    source.findings.forEach((finding: BonesFindingUiModel) => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new BonesFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: BonesApiModel, out: BonesUiModel): BonesUiModel {
    out = automapper.map('Bones_HandMRT_ApiModel', 'Bones_HandMRT_UiModel', source);
    out.findings.length = 0;
    source.findings.forEach((finding: BonesFindingApiModel) => {
      out.findings.push(this.findingMapper.mapToUI(finding, new BonesFindingUiModel()));
    });

    return out;
  }
}
