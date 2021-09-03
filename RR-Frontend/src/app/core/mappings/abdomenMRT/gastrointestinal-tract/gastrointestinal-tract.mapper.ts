import { IMapper } from '@interfaces/mapper.interface';
import { GastrointestinalTractApiModel } from '@models/abdomenMRT/api/gastrointestinal-tract/gastrointestinal-tract-api.model';
import { GastrointestinalTractUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-ui.model';
import { Injectable } from '@angular/core';
import { GastrointestinalTractFindingMapper } from '@mappings/abdomenMRT/gastrointestinal-tract/gastrointestinal-tract-finding.mapper';
import { GastrointestinalTractFindingApiModel } from '@models/abdomenMRT/api/gastrointestinal-tract/gastrointestinal-tract-finding-api.model';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class GastrointestinalTractMapper implements IMapper<GastrointestinalTractApiModel, GastrointestinalTractUiModel> {
  constructor(private findingMapper: GastrointestinalTractFindingMapper) {
    automapper
      .createMap('GastrointestinalTract_AbdomenMRT_UiModel', 'GastrointestinalTract_AbdomenMRT_ApiModel')
      .convertToType(GastrointestinalTractApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
    automapper
      .createMap('GastrointestinalTract_AbdomenMRT_ApiModel', 'GastrointestinalTract_AbdomenMRT_UiModel')
      .convertToType(GastrointestinalTractUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: GastrointestinalTractUiModel, out: GastrointestinalTractApiModel): GastrointestinalTractApiModel {
    out = automapper.map('GastrointestinalTract_AbdomenMRT_UiModel', 'GastrointestinalTract_AbdomenMRT_ApiModel', source);
    out.findings.length = 0;
    source.findings?.forEach(finding => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new GastrointestinalTractFindingApiModel()));
    });
    return out;
  }

  mapToUI(source: GastrointestinalTractApiModel, out: GastrointestinalTractUiModel): GastrointestinalTractUiModel {
    out = automapper.map('GastrointestinalTract_AbdomenMRT_ApiModel', 'GastrointestinalTract_AbdomenMRT_UiModel', source);
    out.findings.length = 0;
    source.findings?.forEach(finding => {
      out.findings.push(this.findingMapper.mapToUI(finding, new GastrointestinalTractFindingUiModel()));
    });
    return out;
  }
}
