import { Injectable } from '@angular/core';

import { SoftPartsApiModel } from '@models/kneeMRT/api/soft-parts/soft-parts-api.model';
import { SoftPartsUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { SoftPartsFindingsMapper } from '@mappings/kneeMRT/soft-parts/soft-parts-findings.mapper';
import { SoftPartsFindingApiModel } from '@models/kneeMRT/api/soft-parts/soft-parts-finding-api.model';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SoftPartsMapper implements IMapper<SoftPartsApiModel, SoftPartsUiModel> {
  constructor(private softPartsFindingsMapper: SoftPartsFindingsMapper) {
    automapper.createMap('SoftParts_KneeMRT_UiModel', 'SoftParts_KneeMRT_ApiModel').convertToType(SoftPartsApiModel);
    automapper.createMap('SoftParts_KneeMRT_ApiModel', 'SoftParts_KneeMRT_UiModel').convertToType(SoftPartsUiModel);
  }

  mapToAPI(source: SoftPartsUiModel, out: SoftPartsApiModel): SoftPartsApiModel {
    out = automapper.map('SoftParts_KneeMRT_UiModel', 'SoftParts_KneeMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.softPartsFindingsMapper.mapToAPI(finding, new SoftPartsFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: SoftPartsApiModel, out: SoftPartsUiModel): SoftPartsUiModel {
    out = automapper.map('SoftParts_KneeMRT_ApiModel', 'SoftParts_KneeMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.softPartsFindingsMapper.mapToUI(finding, new SoftPartsFindingUiModel()));
    });
    return out;
  }
}
