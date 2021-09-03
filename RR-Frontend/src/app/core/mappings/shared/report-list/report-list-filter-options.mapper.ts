import { IMapper } from '@interfaces/mapper.interface';
import { FilterOptionsUiModel } from '@models/shared/report-list/filter-options-ui.model';
import { FilterOptionsApiModel } from '@models/shared/report-list/filter-options-api.model';
import { PatientFilterOptionsUiModel } from '@models/shared/report-list/patient-filter-options-ui.model';
import { PatientFilterOptionsApiModel } from '@models/shared/report-list/patient-filter-options-api.model';
import { ReportFilterOptionsUiModel } from '@models/shared/report-list/report-filter-options-ui.model';
import { ReportFilterOptionsApiModel } from '@models/shared/report-list/report-filter-options-api.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportListFilterOptionsMapper implements IMapper<FilterOptionsApiModel, FilterOptionsUiModel> {
  constructor() {
    automapper.createMap('PatientFilterOptionsUiModel', 'PatientFilterOptionsApiModel').convertToType(PatientFilterOptionsApiModel);
    automapper.createMap('PatientFilterOptionsApiModel', 'PatientFilterOptionsUiModel').convertToType(PatientFilterOptionsUiModel);
    automapper.createMap('ReportFilterOptionsUiModel', 'ReportFilterOptionsApiModel').convertToType(ReportFilterOptionsApiModel);
    automapper.createMap('ReportFilterOptionsApiModel', 'ReportFilterOptionsUiModel').convertToType(ReportFilterOptionsUiModel);
  }

  mapToAPI(source: FilterOptionsUiModel, out: FilterOptionsApiModel): FilterOptionsApiModel {
    out.patientOptions = automapper.map('PatientFilterOptionsUiModel', 'PatientFilterOptionsApiModel', source.patientOptions);
    out.patientOptions.birthDate = source.patientOptions.birthDate?.toDateString() || '';
    out.reportOptions = automapper.map('ReportFilterOptionsUiModel', 'ReportFilterOptionsApiModel', source.reportOptions);
    out.reportOptions.examinationDate = source.reportOptions.examinationDate?.toDateString() || '';
    out.reportOptions.findingsDate = source.reportOptions.findingsDate?.toDateString() || '';
    out.reportOptions.reportStatuses = [...source.reportOptions.reportStatuses];
    out.reportOptions.examinations = [...source.reportOptions.examinations];
    out.reportOptions.userIds = [...source.reportOptions.userIds];

    return out;
  }

  mapToUI(source: FilterOptionsApiModel, out: FilterOptionsUiModel): FilterOptionsUiModel {
    out.patientOptions = automapper.map('PatientFilterOptionsApiModel', 'PatientFilterOptionsUiModel', source.patientOptions);
    out.patientOptions.birthDate = source.patientOptions.birthDate ? new Date(source.patientOptions.birthDate) : null;
    out.reportOptions = automapper.map('ReportFilterOptionsApiModel', 'ReportFilterOptionsUiModel', source.reportOptions);
    out.reportOptions.examinationDate = source.reportOptions.examinationDate ? new Date(source.reportOptions.examinationDate) : null;
    out.reportOptions.findingsDate = source.reportOptions.findingsDate ? new Date(source.reportOptions.findingsDate) : null;
    out.reportOptions.reportStatuses = [...source.reportOptions.reportStatuses];
    out.reportOptions.examinations = [...source.reportOptions.examinations];
    out.reportOptions.userIds = [...source.reportOptions.userIds];

    return out;
  }
}
