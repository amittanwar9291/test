import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { PelvisLegArteriesApiModel } from '@models/angiographyMRT/api/pelvis-leg-arteries/pelvis-leg-arteries-api.model';
import { PelvisLegArteriesUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-ui.model';
import { PelvisLegArteriesFindingMapper } from '@mappings/angiographyMRT/pelvis-leg-arteries/pelvis-leg-arteries-finding.mapper';
import { PelvisLegArteriesFindingApiModel } from '@models/angiographyMRT/api/pelvis-leg-arteries/pelvis-leg-arteries-finding-api.model';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class PelvisLegArteriesMapper implements IMapper<PelvisLegArteriesApiModel, PelvisLegArteriesUiModel> {
  constructor(private pelvisLegArteriesFindingMapper: PelvisLegArteriesFindingMapper) {
    automapper
      .createMap('PelvisLegArteriesUiModel', 'PelvisLegArteriesApiModel')
      .convertToType(PelvisLegArteriesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('PelvisLegArteriesApiModel', 'PelvisLegArteriesUiModel')
      .convertToType(PelvisLegArteriesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: PelvisLegArteriesUiModel, out: PelvisLegArteriesApiModel): PelvisLegArteriesApiModel {
    out = automapper.map('PelvisLegArteriesUiModel', 'PelvisLegArteriesApiModel', source);

    source.findings.forEach(finding =>
      out.findings.push(this.pelvisLegArteriesFindingMapper.mapToAPI(finding, new PelvisLegArteriesFindingApiModel()))
    );

    return out;
  }

  mapToUI(source: PelvisLegArteriesApiModel, out: PelvisLegArteriesUiModel): PelvisLegArteriesUiModel {
    out = automapper.map('PelvisLegArteriesApiModel', 'PelvisLegArteriesUiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding =>
      out.findings.push(this.pelvisLegArteriesFindingMapper.mapToUI(finding, new PelvisLegArteriesFindingUiModel()))
    );

    return out;
  }
}
