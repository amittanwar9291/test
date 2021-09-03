import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ReportSessionHttpService } from '@services/shared/settings/report-session-http.service';
import { ReportSessionUiModel } from '@models/shared/settings/report-session-ui.model';
import { Subscription } from 'rxjs';
import { mapValues } from 'lodash';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'rr-report-sessions',
  templateUrl: './report-sessions.component.html',
  styleUrls: ['./report-sessions.component.scss']
})
export class ReportSessionsComponent implements OnInit, OnDestroy {
  private modulesTranslateSubscriptions: Subscription;
  private moduleNames: object;

  reportSessions: ReportSessionUiModel[];

  page = 1;

  constructor(
    public translate: TranslateService,
    private reportSessionHttpService: ReportSessionHttpService,
    private toastMessageService: ToastMessageService,
    private decimalPipe: DecimalPipe
  ) {}

  ngOnInit(): void {
    this.fetchReportSessions();
    this.modulesTranslateSubscriptions = this.translate
      .stream('routing.modules')
      .subscribe(out => (this.moduleNames = mapValues(out, elem => elem.replace('\n', ''))));
  }

  fetchReportSessions(): void {
    this.reportSessionHttpService.getReportSessions().subscribe((sessions: ReportSessionUiModel[]) => {
      this.reportSessions = sessions.sort(session => session.reportSessionCreationDate.getTime()).reverse();
    });
  }

  removeReportSesssion(reportId: string, moduleName: string): void {
    this.reportSessionHttpService.removeReportSession(reportId, moduleName).subscribe(() => {
      this.refreshList();
      this.toastMessageService.showSuccessToast('settings.toastMessages.reportReleased');
    });
  }

  removeAllReportSesssions(): void {
    this.reportSessionHttpService.removeAllReportSessions().subscribe(() => {
      this.refreshList();
      this.toastMessageService.showSuccessToast('settings.toastMessages.reportsReleased');
    });
  }

  ngOnDestroy(): void {
    this.modulesTranslateSubscriptions.unsubscribe();
  }

  refreshList(): void {
    this.fetchReportSessions();
  }

  getModuleNameTranslation(module: string): string {
    return this.moduleNames ? this.moduleNames[module] : '';
  }

  setPage(event: any): void {
    this.page = event;
  }

  getPageLabel(page) {
    return page.label === '...' ? page.label : this.decimalPipe.transform(page.label, '');
  }
}
