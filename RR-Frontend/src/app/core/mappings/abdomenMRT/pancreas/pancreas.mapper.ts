import { IMapper } from '@interfaces/mapper.interface';
import { PancreasApiModel } from '@models/abdomenMRT/api/pancreas/pancreas-api.model';
import { PancreasUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-ui.model';
import { Injectable } from '@angular/core';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { PancreasFindingApiModel } from '@models/abdomenMRT/api/pancreas/pancreas-finding-api.model';
import { PancreasFindingMapper } from '@mappings/abdomenMRT/pancreas/pancreas-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class PancreasMapper implements IMapper<PancreasApiModel, PancreasUiModel> {
  constructor(private pancreasFindingMapper: PancreasFindingMapper) {
    automapper
      .createMap('Pancreas_AbdomenMRT_UiModel', 'Pancreas_AbdomenMRT_ApiModel')
      .convertToType(PancreasApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Pancreas_AbdomenMRT_ApiModel', 'Pancreas_AbdomenMRT_UiModel')
      .convertToType(PancreasUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: PancreasUiModel, out: PancreasApiModel): PancreasApiModel {
    out = automapper.map('Pancreas_AbdomenMRT_UiModel', 'Pancreas_AbdomenMRT_ApiModel', source);

    out.findings = source.findings.map((finding: PancreasFindingUiModel) => {
      return this.pancreasFindingMapper.mapToAPI(finding, new PancreasFindingApiModel());
    });

    return out;
  }

  mapToUI(source: PancreasApiModel, out: PancreasUiModel): PancreasUiModel {
    out = automapper.map('Pancreas_AbdomenMRT_ApiModel', 'Pancreas_AbdomenMRT_UiModel', source);

    out.findings = source.findings.map((finding: PancreasFindingApiModel) => {
      return this.pancreasFindingMapper.mapToUI(finding, new PancreasFindingUiModel());
    });

    return out;
  }
}
