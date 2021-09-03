import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { TendinopathyApiModel } from '@models/handMRT/api/tendinopathy/tendinopathy-api.model';
import { TendinopathyUiModel } from '@models/handMRT/ui/tendinopathy/tendinopathy-ui.model';
import { TendinopathyFindingMapper } from '@mappings/handMRT/tendinopathy/tendinopathy-finding-mapper';
import { TendinopathyFindingApiModel } from '@models/handMRT/api/tendinopathy/tendinopathy-finding-api.model';
import { TendinopathyFindingUiModel } from '@models/handMRT/ui/tendinopathy/tendinopathy-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class TendinopathyMapper implements IMapper<TendinopathyApiModel, TendinopathyUiModel> {
  constructor(private findingMapper: TendinopathyFindingMapper) {
    automapper
      .createMap('Tendinopathy_HandMRT_ApiModel', 'Tendinopathy_HandMRT_UiModel')
      .convertToType(TendinopathyUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
    automapper
      .createMap('Tendinopathy_HandMRT_UiModel', 'Tendinopathy_HandMRT_ApiModel')
      .convertToType(TendinopathyApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: TendinopathyUiModel, out: TendinopathyApiModel): TendinopathyApiModel {
    out = automapper.map('Tendinopathy_HandMRT_UiModel', 'Tendinopathy_HandMRT_ApiModel', source);
    out.findings.length = 0;
    source.findings.forEach((finding: TendinopathyFindingUiModel) => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new TendinopathyFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: TendinopathyApiModel, out: TendinopathyUiModel): TendinopathyUiModel {
    out = automapper.map('Tendinopathy_HandMRT_ApiModel', 'Tendinopathy_HandMRT_UiModel', source);
    out.findings.length = 0;
    source.findings.forEach((finding: TendinopathyFindingApiModel) => {
      out.findings.push(this.findingMapper.mapToUI(finding, new TendinopathyFindingUiModel()));
    });

    return out;
  }
}
