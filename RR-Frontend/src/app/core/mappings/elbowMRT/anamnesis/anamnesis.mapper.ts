import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { AnamnesisFindingMapper } from '@mappings/elbowMRT/anamnesis/anamnesis-finding.mapper';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

import { AnamnesisUiModel } from '@models/elbowMRT/ui/anamnesis/anamnesis-ui.model';
import { AnamnesisApiModel } from '@models/elbowMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisFindingUiModel } from '@models/elbowMRT/ui/anamnesis/anamnesis-finding-ui.model';
import { AnamnesisFindingApiModel } from '@models/elbowMRT/api/anamnesis/anamnesis-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  constructor(private anamnesisFindingMapper: AnamnesisFindingMapper, private monthYearMapper: MonthYearMapper) {
    automapper
      .createMap('Anamnesis_ElbowMRT_UiModel', 'Anamnesis_ElbowMRT_ApiModel')
      .convertToType(AnamnesisApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Anamnesis_ElbowMRT_ApiModel', 'Anamnesis_ElbowMRT_UiModel')
      .convertToType(AnamnesisUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AnamnesisUiModel, out: AnamnesisApiModel): AnamnesisApiModel {
    out = automapper.map('Anamnesis_ElbowMRT_UiModel', 'Anamnesis_ElbowMRT_ApiModel', source);

    out.findings = source.findings.map((finding: AnamnesisFindingUiModel) => {
      return this.anamnesisFindingMapper.mapToAPI(finding, new AnamnesisFindingApiModel());
    });
    out.xRayMonth = this.monthYearMapper.mapToApi(source.xRayDate);
    out.xRayYear = source.xRayDate.year;
    out.ctMonth = this.monthYearMapper.mapToApi(source.ctDate);
    out.ctYear = source.ctDate.year;
    out.mriMonth = this.monthYearMapper.mapToApi(source.mriDate);
    out.mriYear = source.mriDate.year;

    return out;
  }

  mapToUI(source: AnamnesisApiModel, out: AnamnesisUiModel): AnamnesisUiModel {
    out = automapper.map('Anamnesis_ElbowMRT_ApiModel', 'Anamnesis_ElbowMRT_UiModel', source);

    out.findings = source.findings.map((finding: AnamnesisFindingApiModel) => {
      return this.anamnesisFindingMapper.mapToUI(finding, new AnamnesisFindingUiModel());
    });
    out.xRayDate.month = source.xRayMonth;
    out.xRayDate.year = source.xRayYear;
    out.ctDate.month = source.ctMonth;
    out.ctDate.year = source.ctYear;
    out.mriDate.month = source.mriMonth;
    out.mriDate.year = source.mriYear;

    return out;
  }
}
