import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { MammographyFindingFindingUiModel } from '@models/mammaMX/ui/mammography-finding/mammography-finding-finding-ui.model';
import { MammographyFindingFindingApiModel } from '@models/mammaMX/api/mammography-finding/mammography-finding-finding-api.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MammographyFindingFindingMapper implements IMapper<MammographyFindingFindingApiModel, MammographyFindingFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('MammographyFindingFinding_MammaMX_UiModel', 'MammographyFindingFinding_MammaMX_ApiModel')
      .convertToType(MammographyFindingFindingApiModel);

    automapper
      .createMap('MammographyFindingFinding_MammaMX_ApiModel', 'MammographyFindingFinding_MammaMX_UiModel')
      .convertToType(MammographyFindingFindingUiModel);
  }

  mapToAPI(source: MammographyFindingFindingUiModel, out: MammographyFindingFindingApiModel): MammographyFindingFindingApiModel {
    out = automapper.map('MammographyFindingFinding_MammaMX_UiModel', 'MammographyFindingFinding_MammaMX_ApiModel', source);

    out.breastLocation = this.enumMapper.mapToString(source.breastLocation);

    return out;
  }

  mapToUI(source: MammographyFindingFindingApiModel, out: MammographyFindingFindingUiModel): MammographyFindingFindingUiModel {
    out = automapper.map('MammographyFindingFinding_MammaMX_ApiModel', 'MammographyFindingFinding_MammaMX_UiModel', source);

    this.enumMapper.mapToObject(source.breastLocation, out.breastLocation);

    return out;
  }
}
