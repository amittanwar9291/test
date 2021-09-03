import { Injectable } from '@angular/core';

import { RibbonsApiModel } from '@models/kneeMRT/api/ribbons/ribbons-api.model';
import { RibbonsUiModel } from '@models/kneeMRT/ui/ribbons/ribbons-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { RibbonsFindingsMapper } from '@mappings/kneeMRT/ribbons/ribbons-findings.mapper';
import { RibbonsFindingApiModel } from '@models/kneeMRT/api/ribbons/ribbons-finding-api.model';
import { RibbonsFindingUiModel } from '@models/kneeMRT/ui/ribbons/ribbons-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class RibbonsMapper implements IMapper<RibbonsApiModel, RibbonsUiModel> {
  constructor(private ribbonsFindingsMapper: RibbonsFindingsMapper) {
    automapper.createMap('Ribbons_KneeMRT_UiModel', 'Ribbons_KneeMRT_ApiModel').convertToType(RibbonsApiModel);
    automapper.createMap('Ribbons_KneeMRT_ApiModel', 'Ribbons_KneeMRT_UiModel').convertToType(RibbonsUiModel);
  }

  mapToAPI(source: RibbonsUiModel, out: RibbonsApiModel): RibbonsApiModel {
    out = automapper.map('Ribbons_KneeMRT_UiModel', 'Ribbons_KneeMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.ribbonsFindingsMapper.mapToAPI(finding, new RibbonsFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: RibbonsApiModel, out: RibbonsUiModel): RibbonsUiModel {
    out = automapper.map('Ribbons_KneeMRT_ApiModel', 'Ribbons_KneeMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.ribbonsFindingsMapper.mapToUI(finding, new RibbonsFindingUiModel()));
    });
    return out;
  }
}
