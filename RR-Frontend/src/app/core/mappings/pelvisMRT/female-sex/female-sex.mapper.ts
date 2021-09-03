import { Injectable } from '@angular/core';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { FemaleSexFindingMapper } from '@mappings/pelvisMRT/female-sex/female-sex-finding.mapper';
import { IMapper } from '@interfaces/mapper.interface';
import { FemaleSexUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-ui.model';
import { FemaleSexApiModel } from '@models/pelvisMRT/api/female-sex/female-sex-api.model';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { FemaleSexFindingApiModel } from '@models/pelvisMRT/api/female-sex/female-sex-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class FemaleSexMapper implements IMapper<FemaleSexApiModel, FemaleSexUiModel> {
  constructor(private enumMapper: EnumMapper, private findingMapper: FemaleSexFindingMapper) {
    automapper
      .createMap('FemaleSex_PelvisMRT_UiModel', 'FemaleSex_PelvisMRT_ApiModel')
      .convertToType(FemaleSexApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
    automapper
      .createMap('FemaleSex_PelvisMRT_ApiModel', 'FemaleSex_PelvisMRT_UiModel')
      .convertToType(FemaleSexUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: FemaleSexUiModel, out: FemaleSexApiModel): FemaleSexApiModel {
    out = automapper.map('FemaleSex_PelvisMRT_UiModel', 'FemaleSex_PelvisMRT_ApiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.findingMapper.mapToAPI(finding, new FemaleSexFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: FemaleSexApiModel, out: FemaleSexUiModel): FemaleSexUiModel {
    out = automapper.map('FemaleSex_PelvisMRT_ApiModel', 'FemaleSex_PelvisMRT_UiModel', source);

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => {
      out.findings.push(this.findingMapper.mapToUI(finding, new FemaleSexFindingUiModel()));
    });

    return out;
  }
}
