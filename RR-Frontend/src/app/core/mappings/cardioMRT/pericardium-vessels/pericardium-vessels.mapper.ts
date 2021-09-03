import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { PericardiumVesselsUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-ui.model';
import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';
import { PericardiumVesselsApiModel } from '@models/cardioMRT/api/pericardium-vessels/pericardium-vessels-api.model';
import { PericardiumVesselsFindingApiModel } from '@models/cardioMRT/api/pericardium-vessels/pericardium-vessels-finding-api.model';

import { PericardiumVesselsFindingMapper } from './pericardium-vessels-findings.mapper';

@Injectable({
  providedIn: 'root'
})
export class PericardiumVesselsMapper implements IMapper<PericardiumVesselsApiModel, PericardiumVesselsUiModel> {
  constructor(private pericardiumVesselsFindingMapper: PericardiumVesselsFindingMapper) {
    automapper
      .createMap('PericardiumVessels_CardioMRT_ApiModel', 'PericardiumVessels_CardioMRT_UiModel')
      .convertToType(PericardiumVesselsUiModel);
    automapper
      .createMap('PericardiumVessels_CardioMRT_UiModel', 'PericardiumVessels_CardioMRT_ApiModel')
      .convertToType(PericardiumVesselsApiModel);
  }

  mapToAPI(source: PericardiumVesselsUiModel, out: PericardiumVesselsApiModel): PericardiumVesselsApiModel {
    out.areFindings = source.areFindings;
    out.id = source.id;
    out.reportId = source.reportId;
    out.reportTypeName = source.reportTypeName;

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.pericardiumVesselsFindingMapper.mapToAPI(finding, new PericardiumVesselsFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: PericardiumVesselsApiModel, out: PericardiumVesselsUiModel): PericardiumVesselsUiModel {
    out.areFindings = source.areFindings;
    out.id = source.id;
    out.reportId = source.reportId;
    out.reportTypeName = source.reportTypeName;

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.pericardiumVesselsFindingMapper.mapToUI(finding, new PericardiumVesselsFindingUiModel()));
    });
    return out;
  }
}
