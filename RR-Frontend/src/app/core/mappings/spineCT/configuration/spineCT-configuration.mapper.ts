import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SpineCTConfigurationFindingMapper } from '@mappings/spineCT/configuration/spineCT-configuration-finding.mapper';

import { ConfigurationApiModel, ConfigurationUiModel } from '@models/spineCT';
import { ConfigurationFindingUiModel } from '@models/spineCT/ui/configuration/configuration-finding-ui.model';
import { ConfigurationFindingApiModel } from '@models/spineCT/api/configuration/configuration-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class SpineCTConfigurationMapper implements IMapper<ConfigurationApiModel, ConfigurationUiModel> {
  constructor(private findingMapper: SpineCTConfigurationFindingMapper) {
    automapper
      .createMap('ConfigurationUiModel', 'ConfigurationApiModel')
      .convertToType(ConfigurationApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('ConfigurationApiModel', 'ConfigurationUiModel')
      .convertToType(ConfigurationUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: ConfigurationUiModel, out: ConfigurationApiModel): ConfigurationApiModel {
    out = automapper.map('ConfigurationUiModel', 'ConfigurationApiModel', source);

    source.findings.forEach((value: ConfigurationFindingUiModel, index: number) => {
      out.findings[index] = this.findingMapper.mapToAPI(value, new ConfigurationFindingApiModel());
    });

    return out;
  }

  mapToUI(source: ConfigurationApiModel, out: ConfigurationUiModel): ConfigurationUiModel {
    out = automapper.map('ConfigurationApiModel', 'ConfigurationUiModel', source);

    source.findings.forEach((value: ConfigurationFindingApiModel, index: number) => {
      out.findings[index] = this.findingMapper.mapToUI(value, new ConfigurationFindingUiModel());
    });

    return out;
  }
}
