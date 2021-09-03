import { Injectable } from '@angular/core';

import { RotatorApiModel } from '@models/shoulderMRT/api/rotator/rotator-api.model';
import { RotatorFindingApiModel } from '@models/shoulderMRT/api/rotator/rotator-finding-api.model';
import { RotatorUiModel } from '@models/shoulderMRT/ui/rotator/rotator-ui.model';
import { RotatorFindingUiModel } from '@models/shoulderMRT/ui/rotator/rotator-finding-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

import { RotatorFindingMapper } from './rotator-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class RotatorMapper implements IMapper<RotatorApiModel, RotatorUiModel> {
  constructor(private findingMapper: RotatorFindingMapper) {
    automapper
      .createMap('Rotator_ShoulderMRT_ApiModel', 'Rotator_ShoulderMRT_UiModel')
      .convertToType(RotatorUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Rotator_ShoulderMRT_UiModel', 'Rotator_ShoulderMRT_ApiModel')
      .convertToType(RotatorApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: RotatorUiModel, out: RotatorApiModel): RotatorApiModel {
    out = automapper.map('Rotator_ShoulderMRT_UiModel', 'Rotator_ShoulderMRT_ApiModel', source);

    out.findings.length = 0;

    for (const finding of source.findings) {
      out.findings.push(this.findingMapper.mapToAPI(finding, new RotatorFindingApiModel()));
    }
    return out;
  }

  mapToUI(source: RotatorApiModel, out: RotatorUiModel): RotatorUiModel {
    out = automapper.map('Rotator_ShoulderMRT_ApiModel', 'Rotator_ShoulderMRT_UiModel', source);

    out.findings.length = 0;

    for (const finding of source.findings) {
      out.findings.push(this.findingMapper.mapToUI(finding, new RotatorFindingUiModel()));
    }
    return out;
  }
}
