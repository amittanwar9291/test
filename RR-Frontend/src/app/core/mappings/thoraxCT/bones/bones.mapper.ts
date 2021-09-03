import { Injectable } from '@angular/core';

import { BonesApiModel } from '@models/thoraxCT/api/bones/bones-api.model';
import { BonesUiModel } from '@models/thoraxCT/ui/bones/bones-ui.model';
import { IMapper } from '@interfaces/mapper.interface';
import { BonesFindingsMapper } from '@mappings/thoraxCT/bones/bones-finding.mapper';
import { BonesFindingApiModel } from '@models/thoraxCT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/thoraxCT/ui/bones/bones-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BonesMapper implements IMapper<BonesApiModel, BonesUiModel> {
  constructor(private bonesFindingsMapper: BonesFindingsMapper) {
    automapper.createMap('Bones_ThoraxCT_UiModel', 'Bones_ThoraxCT_ApiModel').convertToType(BonesApiModel);
    automapper.createMap('Bones_ThoraxCT_ApiModel', 'Bones_ThoraxCT_UiModel').convertToType(BonesUiModel);
  }

  mapToAPI(source: BonesUiModel, out: BonesApiModel): BonesApiModel {
    out = automapper.map('Bones_ThoraxCT_UiModel', 'Bones_ThoraxCT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.bonesFindingsMapper.mapToAPI(finding, new BonesFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: BonesApiModel, out: BonesUiModel): BonesUiModel {
    out = automapper.map('Bones_ThoraxCT_ApiModel', 'Bones_ThoraxCT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.bonesFindingsMapper.mapToUI(finding, new BonesFindingUiModel()));
    });

    return out;
  }
}
