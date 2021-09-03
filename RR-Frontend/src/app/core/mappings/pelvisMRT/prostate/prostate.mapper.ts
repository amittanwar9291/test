import { ProstateUiModel } from '@models/pelvisMRT/ui/prostate/prostate-ui.model';
import { ProstateApiModel } from '@models/pelvisMRT/api/prostate/prostate-api.model';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';

import { ProstateFindingUiModel } from '@models/pelvisMRT/ui/prostate/prostate-finding-ui.model';
import { ProstateFindingApiModel } from '@models/pelvisMRT/api/prostate/prostate-finding-api.model';
import { ProstateFindingMapper } from '@mappings/pelvisMRT/prostate/prostate-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class ProstateMapper implements IMapper<ProstateApiModel, ProstateUiModel> {
  constructor(private findingMapper: ProstateFindingMapper, private enumMapper: EnumMapper) {
    automapper.createMap('Prostate_PelvisMRT_UiModel', 'Prostate_PelvisMRT_ApiModel').convertToType(ProstateApiModel);
    automapper.createMap('Prostate_PelvisMRT_ApiModel', 'Prostate_PelvisMRT_UiModel').convertToType(ProstateUiModel);
  }

  mapToAPI(source: ProstateUiModel, out: ProstateApiModel): ProstateApiModel {
    out = automapper.map('Prostate_PelvisMRT_UiModel', 'Prostate_PelvisMRT_ApiModel', source);

    out.psaVolume = Number(source.psaVolume?.replace(',', '.'));
    out.volumeInCm3 = Number(source.volumeInCm3?.replace(',', '.'));

    out.findings.length = 0;
    source.findings.forEach((finding: ProstateFindingUiModel) => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new ProstateFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: ProstateApiModel, out: ProstateUiModel): ProstateUiModel {
    out = automapper.map('Prostate_PelvisMRT_ApiModel', 'Prostate_PelvisMRT_UiModel', source);

    out.findings.length = 0;
    source.findings.forEach((finding: ProstateFindingApiModel) => {
      out.findings.push(this.findingMapper.mapToUI(finding, new ProstateFindingUiModel()));
    });

    return out;
  }
}
