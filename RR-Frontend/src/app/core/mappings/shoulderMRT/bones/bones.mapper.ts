import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { BonesApiModel } from '@models/shoulderMRT/api/bones/bones-api.model';
import { BonesUiModel } from '@models/shoulderMRT/ui/bones/bones-ui.model';
import { BonesFindingApiModel } from '@models/shoulderMRT/api/bones/bones-finding-api.model';
import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';

import { BonesFindingMapper } from './bones-findings.mapper';

@Injectable({
  providedIn: 'root'
})
export class BonesMapper implements IMapper<BonesApiModel, BonesUiModel> {
  constructor(private boneFindingMapper: BonesFindingMapper) {
    automapper.createMap('Bones_ShoulderMRT_ApiModel', 'Bones_ShoulderMRT_UiModel').convertToType(BonesUiModel);
    automapper.createMap('Bones_ShoulderMRT_UiModel', 'Bones_ShoulderMRT_ApiModel').convertToType(BonesApiModel);
  }

  mapToAPI(source: BonesUiModel, out: BonesApiModel): BonesApiModel {
    out.areFindings = source.areFindings;
    out.id = source.id;
    out.reportId = source.reportId;
    out.reportTypeName = source.reportTypeName;

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.boneFindingMapper.mapToAPI(finding, new BonesFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: BonesApiModel, out: BonesUiModel): BonesUiModel {
    out.areFindings = source.areFindings;
    out.id = source.id;
    out.reportId = source.reportId;
    out.reportTypeName = source.reportTypeName;

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.boneFindingMapper.mapToUI(finding, new BonesFindingUiModel()));
    });
    return out;
  }
}
