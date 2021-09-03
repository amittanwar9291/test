import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SupraaorticVesselsApiModel } from '@models/angiographyMRT/api/supraaortic-vessels/supraaortic-vessels-api.model';
import { SupraaorticVesselsUiModel } from '@models/angiographyMRT/ui/supraaortic-vessels/supraaortic-vessels-ui.model';
import { SupraaorticVesselsFingingMapper } from '@mappings/angiographyMRT/supraaortic-vessels/supraaortic-vessels-finging.mapper';
import { SupraaorticVesselsFindingApi } from '@models/angiographyMRT/api/supraaortic-vessels/supraaortic-vessels-finding-api.model';
import { SupraaorticVesselsFindingUi } from '@models/angiographyMRT/ui/supraaortic-vessels/supraaortic-vessels-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SupraaorticVesselsMapper implements IMapper<SupraaorticVesselsApiModel, SupraaorticVesselsUiModel> {
  constructor(private supraaorticVesselsFingingMapper: SupraaorticVesselsFingingMapper) {
    automapper.createMap('SupraaorticVesselsUiModel', 'SupraaorticVesselsApiModel').convertToType(SupraaorticVesselsApiModel);
    automapper.createMap('SupraaorticVesselsApiModel', 'SupraaorticVesselsUiModel').convertToType(SupraaorticVesselsUiModel);
  }

  mapToAPI(source: SupraaorticVesselsUiModel, out: SupraaorticVesselsApiModel): SupraaorticVesselsApiModel {
    out = automapper.map('SupraaorticVesselsUiModel', 'SupraaorticVesselsApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.supraaorticVesselsFingingMapper.mapToAPI(finding, new SupraaorticVesselsFindingApi()));
    });
    return out;
  }

  mapToUI(source: SupraaorticVesselsApiModel, out: SupraaorticVesselsUiModel): SupraaorticVesselsUiModel {
    out = automapper.map('SupraaorticVesselsApiModel', 'SupraaorticVesselsUiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.supraaorticVesselsFingingMapper.mapToUI(finding, new SupraaorticVesselsFindingUi()));
    });
    return out;
  }
}
