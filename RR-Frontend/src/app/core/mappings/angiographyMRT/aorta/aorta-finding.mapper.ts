import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { AortaFindingApiModel } from '@models/angiographyMRT/api/aorta/aorta-finding-api.model';
import { AortaFindingUiModel } from '@models/angiographyMRT/ui/aorta/aorta-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AortaFindingMapper implements IMapper<AortaFindingApiModel, AortaFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper.createMap('Aorta_AngioMRT_FindingUiModel', 'Aorta_AngioMRT_FindingApiModel').convertToType(AortaFindingApiModel);
    automapper.createMap('Aorta_AngioMRT_FindingApiModel', 'Aorta_AngioMRT_FindingUiModel').convertToType(AortaFindingUiModel);
  }

  mapToAPI(source: AortaFindingUiModel, out: AortaFindingApiModel): AortaFindingApiModel {
    out = automapper.map('Aorta_AngioMRT_FindingUiModel', 'Aorta_AngioMRT_FindingApiModel', source);
    out.aortaLocation = this.enumMapper.mapToString(source.aortaLocation);
    out.aortaLocationReentry = this.enumMapper.mapToString(source.aortaLocationReentry);
    return out;
  }

  mapToUI(source: AortaFindingApiModel, out: AortaFindingUiModel): AortaFindingUiModel {
    out = automapper.map('Aorta_AngioMRT_FindingApiModel', 'Aorta_AngioMRT_FindingUiModel', source);
    this.enumMapper.mapToObject(source.aortaLocation, out.aortaLocation);
    this.enumMapper.mapToObject(source.aortaLocationReentry, out.aortaLocationReentry);
    return out;
  }
}
