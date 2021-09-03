import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { PelvisLegArteriesApiModel } from '@models/angiographyCT/api/pelvis-leg-arteries/pelvis-leg-arteries-api.model';
import { PelvisLegArteriesUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-ui.model';
import { PelvisLegArteriesFindingMapper } from '@mappings/angiographyCT/pelvis-leg-arteries/pelvis-leg-arteries-finding.mapper';
import { PelvisLegArteriesFindingApiModel } from '@models/angiographyCT/api/pelvis-leg-arteries/pelvis-leg-arteries-finding-api.model';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class PelvisLegArteriesMapper implements IMapper<PelvisLegArteriesApiModel, PelvisLegArteriesUiModel> {
  constructor(private pelvisLegArteriesFindingMapper: PelvisLegArteriesFindingMapper) {
    automapper
      .createMap('PelvisLegArteries_AngioCT_UiModel', 'PelvisLegArteries_AngioCT_ApiModel')
      .convertToType(PelvisLegArteriesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('PelvisLegArteries_AngioCT_ApiModel', 'PelvisLegArteries_AngioCT_UiModel')
      .convertToType(PelvisLegArteriesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: PelvisLegArteriesUiModel, out: PelvisLegArteriesApiModel): PelvisLegArteriesApiModel {
    out = automapper.map('PelvisLegArteries_AngioCT_UiModel', 'PelvisLegArteries_AngioCT_ApiModel', source);

    out.findings = source.findings.map((finding: PelvisLegArteriesFindingUiModel) => {
      return this.pelvisLegArteriesFindingMapper.mapToAPI(finding, new PelvisLegArteriesFindingApiModel());
    });

    return out;
  }

  mapToUI(source: PelvisLegArteriesApiModel, out: PelvisLegArteriesUiModel): PelvisLegArteriesUiModel {
    out = automapper.map('PelvisLegArteries_AngioCT_ApiModel', 'PelvisLegArteries_AngioCT_UiModel', source);

    out.findings = source.findings.map((finding: PelvisLegArteriesFindingApiModel) => {
      return this.pelvisLegArteriesFindingMapper.mapToUI(finding, new PelvisLegArteriesFindingUiModel());
    });

    return out;
  }
}
