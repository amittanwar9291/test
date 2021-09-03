import { Injectable } from '@angular/core';

import { BonesApiModel } from '@models/feetMRT/api/bones/bones-api.model';
import { BonesUiModel } from '@models/feetMRT/ui/bones/bones-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { BonesFindingMapper } from '@mappings/feetMRT/bones/bones-finding.mapper';
import { BonesFindingApiModel } from '@models/feetMRT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BonesMapper implements IMapper<BonesApiModel, BonesUiModel> {
  constructor(private bonesFindingsMapper: BonesFindingMapper) {
    automapper
      .createMap('Bones_FeetMRT_ApiModel', 'Bones_FeetMRT_UiModel')
      .convertToType(BonesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Bones_FeetMRT_UiModel', 'Bones_FeetMRT_ApiModel')
      .convertToType(BonesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: BonesUiModel, out: BonesApiModel): BonesApiModel {
    out = automapper.map('Bones_FeetMRT_UiModel', 'Bones_FeetMRT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => out.findings.push(this.bonesFindingsMapper.mapToAPI(finding, new BonesFindingApiModel())));
    return out;
  }

  mapToUI(source: BonesApiModel, out: BonesUiModel): BonesUiModel {
    out = automapper.map('Bones_FeetMRT_ApiModel', 'Bones_FeetMRT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => out.findings.push(this.bonesFindingsMapper.mapToUI(finding, new BonesFindingUiModel())));
    return out;
  }
}
