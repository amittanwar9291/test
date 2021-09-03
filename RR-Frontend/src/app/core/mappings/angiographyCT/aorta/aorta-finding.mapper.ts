import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { AortaFindingApiModel } from '@models/angiographyCT/api/aorta/aorta-finding-api.model';
import { AortaFindingUiModel } from '@models/angiographyCT/ui/aorta/aorta-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AortaFindingMapper implements IMapper<AortaFindingApiModel, AortaFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper.createMap('Aorta_AngioCT_FindingUiModel', 'Aorta_AngioCT_FindingApiModel').convertToType(AortaFindingApiModel);
    automapper.createMap('Aorta_AngioCT_FindingApiModel', 'Aorta_AngioCT_FindingUiModel').convertToType(AortaFindingUiModel);
  }

  mapToAPI(source: AortaFindingUiModel, out: AortaFindingApiModel): AortaFindingApiModel {
    out = automapper.map('Aorta_AngioCT_FindingUiModel', 'Aorta_AngioCT_FindingApiModel', source);
    out.aortaLocations1 = this.enumMapper.mapToString(source.aortaLocations1);
    out.aortaLocations2 = this.enumMapper.mapToString(source.aortaLocations2);
    return out;
  }

  mapToUI(source: AortaFindingApiModel, out: AortaFindingUiModel): AortaFindingUiModel {
    out = automapper.map('Aorta_AngioCT_FindingApiModel', 'Aorta_AngioCT_FindingUiModel', source);
    this.enumMapper.mapToObject(source.aortaLocations1, out.aortaLocations1);
    this.enumMapper.mapToObject(source.aortaLocations2, out.aortaLocations2);
    return out;
  }
}
