import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { RectumFindingApiModel } from '@models/pelvisMRT/api/rectum/rectum-finding-api.model';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class RectumFindingMapper implements IMapper<RectumFindingApiModel, RectumFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper) {
    automapper.createMap('RectumFinding_PelvisMRT_ApiModel', 'RectumFinding_PelvisMRT_UiModel').convertToType(RectumFindingUiModel);
    automapper.createMap('RectumFinding_PelvisMRT_UiModel', 'RectumFinding_PelvisMRT_ApiModel').convertToType(RectumFindingApiModel);
  }

  mapToAPI(source: RectumFindingUiModel, out: RectumFindingApiModel): RectumFindingApiModel {
    out = automapper.map('RectumFinding_PelvisMRT_UiModel', 'RectumFinding_PelvisMRT_ApiModel', source);

    out.fistulaLocalizer = this.enumMapper.mapToString(source.fistulaLocalizer);

    return out;
  }

  mapToUI(source: RectumFindingApiModel, out: RectumFindingUiModel): RectumFindingUiModel {
    out = automapper.map('RectumFinding_PelvisMRT_ApiModel', 'RectumFinding_PelvisMRT_UiModel', source);

    this.enumMapper.mapToObject(source.fistulaLocalizer, out.fistulaLocalizer);

    return out;
  }
}
