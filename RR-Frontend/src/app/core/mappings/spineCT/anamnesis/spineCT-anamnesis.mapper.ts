import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { AnamnesisApiModel, AnamnesisUiModel } from '@models/spineCT';
import { AnamnesisIndicationApiModel } from '@models/spineCT/api/anamnesis/anamnesis-indication-api.model';
import { PreviousInterventionApiModel } from '@models/spineCT/api/anamnesis/previous-intervention-api.model';
import { AnamnesisIndicationUiModel } from '@models/spineCT/ui/anamnesis/anamnesis-indication-ui.model';
import { PreviousInterventionUiModel } from '@models/spineCT/ui/anamnesis/previous-intervention-ui.model';
import { SpineCTAnamnesisIndicationMapper } from './spineCT-anamnesis-indication.mapper';
import { SpineCTPreviousInterventionMapper } from './spineCT-previous-intervention.mapper';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class SpineCTAnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  constructor(
    private interventionMapper: SpineCTPreviousInterventionMapper,
    private indicationMapper: SpineCTAnamnesisIndicationMapper,
    private enumMapper: EnumMapper,
    private monthYearMapper: MonthYearMapper
  ) {
    automapper
      .createMap('AnamnesisApiModel', 'AnamnesisUiModel')
      .convertToType(AnamnesisUiModel)
      .forSourceMember('anamnesisIndications', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('previousInterventions', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('AnamnesisUiModel', 'AnamnesisApiModel')
      .convertToType(AnamnesisApiModel)
      .forSourceMember('anamnesisIndications', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('previousInterventions', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AnamnesisUiModel, out: AnamnesisApiModel): AnamnesisApiModel {
    out = automapper.map('AnamnesisUiModel', 'AnamnesisApiModel', source);

    out.anamnesisIndications.length = 0;
    source.anamnesisIndications.forEach((value: AnamnesisIndicationUiModel) => {
      out.anamnesisIndications.push(this.indicationMapper.mapToAPI(value, new AnamnesisIndicationApiModel()));
    });

    out.previousInterventions.length = 0;
    source.previousInterventions.forEach((value: PreviousInterventionUiModel) => {
      out.previousInterventions.push(this.interventionMapper.mapToAPI(value, new PreviousInterventionApiModel()));
    });

    out.yearOfCT = source.dateOfCT.year;
    out.monthOfCT = this.monthYearMapper.mapToApi(source.dateOfCT);

    out.yearOfMRI = source.dateOfMRI.year;
    out.monthOfMRI = this.monthYearMapper.mapToApi(source.dateOfMRI);

    out.yearOfXRay = source.dateOfXRay.year;
    out.monthOfXRay = this.monthYearMapper.mapToApi(source.dateOfXRay);

    return out;
  }

  mapToUI(source: AnamnesisApiModel, out: AnamnesisUiModel): AnamnesisUiModel {
    out = automapper.map('AnamnesisApiModel', 'AnamnesisUiModel', source);

    out.anamnesisIndications.length = 0;
    source.anamnesisIndications.forEach((value: AnamnesisIndicationApiModel) => {
      out.anamnesisIndications.push(this.indicationMapper.mapToUI(value, new AnamnesisIndicationUiModel()));
    });

    out.previousInterventions.length = 0;
    source.previousInterventions.forEach((value: PreviousInterventionApiModel) => {
      out.previousInterventions.push(this.interventionMapper.mapToUI(value, new PreviousInterventionUiModel()));
    });

    out.dateOfCT.month = source.monthOfCT;
    out.dateOfCT.year = source.yearOfCT;
    out.dateOfMRI.month = source.monthOfMRI;
    out.dateOfMRI.year = source.yearOfMRI;
    out.dateOfXRay.month = source.monthOfXRay;
    out.dateOfXRay.year = source.yearOfXRay;

    return out;
  }
}
