import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { UpperArteriesFindingApiModel } from '@models/angiographyCT/api/upper-arteries/upper-arteries-finding-api.model';
import { UpperArteriesFindingUiModel } from '@models/angiographyCT/ui/upper-arteries/upper-arteries-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class UpperArteriesFindingMapper implements IMapper<UpperArteriesFindingApiModel, UpperArteriesFindingUiModel> {
  constructor() {
    automapper.createMap('UpperArteriesFindingUiModel', 'UpperArteriesFindingApiModel').convertToType(UpperArteriesFindingApiModel);
    automapper.createMap('UpperArteriesFindingApiModel', 'UpperArteriesFindingUiModel').convertToType(UpperArteriesFindingUiModel);
  }

  mapToAPI(source: UpperArteriesFindingUiModel, out: UpperArteriesFindingApiModel): UpperArteriesFindingApiModel {
    out = automapper.map('UpperArteriesFindingUiModel', 'UpperArteriesFindingApiModel', source);
    return out;
  }

  mapToUI(source: UpperArteriesFindingApiModel, out: UpperArteriesFindingUiModel): UpperArteriesFindingUiModel {
    out = automapper.map('UpperArteriesFindingApiModel', 'UpperArteriesFindingUiModel', source);
    return out;
  }
}
