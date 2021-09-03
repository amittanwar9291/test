import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';

import { AnamnesisApiModel } from '@models/angiographyCT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/angiographyCT/ui/anamnesis/anamnesis-ui.model';
import { IndicationFindingMapper } from './anamnesis-indication-mapper';
import { IndicationFindingApiModel } from '@models/angiographyCT/api/anamnesis/indication-finding-api.model';
import { PriorInterventionsFindingApiModel } from '@models/angiographyCT/api/anamnesis/prior-interventions-finding-api.model';
import { AnamnesisPriorInterventionsMapper } from './anamnesis-prior-interventions-finding.mapper';
import { IndicationFindingUiModel } from '@models/angiographyCT/ui/anamnesis/indication-finding-ui.model';
import { PriorInterventionsFindingUiModel } from '@models/angiographyCT/ui/anamnesis/prior-interventions-finding-ui.model';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  constructor(
    private indicationMapper: IndicationFindingMapper,
    private priorMapper: AnamnesisPriorInterventionsMapper,
    private monthYearMapper: MonthYearMapper
  ) {
    automapper
      .createMap('Anamnesis_AngioCT_UiModel', 'Anamnesis_AngioCT_ApiModel')
      .convertToType(AnamnesisApiModel)
      .forSourceMember('indicationFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('priorInterventionsFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Anamnesis_AngioCT_ApiModel', 'Anamnesis_AngioCT_UiModel')
      .convertToType(AnamnesisUiModel)
      .forSourceMember('indicationFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('priorInterventionsFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AnamnesisUiModel, out: AnamnesisApiModel): AnamnesisApiModel {
    out = automapper.map('Anamnesis_AngioCT_UiModel', 'Anamnesis_AngioCT_ApiModel', source);

    out.indicationFindings.splice(0, out.indicationFindings.length);
    out.priorInterventionsFindings.splice(0, out.priorInterventionsFindings.length);

    source.indicationFindings.forEach(finding => {
      out.indicationFindings.push(this.indicationMapper.mapToAPI(finding, new IndicationFindingApiModel()));
    });

    source.priorInterventionsFindings.forEach(finding => {
      out.priorInterventionsFindings.push(this.priorMapper.mapToAPI(finding, new PriorInterventionsFindingApiModel()));
    });

    out.mrAngiographyYear = source.dataMRAngiography.year;
    out.mrAngiographyMonth = this.monthYearMapper.mapToApi(source.dataMRAngiography);

    out.ctAngiographyYear = source.dataCTAngiography.year;
    out.ctAngiographyMonth = this.monthYearMapper.mapToApi(source.dataCTAngiography);

    out.digitalSubtractionAngiographyYear = source.dataDigitalSubtractionAngiography.year;
    out.digitalSubtractionAngiographyMonth = this.monthYearMapper.mapToApi(source.dataDigitalSubtractionAngiography);

    out.dopplerUltrasoundYear = source.dataDopplerUltrasound.year;
    out.dopplerUltrasoundMonth = this.monthYearMapper.mapToApi(source.dataDopplerUltrasound);

    return out;
  }

  mapToUI(source: AnamnesisApiModel, out: AnamnesisUiModel): AnamnesisUiModel {
    out = automapper.map('Anamnesis_AngioCT_ApiModel', 'Anamnesis_AngioCT_UiModel', source);

    out.indicationFindings.splice(0, out.indicationFindings.length);
    out.priorInterventionsFindings.splice(0, out.priorInterventionsFindings.length);

    source.indicationFindings.forEach(finding => {
      out.indicationFindings.push(this.indicationMapper.mapToUI(finding, new IndicationFindingUiModel()));
    });

    source.priorInterventionsFindings.forEach(finding => {
      out.priorInterventionsFindings.push(this.priorMapper.mapToUI(finding, new PriorInterventionsFindingUiModel()));
    });

    out.dataMRAngiography.year = source.mrAngiographyYear;
    out.dataMRAngiography.month = source.mrAngiographyMonth;

    out.dataCTAngiography.year = source.ctAngiographyYear;
    out.dataCTAngiography.month = source.ctAngiographyMonth;

    out.dataDigitalSubtractionAngiography.year = source.digitalSubtractionAngiographyYear;
    out.dataDigitalSubtractionAngiography.month = source.digitalSubtractionAngiographyMonth;

    out.dataDopplerUltrasound.year = source.dopplerUltrasoundYear;
    out.dataDopplerUltrasound.month = source.dopplerUltrasoundMonth;

    return out;
  }
}
