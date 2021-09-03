import { Subject } from 'rxjs';

export class ReportListInternalCommunicationService {
  private viewModeUpdateSubject = new Subject();
  private optionsUpdateSubject = new Subject();
  private fetchReportsSubject = new Subject();

  viewModeUpdateStream$ = this.viewModeUpdateSubject.asObservable();
  optionsUpdateStream$ = this.optionsUpdateSubject.asObservable();
  fetchReportsStream$ = this.fetchReportsSubject.asObservable();

  emitViewModeUpdate(): void {
    this.viewModeUpdateSubject.next();
  }

  emitOptionsUpdate(): void {
    this.optionsUpdateSubject.next();
  }

  emitFetchReports(): void {
    this.fetchReportsSubject.next();
  }
}
