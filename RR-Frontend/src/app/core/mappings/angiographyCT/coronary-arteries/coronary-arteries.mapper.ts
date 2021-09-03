import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';

import { CoronaryArteriesApiModel } from '@models/angiographyCT/api/coronary-arteries/coronary-arteries-api.model';
import { CoronaryArteriesUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-ui.model';
import { CoronaryArteriesFingingMapper } from '@mappings/angiographyCT/coronary-arteries/coronary-arteries-finging.mapper';
import { CoronaryArteriesFindingUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-finding-ui.model';
import { CoronaryArteriesFindingApiModel } from '@models/angiographyCT/api/coronary-arteries/coronary-arteries-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class CoronaryArteriesMapper implements IMapper<CoronaryArteriesApiModel, CoronaryArteriesUiModel> {
  constructor(private coronaryArteriesFindingMapper: CoronaryArteriesFingingMapper) {
    automapper.createMap('CoronaryArteries_AngioCT_UiModel', 'CoronaryArteries_AngioCT_ApiModel').convertToType(CoronaryArteriesUiModel);
    automapper.createMap('CoronaryArteries_AngioCT_ApiModel', 'CoronaryArteries_AngioCT_UiModel').convertToType(CoronaryArteriesUiModel);
  }

  mapToAPI(source: CoronaryArteriesUiModel, out: CoronaryArteriesApiModel): CoronaryArteriesApiModel {
    out = automapper.map('CoronaryArteries_AngioCT_UiModel', 'CoronaryArteries_AngioCT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.coronaryArteriesFindingMapper.mapToAPI(finding, new CoronaryArteriesFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: CoronaryArteriesApiModel, out: CoronaryArteriesUiModel): CoronaryArteriesUiModel {
    out = automapper.map('CoronaryArteries_AngioCT_ApiModel', 'CoronaryArteries_AngioCT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.coronaryArteriesFindingMapper.mapToUI(finding, new CoronaryArteriesFindingUiModel()));
    });
    return out;
  }
}
