import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { PleuraApiModel } from '@models/thoraxMRT/api/pleura/pleura-api.model';
import { PleuraFindingApiModel } from '@models/thoraxMRT/api/pleura/pleura-finding-api.model';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';
import { PleuraUiModel } from '@models/thoraxMRT/ui/pleura/pleura-ui.model';
import { PleuraFindingsMapper } from './pleura-findings.mapper';

@Injectable({
  providedIn: 'root'
})
export class PleuraMapper implements IMapper<PleuraApiModel, PleuraUiModel> {
  constructor(private pleuraFindingsMapper: PleuraFindingsMapper) {
    automapper.createMap('Pleura_ThoraxMRT_UiModel', 'Pleura_ThoraxMRT_ApiModel').convertToType(PleuraApiModel);
    automapper.createMap('Pleura_ThoraxMRT_ApiModel', 'Pleura_ThoraxMRT_UiModel').convertToType(PleuraUiModel);
  }
  mapToAPI(source: PleuraUiModel, out: PleuraApiModel): PleuraApiModel {
    out = automapper.map('Pleura_ThoraxMRT_UiModel', 'Pleura_ThoraxMRT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.pleuraFindingsMapper.mapToAPI(finding, new PleuraFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: PleuraApiModel, out: PleuraUiModel): PleuraUiModel {
    out = automapper.map('Pleura_ThoraxMRT_ApiModel', 'Pleura_ThoraxMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.pleuraFindingsMapper.mapToUI(finding, new PleuraFindingUiModel()));
    });

    return out;
  }
}
