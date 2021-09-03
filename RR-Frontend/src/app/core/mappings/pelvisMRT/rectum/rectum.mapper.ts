import { RectumApiModel } from '@models/pelvisMRT/api/rectum/rectum-api.model';
import { RectumUiModel } from '@models/pelvisMRT/ui/rectum/rectum-ui.model';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { RectumFindingApiModel } from '@models/pelvisMRT/api/rectum/rectum-finding-api.model';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { RectumFindingMapper } from '@mappings/pelvisMRT/rectum/rectum-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class RectumMapper implements IMapper<RectumApiModel, RectumUiModel> {
  constructor(private enumMapper: EnumMapper, private findingMapper: RectumFindingMapper) {
    automapper
      .createMap('Rectum_PelvisMRT_UiModel', 'Rectum_PelvisMRT_ApiModel')
      .convertToType(RectumApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
    automapper
      .createMap('Rectum_PelvisMRT_ApiModel', 'Rectum_PelvisMRT_UiModel')
      .convertToType(RectumUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: RectumUiModel, out: RectumApiModel): RectumApiModel {
    out = automapper.map('Rectum_PelvisMRT_UiModel', 'Rectum_PelvisMRT_ApiModel', source);

    out.findings.length = 0;
    source.findings.forEach((finding: RectumFindingUiModel) => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new RectumFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: RectumApiModel, out: RectumUiModel): RectumUiModel {
    out = automapper.map('Rectum_PelvisMRT_ApiModel', 'Rectum_PelvisMRT_UiModel', source);

    out.findings.length = 0;
    source.findings.forEach((finding: RectumFindingApiModel) => {
      out.findings.push(this.findingMapper.mapToUI(finding, new RectumFindingUiModel()));
    });

    return out;
  }
}
