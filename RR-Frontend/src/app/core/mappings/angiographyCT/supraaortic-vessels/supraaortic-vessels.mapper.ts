import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';

import { SupraaorticVesselsApiModel } from '@models/angiographyCT/api/supraaortic-vessels/supraaortic-vessels-api.model';
import { SupraaorticVesselsUiModel } from '@models/angiographyCT/ui/supraaortic-vessels/supraaortic-vessels-ui.model';
import { SupraaorticVesselsFindingApiModel } from '@models/angiographyCT/api/supraaortic-vessels/supraaortic-vessels-finding-api.model';
import { SupraaorticVesselsFindingUiModel } from '@models/angiographyCT/ui/supraaortic-vessels/supraaortic-vessels-finding-ui.model';
import { SupraaorticVesselsFingingMapper } from '@mappings/angiographyCT/supraaortic-vessels/supraaortic-vessels-finging.mapper';

@Injectable({
  providedIn: 'root'
})
export class SupraaorticVesselsMapper implements IMapper<SupraaorticVesselsApiModel, SupraaorticVesselsUiModel> {
  constructor(private supraaorticVesselsFingingMapper: SupraaorticVesselsFingingMapper) {
    automapper
      .createMap('SupraaorticVessels_AngioCT_ApiModel', 'SupraaorticVessels_AngioCT_UiModel')
      .convertToType(SupraaorticVesselsApiModel);
    automapper
      .createMap('SupraaorticVessels_AngioCT_UiModel', 'SupraaorticVessels_AngioCT_ApiModel')
      .convertToType(SupraaorticVesselsUiModel);
  }

  mapToAPI(source: SupraaorticVesselsUiModel, out: SupraaorticVesselsApiModel): SupraaorticVesselsApiModel {
    out = automapper.map('SupraaorticVessels_AngioCT_UiModel', 'SupraaorticVessels_AngioCT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.supraaorticVesselsFingingMapper.mapToAPI(finding, new SupraaorticVesselsFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: SupraaorticVesselsApiModel, out: SupraaorticVesselsUiModel): SupraaorticVesselsUiModel {
    out = automapper.map('SupraaorticVessels_AngioCT_ApiModel', 'SupraaorticVessels_AngioCT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.supraaorticVesselsFingingMapper.mapToUI(finding, new SupraaorticVesselsFindingUiModel()));
    });
    return out;
  }
}
