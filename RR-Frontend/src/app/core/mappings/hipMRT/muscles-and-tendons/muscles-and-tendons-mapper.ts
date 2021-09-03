import { IMapper } from '@interfaces/mapper.interface';

import { Injectable } from '@angular/core';

import { MusclesAndTendonsApiModel } from '@models/hipMRT/api/muscles-and-tendons/muscles-and-tendons-api.model';
import { MusclesAndTendonsUiModel } from '@models/hipMRT/ui/muscles-and-tendons/muscles-and-tendons-ui.model';
import { MusclesAndTendonsFindingApiModel } from '@models/hipMRT/api/muscles-and-tendons/muscles-and-tendons-finding-api.model';
import { MusclesAndTendonsFindingUiModel } from '@models/hipMRT/ui/muscles-and-tendons/muscles-and-tendons-finding-ui.model';

import { MusclesAndTendonsFindingMapper } from './muscles-and-tendons-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class MusclesAndTendonsMapper implements IMapper<MusclesAndTendonsApiModel, MusclesAndTendonsUiModel> {
  constructor(private musclesAndTendonsFindingMapper: MusclesAndTendonsFindingMapper) {
    automapper
      .createMap('MusclesAndTendons_HipMRT_UiModel', 'MusclesAndTendons_HipMRT_ApiModel')
      .convertToType(MusclesAndTendonsApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('MusclesAndTendons_HipMRT_ApiModel', 'MusclesAndTendons_HipMRT_UiModel')
      .convertToType(MusclesAndTendonsUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: MusclesAndTendonsUiModel, out: MusclesAndTendonsApiModel): MusclesAndTendonsApiModel {
    out = automapper.map('MusclesAndTendons_HipMRT_UiModel', 'MusclesAndTendons_HipMRT_ApiModel', source);

    out.findings = source.findings.map((finding: MusclesAndTendonsFindingUiModel) => {
      return this.musclesAndTendonsFindingMapper.mapToAPI(finding, new MusclesAndTendonsFindingApiModel());
    });

    return out;
  }

  mapToUI(source: MusclesAndTendonsApiModel, out: MusclesAndTendonsUiModel): MusclesAndTendonsUiModel {
    out = automapper.map('MusclesAndTendons_HipMRT_ApiModel', 'MusclesAndTendons_HipMRT_UiModel', source);

    out.findings = source.findings.map((finding: MusclesAndTendonsFindingApiModel) => {
      return this.musclesAndTendonsFindingMapper.mapToUI(finding, new MusclesAndTendonsFindingUiModel());
    });

    return out;
  }
}
