import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { CapsuleAndRibbonsApiModel } from '@models/handMRT/api/capsule-and-ribbons/capsule-and-ribbons-api.model';
import { CapsuleAndRibbonsUiModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-ui.model';
import { CapsuleAndRibbonsFindingMapper } from '@mappings/handMRT/capsule-and-ribbons/capsule-and-ribbons-finding-mapper';
import { CapsuleAndRibbonsFindingApiModel } from '@models/handMRT/api/capsule-and-ribbons/capsule-and-ribbons-finding-api.model';
import { CapsuleAndRibbonsFindingUiModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class CapsuleAndRibbonsMapper implements IMapper<CapsuleAndRibbonsApiModel, CapsuleAndRibbonsUiModel> {
  constructor(private findingMapper: CapsuleAndRibbonsFindingMapper) {
    automapper
      .createMap('CapsuleAndRibbons_HandMRT_ApiModel', 'CapsuleAndRibbons_HandMRT_UiModel')
      .convertToType(CapsuleAndRibbonsUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
    automapper
      .createMap('CapsuleAndRibbons_HandMRT_UiModel', 'CapsuleAndRibbons_HandMRT_ApiModel')
      .convertToType(CapsuleAndRibbonsApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: CapsuleAndRibbonsUiModel, out: CapsuleAndRibbonsApiModel): CapsuleAndRibbonsApiModel {
    out = automapper.map('CapsuleAndRibbons_HandMRT_UiModel', 'CapsuleAndRibbons_HandMRT_ApiModel', source);
    out.findings.length = 0;
    source.findings.forEach((finding: CapsuleAndRibbonsFindingUiModel) => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new CapsuleAndRibbonsFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: CapsuleAndRibbonsApiModel, out: CapsuleAndRibbonsUiModel): CapsuleAndRibbonsUiModel {
    out = automapper.map('CapsuleAndRibbons_HandMRT_ApiModel', 'CapsuleAndRibbons_HandMRT_UiModel', source);
    out.findings.length = 0;
    source.findings.forEach((finding: CapsuleAndRibbonsFindingApiModel) => {
      out.findings.push(this.findingMapper.mapToUI(finding, new CapsuleAndRibbonsFindingUiModel()));
    });

    return out;
  }
}
