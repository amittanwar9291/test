import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { LungParenchymaApiModel } from '@models/thoraxMRT/api/lung-parenchyma/lung-parenchyma-api.model';
import { LungParenchymaFindingApiModel } from '@models/thoraxMRT/api/lung-parenchyma/lung-parenchyma-finding-api.model';
import { LungParenchymaFindingUiModel } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { LungParenchymaUiModel } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-ui.model';
import { LungParenchymaFindingMapper } from './lung-parenchyma-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class LungParenchymaMapper implements IMapper<LungParenchymaApiModel, LungParenchymaUiModel> {
  constructor(private lungParenchymaFindingMapper: LungParenchymaFindingMapper) {
    automapper
      .createMap('LungParenchyma_ThoraxMRT_UiModel', 'LungParenchyma_ThoraxMRT_ApiModel')
      .convertToType(LungParenchymaApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('LungParenchyma_ThoraxMRT_ApiModel', 'LungParenchyma_ThoraxMRT_UiModel')
      .convertToType(LungParenchymaUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LungParenchymaUiModel, out: LungParenchymaApiModel): LungParenchymaApiModel {
    out = automapper.map('LungParenchyma_ThoraxMRT_UiModel', 'LungParenchyma_ThoraxMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.lungParenchymaFindingMapper.mapToAPI(finding, new LungParenchymaFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: LungParenchymaApiModel, out: LungParenchymaUiModel): LungParenchymaUiModel {
    out = automapper.map('LungParenchyma_ThoraxMRT_ApiModel', 'LungParenchyma_ThoraxMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.lungParenchymaFindingMapper.mapToUI(finding, new LungParenchymaFindingUiModel()));
    });
    return out;
  }
}
