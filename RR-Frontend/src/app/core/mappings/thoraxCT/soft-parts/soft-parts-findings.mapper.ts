import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SoftPartsFindingApiModel } from '@models/thoraxCT/api/soft-parts/soft-parts-finding-api.model';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SoftPartsFindingsMapper implements IMapper<SoftPartsFindingApiModel, SoftPartsFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper.createMap('SoftPartsFinding_ThoraxCT_UiModel', 'SoftPartsFinding_ThoraxCT_ApiModel').convertToType(SoftPartsFindingApiModel);
    automapper.createMap('SoftPartsFinding_ThoraxCT_ApiModel', 'SoftPartsFinding_ThoraxCT_UiModel').convertToType(SoftPartsFindingUiModel);
  }

  mapToAPI(source: SoftPartsFindingUiModel, out: SoftPartsFindingApiModel): SoftPartsFindingApiModel {
    out = automapper.map('SoftPartsFinding_ThoraxCT_UiModel', 'SoftPartsFinding_ThoraxCT_ApiModel', source);

    out.thickenedCutisBreastLocation = this.enumMapper.mapToString(source.thickenedCutisBreastLocation);
    out.stoveBreastLocation = this.enumMapper.mapToString(source.stoveBreastLocation);
    out.spineLocation = this.enumMapper.mapToString(source.spineLocation);

    return out;
  }

  mapToUI(source: SoftPartsFindingApiModel, out: SoftPartsFindingUiModel): SoftPartsFindingUiModel {
    out = automapper.map('SoftPartsFinding_ThoraxCT_ApiModel', 'SoftPartsFinding_ThoraxCT_UiModel', source);

    this.enumMapper.mapToObject(source.thickenedCutisBreastLocation, out.thickenedCutisBreastLocation);
    this.enumMapper.mapToObject(source.stoveBreastLocation, out.stoveBreastLocation);
    this.enumMapper.mapToObject(source.spineLocation, out.spineLocation);
    return out;
  }
}
