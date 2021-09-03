import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { BrainstemCranialNervesFindingMapper } from '@mappings/headMRT/brainstem-cranial-nerves/brainstem-cranial-nerves-finding.mapper';

import { BrainstemCranialNervesApiModel } from '@models/headMRT/api/brainstem-cranial-nerves/brainstem-cranial-nerves-api.model';
import { BrainstemCranialNervesUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-ui.model';
import { BrainstemCranialNervesFindingApiModel } from '@models/headMRT/api/brainstem-cranial-nerves/brainstem-cranial-nerves-finding-api.model';
import { BrainstemCranialNervesFindingUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class BrainstemCranialNervesMapper implements IMapper<BrainstemCranialNervesApiModel, BrainstemCranialNervesUiModel> {
  constructor(private brainstemCranialNervesFindingMapper: BrainstemCranialNervesFindingMapper) {
    automapper
      .createMap('BrainstemCranialNerves_HeadMRT_UiModel', 'BrainstemCranialNerves_HeadMRT_ApiModel')
      .convertToType(BrainstemCranialNervesApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('BrainstemCranialNerves_HeadMRT_ApiModel', 'BrainstemCranialNerves_HeadMRT_UiModel')
      .convertToType(BrainstemCranialNervesUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: BrainstemCranialNervesUiModel, out: BrainstemCranialNervesApiModel): BrainstemCranialNervesApiModel {
    out = automapper.map('BrainstemCranialNerves_HeadMRT_UiModel', 'BrainstemCranialNerves_HeadMRT_ApiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.brainstemCranialNervesFindingMapper.mapToAPI(finding, new BrainstemCranialNervesFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: BrainstemCranialNervesApiModel, out: BrainstemCranialNervesUiModel): BrainstemCranialNervesUiModel {
    out = automapper.map('BrainstemCranialNerves_HeadMRT_ApiModel', 'BrainstemCranialNerves_HeadMRT_UiModel', source);
    out.findings.splice(0, out.findings.length);
    // todo '?' can be remove when backend ready
    source?.findings?.forEach(finding => {
      out.findings.push(this.brainstemCranialNervesFindingMapper.mapToUI(finding, new BrainstemCranialNervesFindingUiModel()));
    });
    return out;
  }
}
