import { IMapper } from '@interfaces/mapper.interface';
import { FacialSkullApiModel } from '@models/headMRT/api/facial-skull/facial-skull-api.model';
import { FacialSkullUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-ui.model';
import { Injectable } from '@angular/core';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { FacialSkullFindingApiModel } from '@models/headMRT/api/facial-skull/facial-skull-finding-api.model';
import { FacialSkullFindingMapper } from '@mappings/headMRT/facial-skull/facial-skull-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class FacialSkullMapper implements IMapper<FacialSkullApiModel, FacialSkullUiModel> {
  constructor(private facialSkullFindingMapper: FacialSkullFindingMapper) {
    automapper
      .createMap('FacialSkull_HeadMRT_UiModel', 'FacialSkull_HeadMRT_ApiModel')
      .convertToType(FacialSkullApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('FacialSkull_HeadMRT_ApiModel', 'FacialSkull_HeadMRT_UiModel')
      .convertToType(FacialSkullUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: FacialSkullUiModel, out: FacialSkullApiModel): FacialSkullApiModel {
    out = automapper.map('FacialSkull_HeadMRT_UiModel', 'FacialSkull_HeadMRT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding =>
      out.findings.push(this.facialSkullFindingMapper.mapToAPI(finding, new FacialSkullFindingApiModel()))
    );
    return out;
  }

  mapToUI(source: FacialSkullApiModel, out: FacialSkullUiModel): FacialSkullUiModel {
    out = automapper.map('FacialSkull_HeadMRT_ApiModel', 'FacialSkull_HeadMRT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => out.findings.push(this.facialSkullFindingMapper.mapToUI(finding, new FacialSkullFindingUiModel())));
    return out;
  }
}
