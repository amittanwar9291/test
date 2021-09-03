import { Injectable } from '@angular/core';

import { SoftPartsApiModel } from '@models/shoulderMRT/api/soft-parts/soft-parts-api.model';
import { SoftPartsUiModel } from '@models/shoulderMRT/ui/soft-parts/soft-parts-ui.model';
import { SoftPartsFindingApiModel } from '@models/shoulderMRT/api/soft-parts/soft-parts-finding-api.model';
import { SoftPartsFindingUiModel } from '@models/shoulderMRT/ui/soft-parts/soft-parts-finding-ui.model';

import { SoftPartsFindingsMapper } from './soft-parts-findings.mapper';

import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class SoftPartsMapper implements IMapper<SoftPartsApiModel, SoftPartsUiModel> {
  constructor(private softPartsFindingsMapper: SoftPartsFindingsMapper) {
    automapper
      .createMap('SoftParts_ShoulderMRT_ApiModel', 'SoftParts_ShoulderMRT_UiModel')
      .convertToType(SoftPartsUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('SoftParts_ShoulderMRT_UiModel', 'SoftParts_ShoulderMRT_ApiModel')
      .convertToType(SoftPartsApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: SoftPartsUiModel, out: SoftPartsApiModel): SoftPartsApiModel {
    out = automapper.map('SoftParts_ShoulderMRT_UiModel', 'SoftParts_ShoulderMRT_ApiModel', source);

    out.findings.length = 0;

    for (const finding of source.findings) {
      out.findings.push(this.softPartsFindingsMapper.mapToAPI(finding, new SoftPartsFindingApiModel()));
    }
    return out;
  }

  mapToUI(source: SoftPartsApiModel, out: SoftPartsUiModel): SoftPartsUiModel {
    out = automapper.map('SoftParts_ShoulderMRT_ApiModel', 'SoftParts_ShoulderMRT_UiModel', source);

    out.findings.length = 0;

    for (const finding of source.findings) {
      out.findings.push(this.softPartsFindingsMapper.mapToUI(finding, new SoftPartsFindingUiModel()));
    }
    return out;
  }
}
