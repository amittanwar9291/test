import { Injectable } from '@angular/core';

import { LungParenchymaApiModel } from '@models/thoraxCT/api/lung-parenchyma/lung-parenchyma-api.model';
import { LungParenchymaUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { LungParenchymaFindingMapper } from './lung-parenchyma-finding.mapper';
import { LungParenchymaFindingApiModel } from '@models/thoraxCT/api/lung-parenchyma/lung-parenchyma-finding-api.model';
import { LungParenchymaFindingUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { IntervertebralDiscJointsFindingApiModel } from '@models/spineMRT/api/intervertebal-disc-joints/intervertebal-disc-joints-finding-api.model';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LungParenchymaMapper implements IMapper<LungParenchymaApiModel, LungParenchymaUiModel> {
  constructor(private lungParenchymaFindingMapper: LungParenchymaFindingMapper) {
    automapper
      .createMap('LungParenchyma_ThoraxCT_UiModel', 'LungParenchyma_ThoraxCT_ApiModel')
      .convertToType(LungParenchymaApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('LungParenchyma_ThoraxCT_ApiModel', 'LungParenchyma_ThoraxCT_UiModel')
      .convertToType(LungParenchymaUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LungParenchymaUiModel, out: LungParenchymaApiModel): LungParenchymaApiModel {
    out = automapper.map('LungParenchyma_ThoraxCT_UiModel', 'LungParenchyma_ThoraxCT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.lungParenchymaFindingMapper.mapToAPI(finding, new LungParenchymaFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: LungParenchymaApiModel, out: LungParenchymaUiModel): LungParenchymaUiModel {
    out = automapper.map('LungParenchyma_ThoraxCT_ApiModel', 'LungParenchyma_ThoraxCT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.lungParenchymaFindingMapper.mapToUI(finding, new LungParenchymaFindingUiModel()));
    });

    return out;
  }
}
