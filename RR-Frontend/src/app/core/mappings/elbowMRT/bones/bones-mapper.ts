import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { BonesFindingMapper } from '@mappings/elbowMRT/bones/bones-finding.mapper';

import { BonesApiModel } from '@models/elbowMRT/api/bones/bones-api.model';
import { BonesFindingApiModel } from '@models/elbowMRT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/elbowMRT/ui/bones/bones-finding-ui.model';
import { BonesUiModel } from '@models/elbowMRT/ui/bones/bones-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BonesMapper implements IMapper<BonesApiModel, BonesUiModel> {
  constructor(private bonesFindingsMapper: BonesFindingMapper) {
    automapper
      .createMap('Bones_ElbowMRT_ApiModel', 'Bones_ElbowMRT_UiModel')
      .convertToType(BonesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Bones_ElbowMRT_UiModel', 'Bones_ElbowMRT_ApiModel')
      .convertToType(BonesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: BonesUiModel, out: BonesApiModel): BonesApiModel {
    out = automapper.map('Bones_ElbowMRT_UiModel', 'Bones_ElbowMRT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => out.findings.push(this.bonesFindingsMapper.mapToAPI(finding, new BonesFindingApiModel())));
    return out;
  }

  mapToUI(source: BonesApiModel, out: BonesUiModel): BonesUiModel {
    out = automapper.map('Bones_ElbowMRT_ApiModel', 'Bones_ElbowMRT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => out.findings.push(this.bonesFindingsMapper.mapToUI(finding, new BonesFindingUiModel())));
    return out;
  }
}
