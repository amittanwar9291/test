import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SpineCTBonesFindingMapper } from '@mappings/spineCT/bones/spineCT-bones-finding.mapper';

import { BonesApiModel, BonesUiModel } from '@models/spineCT';
import { BonesFindingUiModel } from '@models/spineCT/ui/bones/bones-finding-ui.model';
import { BonesFindingApiModel } from '@models/spineCT/api/bones/bones-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class SpineCTBonesMapper implements IMapper<BonesApiModel, BonesUiModel> {
  constructor(private findingMapper: SpineCTBonesFindingMapper) {
    automapper
      .createMap('Bones_SpineCT_UiModel', 'Bones_SpineCT_ApiModel')
      .convertToType(BonesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Bones_SpineCT_ApiModel', 'Bones_SpineCT_UiModel')
      .convertToType(BonesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: BonesUiModel, out: BonesApiModel): BonesApiModel {
    out = automapper.map('Bones_SpineCT_UiModel', 'Bones_SpineCT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach((value: BonesFindingUiModel, index: number) => {
      out.findings[index] = this.findingMapper.mapToAPI(value, new BonesFindingApiModel());
    });

    return out;
  }

  mapToUI(source: BonesApiModel, out: BonesUiModel): BonesUiModel {
    out = automapper.map('Bones_SpineCT_ApiModel', 'Bones_SpineCT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach((value: BonesFindingApiModel, index: number) => {
      out.findings[index] = this.findingMapper.mapToUI(value, new BonesFindingUiModel());
    });

    return out;
  }
}
