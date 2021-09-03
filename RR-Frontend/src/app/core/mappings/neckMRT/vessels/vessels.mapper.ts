import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { VesselsFindingMapper } from '@mappings/neckMRT/vessels/vessels-finding.mapper';
import { VesselsApiModel } from '@models/neckMRT/api/vessels/vessels-api.model';
import { VesselsFindingApiModel } from '@models/neckMRT/api/vessels/vessels-finding-api.model';
import { VesselsFindingUiModel } from '@models/neckMRT/ui/vessels/vessels-finding-ui.model';
import { VesselsUiModel } from '@models/neckMRT/ui/vessels/vessels-ui.model';

@Injectable({
  providedIn: 'root'
})
export class VesselsMapper implements IMapper<VesselsApiModel, VesselsUiModel> {
  constructor(private vesselsFindingMapper: VesselsFindingMapper) {
    automapper
      .createMap('Vessels_NeckMRT_UiModel', 'Vessels_NeckMRT_ApiModel')
      .convertToType(VesselsApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Vessels_NeckMRT_ApiModel', 'Vessels_NeckMRT_UiModel')
      .convertToType(VesselsUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: VesselsUiModel, out: VesselsApiModel): VesselsApiModel {
    out = automapper.map('Vessels_NeckMRT_UiModel', 'Vessels_NeckMRT_ApiModel', source);

    out.findings = source.findings.map((finding: VesselsFindingUiModel) => {
      return this.vesselsFindingMapper.mapToAPI(finding, new VesselsFindingApiModel());
    });

    return out;
  }

  mapToUI(source: VesselsApiModel, out: VesselsUiModel): VesselsUiModel {
    out = automapper.map('Vessels_NeckMRT_ApiModel', 'Vessels_NeckMRT_UiModel', source);

    out.findings = source.findings.map((finding: VesselsFindingApiModel) => {
      return this.vesselsFindingMapper.mapToUI(finding, new VesselsFindingUiModel());
    });

    return out;
  }
}
