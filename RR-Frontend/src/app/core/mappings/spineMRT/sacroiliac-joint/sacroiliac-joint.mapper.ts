import { Injectable } from '@angular/core';

import { SacroiliacJointApiModel } from '@models/spineMRT/api/sacroiliac-joint/sacroiliac-joint-api.model';
import { SacroiliacJointUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-ui.model';
import { SacroiliacJointFindingApiModel } from '@models/spineMRT/api/sacroiliac-joint/sacroiliac-joint-finding-api.model';
import { SacroiliacJointFindingUiModel } from '@models/spineMRT/ui/sacroiliac-joint/sacroiliac-joint-finding-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

import { SacroiliacJointFindingsMapper } from './sacroiliac-joint-findings.mapper';
import { IntervertebralDiscJointsFindingApiModel } from '@models/spineMRT/api/intervertebal-disc-joints/intervertebal-disc-joints-finding-api.model';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SacroiliacJointMapper implements IMapper<SacroiliacJointApiModel, SacroiliacJointUiModel> {
  constructor(private findingMapper: SacroiliacJointFindingsMapper) {
    automapper
      .createMap('SacroiliacJoint_SpineMRT_ApiModel', 'SacroiliacJoint_SpineMRT_UiModel')
      .convertToType(SacroiliacJointUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('SacroiliacJoint_SpineMRT_UiModel', 'SacroiliacJoint_SpineMRT_ApiModel')
      .convertToType(SacroiliacJointApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: SacroiliacJointUiModel, out: SacroiliacJointApiModel): SacroiliacJointApiModel {
    out = automapper.map('SacroiliacJoint_SpineMRT_UiModel', 'SacroiliacJoint_SpineMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new SacroiliacJointFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: SacroiliacJointApiModel, out: SacroiliacJointUiModel): SacroiliacJointUiModel {
    out = automapper.map('SacroiliacJoint_SpineMRT_ApiModel', 'SacroiliacJoint_SpineMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.findingMapper.mapToUI(finding, new SacroiliacJointFindingUiModel()));
    });

    return out;
  }
}
