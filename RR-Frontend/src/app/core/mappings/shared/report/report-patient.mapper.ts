import { Injectable } from '@angular/core';
import { ReportPatientApiModel } from '@models/shared/report/report-patient-api.model';
import { ReportPatientUiModel } from '@models/shared/report/report-patient-ui.model';
import { ReportMapper } from './report.mapper';
import { PatientMapper } from '../patient/patient.mapper';
import { PatientUiModel } from '@models/shared/patient/patient-ui.model';

@Injectable({
  providedIn: 'root'
})
export class ReportPatientMapper {
  constructor(private reportMapper: ReportMapper, private patientMapper: PatientMapper) {
    automapper.createMap('ReportPatientApiModel', 'ReportPatientUiModel').convertToType(ReportPatientUiModel);
    automapper.createMap('ReportPatientUiModel', 'ReportPatientApiModel').convertToType(ReportPatientApiModel);
  }

  mapToAPI(source: ReportPatientUiModel): ReportPatientApiModel {
    const out = new ReportPatientApiModel();
    source.report.pages = source.report.pages || [];
    out.report = this.reportMapper.mapToAPI(source.report, out.report);
    out.patient = this.patientMapper.mapToAPI(source.patient, out.patient);
    return out;
  }

  mapToUI(source: ReportPatientApiModel): ReportPatientUiModel {
    const out = new ReportPatientUiModel();
    source.report.pages = source.report.pages || [];
    out.report = this.reportMapper.mapToUI(source.report, out.report);
    out.patient = source.patient ? this.patientMapper.mapToUI(source.patient, out.patient) : new PatientUiModel();
    return out;
  }
}
