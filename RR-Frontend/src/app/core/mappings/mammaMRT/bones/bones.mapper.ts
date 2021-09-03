import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { BonesApiModel } from '@models/mammaMRT/api/bones/bones-api.model';
import { BonesUiModel } from '@models/mammaMRT/ui/bones/bones-ui.model';
import { BonesFindingApiModel } from '@models/mammaMRT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/mammaMRT/ui/bones/bones-finding-ui.model';

import { BonesFindingsMapper } from './bones-findings.mapper';

@Injectable({
  providedIn: 'root'
})
export class BonesMapper implements IMapper<BonesApiModel, BonesUiModel> {
  constructor(private bonesFindingMapper: BonesFindingsMapper) {
    automapper
      .createMap('Bones_MammaMRT_ApiModel', 'Bones_MammaMRT_UiModel')
      .convertToType(BonesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Bones_MammaMRT_UiModel', 'Bones_MammaMRT_ApiModel')
      .convertToType(BonesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: BonesUiModel, out: BonesApiModel): BonesApiModel {
    out = automapper.map('Bones_MammaMRT_UiModel', 'Bones_MammaMRT_ApiModel', source);
    out.findings.length = 0;
    source.findings.forEach(finding => {
      out.findings.push(this.bonesFindingMapper.mapToAPI(finding, new BonesFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: BonesApiModel, out: BonesUiModel): BonesUiModel {
    out = automapper.map('Bones_MammaMRT_ApiModel', 'Bones_MammaMRT_UiModel', source);
    out.findings.length = 0;
    source.findings.forEach(finding => {
      out.findings.push(this.bonesFindingMapper.mapToUI(finding, new BonesFindingUiModel()));
    });
    return out;
  }
}
