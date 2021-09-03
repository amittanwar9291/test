import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { SpineCTMyelonFindingMapper } from './spineCT-myelon-finding.mapper';

import { MyelonApiModel, MyelonUiModel, MyelonFindingUiModel, MyelonFindingApiModel } from '@models/spineCT';

@Injectable({
  providedIn: 'root'
})
export class SpineCTMyelonMapper implements IMapper<MyelonApiModel, MyelonUiModel> {
  constructor(private findingMapper: SpineCTMyelonFindingMapper) {
    automapper
      .createMap('MyelonApiModel', 'MyelonUiModel')
      .convertToType(MyelonUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('MyelonUiModel', 'MyelonApiModel')
      .convertToType(MyelonApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: MyelonUiModel, out: MyelonApiModel): MyelonApiModel {
    out = automapper.map('MyelonUiModel', 'MyelonApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach((value, index) => {
      out.findings[index] = this.findingMapper.mapToAPI(value, new MyelonFindingApiModel());
    });
    return out;
  }

  mapToUI(source: MyelonApiModel, out: MyelonUiModel): MyelonUiModel {
    out = automapper.map('MyelonApiModel', 'MyelonUiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach((value, index) => {
      out.findings[index] = this.findingMapper.mapToUI(value, new MyelonFindingUiModel());
    });
    return out;
  }
}
