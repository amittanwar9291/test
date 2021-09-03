import { AnamnesisApiModel } from '@models/pelvisMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-ui.model';

import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { AnamnesisPreviousOperationMapper } from './anamnesis-previous-operation.mapper';
import { AnamnesisClinicMapper } from './anamnesis-clinic.mapper';
import { AnamnesisClinicFindingUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-clinic-finding-ui.model';
import { AnamnesisPreviousOperationFindingUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-previous-operation-finding-ui.model';
import { AnamnesisClinicFindingApiModel } from '@models/pelvisMRT/api/anamnesis/anamnesis-clinic-finding-api.model';
import { AnamnesisPreviousOperationFindingApiModel } from '@models/pelvisMRT/api/anamnesis/anamnesis-previous-operation-finding-api.model';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  constructor(
    private clinicMapper: AnamnesisClinicMapper,
    private previousMapper: AnamnesisPreviousOperationMapper,
    private monthYearMapper: MonthYearMapper
  ) {
    automapper
      .createMap('Anamnesis_PelvisMRT_UiModel', 'Anamnesis_PelvisMRT_ApiModel')
      .convertToType(AnamnesisApiModel)
      .forSourceMember('clinicFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('previousOperationFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Anamnesis_PelvisMRT_ApiModel', 'Anamnesis_PelvisMRT_UiModel')
      .convertToType(AnamnesisUiModel)
      .forSourceMember('clinicFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('previousOperationFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AnamnesisUiModel, out: AnamnesisApiModel): AnamnesisApiModel {
    out = automapper.map('Anamnesis_PelvisMRT_UiModel', 'Anamnesis_PelvisMRT_ApiModel', source);

    out.clinicFindings.splice(0, out.clinicFindings.length);
    out.previousOperationFindings.splice(0, out.previousOperationFindings.length);

    source.clinicFindings.forEach(finding => {
      out.clinicFindings.push(this.clinicMapper.mapToAPI(finding, new AnamnesisClinicFindingApiModel()));
    });

    source.previousOperationFindings.forEach(finding => {
      out.previousOperationFindings.push(this.previousMapper.mapToAPI(finding, new AnamnesisPreviousOperationFindingApiModel()));
    });

    out.psaLevelTestMonth = this.monthYearMapper.mapToApi(source.psaLevelTestData);
    out.psaLevelTestYear = source.psaLevelTestData.year;

    out.radiotherapyMonth = this.monthYearMapper.mapToApi(source.radiotherapyData);
    out.radiotherapyYear = source.radiotherapyData.year;

    out.hormoneAblativeMonth = this.monthYearMapper.mapToApi(source.hormoneAblativeDate);
    out.hormoneAblativeYear = source.hormoneAblativeDate.year;

    out.neoadjuvantTherapyMonth = this.monthYearMapper.mapToApi(source.neoadjuvantTherapyDate);
    out.neoadjuvantTherapyYear = source.neoadjuvantTherapyDate.year;

    out.prevExaminationMonth = this.monthYearMapper.mapToApi(source.prevExaminationDate);
    out.prevExaminationYear = source.prevExaminationDate.year;

    out.biopsyMonth = this.monthYearMapper.mapToApi(source.biopsyDate);
    out.biopsyYear = source.biopsyDate.year;

    return out;
  }

  mapToUI(source: AnamnesisApiModel, out: AnamnesisUiModel): AnamnesisUiModel {
    out = automapper.map('Anamnesis_PelvisMRT_ApiModel', 'Anamnesis_PelvisMRT_UiModel', source);

    out.clinicFindings.splice(0, out.clinicFindings.length);
    out.previousOperationFindings.splice(0, out.previousOperationFindings.length);

    source.clinicFindings.forEach(finding => {
      out.clinicFindings.push(this.clinicMapper.mapToUI(finding, new AnamnesisClinicFindingUiModel()));
    });

    source.previousOperationFindings.forEach(finding => {
      out.previousOperationFindings.push(this.previousMapper.mapToUI(finding, new AnamnesisPreviousOperationFindingUiModel()));
    });

    out.psaLevelTestData.month = source.psaLevelTestMonth;
    out.psaLevelTestData.year = source.psaLevelTestYear;

    out.radiotherapyData.month = source.radiotherapyMonth;
    out.radiotherapyData.year = source.radiotherapyYear;

    out.hormoneAblativeDate.month = source.hormoneAblativeMonth;
    out.hormoneAblativeDate.year = source.hormoneAblativeYear;

    out.neoadjuvantTherapyDate.month = source.neoadjuvantTherapyMonth;
    out.neoadjuvantTherapyDate.year = source.neoadjuvantTherapyYear;

    out.prevExaminationDate.month = source.prevExaminationMonth;
    out.prevExaminationDate.year = source.prevExaminationYear;

    out.biopsyDate.month = source.biopsyMonth;
    out.biopsyDate.year = source.biopsyYear;

    return out;
  }
}
