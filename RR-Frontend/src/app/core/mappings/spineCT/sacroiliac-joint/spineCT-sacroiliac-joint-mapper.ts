import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SacroiliacJointApiModel, SacroiliacJointUiModel } from '@models/spineCT';
import { SacroiliacJointFindingUiModel } from '@models/spineCT/ui/sacroiliac-joint/sacroiliac-joint-finding-ui.model';
import { SacroiliacJointFindingApiModel } from '@models/spineCT/api/sacroiliac-joint/sacroiliac-joint-finding-api.model';

import { SpineCTSacroiliacJointFindingMapper } from './spineCT-sacroiliac-joint-finding-mapper';

@Injectable({
  providedIn: 'root'
})
export class SpineCTSacroiliacJointMapper implements IMapper<SacroiliacJointApiModel, SacroiliacJointUiModel> {
  constructor(private findingMapper: SpineCTSacroiliacJointFindingMapper) {
    automapper
      .createMap('SacroiliacJoint_SpineCT_ApiModel', 'SacroiliacJoint_SpineCT_UiModel')
      .convertToType(SacroiliacJointUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('SacroiliacJoint_SpineCT_UiModel', 'SacroiliacJoint_SpineCT_ApiModel')
      .convertToType(SacroiliacJointApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: SacroiliacJointUiModel, out: SacroiliacJointApiModel): SacroiliacJointApiModel {
    out = automapper.map('SacroiliacJoint_SpineCT_UiModel', 'SacroiliacJoint_SpineCT_ApiModel', source);
    source.findings.forEach((value, index) => {
      out.findings[index] = this.findingMapper.mapToAPI(value, new SacroiliacJointFindingApiModel());
    });
    return out;
  }

  mapToUI(source: SacroiliacJointApiModel, out: SacroiliacJointUiModel): SacroiliacJointUiModel {
    out = automapper.map('SacroiliacJoint_SpineCT_ApiModel', 'SacroiliacJoint_SpineCT_UiModel', source);
    source.findings.forEach((value, index) => {
      out.findings[index] = this.findingMapper.mapToUI(value, new SacroiliacJointFindingUiModel());
    });
    return out;
  }
}
