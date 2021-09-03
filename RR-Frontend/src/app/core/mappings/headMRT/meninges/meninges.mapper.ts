import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { MeningesApiModel } from '@models/headMRT/api/meninges/meninges-api.model';
import { MeningesUiModel } from '@models/headMRT/ui/meninges/meninges-ui.model';
import { MeningesFindingApiModel } from '@models/headMRT/api/meninges/meninges-finding-api.model';
import { MeningesFindingUiModel } from '@models/headMRT/ui/meninges/meninges-finding-ui.model';
import { MeningesFindingMapper } from '@mappings/headMRT/meninges/meninges-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class MeningesMapper implements IMapper<MeningesApiModel, MeningesUiModel> {
  constructor(private meningesFindingMapper: MeningesFindingMapper) {
    automapper
      .createMap('Meninges_HeadMRT_UiModel', 'Meninges_HeadMRT_ApiModel')
      .convertToType(MeningesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Meninges_HeadMRT_ApiModel', 'Meninges_HeadMRT_UiModel')
      .convertToType(MeningesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: MeningesUiModel, out: MeningesApiModel): MeningesApiModel {
    out = automapper.map('Meninges_HeadMRT_UiModel', 'Meninges_HeadMRT_ApiModel', source);

    out.findings = source.findings.map((finding: MeningesFindingUiModel) => {
      return this.meningesFindingMapper.mapToAPI(finding, new MeningesFindingApiModel());
    });

    return out;
  }

  mapToUI(source: MeningesApiModel, out: MeningesUiModel): MeningesUiModel {
    out = automapper.map('Meninges_HeadMRT_ApiModel', 'Meninges_HeadMRT_UiModel', source);

    out.findings = source.findings.map((finding: MeningesFindingApiModel) => {
      return this.meningesFindingMapper.mapToUI(finding, new MeningesFindingUiModel());
    });

    return out;
  }
}
