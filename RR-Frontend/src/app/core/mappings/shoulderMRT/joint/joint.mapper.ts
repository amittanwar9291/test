import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { JointApiModel } from '@models/shoulderMRT/api/joint/joint-api.model';
import { JointUiModel } from '@models/shoulderMRT/ui/joint/joint-ui-model';

import { JointFindingsMapper } from './joint-findings.mapper';
import { JointFindingApiModel } from '@models/shoulderMRT/api/joint/joint-finding-api.model';
import { JointFindingUiModel } from '@models/shoulderMRT/ui/joint/joint-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class JointMapper implements IMapper<JointApiModel, JointUiModel> {
  constructor(private findingMapper: JointFindingsMapper) {
    automapper
      .createMap('Joint_ShoulderMRT_ApiModel', 'Joint_ShoulderMRT_UiModel')
      .convertToType(JointUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Joint_ShoulderMRT_UiModel', 'Joint_ShoulderMRT_ApiModel')
      .convertToType(JointApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: JointUiModel, out: JointApiModel): JointApiModel {
    out = automapper.map('Joint_ShoulderMRT_UiModel', 'Joint_ShoulderMRT_ApiModel', source);

    out.findings.length = 0;

    for (const finding of source.findings) {
      out.findings.push(this.findingMapper.mapToAPI(finding, new JointFindingApiModel()));
    }

    return out;
  }

  mapToUI(source: JointApiModel, out: JointUiModel): JointUiModel {
    out = automapper.map('Joint_ShoulderMRT_ApiModel', 'Joint_ShoulderMRT_UiModel', source);

    out.findings.length = 0;

    for (const finding of source.findings) {
      out.findings.push(this.findingMapper.mapToUI(finding, new JointFindingUiModel()));
    }

    return out;
  }
}
