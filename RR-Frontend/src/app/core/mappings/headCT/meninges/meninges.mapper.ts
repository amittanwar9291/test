import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MeningesApiModel } from '@models/headCT/api/meninges/meninges-api.model';
import { MeningesUiModel } from '@models/headCT/ui/meninges/meninges-ui-model';
import { MeningesFindingMapper } from '@mappings/headCT/meninges/meninges-finding.mapper';
import { MeningesFindingApiModel } from '@models/headCT/api/meninges/meninges-finding-api.model';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class MeningesMapper implements IMapper<MeningesApiModel, MeningesUiModel> {
  constructor(private meningesFindingMapper: MeningesFindingMapper) {
    automapper
      .createMap('Meninges_HeadCT_UiModel', 'Meninges_HeadCT_ApiModel')
      .convertToType(MeningesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Meninges_HeadCT_ApiModel', 'Meninges_HeadCT_UiModel')
      .convertToType(MeningesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: MeningesUiModel, out: MeningesApiModel): MeningesApiModel {
    out = automapper.map('Meninges_HeadCT_UiModel', 'Meninges_HeadCT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.meningesFindingMapper.mapToAPI(finding, new MeningesFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: MeningesApiModel, out: MeningesUiModel): MeningesUiModel {
    out = automapper.map('Meninges_HeadCT_ApiModel', 'Meninges_HeadCT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings?.forEach(finding => {
      out.findings.push(this.meningesFindingMapper.mapToUI(finding, new MeningesFindingUiModel()));
    });
    return out;
  }
}
