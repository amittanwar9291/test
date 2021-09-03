import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { AnamnesisInterventionsMapper } from './anamnesis-intervention.mapper';

import { AnamnesisInterventionApiModel } from '@models/spineMRT/api/anamnesis/anamnesis-intervention-api.model';
import { AnamnesisInterventionUiModel } from '@models/spineMRT/ui/anamnesis/anamnesis-intervention-ui.model';
import { AnamnesisApiModel } from '@models/spineMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/spineMRT/ui/anamnesis/anamnesis-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  constructor(private interventionMapper: AnamnesisInterventionsMapper) {
    automapper
      .createMap('Anamnesis_SpineMRT_ApiModel', 'Anamnesis_SpineMRT_UiModel')
      .convertToType(AnamnesisUiModel)
      .forSourceMember('interventions', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Anamnesis_SpineMRT_UiModel', 'Anamnesis_SpineMRT_ApiModel')
      .convertToType(AnamnesisApiModel)
      .forSourceMember('interventions', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AnamnesisUiModel, out: AnamnesisApiModel): AnamnesisApiModel {
    out = automapper.map('Anamnesis_SpineMRT_UiModel', 'Anamnesis_SpineMRT_ApiModel', source);
    out.interventions.splice(0, out.interventions.length);
    source.interventions.forEach(finding =>
      out.interventions.push(this.interventionMapper.mapToAPI(finding, new AnamnesisInterventionApiModel()))
    );
    return out;
  }

  mapToUI(source: AnamnesisApiModel, out: AnamnesisUiModel): AnamnesisUiModel {
    out = automapper.map('Anamnesis_SpineMRT_ApiModel', 'Anamnesis_SpineMRT_UiModel', source);

    out.interventions.splice(0, out.interventions.length);
    source.interventions.forEach(finding => {
      out.interventions.push(this.interventionMapper.mapToUI(finding, new AnamnesisInterventionUiModel()));
    });
    return out;
  }
}
