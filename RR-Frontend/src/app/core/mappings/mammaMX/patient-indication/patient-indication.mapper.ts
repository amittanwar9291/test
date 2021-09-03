import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { MammaMXPatientIndicationFindingMapper } from '@mappings/mammaMX/patient-indication/patient-indication-finding.mapper';
import { PatientInformationMapper } from '@mappings/shared/patient-information/patient-information.mapper';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';
import { PatientIndicationUiModel } from '@models/mammaMX/ui/patient-indication/patient-indication-ui.model';
import { PatientIndicationApiModel } from '@models/mammaMX/api/patient-indication/patient-indication-api.model';
import { PatientIndicationFindingUiModel } from '@models/mammaMX/ui/patient-indication/patient-indication-finding-ui.model';
import { PatientIndicationFindingApiModel } from '@models/mammaMX/api/patient-indication/patient-indication-finding-api.model';
import { PatientInformationApiModel } from '@models/shared/patient-information/patient-information-api.model';
import { PatientInformationUiModel } from '@models/shared/patient-information/patient-information-ui.model';

@Injectable({
  providedIn: 'root'
})
export class PatientIndicationMapper implements IMapper<PatientIndicationApiModel, PatientIndicationUiModel> {
  constructor(
    private patientInformationMapper: PatientInformationMapper,
    private findingMapper: MammaMXPatientIndicationFindingMapper,
    private monthYearMapper: MonthYearMapper
  ) {
    automapper
      .createMap('PatientIndication_MammaMX_UiModel', 'PatientIndication_MammaMX_ApiModel')
      .convertToType(PatientIndicationApiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('PatientIndication_MammaMX_ApiModel', 'PatientIndication_MammaMX_UiModel')
      .convertToType(PatientIndicationUiModel)
      .forSourceMember('patientInformation', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: PatientIndicationUiModel, out: PatientIndicationApiModel): PatientIndicationApiModel {
    out = automapper.map('PatientIndication_MammaMX_UiModel', 'PatientIndication_MammaMX_ApiModel', source);

    out.patientInformation = this.patientInformationMapper.mapToAPI(source.patientInformation, new PatientInformationApiModel());

    out.yearOfLastMX = source.dateOfLastMX.year;
    out.monthOfLastMX = this.monthYearMapper.mapToApi(source.dateOfLastMX);

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
    out = automapper.map('PatientIndication_MammaMX_ApiModel', 'PatientIndication_MammaMX_UiModel', source);

    out.patientInformation = this.patientInformationMapper.mapToUI(source.patientInformation, new PatientInformationUiModel());

    out.dateOfLastMX.year = source.yearOfLastMX;
    out.dateOfLastMX.month = source.monthOfLastMX;

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
