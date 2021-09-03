import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { NerveCompressionApiModel } from '@models/handMRT/api/nerve-compression/nerve-compression-api.model';
import { NerveCompressionUiModel } from '@models/handMRT/ui/nerve-compression/nerve-compression-ui.model';
import { NerveCompressionFindingMapper } from '@mappings/handMRT/nerve-compression/nerve-compression-finding-mapper';
import { NerveCompressionFindingApiModel } from '@models/handMRT/api/nerve-compression/nerve-compression-finding-api.model';
import { NerveCompressionFindingUiModel } from '@models/handMRT/ui/nerve-compression/nerve-compression-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class NerveCompressionMapper implements IMapper<NerveCompressionApiModel, NerveCompressionUiModel> {
  constructor(private findingMapper: NerveCompressionFindingMapper) {
    automapper
      .createMap('NerveCompression_HandMRT_ApiModel', 'NerveCompression_HandMRT_UiModel')
      .convertToType(NerveCompressionUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
    automapper
      .createMap('NerveCompression_HandMRT_UiModel', 'NerveCompression_HandMRT_ApiModel')
      .convertToType(NerveCompressionApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: NerveCompressionUiModel, out: NerveCompressionApiModel): NerveCompressionApiModel {
    out = automapper.map('NerveCompression_HandMRT_UiModel', 'NerveCompression_HandMRT_ApiModel', source);
    out.findings.length = 0;
    source.findings.forEach((finding: NerveCompressionFindingUiModel) => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new NerveCompressionFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: NerveCompressionApiModel, out: NerveCompressionUiModel): NerveCompressionUiModel {
    out = automapper.map('NerveCompression_HandMRT_ApiModel', 'NerveCompression_HandMRT_UiModel', source);
    out.findings.length = 0;
    source.findings.forEach((finding: NerveCompressionFindingApiModel) => {
      out.findings.push(this.findingMapper.mapToUI(finding, new NerveCompressionFindingUiModel()));
    });

    return out;
  }
}
