import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { UltrasoundFindingApiModel } from '@models/mammaMX/api/ultrasound-finding/ultrasound-finding-api.model';
import { UltrasoundFindingUiModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-ui.model';
import { UltrasoundFindingSubfindingUiModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-subfinding-ui.model';
import { UltrasoundFindingSubfindingApiModel } from '@models/mammaMX/api/ultrasound-finding/ultrasound-finding-subfinding-api.model';

import { UltrasoundFindingSubfindingMapper } from '@mappings/mammaMX/ultrasound-finding/ultrasound-finding-subfinding.mapper';

@Injectable({
  providedIn: 'root'
})
export class UltrasoundFindingMapper implements IMapper<UltrasoundFindingApiModel, UltrasoundFindingUiModel> {
  constructor(private ultrasoundFindingSubfindingMapper: UltrasoundFindingSubfindingMapper) {
    automapper
      .createMap('UltrasoundFinding_MammaMX_UiModel', 'UltrasoundFinding_MammaMX_ApiModel')
      .convertToType(UltrasoundFindingApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('UltrasoundFinding_MammaMX_ApiModel', 'UltrasoundFinding_MammaMX_UiModel')
      .convertToType(UltrasoundFindingUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: UltrasoundFindingUiModel, out: UltrasoundFindingApiModel): UltrasoundFindingApiModel {
    out = automapper.map('UltrasoundFinding_MammaMX_UiModel', 'UltrasoundFinding_MammaMX_ApiModel', source);

    out.findings = source.findings.map(
      (finding: UltrasoundFindingSubfindingUiModel): UltrasoundFindingSubfindingApiModel => {
        return this.ultrasoundFindingSubfindingMapper.mapToAPI(finding, new UltrasoundFindingSubfindingApiModel());
      }
    );

    return out;
  }

  mapToUI(source: UltrasoundFindingApiModel, out: UltrasoundFindingUiModel): UltrasoundFindingUiModel {
    out = automapper.map('UltrasoundFinding_MammaMX_ApiModel', 'UltrasoundFinding_MammaMX_UiModel', source);

    out.findings = source.findings.map(
      (finding: UltrasoundFindingSubfindingApiModel): UltrasoundFindingSubfindingUiModel => {
        return this.ultrasoundFindingSubfindingMapper.mapToUI(finding, new UltrasoundFindingSubfindingUiModel());
      }
    );

    return out;
  }
}
