import { IMapper } from '@interfaces/mapper.interface';
import { TechnologyApiModel } from '@models/mammaMX/api/technology/technology-api.model';
import { TechnologyUiModel } from '@models/mammaMX/ui/technology/technology-ui.model';
import { TechnologyFindingUiModel } from '@models/mammaMX/ui/technology/technology-finding-ui.model';
import { TechnologyFindingApiModel } from '@models/mammaMX/api/technology/technology-finding-api.model';
import { TechnologyFindingMapper } from '@mappings/mammaMX/technology/technology-finding.mapper';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnologyMapper implements IMapper<TechnologyApiModel, TechnologyUiModel> {
  constructor(private technologyFindingMapper: TechnologyFindingMapper, private enumMapper: EnumMapper) {
    automapper
      .createMap('Technology_MammaMX_UiModel', 'Technology_MammaMX_ApiModel')
      .convertToType(TechnologyApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Technology_MammaMX_ApiModel', 'Technology_MammaMX_UiModel')
      .convertToType(TechnologyUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: TechnologyUiModel, out: TechnologyApiModel): TechnologyApiModel {
    out = automapper.map('Technology_MammaMX_UiModel', 'Technology_MammaMX_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.technologyFindingMapper.mapToAPI(finding, new TechnologyFindingApiModel()));
    });

    out.breastLocationCC = this.enumMapper.mapToString(source.breastLocationCC);
    out.breastLocationMLO = this.enumMapper.mapToString(source.breastLocationMLO);
    out.breastLocationSonography = this.enumMapper.mapToString(source.breastLocationSonography);

    return out;
  }

  mapToUI(source: TechnologyApiModel, out: TechnologyUiModel): TechnologyUiModel {
    out = automapper.map('Technology_MammaMX_ApiModel', 'Technology_MammaMX_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.technologyFindingMapper.mapToAPI(finding, new TechnologyFindingUiModel()));
    });

    this.enumMapper.mapToObject(source.breastLocationCC, out.breastLocationCC);
    this.enumMapper.mapToObject(source.breastLocationMLO, out.breastLocationMLO);
    this.enumMapper.mapToObject(source.breastLocationSonography, out.breastLocationSonography);

    return out;
  }
}
