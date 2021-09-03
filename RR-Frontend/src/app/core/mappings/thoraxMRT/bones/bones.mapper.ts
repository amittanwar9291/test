import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { BonesApiModel } from '@models/thoraxMRT/api/bones/bones-api.model';
import { BonesUiModel } from '@models/thoraxMRT/ui/bones/bones-ui.model';
import { BonesFindingMapper } from '@mappings/thoraxMRT/bones/bones-finding.mapper';
import { BonesFindingApiModel } from '@models/thoraxMRT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/thoraxMRT/ui/bones/bones-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BonesMapper implements IMapper<BonesApiModel, BonesUiModel> {
  constructor(private bonesFindingMapper: BonesFindingMapper) {
    automapper.createMap('Bones_ThoraxMRT_UiModel', 'Bones_ThoraxMRT_ApiModel').convertToType(BonesApiModel);
    automapper.createMap('Bones_ThoraxMRT_ApiModel', 'Bones_ThoraxMRT_UiModel').convertToType(BonesUiModel);
  }

  mapToAPI(source: BonesUiModel, out: BonesApiModel): BonesApiModel {
    out = automapper.map('Bones_ThoraxMRT_UiModel', 'Bones_ThoraxMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.bonesFindingMapper.mapToAPI(finding, new BonesFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: BonesApiModel, out: BonesUiModel): BonesUiModel {
    out = automapper.map('Bones_ThoraxMRT_ApiModel', 'Bones_ThoraxMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.bonesFindingMapper.mapToUI(finding, new BonesFindingUiModel()));
    });

    return out;
  }
}
