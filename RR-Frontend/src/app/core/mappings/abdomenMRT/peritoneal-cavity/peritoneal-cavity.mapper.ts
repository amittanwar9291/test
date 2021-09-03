import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { PeritonealCavityFindingMapper } from '@mappings/abdomenMRT/peritoneal-cavity/peritoneal-cavity-finding.mapper';
import { PeritonealCavityApiModel } from '@models/abdomenMRT/api/peritoneal-cavity/peritoneal-cavity-api.model';
import { PeritonealCavityFindingApiModel } from '@models/abdomenMRT/api/peritoneal-cavity/peritoneal-cavity-finding-api.model';
import { PeritonealCavityFindingUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-finding-ui.model';
import { PeritonealCavityUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-ui.model';

@Injectable({
  providedIn: 'root'
})
export class PeritonealCavityMapper implements IMapper<PeritonealCavityApiModel, PeritonealCavityUiModel> {
  constructor(private peritonealCavityFindingMapper: PeritonealCavityFindingMapper) {
    automapper
      .createMap('PeritonealCavity_AbdomenMRT_UiModel', 'PeritonealCavity_AbdomenMRT_ApiModel')
      .convertToType(PeritonealCavityApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('PeritonealCavity_AbdomenMRT_ApiModel', 'PeritonealCavity_AbdomenMRT_UiModel')
      .convertToType(PeritonealCavityUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: PeritonealCavityUiModel, out: PeritonealCavityApiModel): PeritonealCavityApiModel {
    out = automapper.map('PeritonealCavity_AbdomenMRT_UiModel', 'PeritonealCavity_AbdomenMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.peritonealCavityFindingMapper.mapToAPI(finding, new PeritonealCavityFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: PeritonealCavityApiModel, out: PeritonealCavityUiModel): PeritonealCavityUiModel {
    out = automapper.map('PeritonealCavity_AbdomenMRT_ApiModel', 'PeritonealCavity_AbdomenMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.peritonealCavityFindingMapper.mapToUI(finding, new PeritonealCavityFindingUiModel()));
    });
    return out;
  }
}
