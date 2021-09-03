import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { ConfigurationFindingsMapper } from '@mappings/spineMRT/configuration/configuration-findings.mapper';

import { ConfigurationApiModel } from '@models/spineMRT/api/configuration/configuration-api.model';
import { ConfigurationUiModel } from '@models/spineMRT/ui/configuration/configuration-ui.model';
import { ConfigurationFindingApiModel } from '@models/spineMRT/api/configuration/configuration-finding-api.model';
import { ConfigurationFindingUiModel } from '@models/spineMRT/ui/configuration/configuration-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationMapper implements IMapper<ConfigurationApiModel, ConfigurationUiModel> {
  constructor(private configurationFindingsMapper: ConfigurationFindingsMapper) {
    automapper.createMap('Configuration_SpineMRT_UiModel', 'Configuration_SpineMRT_ApiModel').convertToType(ConfigurationApiModel);
    automapper.createMap('Configuration_SpineMRT_ApiModel', 'Configuration_SpineMRT_UiModel').convertToType(ConfigurationUiModel);
  }

  mapToAPI(source: ConfigurationUiModel, out: ConfigurationApiModel): ConfigurationApiModel {
    out.areFindings = source.areFindings;
    out.id = source.id;
    out.reportId = source.reportId;
    out.reportTypeName = source.reportTypeName;

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.configurationFindingsMapper.mapToAPI(finding, new ConfigurationFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: ConfigurationApiModel, out: ConfigurationUiModel): ConfigurationUiModel {
    out.areFindings = source.areFindings;
    out.id = source.id;
    out.reportId = source.reportId;
    out.reportTypeName = source.reportTypeName;

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.configurationFindingsMapper.mapToUI(finding, new ConfigurationFindingUiModel()));
    });
    return out;
  }
}
