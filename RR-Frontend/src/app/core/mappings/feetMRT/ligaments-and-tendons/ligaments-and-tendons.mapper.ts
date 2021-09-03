import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { LigamentsAndTendonsApiModel } from '@models/feetMRT/api/ligaments-and-tendons/ligaments-and-tendons-api.model';
import { LigamentsAndTendonsUiModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-ui.model';
import { LigamentsAndTendonsFindingMapper } from '@mappings/feetMRT/ligaments-and-tendons/ligaments-and-tendons-finding.mapper';
import { LigamentsAndTendonsFindingApiModel } from '@models/feetMRT/api/ligaments-and-tendons/ligaments-and-tendons-finding-api.model';
import { LigamentsAndTendonsFindingUiModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LigamentsAndTendonsMapper implements IMapper<LigamentsAndTendonsApiModel, LigamentsAndTendonsUiModel> {
  constructor(private ligamentsAndTendonsFindingMapper: LigamentsAndTendonsFindingMapper) {
    automapper
      .createMap('LigamentsAndTendonsApiModel', 'LigamentsAndTendonsUiModel')
      .convertToType(LigamentsAndTendonsUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('LigamentsAndTendonsUiModel', 'LigamentsAndTendonsApiModel')
      .convertToType(LigamentsAndTendonsApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LigamentsAndTendonsUiModel, out: LigamentsAndTendonsApiModel): LigamentsAndTendonsApiModel {
    out = automapper.map('LigamentsAndTendonsUiModel', 'LigamentsAndTendonsApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding =>
      out.findings.push(this.ligamentsAndTendonsFindingMapper.mapToAPI(finding, new LigamentsAndTendonsFindingApiModel()))
    );
    return out;
  }

  mapToUI(source: LigamentsAndTendonsApiModel, out: LigamentsAndTendonsUiModel): LigamentsAndTendonsUiModel {
    out = automapper.map('LigamentsAndTendonsApiModel', 'LigamentsAndTendonsUiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding =>
      out.findings.push(this.ligamentsAndTendonsFindingMapper.mapToUI(finding, new LigamentsAndTendonsFindingUiModel()))
    );
    return out;
  }
}
