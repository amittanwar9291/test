import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';
import { AnamnesisApiModel } from '@models/headMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUiModel } from '@models/headMRT/ui/anamnesis/anamnesis-ui.model';
import { ClinicFindingMapper } from '@mappings/headMRT/anamnesis/clinic-finding.mapper';
import { PreviousInterventionsTherapiesFindingMapper } from '@mappings/headMRT/anamnesis/previous-interventions-therapies-finding.mapper';
import { ClinicFindingApiModel } from '@models/headMRT/api/anamnesis/clinic-finding-api.model';
import { ClinicFindingUiModel } from '@models/headMRT/ui/anamnesis/clinic-finding-ui.model';
import { PreviousInterventionsTherapiesFindingApiModel } from '@models/headMRT/api/anamnesis/previous-interventions-therapies-finding-api.model';
import { PreviousInterventionsTherapiesFindingUiModel } from '@models/headMRT/ui/anamnesis/previous-interventions-therapies-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApiModel, AnamnesisUiModel> {
  constructor(
    private previousInterventionsTherapiesFindingMapper: PreviousInterventionsTherapiesFindingMapper,
    private clinicFindingMapper: ClinicFindingMapper,
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
      out.clinicalSymptomFindings.push(this.clinicFindingMapper.mapToAPI(finding, new ClinicFindingApiModel()))
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
      out.clinicalSymptomFindings.push(this.clinicFindingMapper.mapToUI(finding, new ClinicFindingUiModel()))
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
