import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SpineCTDiscFindingMapper } from '@mappings/spineCT/disc/spineCT-disc-finding.mapper';

import { DiscApiModel } from '@models/spineCT/api/disc/disc-api.model';
import { DiscUiModel } from '@models/spineCT/ui/disc/disc-ui.model';
import { DiscFindingApiModel } from '@models/spineCT/api/disc/disc-finding-api.model';
import { DiscFindingUiModel } from '@models/spineCT/ui/disc/disc-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class SpineCTDiscMapper implements IMapper<DiscApiModel, DiscUiModel> {
  constructor(private findingMapper: SpineCTDiscFindingMapper) {
    automapper
      .createMap('Disc_SpineCT_ApiModel', 'Disc_SpineCT_UiModel')
      .convertToType(DiscUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Disc_SpineCT_UiModel', 'Disc_SpineCT_ApiModel')
      .convertToType(DiscApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: DiscUiModel, out: DiscApiModel): DiscApiModel {
    out = automapper.map('Disc_SpineCT_UiModel', 'Disc_SpineCT_ApiModel', source);
    source.findings.forEach((value, index) => {
      out.findings[index] = this.findingMapper.mapToAPI(value, new DiscFindingApiModel());
    });
    return out;
  }

  mapToUI(source: DiscApiModel, out: DiscUiModel): DiscUiModel {
    out = automapper.map('Disc_SpineCT_ApiModel', 'Disc_SpineCT_UiModel', source);
    source.findings.forEach((value, index) => {
      out.findings[index] = this.findingMapper.mapToUI(value, new DiscFindingUiModel());
    });
    return out;
  }
}
