import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { BonesApiModel } from '@models/hipMRT/api/bones/bones-api.model';
import { BonesUiModel } from '@models/hipMRT/ui/bones/bones-ui.model';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import { BonesFindingApiModel } from '@models/hipMRT/api/bones/bones-finding-api.model';
import { BonesFindingsMapper } from './bones-findings.mapper';

@Injectable({
  providedIn: 'root'
})
export class BonesMapper implements IMapper<BonesApiModel, BonesUiModel> {
  constructor(private bonesFindingMapper: BonesFindingsMapper) {
    automapper.createMap('Bones_HipMRT_ApiModel', 'Bones_HipMRT_UiModel').convertToType(BonesUiModel);
    automapper.createMap('Bones_HipMRT_UiModel', 'Bones_HipMRT_ApiModel').convertToType(BonesApiModel);
  }

  mapToAPI(source: BonesUiModel, out: BonesApiModel): BonesApiModel {
    out = automapper.map('Bones_HipMRT_UiModel', 'Bones_HipMRT_ApiModel', source);

    out.findings = source.findings.map((finding: BonesFindingUiModel) => {
      return this.bonesFindingMapper.mapToAPI(finding, new BonesFindingApiModel());
    });

    return out;
  }

  mapToUI(source: BonesApiModel, out: BonesUiModel): BonesUiModel {
    out = automapper.map('Bones_HipMRT_ApiModel', 'Bones_HipMRT_UiModel', source);

    out.findings = source.findings.map((finding: BonesFindingApiModel) => {
      return this.bonesFindingMapper.mapToUI(finding, new BonesFindingUiModel());
    });

    return out;
  }
}
