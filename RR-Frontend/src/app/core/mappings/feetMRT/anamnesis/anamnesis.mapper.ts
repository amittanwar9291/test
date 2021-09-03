import { Injectable } from '@angular/core';

import { AnamnesisUiModel } from '@models/feetMRT/ui/anamnesis/anamnesis-ui.model';
import { AnamnesisApiModel } from '@models/feetMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisFindingMapper } from '@mappings/feetMRT/anamnesis/anamnesis-finding.mapper';

import { IMapper } from '@interfaces/mapper.interface';
import { AnamnesisIndicationFindingApiModel } from '@models/feetMRT/api/anamnesis/anamnesis-indication-finding-api.model';
import { AnamnesisIndicationFindingUiModel } from '@models/feetMRT/ui/anamnesis/anamnesis-indication-finding-ui.model';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  constructor(private anamnesisFindingMapper: AnamnesisFindingMapper, private monthYearMapper: MonthYearMapper) {
    automapper
      .createMap('Anamnesis_FeetMRT_ApiModel', 'Anamnesis_FeetMRT_UiModel')
      .convertToType(AnamnesisUiModel)
      .forSourceMember('indications', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Anamnesis_FeetMRT_UiModel', 'Anamnesis_FeetMRT_ApiModel')
      .convertToType(AnamnesisApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AnamnesisUiModel, out: AnamnesisApiModel): AnamnesisApiModel {
    out = automapper.map('Anamnesis_FeetMRT_UiModel', 'Anamnesis_FeetMRT_ApiModel', source);

    out.xRayMonth = this.monthYearMapper.mapToApi(source.xRay);
    out.xRayYear = source.xRay.year;
    out.ctMonth = this.monthYearMapper.mapToApi(source.ct);
    out.ctYear = source.ct.year;
    out.mriMonth = this.monthYearMapper.mapToApi(source.mri);
    out.mriYear = source.mri.year;

    out.indications.splice(0, out.indications.length);
    source.findings.forEach(finding =>
      out.indications.push(this.anamnesisFindingMapper.mapToAPI(finding, new AnamnesisIndicationFindingApiModel()))
    );

    return out;
  }

  mapToUI(source: AnamnesisApiModel, out: AnamnesisUiModel): AnamnesisUiModel {
    out = automapper.map('Anamnesis_FeetMRT_ApiModel', 'Anamnesis_FeetMRT_UiModel', source);

    out.xRay.month = source.xRayMonth;
    out.xRay.year = source.xRayYear;
    out.ct.month = source.ctMonth;
    out.ct.year = source.ctYear;
    out.mri.month = source.mriMonth;
    out.mri.year = source.mriYear;

    out.findings.splice(0, out.findings.length);
    if (source.indications) {
      source.indications.forEach(finding =>
        out.findings.push(this.anamnesisFindingMapper.mapToUI(finding, new AnamnesisIndicationFindingUiModel()))
      );
    }
    return out;
  }
}
