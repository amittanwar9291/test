import { Injectable } from '@angular/core';
import { AnamnesisApiModel } from '@models/hipMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/hipMRT/ui/anamnesis/anamnesis-ui.model';
import { AnamnesisFindingUiModel } from '@models/hipMRT/ui/anamnesis/anamnesis-finding-ui.model';
import { AnamnesisFindingApiModel } from '@models/hipMRT/api/anamnesis/anamnesis-finding-api.model';
import { IMapper } from '@interfaces/mapper.interface';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';
import { AnamnesisFindingMapper } from '@mappings/hipMRT/anamnesis/anamnesis-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  constructor(private anamnesisFindingMapper: AnamnesisFindingMapper, private monthYearMapper: MonthYearMapper) {
    automapper
      .createMap('Anamnesis_HipMRT_UiModel', 'Anamnesis_HipMRT_ApiModel')
      .convertToType(AnamnesisApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Anamnesis_HipMRT_ApiModel', 'Anamnesis_HipMRT_UiModel')
      .convertToType(AnamnesisUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AnamnesisUiModel, out: AnamnesisApiModel): AnamnesisApiModel {
    out = automapper.map('Anamnesis_HipMRT_UiModel', 'Anamnesis_HipMRT_ApiModel', source);

    out.findings = source.findings.map((finding: AnamnesisFindingUiModel) => {
      return this.anamnesisFindingMapper.mapToAPI(finding, new AnamnesisFindingApiModel());
    });

    out.monthOfXRay = this.monthYearMapper.mapToApi(source.xRayDate);
    out.yearOfXRay = source.xRayDate.year;
    out.monthOfCT = this.monthYearMapper.mapToApi(source.ctDate);
    out.yearOfCT = source.ctDate.year;
    out.monthOfMRI = this.monthYearMapper.mapToApi(source.mriDate);
    out.yearOfMRI = source.mriDate.year;

    return out;
  }

  mapToUI(source: AnamnesisApiModel, out: AnamnesisUiModel): AnamnesisUiModel {
    out = automapper.map('Anamnesis_HipMRT_ApiModel', 'Anamnesis_HipMRT_UiModel', source);

    out.findings = source.findings.map((finding: AnamnesisFindingApiModel) => {
      return this.anamnesisFindingMapper.mapToUI(finding, new AnamnesisFindingUiModel());
    });

    out.xRayDate.month = source.monthOfXRay;
    out.xRayDate.year = source.yearOfXRay;
    out.ctDate.month = source.monthOfCT;
    out.ctDate.year = source.yearOfCT;
    out.mriDate.month = source.monthOfMRI;
    out.mriDate.year = source.yearOfMRI;

    return out;
  }
}
