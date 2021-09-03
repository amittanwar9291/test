import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';

import { SoftPartsApiModel } from '@models/thoraxCT/api/soft-parts/soft-parts-api.model';
import { SoftPartsUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-ui.model';
import { SoftPartsFindingsMapper } from '@mappings/thoraxCT/soft-parts/soft-parts-findings.mapper';
import { SoftPartsFindingApiModel } from '@models/thoraxCT/api/soft-parts/soft-parts-finding-api.model';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SoftPartsMapper implements IMapper<SoftPartsApiModel, SoftPartsUiModel> {
  constructor(private softPartsFindingsMapper: SoftPartsFindingsMapper) {
    automapper
      .createMap('SoftParts_ThoraxCT_UiModel', 'SoftParts_ThoraxCT_ApiModel')
      .convertToType(SoftPartsApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('SoftParts_ThoraxCT_ApiModel', 'SoftParts_ThoraxCT_UiModel')
      .convertToType(SoftPartsUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: SoftPartsUiModel, out: SoftPartsApiModel): SoftPartsApiModel {
    out = automapper.map('SoftParts_ThoraxCT_UiModel', 'SoftParts_ThoraxCT_ApiModel', source);

    source.findings.forEach(finding => {
      out.findings.push(this.softPartsFindingsMapper.mapToAPI(finding, new SoftPartsFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: SoftPartsApiModel, out: SoftPartsUiModel): SoftPartsUiModel {
    out = automapper.map('SoftParts_ThoraxCT_ApiModel', 'SoftParts_ThoraxCT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.softPartsFindingsMapper.mapToUI(finding, new SoftPartsFindingUiModel()));
    });
    return out;
  }
}
