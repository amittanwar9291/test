import { Injectable } from '@angular/core';
import { DiscFindingApiModel } from '@models/spineCT/api/disc/disc-finding-api.model';
import { DiscFindingUiModel } from '@models/spineCT/ui/disc/disc-finding-ui.model';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { IMapper } from '@interfaces/mapper.interface';

@Injectable({
  providedIn: 'root'
})
export class SpineCTDiscFindingMapper implements IMapper<DiscFindingApiModel, DiscFindingUiModel> {
  constructor(private sliderMapper: SliderMapper, private enumMapper: EnumMapper) {
    automapper.createMap('DiscFinding_SpineCT_ApiModel', 'DiscFinding_SpineCT_UiModel').convertToType(DiscFindingUiModel);
    automapper.createMap('DiscFinding_SpineCT_UiModel', 'DiscFinding_SpineCT_ApiModel').convertToType(DiscFindingApiModel);
  }

  mapToAPI(source: DiscFindingUiModel, out: DiscFindingApiModel): DiscFindingApiModel {
    out = automapper.map('DiscFinding_SpineCT_UiModel', 'DiscFinding_SpineCT_ApiModel', source);

    out.spineLocation = this.enumMapper.mapToString(source.spineLocation);
    out.discLocation = this.enumMapper.mapToString(source.discLocation);
    out.spineAxialLocation = this.enumMapper.mapToString(source.spineAxialLocation);

    return out;
  }
  mapToUI(source: DiscFindingApiModel, out: DiscFindingUiModel): DiscFindingUiModel {
    out = automapper.map('DiscFinding_SpineCT_ApiModel', 'DiscFinding_SpineCT_UiModel', source);

    this.enumMapper.mapToObject(source.spineLocation, out.spineLocation);
    this.enumMapper.mapToObject(source.discLocation, out.discLocation);
    this.enumMapper.mapToObject(source.spineAxialLocation, out.spineAxialLocation);

    return out;
  }
}
