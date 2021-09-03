import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';
import { AnamnesisClinicMapper } from '@mappings/abdomenMRT/anamnesis/anamnesis-clinic.mapper';
import { AnamnesisIndicationMapper } from '@mappings/abdomenMRT/anamnesis/anamnesis-indication.mapper';
import { AnamnesisClinicUiModel } from '@models/abdomenMRT/ui/anamnesis/anamnesis-clinic-ui.model';
import { AnamnesisClinicApiModel } from '@models/abdomenMRT/api/anamnesis/anamnesis-clinic-api.model';
import { AnamnesisIndicationUiModel } from '@models/abdomenMRT/ui/anamnesis/anamnesis-indication-ui.model';
import { AnamnesisIndicationApiModel } from '@models/abdomenMRT/api/anamnesis/anamnesis-indication-api.model';
import { AnamnesisApiModel } from '@models/abdomenMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/abdomenMRT/ui/anamnesis/anamnesis-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  constructor(
    private anamnesisIndicationMapper: AnamnesisIndicationMapper,
    private anamnesisClinicMapper: AnamnesisClinicMapper,
    private monthYearMapper: MonthYearMapper
  ) {
    automapper.createMap('Anamnesis_AbdomenMRT_UiModel', 'Anamnesis_AbdomenMRT_ApiModel').convertToType(AnamnesisApiModel);
    automapper.createMap('Anamnesis_AbdomenMRT_ApiModel', 'Anamnesis_AbdomenMRT_UiModel').convertToType(AnamnesisUiModel);
  }

  mapToAPI(source: AnamnesisUiModel, out: AnamnesisApiModel): AnamnesisApiModel {
    out = automapper.map('Anamnesis_AbdomenMRT_UiModel', 'Anamnesis_AbdomenMRT_ApiModel', source);

    out.monthOfMRI = this.monthYearMapper.mapToApi(source.dateOfMRI);
    out.yearOfMRI = source.dateOfMRI.year;

    out.monthOfCT = this.monthYearMapper.mapToApi(source.dateOfCT);
    out.yearOfCT = source.dateOfCT.year;

    out.monthOfSonography = this.monthYearMapper.mapToApi(source.dateOfSonography);
    out.yearOfSonography = source.dateOfSonography.year;

    out.monthOfPetCT = this.monthYearMapper.mapToApi(source.dateOfPetCT);
    out.yearOfPetCT = source.dateOfPetCT.year;

    out.indications.splice(0, out.indications.length);
    source.indications?.forEach(finding =>
      out.indications.push(this.anamnesisIndicationMapper.mapToAPI(finding, new AnamnesisIndicationApiModel()))
    );

    out.clinics.splice(0, out.clinics.length);
    source.clinics?.forEach(finding => out.clinics.push(this.anamnesisClinicMapper.mapToAPI(finding, new AnamnesisClinicApiModel())));

    return out;
  }

  mapToUI(source: AnamnesisApiModel, out: AnamnesisUiModel): AnamnesisUiModel {
    out = automapper.map('Anamnesis_AbdomenMRT_ApiModel', 'Anamnesis_AbdomenMRT_UiModel', source);

    out.dateOfMRI = new MonthYearModel(source.yearOfMRI, source.monthOfMRI);
    out.dateOfCT = new MonthYearModel(source.yearOfCT, source.monthOfCT);
    out.dateOfSonography = new MonthYearModel(source.yearOfSonography, source.monthOfSonography);
    out.dateOfPetCT = new MonthYearModel(source.yearOfPetCT, source.monthOfPetCT);

    out.indications.splice(0, out.indications.length);
    source.indications?.forEach(finding =>
      out.indications.push(this.anamnesisIndicationMapper.mapToUI(finding, new AnamnesisIndicationUiModel()))
    );

    out.clinics.splice(0, out.clinics.length);
    source.clinics?.forEach(finding => out.clinics.push(this.anamnesisClinicMapper.mapToUI(finding, new AnamnesisClinicUiModel())));

    return out;
  }
}
