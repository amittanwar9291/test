import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { LungInterstitiumApiModel } from '@models/thoraxCT/api/lung-interstitium/lung-interstitium-api.model';
import { LungInterstitiumFindingApiModel } from '@models/thoraxCT/api/lung-interstitium/lung-interstitium-finding-api.model';

import { LungInterstitiumUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-ui.model';
import { LungInterstitiumFindingUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-finding-ui.model';

import { LungInterstitiumFindingsMapper } from './lung-interstitium-findings.mapper';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class LungInterstitiumMapper implements IMapper<LungInterstitiumApiModel, LungInterstitiumUiModel> {
  constructor(private enumMapper: EnumMapper, private lungInterstitiumFindingMapper: LungInterstitiumFindingsMapper) {
    automapper
      .createMap('LungInterstitium_ThoraxCT_UiModel', 'LungInterstitium_ThoraxCT_ApiModel')
      .convertToType(LungInterstitiumApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('LungInterstitium_ThoraxCT_ApiModel', 'LungInterstitium_ThoraxCT_UiModel')
      .convertToType(LungInterstitiumUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LungInterstitiumUiModel, out: LungInterstitiumApiModel): LungInterstitiumApiModel {
    out = automapper.map('LungInterstitium_ThoraxCT_UiModel', 'LungInterstitium_ThoraxCT_ApiModel', source);

    out.lungsFlapsLocation = this.enumMapper.mapToString(source.lungsFlapsLocation);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.lungInterstitiumFindingMapper.mapToAPI(finding, new LungInterstitiumFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: LungInterstitiumApiModel, out: LungInterstitiumUiModel): LungInterstitiumUiModel {
    out = automapper.map('LungInterstitium_ThoraxCT_ApiModel', 'LungInterstitium_ThoraxCT_UiModel', source);

    this.enumMapper.mapToObject(source.lungsFlapsLocation, out.lungsFlapsLocation);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.lungInterstitiumFindingMapper.mapToUI(finding, new LungInterstitiumFindingUiModel()));
    });

    return out;
  }
}
