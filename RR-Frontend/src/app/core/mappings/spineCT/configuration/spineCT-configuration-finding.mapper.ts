import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { ConfigurationFindingApiModel } from '@models/spineCT/api/configuration/configuration-finding-api.model';
import { ConfigurationFindingUiModel } from '@models/spineCT/ui/configuration/configuration-finding-ui.model';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class SpineCTConfigurationFindingMapper implements IMapper<ConfigurationFindingApiModel, ConfigurationFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper.createMap('ConfigurationFindingApiModel', 'ConfigurationFindingUiModel').convertToType(ConfigurationFindingUiModel);
    automapper.createMap('ConfigurationFindingUiModel', 'ConfigurationFindingApiModel').convertToType(ConfigurationFindingApiModel);
  }

  mapToAPI(source: ConfigurationFindingUiModel, out: ConfigurationFindingApiModel): ConfigurationFindingApiModel {
    out = automapper.map('ConfigurationFindingUiModel', 'ConfigurationFindingApiModel', source);

    out.cervicalSpineLocation = this.enumMapper.mapToString(source.cervicalSpineLocation);
    out.thoracicSpineLocation = this.enumMapper.mapToString(source.thoracicSpineLocation);
    out.lumbarSpineLocation = this.enumMapper.mapToString(source.lumbarSpineLocation);

    out.spondylolisthesisLocation = this.enumMapper.mapToString(source.spondylolisthesisLocation);

    return out;
  }

  mapToUI(source: ConfigurationFindingApiModel, out: ConfigurationFindingUiModel): ConfigurationFindingUiModel {
    out = automapper.map('ConfigurationFindingApiModel', 'ConfigurationFindingUiModel', source);

    this.enumMapper.mapToObject(source.cervicalSpineLocation, out.cervicalSpineLocation);
    this.enumMapper.mapToObject(source.thoracicSpineLocation, out.thoracicSpineLocation);
    this.enumMapper.mapToObject(source.lumbarSpineLocation, out.lumbarSpineLocation);

    this.enumMapper.mapToObject(source.spondylolisthesisLocation, out.spondylolisthesisLocation);

    return out;
  }
}
