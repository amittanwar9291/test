import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { BonesFindingMapper } from '@mappings/neckMRT/bones/bones-finding.mapper';

import { BonesApiModel } from '@models/neckMRT/api/bones/bones-api.model';
import { BonesUiModel } from '@models/neckMRT/ui/bones/bones-ui.model';
import { BonesFindingUiModel } from '@models/neckMRT/ui/bones/bones-finding-ui.model';
import { BonesFindingApiModel } from '@models/neckMRT/api/bones/bones-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class BonesMapper implements IMapper<BonesApiModel, BonesUiModel> {
  constructor(private bonesFindingMapper: BonesFindingMapper) {
    automapper
      .createMap('Bones_NeckMRT_UiModel', 'Bones_NeckMRT_ApiModel')
      .convertToType(BonesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Bones_NeckMRT_ApiModel', 'Bones_NeckMRT_UiModel')
      .convertToType(BonesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: BonesUiModel, out: BonesApiModel): BonesApiModel {
    out = automapper.map('Bones_NeckMRT_UiModel', 'Bones_NeckMRT_ApiModel', source);

    out.findings = source.findings.map(
      (finding: BonesFindingUiModel): BonesFindingApiModel => {
        return this.bonesFindingMapper.mapToAPI(finding, new BonesFindingApiModel());
      }
    );

    return out;
  }

  mapToUI(source: BonesApiModel, out: BonesUiModel): BonesUiModel {
    out = automapper.map('Bones_NeckMRT_ApiModel', 'Bones_NeckMRT_UiModel', source);

    out.findings = source.findings.map(
      (finding: BonesFindingApiModel): BonesFindingUiModel => {
        return this.bonesFindingMapper.mapToUI(finding, new BonesFindingUiModel());
      }
    );

    return out;
  }
}
