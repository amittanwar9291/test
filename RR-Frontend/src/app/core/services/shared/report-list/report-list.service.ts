import { Injectable } from '@angular/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { PatientUiModel } from '@models/shared/patient/patient-ui.model';
import { ReportPatientUiModel } from '@models/shared/report/report-patient-ui.model';
import { ReportListItemUiModel } from '@models/shared/report/report-list-item-ui.model';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import moment from 'moment';
import { ReportListOptionsUiModel } from '@models/shared/report-list/report-list-options-ui.model';
import { FilterOptionsUiModel } from '@models/shared/report-list/filter-options-ui.model';
import { ReportStatus } from '@enums/shared/report-status.enum';
import { Guid } from '@models/shared/guid/guid';
import { ReportListExaminationFilter } from '@enums/shared/report-list-examination-filter.enum';

@Injectable({
  providedIn: 'root'
})
export class ReportListService {
  mapToEditExaminationDropdownList(obj: any): DropdownModel[] {
    return Object.keys(obj)
      .map<DropdownModel>(e => obj[e])
      .filter(
        m =>
          ![
            ReportListExaminationFilter.None.toString(),
            ReportListExaminationFilter.AllCT.toString(),
            ReportListExaminationFilter.AllMRT.toString()
          ].includes(m.value)
      );
  }

  mapToDropdownList(obj: any): DropdownModel[] {
    return Object.keys(obj).map<DropdownModel>(e => obj[e]);
  }

  getPatientName(patient: PatientUiModel): string {
    return patient.firstName && patient.lastName ? `${patient.lastName}, ${patient.firstName}` : `${patient.firstName}${patient.lastName}`;
  }

  mapReportPatientToListItem(reportPatient: ReportPatientUiModel, listItem: ReportListItemUiModel): void {
    listItem.patientId = reportPatient.report.patientId;
    listItem.patientFirstName = reportPatient.patient.firstName;
    listItem.patientLastName = reportPatient.patient.lastName;
    listItem.patientName = this.getPatientName(reportPatient.patient);
    listItem.patientGender = reportPatient.patient.gender;
    listItem.patientBirthDate = reportPatient.patient.birthDate;
    listItem.patientAge = reportPatient.report.patientAge;
    listItem.userLabel = reportPatient.report.userLabel;
  }

  mapListItemToPatient(listItem: ReportListItemUiModel, patient: PatientUiModel): void {
    patient.firstName = listItem.patientFirstName;
    patient.lastName = listItem.patientLastName;
    patient.birthDate = listItem.patientBirthDate;
    patient.gender = GenderTypeEnum[listItem.patientGender];
    patient.id = listItem.patientId;
  }

  mapListItemToFilterOptions(listItem: ReportListItemUiModel, options: FilterOptionsUiModel): void {
    options.patientOptions.patientId = listItem.patientId;
    options.patientOptions.patientFirstName = listItem.patientFirstName;
    options.patientOptions.patientLastName = listItem.patientLastName;
    options.patientOptions.gender = listItem.patientGender;
    options.patientOptions.birthDate = listItem.patientBirthDate;
    options.reportOptions.age = listItem.patientAge;
    options.reportOptions.examinationDate = listItem.examinationDate;
    options.reportOptions.findingsDate = listItem.findingsDate;
    if (listItem.examinationType) {
      options.reportOptions.examinations.push(listItem.examinationType);
    }
    if (listItem.status !== ReportStatus.Unknown) {
      options.reportOptions.reportStatuses.push(listItem.status);
    }
    if (!Guid.isEmpty(listItem.userId)) {
      options.reportOptions.userIds.push(listItem.userId);
    }
  }

  calculateAge(birthDate: Date): number {
    return birthDate ? moment().diff(moment(birthDate), 'year') : 0;
  }

  applyOptions(source: ReportListOptionsUiModel, dest: ReportListOptionsUiModel): void {
    dest.filter = source.filter;
    dest.pagination = source.pagination;
    dest.sort = source.sort;
  }
}
