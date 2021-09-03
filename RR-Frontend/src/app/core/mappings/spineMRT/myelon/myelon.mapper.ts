import { Injectable } from '@angular/core';

import { MyelonAPIModel } from '@models/spineMRT/api/myelon/myelon-api.model';
import { MyelonUIModel } from '@models/spineMRT/ui/myelon/myelon-ui.model';
import { MyelonFindingAPIModel } from '@models/spineMRT/api/myelon/myelon-finding-api.model';
import { MyelonFindingUIModel } from '@models/spineMRT/ui/myelon/myelon-finding-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { MyelonFindingMapper } from '@mappings/spineMRT/myelon/myelon-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class MyelonMapper implements IMapper<MyelonAPIModel, MyelonUIModel> {
  constructor(private myelonFindingMapper: MyelonFindingMapper) {
    automapper
      .createMap('Myelon_SpineMRT_UiModel', 'Myelon_SpineMRT_ApiModel')
      .convertToType(MyelonAPIModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
    automapper
      .createMap('Myelon_SpineMRT_ApiModel', 'Myelon_SpineMRT_UiModel')
      .convertToType(MyelonUIModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: MyelonUIModel, out: MyelonAPIModel): MyelonAPIModel {
    out = automapper.map('Myelon_SpineMRT_UiModel', 'Myelon_SpineMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.myelonFindingMapper.mapToAPI(finding, new MyelonFindingAPIModel()));
    });

    return out;
  }

  mapToUI(source: MyelonAPIModel, out: MyelonUIModel): MyelonUIModel {
    out = automapper.map('Myelon_SpineMRT_ApiModel', 'Myelon_SpineMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.myelonFindingMapper.mapToUI(finding, new MyelonFindingUIModel()));
    });

    return out;
  }
}
