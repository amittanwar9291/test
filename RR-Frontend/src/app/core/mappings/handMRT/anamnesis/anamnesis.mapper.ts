import { Injectable } from '@angular/core';

import { AnamnesisUiModel } from '@models/handMRT/ui/anamnesis/anamnesis-ui.model';
import { AnamnesisApiModel } from '@models/handMRT/api/anamnesis/anamnesis-api.model';

import { IMapper } from '@interfaces/mapper.interface';
import { AnamnesisIndicationFindingUiModel } from '@models/handMRT/ui/anamnesis/anamnesis-indication-finding-ui.model';
import { AnamnesisIndicationFindingApiModel } from '@models/handMRT/api/anamnesis/anamnesis-indication-finding-api.model';
import { AnamnesisIndicationMapper } from '@mappings/handMRT/anamnesis/anamnesis-indication.mapper';
import { AnamnesisPreviousSurgeryMapper } from '@mappings/handMRT/anamnesis/anamnesis-previous-surgery.mapper';
import { AnamnesisPreviousSurgeriesFindingApiModel } from '@models/handMRT/api/anamnesis/anamnesis-previous-surgeries-finding-api.model';
import { AnamnesisPreviousSurgeriesFindingUiModel } from '@models/handMRT/ui/anamnesis/anamnesis-previous-surgeries-finding-ui.model';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  constructor(
    private anamnesisIndicationMapper: AnamnesisIndicationMapper,
    private anamnesisPreviousSurgeryMapper: AnamnesisPreviousSurgeryMapper,
    private monthYearMapper: MonthYearMapper
  ) {
    automapper
      .createMap('Anamnesis_HandMRT_ApiModel', 'Anamnesis_HandMRT_UiModel')
      .convertToType(AnamnesisUiModel)
      .forSourceMember('indications', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Anamnesis_HandMRT_UiModel', 'Anamnesis_HandMRT_ApiModel')
      .convertToType(AnamnesisApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AnamnesisUiModel, out: AnamnesisApiModel): AnamnesisApiModel {
    out = automapper.map('Anamnesis_HandMRT_UiModel', 'Anamnesis_HandMRT_ApiModel', source);

    out.monthOfXRay = this.monthYearMapper.mapToApi(source.xRay);
    out.yearOfXRay = source.xRay.year;
    out.monthOfCT = this.monthYearMapper.mapToApi(source.ct);
    out.yearOfCT = source.ct.year;
    out.monthOfMri = this.monthYearMapper.mapToApi(source.mri);
    out.yearOfMri = source.mri.year;

    out.indications.splice(0, out.indications.length);
    source.indications.forEach(finding =>
      out.indications.push(this.anamnesisIndicationMapper.mapToAPI(finding, new AnamnesisIndicationFindingApiModel()))
    );

    out.previousSurgeries.splice(0, out.previousSurgeries.length);
    source.previousSurgeries.forEach(finding =>
      out.previousSurgeries.push(this.anamnesisPreviousSurgeryMapper.mapToAPI(finding, new AnamnesisPreviousSurgeriesFindingApiModel()))
    );

    return out;
  }

  mapToUI(source: AnamnesisApiModel, out: AnamnesisUiModel): AnamnesisUiModel {
    out = automapper.map('Anamnesis_HandMRT_ApiModel', 'Anamnesis_HandMRT_UiModel', source);

    out.xRay.month = source.monthOfXRay;
    out.xRay.year = source.yearOfXRay;
    out.ct.month = source.monthOfCT;
    out.ct.year = source.yearOfCT;
    out.mri.month = source.monthOfMri;
    out.mri.year = source.yearOfMri;

    out.indications.splice(0, out.indications.length);
    if (source.indications) {
      source.indications.forEach(finding =>
        out.indications.push(this.anamnesisIndicationMapper.mapToUI(finding, new AnamnesisIndicationFindingUiModel()))
      );
    }

    out.previousSurgeries.splice(0, out.previousSurgeries.length);
    if (source.previousSurgeries) {
      source.previousSurgeries.forEach(finding =>
        out.previousSurgeries.push(this.anamnesisPreviousSurgeryMapper.mapToUI(finding, new AnamnesisPreviousSurgeriesFindingUiModel()))
      );
    }
    return out;
  }
}
