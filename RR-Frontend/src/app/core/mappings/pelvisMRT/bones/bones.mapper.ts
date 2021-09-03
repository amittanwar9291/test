import { BonesUiModel } from '@models/pelvisMRT/ui/bones/bones-ui.model';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { BonesApiModel } from '@models/pelvisMRT/api/bones/bones-api.model';
import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import { BonesFindingApiModel } from '@models/pelvisMRT/api/bones/bones-finding-api.model';
import { BonesFindingsMapper } from './bones-findings.mapper';

@Injectable({
  providedIn: 'root'
})
export class BonesMapper implements IMapper<BonesApiModel, BonesUiModel> {
  constructor(private enumMapper: EnumMapper, private findingMapper: BonesFindingsMapper) {
    automapper.createMap('Bones_PelvisMRT_UiModel', 'Bones_PelvisMRT_ApiModel').convertToType(BonesApiModel);
    automapper.createMap('Bones_PelvisMRT_ApiModel', 'Bones_PelvisMRT_UiModel').convertToType(BonesUiModel);
  }

  mapToAPI(source: BonesUiModel, out: BonesApiModel): BonesApiModel {
    out = automapper.map('Bones_PelvisMRT_UiModel', 'Bones_PelvisMRT_ApiModel', source);

    out.findings.length = 0;
    source.findings.forEach((finding: BonesFindingUiModel) => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new BonesFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: BonesApiModel, out: BonesUiModel): BonesUiModel {
    out = automapper.map('Bones_PelvisMRT_ApiModel', 'Bones_PelvisMRT_UiModel', source);

    out.findings.length = 0;
    source.findings.forEach((finding: BonesFindingApiModel) => {
      out.findings.push(this.findingMapper.mapToUI(finding, new BonesFindingUiModel()));
    });

    return out;
  }
}
