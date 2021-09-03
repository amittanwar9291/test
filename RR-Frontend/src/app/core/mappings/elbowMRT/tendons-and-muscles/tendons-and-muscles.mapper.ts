import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { TendonsAndMusclesApiModel } from '@models/elbowMRT/api/tendons-and-muscles/tendons-and-muscles-api.model';
import { TendonsAndMusclesUiModel } from '@models/elbowMRT/ui/tendons-and-muscles/tendons-and-muscles-ui.model';
import { TendonsAndMusclesFindingMapper } from '@mappings/elbowMRT/tendons-and-muscles/tendons-and-muscles-finding.mapper';
import { TendonsAndMusclesFindingApiModel } from '@models/elbowMRT/api/tendons-and-muscles/tendons-and-muscles-finding-api.model';
import { TendonsAndMusclesFindingUiModel } from '@models/elbowMRT/ui/tendons-and-muscles/tendons-and-muscles-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class TendonsAndMusclesMapper implements IMapper<TendonsAndMusclesApiModel, TendonsAndMusclesUiModel> {
  constructor(private tendonsAndMusclesFindingMapper: TendonsAndMusclesFindingMapper) {
    automapper
      .createMap('TendonsAndMusclesApiModel', 'TendonsAndMusclesUiModel')
      .convertToType(TendonsAndMusclesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('TendonsAndMusclesUiModel', 'TendonsAndMusclesApiModel')
      .convertToType(TendonsAndMusclesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: TendonsAndMusclesUiModel, out: TendonsAndMusclesApiModel): TendonsAndMusclesApiModel {
    out = automapper.map('TendonsAndMusclesUiModel', 'TendonsAndMusclesApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding =>
      out.findings.push(this.tendonsAndMusclesFindingMapper.mapToAPI(finding, new TendonsAndMusclesFindingApiModel()))
    );
    return out;
  }

  mapToUI(source: TendonsAndMusclesApiModel, out: TendonsAndMusclesUiModel): TendonsAndMusclesUiModel {
    out = automapper.map('TendonsAndMusclesApiModel', 'TendonsAndMusclesUiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding =>
      out.findings.push(this.tendonsAndMusclesFindingMapper.mapToUI(finding, new TendonsAndMusclesFindingUiModel()))
    );
    return out;
  }
}
