import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';
import { AnamnesisFindingMapper } from '@mappings/thoraxCT/anamnesis/anamnesis-finding.mapper';

import { AnamnesisApiModel } from '@models/thoraxCT/api/anamnesis/anamnesis-api.model';
import { AnamnesisFindingApiModel } from '@models/thoraxCT/api/anamnesis/anamnesis-finding-api.model';
import { AnamnesisFindingUiModel } from '@models/thoraxCT/ui/anamnesis/anamnesis-finding-ui.model';
import { AnamnesisUiModel } from '@models/thoraxCT/ui/anamnesis/anamnesis-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  constructor(private anamnesisFindingMapper: AnamnesisFindingMapper, private monthYearMapper: MonthYearMapper) {
    automapper
      .createMap('Anamnesis_ThoraxCT_UiModel', 'Anamnesis_ThoraxCT_ApiModel')
      .convertToType(AnamnesisApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Anamnesis_ThoraxCT_ApiModel', 'Anamnesis_ThoraxCT_UiModel')
      .convertToType(AnamnesisUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AnamnesisUiModel, out: AnamnesisApiModel): AnamnesisApiModel {
    out = automapper.map('Anamnesis_ThoraxCT_UiModel', 'Anamnesis_ThoraxCT_ApiModel', source);

    out.mriPreliminaryExaminationMonth = this.monthYearMapper.mapToApi(source.mRIPreliminaryExamination);
    out.mriPreliminaryExaminationYear = source.mRIPreliminaryExamination.year;

    out.ctPreliminaryExaminationMonth = this.monthYearMapper.mapToApi(source.cTPreliminaryExamination);
    out.ctPreliminaryExaminationYear = source.cTPreliminaryExamination.year;

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => out.findings.push(this.anamnesisFindingMapper.mapToAPI(finding, new AnamnesisFindingApiModel())));

    return out;
  }

  mapToUI(source: AnamnesisApiModel, out: AnamnesisUiModel): AnamnesisUiModel {
    out = automapper.map('Anamnesis_ThoraxCT_ApiModel', 'Anamnesis_ThoraxCT_UiModel', source);

    out.mRIPreliminaryExamination.month = source.mriPreliminaryExaminationMonth;
    out.mRIPreliminaryExamination.year = source.mriPreliminaryExaminationYear;

    out.cTPreliminaryExamination.month = source.ctPreliminaryExaminationMonth;
    out.cTPreliminaryExamination.year = source.ctPreliminaryExaminationYear;

    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding => out.findings.push(this.anamnesisFindingMapper.mapToUI(finding, new AnamnesisFindingUiModel())));

    return out;
  }
}
