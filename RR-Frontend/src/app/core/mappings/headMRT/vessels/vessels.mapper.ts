import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { VesselsApiModel } from '@models/headMRT/api/vessels/vessels-api.model';
import { VesselsUiModel } from '@models/headMRT/ui/vessels/vessels-ui.model';
import { VesselsFindingMapper } from '@mappings/headMRT/vessels/vessels-finding.mapper';
import { VesselsFindingApiModel } from '@models/headMRT/api/vessels/vessels-finding-api.model';
import { VesselsFindingUiModel } from '@models/headMRT/ui/vessels/vessels-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class VesselsMapper implements IMapper<VesselsApiModel, VesselsUiModel> {
  constructor(private vesselsFindingMapper: VesselsFindingMapper) {
    automapper
      .createMap('Vessels_HeadMRT_UiModel', 'Vessels_HeadMRT_ApiModel')
      .convertToType(VesselsApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Vessels_HeadMRT_ApiModel', 'Vessels_HeadMRT_UiModel')
      .convertToType(VesselsUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: VesselsUiModel, out: VesselsApiModel): VesselsApiModel {
    out = automapper.map('Vessels_HeadMRT_UiModel', 'Vessels_HeadMRT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.vesselsFindingMapper.mapToAPI(finding, new VesselsFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: VesselsApiModel, out: VesselsUiModel): VesselsUiModel {
    out = automapper.map('Vessels_HeadMRT_ApiModel', 'Vessels_HeadMRT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.vesselsFindingMapper.mapToUI(finding, new VesselsFindingUiModel()));
    });
    return out;
  }
}
