import { IMapper } from '@interfaces/mapper.interface';
import { LymphaticSystemApiModel } from '@models/abdomenMRT/api/lymphatic-system/lymphatic-system-api.model';
import { LymphaticSystemUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-ui.model';
import { Injectable } from '@angular/core';
import { LymphaticSystemFindingMapper } from '@mappings/abdomenMRT/lymphatic-system/lymphatic-system-finding.mapper';
import { LymphaticSystemFindingApiModel } from '@models/abdomenMRT/api/lymphatic-system/lymphatic-system-finding-api.model';
import { LymphaticSystemFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LymphaticSystemMapper implements IMapper<LymphaticSystemApiModel, LymphaticSystemUiModel> {
  constructor(private lymphaticSystemFindingMapper: LymphaticSystemFindingMapper) {
    automapper
      .createMap('LymphaticSystem_AbdomenMRT_UiModel', 'LymphaticSystem_AbdomenMRT_ApiModel')
      .convertToType(LymphaticSystemApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('LymphaticSystem_AbdomenMRT_ApiModel', 'LymphaticSystem_AbdomenMRT_UiModel')
      .convertToType(LymphaticSystemUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LymphaticSystemUiModel, out: LymphaticSystemApiModel): LymphaticSystemApiModel {
    out = automapper.map('LymphaticSystem_AbdomenMRT_UiModel', 'LymphaticSystem_AbdomenMRT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.lymphaticSystemFindingMapper.mapToAPI(finding, new LymphaticSystemFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: LymphaticSystemApiModel, out: LymphaticSystemUiModel): LymphaticSystemUiModel {
    out = automapper.map('LymphaticSystem_AbdomenMRT_ApiModel', 'LymphaticSystem_AbdomenMRT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source?.findings?.forEach(finding => {
      out.findings.push(this.lymphaticSystemFindingMapper.mapToUI(finding, new LymphaticSystemFindingUiModel()));
    });
    return out;
  }
}
