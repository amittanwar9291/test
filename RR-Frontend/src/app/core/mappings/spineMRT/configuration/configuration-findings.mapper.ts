import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { ConfigurationFindingApiModel } from '@models/spineMRT/api/configuration/configuration-finding-api.model';
import { ConfigurationFindingUiModel } from '@models/spineMRT/ui/configuration/configuration-finding-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationFindingsMapper implements IMapper<ConfigurationFindingApiModel, ConfigurationFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('ConfigurationFinding_SpineMRT_UiModel', 'ConfigurationFinding_SpineMRT_ApiModel')
      .convertToType(ConfigurationFindingApiModel);
    automapper
      .createMap('ConfigurationFinding_SpineMRT_ApiModel', 'ConfigurationFinding_SpineMRT_UiModel')
      .convertToType(ConfigurationFindingUiModel);
  }

  mapToAPI(source: ConfigurationFindingUiModel, out: ConfigurationFindingApiModel): ConfigurationFindingApiModel {
    out = automapper.map('ConfigurationFinding_SpineMRT_UiModel', 'ConfigurationFinding_SpineMRT_ApiModel', source);

    out.cervicalSpineLocation = this.enumMapper.mapToString(source.cervicalSpineLocation);
    out.thoracicSpineLocation = this.enumMapper.mapToString(source.thoracicSpineLocation);
    out.lumbarSpineLocation = this.enumMapper.mapToString(source.lumbarSpineLocation);

    out.spondylolisthesisLocation = this.enumMapper.mapToString(source.spondylolisthesisLocation);

    return out;
  }

  mapToUI(source: ConfigurationFindingApiModel, out: ConfigurationFindingUiModel): ConfigurationFindingUiModel {
    out = automapper.map('ConfigurationFinding_SpineMRT_ApiModel', 'ConfigurationFinding_SpineMRT_UiModel', source);

    this.enumMapper.mapToObject(source.cervicalSpineLocation, out.cervicalSpineLocation);
    this.enumMapper.mapToObject(source.thoracicSpineLocation, out.thoracicSpineLocation);
    this.enumMapper.mapToObject(source.lumbarSpineLocation, out.lumbarSpineLocation);

    this.enumMapper.mapToObject(source.spondylolisthesisLocation, out.spondylolisthesisLocation);

    return out;
  }
}
