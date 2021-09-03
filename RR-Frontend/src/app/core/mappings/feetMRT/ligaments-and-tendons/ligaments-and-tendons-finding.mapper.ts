import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { LigamentsAndTendonsFindingApiModel } from '@models/feetMRT/api/ligaments-and-tendons/ligaments-and-tendons-finding-api.model';
import { LigamentsAndTendonsFindingUiModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-finding-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class LigamentsAndTendonsFindingMapper implements IMapper<LigamentsAndTendonsFindingApiModel, LigamentsAndTendonsFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('LigamentsAndTendonsFindingApiModel', 'LigamentsAndTendonsFindingUiModel')
      .convertToType(LigamentsAndTendonsFindingUiModel);
    automapper
      .createMap('LigamentsAndTendonsFindingUiModel', 'LigamentsAndTendonsFindingApiModel')
      .convertToType(LigamentsAndTendonsFindingApiModel);
  }

  mapToAPI(source: LigamentsAndTendonsFindingUiModel, out: LigamentsAndTendonsFindingApiModel): LigamentsAndTendonsFindingApiModel {
    out = automapper.map('LigamentsAndTendonsFindingUiModel', 'LigamentsAndTendonsFindingApiModel', source);

    out.extraarticularLocalizationType = this.enumMapper.mapToString(source.extraarticularLocalizationType);

    return out;
  }

  mapToUI(source: LigamentsAndTendonsFindingApiModel, out: LigamentsAndTendonsFindingUiModel): LigamentsAndTendonsFindingUiModel {
    out = automapper.map('LigamentsAndTendonsFindingApiModel', 'LigamentsAndTendonsFindingUiModel', source);

    this.enumMapper.mapToObject(source.extraarticularLocalizationType, out.extraarticularLocalizationType);

    return out;
  }
}
