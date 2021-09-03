import { MaleSexUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-ui.model';
import { MaleSexApiModel } from '@models/pelvisMRT/api/male-sex/male-sex-api.model';

import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { MaleSexFindingApiModel } from '@models/pelvisMRT/api/male-sex/male-sex-finding-api.model';
import { MaleSexFindingMapper } from '@mappings/pelvisMRT/male-sex/male-sex-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class MaleSexMapper implements IMapper<MaleSexApiModel, MaleSexUiModel> {
  constructor(private findingMapper: MaleSexFindingMapper) {
    automapper.createMap('MaleSex_PelvisMRT_UiModel', 'MaleSex_PelvisMRT_ApiModel').convertToType(MaleSexApiModel);
    automapper.createMap('MaleSex_PelvisMRT_ApiModel', 'MaleSex_PelvisMRT_UiModel').convertToType(MaleSexUiModel);
  }

  mapToAPI(source: MaleSexUiModel, out: MaleSexApiModel): MaleSexApiModel {
    out = automapper.map('MaleSex_PelvisMRT_UiModel', 'MaleSex_PelvisMRT_ApiModel', source);

    out.findings.length = 0;
    source.findings.forEach((finding: MaleSexFindingUiModel) => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new MaleSexFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: MaleSexApiModel, out: MaleSexUiModel): MaleSexUiModel {
    out = automapper.map('MaleSex_PelvisMRT_ApiModel', 'MaleSex_PelvisMRT_UiModel', source);

    out.findings.length = 0;
    source.findings.forEach((finding: MaleSexFindingApiModel) => {
      out.findings.push(this.findingMapper.mapToUI(finding, new MaleSexFindingUiModel()));
    });

    return out;
  }
}
