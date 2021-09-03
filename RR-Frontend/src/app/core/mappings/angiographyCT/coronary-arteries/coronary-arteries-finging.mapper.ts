import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { CoronaryArteriesFindingApiModel } from '@models/angiographyCT/api/coronary-arteries/coronary-arteries-finding-api.model';
import { CoronaryArteriesFindingUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class CoronaryArteriesFingingMapper implements IMapper<CoronaryArteriesFindingApiModel, CoronaryArteriesFindingUiModel> {
  constructor() {
    automapper
      .createMap('CoronaryArteries_AngioCT_FindingUi', 'CoronaryArteries_AngioCT_FindingApi')
      .convertToType(CoronaryArteriesFindingApiModel);
    automapper
      .createMap('CoronaryArteries_AngioCT_FindingApi', 'CoronaryArteries_AngioCT_FindingUi')
      .convertToType(CoronaryArteriesFindingUiModel);
  }

  mapToAPI(source: CoronaryArteriesFindingUiModel, out: CoronaryArteriesFindingApiModel): CoronaryArteriesFindingApiModel {
    out = automapper.map('CoronaryArteries_AngioCT_FindingUi', 'CoronaryArteries_AngioCT_FindingApi', source);
    return out;
  }

  mapToUI(source: CoronaryArteriesFindingApiModel, out: CoronaryArteriesFindingUiModel): CoronaryArteriesFindingUiModel {
    out = automapper.map('CoronaryArteries_AngioCT_FindingApi', 'CoronaryArteries_AngioCT_FindingUi', source);
    return out;
  }
}
