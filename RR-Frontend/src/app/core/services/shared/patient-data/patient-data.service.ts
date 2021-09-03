import { Injectable } from '@angular/core';
import { NavigationReportDataService } from '../navigation/navigation-report-data.service';
import { BehaviorSubject } from 'rxjs';
import { PatientUiModel } from '@models/shared/patient/patient-ui.model';
import { PatientDataHttpService } from './patient-data-http.service';
import { filter, switchMap } from 'rxjs/operators';
import { ReportUiModel } from '@models/shared/report';
import { Guid } from '@models/shared/guid/guid';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {
  private patientDataStream$: BehaviorSubject<PatientUiModel>;

  constructor(private navDataService: NavigationReportDataService, private patientHttpService: PatientDataHttpService) {
    this.initializePatientStream();
  }

  public getPatientStream() {
    return this.patientDataStream$.asObservable();
  }

  public getPatientData() {
    return this.patientDataStream$.value;
  }

  private initializePatientStream() {
    this.patientDataStream$ = new BehaviorSubject<PatientUiModel>(new PatientUiModel());

    this.navDataService
      .getReportStream()
      .pipe(
        filter(this.doesReportHavePatient.bind(this)),
        switchMap((report: ReportUiModel) => this.patientHttpService.get(report.patientId))
      )
      .subscribe(patientData => {
        this.patientDataStream$.next(patientData);
      });
  }

  private doesReportHavePatient(report: ReportUiModel) {
    if (!report.patientId || Guid.isEmpty(report.patientId)) {
      this.reset();
      return false;
    }

    return true;
  }

  private reset() {
    this.patientDataStream$.next(new PatientUiModel());
  }
}
