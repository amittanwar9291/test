import { IMapper } from '@interfaces/mapper.interface';
import { AdrenalGlandsApiModel } from '@models/abdomenMRT/api/adrenal-glands/adrenal-glands-api.model';
import { AdrenalGlandsUiModel } from '@models/abdomenMRT/ui/adrenal-glands/adrenal-glands-ui.model';
import { Injectable } from '@angular/core';
import { AdrenalGlandsFindingMapper } from '@mappings/abdomenMRT/adrenal-glands/adrenal-glands-finding.mapper';
import { AdrenalGlandsFindingApiModel } from '@models/abdomenMRT/api/adrenal-glands/adrenal-glands-finding-api.model';
import { AdrenalGlandsFindingUiModel } from '@models/abdomenMRT/ui/adrenal-glands/adrenal-glands-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AdrenalGlandsMapper implements IMapper<AdrenalGlandsApiModel, AdrenalGlandsUiModel> {
  constructor(public adrenalGlandsFindingMapper: AdrenalGlandsFindingMapper) {
    automapper
      .createMap('AdrenalGlands_AbdomenMRT_UiModel', 'AdrenalGlands_AbdomenMRT_ApiModel')
      .convertToType(AdrenalGlandsApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('AdrenalGlands_AbdomenMRT_ApiModel', 'AdrenalGlands_AbdomenMRT_UiModel')
      .convertToType(AdrenalGlandsUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AdrenalGlandsUiModel, out: AdrenalGlandsApiModel): AdrenalGlandsApiModel {
    out = automapper.map('AdrenalGlands_AbdomenMRT_UiModel', 'AdrenalGlands_AbdomenMRT_ApiModel', source);

    out.findings = source.findings.map((finding: AdrenalGlandsFindingUiModel) => {
      return this.adrenalGlandsFindingMapper.mapToAPI(finding, new AdrenalGlandsFindingApiModel());
    });

    return out;
  }

  mapToUI(source: AdrenalGlandsApiModel, out: AdrenalGlandsUiModel): AdrenalGlandsUiModel {
    out = automapper.map('AdrenalGlands_AbdomenMRT_ApiModel', 'AdrenalGlands_AbdomenMRT_UiModel', source);

    out.findings = source.findings.map((finding: AdrenalGlandsFindingApiModel) => {
      return this.adrenalGlandsFindingMapper.mapToUI(finding, new AdrenalGlandsFindingUiModel());
    });

    return out;
  }
}
