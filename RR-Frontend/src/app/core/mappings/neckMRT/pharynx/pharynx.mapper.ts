import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { PharynxApiModel } from '@models/neckMRT/api/pharynx/pharynx-api.model';
import { PharynxUiModel } from '@models/neckMRT/ui/pharynx/pharynx-ui.model';
import { PharynxFindingApiModel } from '@models/neckMRT/api/pharynx/pharynx-finding-api.model';
import { PharynxFindingUiModel } from '@models/neckMRT/ui/pharynx/pharynx-finding-ui.model';
import { PharynxFindingMapper } from '@mappings/neckMRT/pharynx/pharynx-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class PharynxMapper implements IMapper<PharynxApiModel, PharynxUiModel> {
  constructor(private pharynxFindingMapper: PharynxFindingMapper) {
    automapper
      .createMap('Pharynx_NeckMRT_UiModel', 'Pharynx_NeckMRT_ApiModel')
      .convertToType(PharynxApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Pharynx_NeckMRT_ApiModel', 'Pharynx_NeckMRT_UiModel')
      .convertToType(PharynxUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: PharynxUiModel, out: PharynxApiModel): PharynxApiModel {
    out = automapper.map('Pharynx_NeckMRT_UiModel', 'Pharynx_NeckMRT_ApiModel', source);

    out.findings = source.findings.map((finding: PharynxFindingUiModel) => {
      return this.pharynxFindingMapper.mapToAPI(finding, new PharynxFindingApiModel());
    });

    return out;
  }

  mapToUI(source: PharynxApiModel, out: PharynxUiModel): PharynxUiModel {
    out = automapper.map('Pharynx_NeckMRT_ApiModel', 'Pharynx_NeckMRT_UiModel', source);

    out.findings = source.findings.map((finding: PharynxFindingApiModel) => {
      return this.pharynxFindingMapper.mapToUI(finding, new PharynxFindingUiModel());
    });

    return out;
  }
}
