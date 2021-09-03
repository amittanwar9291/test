import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SoftTissueFindingApiModel } from '@models/angiographyCT/api/soft-tissue/soft-tissue-finding-api.model';
import { SoftTissueFindingUiModel } from '@models/angiographyCT/ui/soft-tissue/soft-tissue-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueFindingMapper implements IMapper<SoftTissueFindingApiModel, SoftTissueFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('SoftTissueFinding_AngioCT_UiModel', 'SoftTissueFinding_AngioCT_ApiModel')
      .convertToType(SoftTissueFindingApiModel);
    automapper.createMap('SoftTissueFinding_AngioCT_ApiModel', 'SoftTissueFinding_AngioCT_UiModel').convertToType(SoftTissueFindingUiModel);
  }

  mapToAPI(source: SoftTissueFindingUiModel, out: SoftTissueFindingApiModel): SoftTissueFindingApiModel {
    out = automapper.map('SoftTissueFinding_AngioCT_UiModel', 'SoftTissueFinding_AngioCT_ApiModel', source);
    out.ribLocations = this.enumMapper.mapToString(source.ribLocations);
    out.spineLocations = this.enumMapper.mapToString(source.spineLocations);
    return out;
  }

  mapToUI(source: SoftTissueFindingApiModel, out: SoftTissueFindingUiModel): SoftTissueFindingUiModel {
    out = automapper.map('SoftTissueFinding_AngioCT_ApiModel', 'SoftTissueFinding_AngioCT_UiModel', source);
    this.enumMapper.mapToObject(source.ribLocations, out.ribLocations);
    this.enumMapper.mapToObject(source.spineLocations, out.spineLocations);
    return out;
  }
}
