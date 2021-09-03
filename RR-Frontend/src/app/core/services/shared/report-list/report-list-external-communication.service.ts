import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { UserHttpService } from '@services/shared/user/user-http.service';
import { LoggingService } from '@services/shared';
import { ReportListState } from '@models/shared/report-list/report-list-state.model';
import { UserModel } from '@models/shared/user/user.model';
import { UpdateListEntryData } from '@models/shared/report-list/update-list-entry-data.model';

@Injectable({
  providedIn: 'root'
})
export class ReportListExternalCommunicationService {
  private stateSubject = new BehaviorSubject<ReportListState>(new ReportListState());
  private viewModeUpdateSubject = new Subject();
  private lockPatientUpdateSubject = new Subject();
  private fetchReportsSubject = new Subject();
  private cancelEditSubject = new Subject();
  private editingUsersSubject = new BehaviorSubject<DropdownModel[]>([]);
  private moduleNameSubject = new BehaviorSubject(null);
  private hideReportSearchBarSubject = new BehaviorSubject(false);
  private updateReportSubject = new Subject<UpdateListEntryData>();

  stateStream$ = this.stateSubject.asObservable();
  viewModeUpdateStream$ = this.viewModeUpdateSubject.asObservable();
  lockPatientUpdateStream$ = this.lockPatientUpdateSubject.asObservable();
  fetchReportsStream$ = this.fetchReportsSubject.asObservable();
  cancelEditStream$ = this.cancelEditSubject.asObservable();
  editingUsersStream$ = this.editingUsersSubject.asObservable();
  moduleNameStream$ = this.moduleNameSubject.asObservable();
  hideReportSearchBarStream$ = this.hideReportSearchBarSubject.asObservable();
  updateReportStream$ = this.updateReportSubject.asObservable();

  constructor(private userHttpService: UserHttpService, private logger: LoggingService) {}

  emitState(state: ReportListState): void {
    this.stateSubject.next(state);
  }

  emitViewModeUpdate(): void {
    this.viewModeUpdateSubject.next();
  }

  emitFetchReports(): void {
    this.fetchReportsSubject.next();
  }

  emitCancelEdit(): void {
    this.cancelEditSubject.next();
  }

  emitLockPatientUpdate(): void {
    this.lockPatientUpdateSubject.next();
  }

  emitModuleName(moduleName: string) {
    this.moduleNameSubject.next(moduleName);
  }

  emitHideReportSearchBar(isHidden: boolean) {
    this.hideReportSearchBarSubject.next(isHidden);
  }

  emitUpdateReport(updateData: UpdateListEntryData) {
    this.updateReportSubject.next(updateData);
  }

  fetchEditingUsers(): void {
    this.userHttpService.getEditingUsers().subscribe(
      users => this.emitEditingUsersArray(users),
      error => this.logger.error('REPORT_LIST', error.message)
    );
  }

  private emitEditingUsersArray(users: UserModel[]): void {
    const editingUsers = users.map(u => ({
      value: u.id,
      label: u.initial
    }));
    editingUsers.unshift(
      {
        value: 'None',
        label: '--'
      },
      {
        value: 'None',
        label: '-'
      }
    );
    this.editingUsersSubject.next(editingUsers);
  }
}
