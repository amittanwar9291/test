import { BladderApiModel } from '@models/pelvisMRT/api/bladder/bladder-api.model';
import { BladderUiModel } from '@models/pelvisMRT/ui/bladder/bladder-ui.model';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { BladderFindingApiModel } from '@models/pelvisMRT/api/bladder/bladder-finding-api.model';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { BladderFindingMapper } from '@mappings/pelvisMRT/bladder/bladder-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class BladderMapper implements IMapper<BladderApiModel, BladderUiModel> {
  constructor(private enumMapper: EnumMapper, private findingMapper: BladderFindingMapper) {
    automapper.createMap('Bladder_PelvisMRT_UiModel', 'Bladder_PelvisMRT_ApiModel').convertToType(BladderApiModel);
    automapper.createMap('Bladder_PelvisMRT_ApiModel', 'Bladder_PelvisMRT_UiModel').convertToType(BladderUiModel);
  }

  mapToAPI(source: BladderUiModel, out: BladderApiModel): BladderApiModel {
    out = automapper.map('Bladder_PelvisMRT_UiModel', 'Bladder_PelvisMRT_ApiModel', source);

    out.findings.length = 0;
    source.findings.forEach((finding: BladderFindingUiModel) => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new BladderFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: BladderApiModel, out: BladderUiModel): BladderUiModel {
    out = automapper.map('Bladder_PelvisMRT_ApiModel', 'Bladder_PelvisMRT_UiModel', source);

    out.findings.length = 0;
    source.findings.forEach((finding: BladderFindingApiModel) => {
      out.findings.push(this.findingMapper.mapToUI(finding, new BladderFindingUiModel()));
    });

    return out;
  }
}
