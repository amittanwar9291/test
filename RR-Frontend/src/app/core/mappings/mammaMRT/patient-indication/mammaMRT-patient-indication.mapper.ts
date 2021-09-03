import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { MammaMRTPatientIndicationFindingMapper } from '@mappings/mammaMRT/patient-indication/mammaMRT-patient-indication-finding.mapper';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

import { PatientIndicationApiModel } from '@models/mammaMRT/api/patient-indication/patient-indication-api.model';
import { PatientIndicationUiModel } from '@models/mammaMRT/ui/patient-indication/patient-indication-ui.model';
import { PatientIndicationFindingUiModel } from '@models/mammaMRT/ui/patient-indication/patient-indication-finding-ui.model';
import { PatientIndicationFindingApiModel } from '@models/mammaMRT/api/patient-indication/patient-indication-finding-api.model';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

@Injectable({
  providedIn: 'root'
})
export class MammaMRTPatientIndicationMapper implements IMapper<PatientIndicationApiModel, PatientIndicationUiModel> {
  constructor(
    private patientInformationMapper: PatientInformationMapper,
    private findingMapper: MammaMRTPatientIndicationFindingMapper,
    private monthYearMapper: MonthYearMapper
  ) {
    automapper
      .createMap('PatientIndication_MammaMRT_UiModel', 'PatientIndication_MammaMRT_ApiModel')
      .convertToType(PatientIndicationApiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('PatientIndication_MammaMRT_ApiModel', 'PatientIndication_MammaMRT_UiModel')
      .convertToType(PatientIndicationUiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: PatientIndicationUiModel, out: PatientIndicationApiModel): PatientIndicationApiModel {
    out = automapper.map('PatientIndication_MammaMRT_UiModel', 'PatientIndication_MammaMRT_ApiModel', source);

    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());

    out.yearOfLastMRT = source.dateOfLastMRT.year;
    out.monthOfLastMRT = this.monthYearMapper.mapToApi(source.dateOfLastMRT);

    out.yearOfLastMammography = source.dateOfLastMammography.year;
    out.monthOfLastMammography = this.monthYearMapper.mapToApi(source.dateOfLastMammography);

    out.yearOfLastMammosonography = source.dateOfLastMammosonography.year;
    out.monthOfLastMammosonography = this.monthYearMapper.mapToApi(source.dateOfLastMammosonography);

    out.findings = source.findings.map(
      (finding: PatientIndicationFindingUiModel): PatientIndicationFindingApiModel =>
        this.findingMapper.mapToAPI(finding, new PatientIndicationFindingApiModel())
    );

    return out;
  }

  mapToUI(source: PatientIndicationApiModel, out: PatientIndicationUiModel): PatientIndicationUiModel {
    out = automapper.map('PatientIndication_MammaMRT_ApiModel', 'PatientIndication_MammaMRT_UiModel', source);

    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());

    out.dateOfLastMRT.year = source.yearOfLastMRT;
    out.dateOfLastMRT.month = source.monthOfLastMRT;

    out.dateOfLastMammography.year = source.yearOfLastMammography;
    out.dateOfLastMammography.month = source.monthOfLastMammography;

    out.dateOfLastMammosonography.year = source.yearOfLastMammosonography;
    out.dateOfLastMammosonography.month = source.monthOfLastMammosonography;

    out.findings = source.findings.map(
      (finding: PatientIndicationFindingApiModel): PatientIndicationFindingUiModel =>
        this.findingMapper.mapToUI(finding, new PatientIndicationFindingUiModel())
    );

    return out;
  }
}
