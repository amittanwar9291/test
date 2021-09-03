import { Injectable } from '@angular/core';

import { MusculatureFindingsMapper } from '@mappings/shoulderMRT/soft-parts/musculature-findings.mapper';
import { SoftPartsFindingApiModel } from '@models/shoulderMRT/api/soft-parts/soft-parts-finding-api.model';
import { SoftPartsFindingUiModel } from '@models/shoulderMRT/ui/soft-parts/soft-parts-finding-ui.model';

import { MusculatureApiModel } from '@models/shoulderMRT/api/soft-parts/musculature-api.model';
import { MusculatureUiModel } from '@models/shoulderMRT/ui/soft-parts/musculature-ui.model';

import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class SoftPartsFindingsMapper implements IMapper<SoftPartsFindingApiModel, SoftPartsFindingUiModel> {
  constructor(private musculatureFindingsMapper: MusculatureFindingsMapper) {
    automapper
      .createMap('SoftPartsFinding_ShoulderMRT_ApiModel', 'SoftPartsFinding_ShoulderMRT_UiModel')
      .convertToType(SoftPartsFindingUiModel)
      .forSourceMember('musculatureFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('SoftPartsFinding_ShoulderMRT_UiModel', 'SoftPartsFinding_ShoulderMRT_ApiModel')
      .convertToType(SoftPartsFindingApiModel)
      .forSourceMember('musculatureFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: SoftPartsFindingUiModel, out: SoftPartsFindingApiModel): SoftPartsFindingApiModel {
    out = automapper.map('SoftPartsFinding_ShoulderMRT_UiModel', 'SoftPartsFinding_ShoulderMRT_ApiModel', source);
    out.musculatureFindings.splice(0, out.musculatureFindings.length);

    source.musculatureFindings.forEach(finding => {
      out.musculatureFindings.push(this.musculatureFindingsMapper.mapToAPI(finding, new MusculatureApiModel()));
    });

    return out;
  }

  mapToUI(source: SoftPartsFindingApiModel, out: SoftPartsFindingUiModel): SoftPartsFindingUiModel {
    out = automapper.map('SoftPartsFinding_ShoulderMRT_ApiModel', 'SoftPartsFinding_ShoulderMRT_UiModel', source);
    out.musculatureFindings.splice(0, out.musculatureFindings.length);

    source.musculatureFindings.forEach(finding => {
      out.musculatureFindings.push(this.musculatureFindingsMapper.mapToUI(finding, new MusculatureUiModel()));
    });

    return out;
  }
}
