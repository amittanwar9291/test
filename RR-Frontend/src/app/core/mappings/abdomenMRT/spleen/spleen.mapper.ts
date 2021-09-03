import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { SpleenFindingMapper } from '@mappings/abdomenMRT/spleen/spleen-finding.mapper';
import { SpleenApiModel } from '@models/abdomenMRT/api/spleen/spleen-api.model';
import { SpleenFindingApiModel } from '@models/abdomenMRT/api/spleen/spleen-finding-api.model';
import { SpleenFindingUiModel } from '@models/abdomenMRT/ui/spleen/spleen-finding-ui.model';
import { SpleenUiModel } from '@models/abdomenMRT/ui/spleen/spleen-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SpleenMapper implements IMapper<SpleenApiModel, SpleenUiModel> {
  constructor(private spleenFindingMapper: SpleenFindingMapper) {
    automapper.createMap('Spleen_AbdomenMRT_UiModel', 'Spleen_AbdomenMRT_ApiModel').convertToType(SpleenApiModel);
    automapper.createMap('Spleen_AbdomenMRT_ApiModel', 'Spleen_AbdomenMRT_UiModel').convertToType(SpleenUiModel);
  }

  mapToAPI(source: SpleenUiModel, out: SpleenApiModel): SpleenApiModel {
    out = automapper.map('Spleen_AbdomenMRT_UiModel', 'Spleen_AbdomenMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.spleenFindingMapper.mapToAPI(finding, new SpleenFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: SpleenApiModel, out: SpleenUiModel): SpleenUiModel {
    out = automapper.map('Spleen_AbdomenMRT_ApiModel', 'Spleen_AbdomenMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.spleenFindingMapper.mapToUI(finding, new SpleenFindingUiModel()));
    });
    return out;
  }
}
