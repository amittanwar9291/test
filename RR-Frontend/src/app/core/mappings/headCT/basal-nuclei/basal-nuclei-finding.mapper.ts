import { BasalNucleiFindingUiModel } from '@models/headCT/ui/basal-nuclei/basal-nuclei-finding-ui.model';
import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { BasalNucleiFindingApiModel } from '@models/headCT/api/basal-nuclei/basal-nuclei-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class BasalNucleiFindingMapper implements IMapper<BasalNucleiFindingApiModel, BasalNucleiFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('Basal_Nuclei_Finding_HeadCT_UiModel', 'Basal_Nuclei_Finding_HeadCT_ApiModel')
      .convertToType(BasalNucleiFindingApiModel);
    automapper
      .createMap('Basal_Nuclei_Finding_HeadCT_ApiModel', 'Basal_Nuclei_Finding_HeadCT_UiModel')
      .convertToType(BasalNucleiFindingUiModel);
  }

  mapToAPI(source: BasalNucleiFindingUiModel, out: BasalNucleiFindingApiModel): BasalNucleiFindingApiModel {
    out = automapper.map('Basal_Nuclei_Finding_HeadCT_UiModel', 'Basal_Nuclei_Finding_HeadCT_ApiModel', source);
    out.basalGangliaLocations = this.enumMapper.mapToString(source.basalGangliaLocations);
    return out;
  }

  mapToUI(source: BasalNucleiFindingApiModel, out: BasalNucleiFindingUiModel): BasalNucleiFindingUiModel {
    out = automapper.map('Basal_Nuclei_Finding_HeadCT_ApiModel', 'Basal_Nuclei_Finding_HeadCT_UiModel', source);
    this.enumMapper.mapToObject(source.basalGangliaLocations, out.basalGangliaLocations);
    return out;
  }
}
