import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { CapsuleAndLigamentsApiModel } from '@models/hipMRT/api/capsule-and-ligaments/capsule-and-ligaments-api.model';
import { CapsuleAndLigamentsUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-ui.model';
import { CapsuleAndLigamentsFindingMapper } from './capsule-and-ligaments-finding.mapper';
import { CapsuleAndLigamentsFindingApiModel } from '@models/hipMRT/api/capsule-and-ligaments/capsule-and-ligaments-finding-api.model';
import { CapsuleAndLigamentsFindingUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class CapsuleAndLigamentsMapper implements IMapper<CapsuleAndLigamentsApiModel, CapsuleAndLigamentsUiModel> {
  constructor(private findingMapper: CapsuleAndLigamentsFindingMapper) {
    automapper
      .createMap('CapsuleAndLigamentsApiModel', 'CapsuleAndLigamentsUiModel')
      .convertToType(CapsuleAndLigamentsUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('CapsuleAndLigamentsUiModel', 'CapsuleAndLigamentsApiModel')
      .convertToType(CapsuleAndLigamentsApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: CapsuleAndLigamentsUiModel, out: CapsuleAndLigamentsApiModel): CapsuleAndLigamentsApiModel {
    out = automapper.map('CapsuleAndLigamentsUiModel', 'CapsuleAndLigamentsApiModel', source);
    out.findings = source.findings.map((finding: CapsuleAndLigamentsFindingUiModel) => {
      return this.findingMapper.mapToAPI(finding, new CapsuleAndLigamentsFindingApiModel());
    });
    return out;
  }

  mapToUI(source: CapsuleAndLigamentsApiModel, out: CapsuleAndLigamentsUiModel): CapsuleAndLigamentsUiModel {
    out = automapper.map('CapsuleAndLigamentsApiModel', 'CapsuleAndLigamentsUiModel', source);
    out.findings = source.findings.map((finding: CapsuleAndLigamentsFindingApiModel) => {
      return this.findingMapper.mapToUI(finding, new CapsuleAndLigamentsFindingUiModel());
    });
    return out;
  }
}
