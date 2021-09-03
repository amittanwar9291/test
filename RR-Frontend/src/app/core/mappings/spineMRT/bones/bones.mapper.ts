import { Injectable } from '@angular/core';

import { BonesApiModel } from '@models/spineMRT/api/bones/bones-api.model';
import { BonesUiModel } from '@models/spineMRT/ui/bones/bones-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { BonesFindingsMapper } from '@mappings/spineMRT/bones/bones-findings.mapper';
import { BonesFindingApiModel } from '@models/spineMRT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BonesMapper implements IMapper<BonesApiModel, BonesUiModel> {
  constructor(private bonesFindingsMapper: BonesFindingsMapper) {
    automapper.createMap('Bones_SpineMRT_UiModel', 'Bones_SpineMRT_ApiModel').convertToType(BonesApiModel);
    automapper.createMap('Bones_SpineMRT_ApiModel', 'Bones_SpineMRT_UiModel').convertToType(BonesUiModel);
  }

  mapToAPI(source: BonesUiModel, out: BonesApiModel): BonesApiModel {
    out = automapper.map('Bones_SpineMRT_UiModel', 'Bones_SpineMRT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.bonesFindingsMapper.mapToAPI(finding, new BonesFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: BonesApiModel, out: BonesUiModel): BonesUiModel {
    out = automapper.map('Bones_SpineMRT_ApiModel', 'Bones_SpineMRT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.bonesFindingsMapper.mapToUI(finding, new BonesFindingUiModel()));
    });

    return out;
  }
}
