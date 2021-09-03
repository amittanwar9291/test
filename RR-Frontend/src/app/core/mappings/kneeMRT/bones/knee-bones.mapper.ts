import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { KneeBonesApiModel } from '@models/kneeMRT/api/bones/knee-bones-api.model';
import { KneeBonesUiModel } from '@models/kneeMRT/ui/bones/knee-bones-ui.model';

import { KneeBonesFindingMapper } from '@mappings/kneeMRT/bones/knee-bones-finding.mapper';
import { KneeBonesFindingApiModel } from '@models/kneeMRT/api/bones/knee-bones-finding-api.model';
import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class KneeBonesMapper implements IMapper<KneeBonesApiModel, KneeBonesUiModel> {
  constructor(private findingMapper: KneeBonesFindingMapper) {
    automapper
      .createMap('KneeBones_KneeMRT_ApiModel', 'KneeBones_KneeMRT_UiModel')
      .convertToType(KneeBonesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());

    automapper
      .createMap('KneeBones_KneeMRT_UiModel', 'KneeBones_KneeMRT_ApiModel')
      .convertToType(KneeBonesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: KneeBonesUiModel, out: KneeBonesApiModel): KneeBonesApiModel {
    out = automapper.map('KneeBones_KneeMRT_UiModel', 'KneeBones_KneeMRT_ApiModel', source);

    out.findings.length = 0;

    source.findings.forEach(finding => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new KneeBonesFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: KneeBonesApiModel, out: KneeBonesUiModel): KneeBonesUiModel {
    out = automapper.map('KneeBones_KneeMRT_ApiModel', 'KneeBones_KneeMRT_UiModel', source);

    out.findings.length = 0;

    source.findings.forEach(finding => {
      out.findings.push(this.findingMapper.mapToUI(finding, new KneeBonesFindingUiModel()));
    });

    return out;
  }
}
