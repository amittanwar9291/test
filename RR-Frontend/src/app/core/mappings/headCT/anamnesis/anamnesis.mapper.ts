import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';
import { AnamnesisApiModel } from '@models/headCT/api/anamnesis/anamnesis-api.model';
import { ClinicSymptomsFindingApiModel } from '@models/headCT/api/anamnesis/clinic-symptoms-finding-api.model';
import { PreviousInterventionsTherapiesFindingApiModel } from '@models/headCT/api/anamnesis/previous-interventions-therapies-finding-api.model';
import { AnamnesisUiModel } from '@models/headCT/ui/anamnesis/anamnesis-ui.model';
import { ClinicSymptomsFindingUiModel } from '@models/headCT/ui/anamnesis/clinic-symptoms-finding-ui.model';
import { PreviousInterventionsTherapiesFindingUiModel } from '@models/headCT/ui/anamnesis/previous-interventions-therapies-finding-ui.model';
import { ClinicSymptomsFindingMapper } from './clinic-finding.mapper';
import { PreviousInterventionsTherapiesFindingMapper } from './previous-interventions-therapies-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  constructor(
    private previousInterventionsTherapiesFindingMapper: PreviousInterventionsTherapiesFindingMapper,
    private clinicFindingMapper: ClinicSymptomsFindingMapper,
    private monthYearMapper: MonthYearMapper
  ) {
    automapper
      .createMap('Anamnesis_HeadMRT_UiModel', 'Anamnesis_HeadMRT_ApiModel')
      .convertToType(AnamnesisApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Anamnesis_HeadMRT_ApiModel', 'Anamnesis_HeadMRT_UiModel')
      .convertToType(AnamnesisUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AnamnesisUiModel, out: AnamnesisApiModel): AnamnesisApiModel {
    out = automapper.map('Anamnesis_HeadMRT_UiModel', 'Anamnesis_HeadMRT_ApiModel', source);

    out.monthOfMRI = this.monthYearMapper.mapToApi(source.dateOfMRI);
    out.yearOfMRI = source.dateOfMRI.year;

    out.monthOfCT = this.monthYearMapper.mapToApi(source.dateOfCT);
    out.yearOfCT = source.dateOfCT.year;

    out.monthOfPETCT = this.monthYearMapper.mapToApi(source.dateOfPETCT);
    out.yearOfPETCT = source.dateOfPETCT.year;

    out.monthOfDSA = this.monthYearMapper.mapToApi(source.dateOfDSA);
    out.yearOfDSA = source.dateOfDSA.year;

    out.clinicalSymptomFindings.splice(0, out.clinicalSymptomFindings.length);
    source.clinicalSymptomFindings?.forEach(finding =>
      out.clinicalSymptomFindings.push(this.clinicFindingMapper.mapToAPI(finding, new ClinicSymptomsFindingApiModel()))
    );

    out.previousInterventionsTherapiesFindings.splice(0, out.previousInterventionsTherapiesFindings.length);
    source.previousInterventionsTherapiesFindings?.forEach(finding =>
      out.previousInterventionsTherapiesFindings.push(
        this.previousInterventionsTherapiesFindingMapper.mapToAPI(finding, new PreviousInterventionsTherapiesFindingApiModel())
      )
    );

    return out;
  }

  mapToUI(source: AnamnesisApiModel, out: AnamnesisUiModel): AnamnesisUiModel {
    out = automapper.map('Anamnesis_HeadMRT_ApiModel', 'Anamnesis_HeadMRT_UiModel', source);

    out.dateOfMRI.month = source.monthOfMRI;
    out.dateOfMRI.year = source.yearOfMRI;

    out.dateOfCT.month = source.monthOfCT;
    out.dateOfCT.year = source.yearOfCT;

    out.dateOfPETCT.month = source.monthOfPETCT;
    out.dateOfPETCT.year = source.yearOfPETCT;

    out.dateOfDSA.month = source.monthOfDSA;
    out.dateOfDSA.year = source.yearOfDSA;

    out.clinicalSymptomFindings.splice(0, out.clinicalSymptomFindings.length);
    source.clinicalSymptomFindings?.forEach(finding =>
      out.clinicalSymptomFindings.push(this.clinicFindingMapper.mapToUI(finding, new ClinicSymptomsFindingUiModel()))
    );

    out.previousInterventionsTherapiesFindings.splice(0, out.previousInterventionsTherapiesFindings.length);
    source.previousInterventionsTherapiesFindings?.forEach(finding =>
      out.previousInterventionsTherapiesFindings.push(
        this.previousInterventionsTherapiesFindingMapper.mapToUI(finding, new PreviousInterventionsTherapiesFindingUiModel())
      )
    );

    return out;
  }
}
