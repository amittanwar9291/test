import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';

import { DynamicComponentOutletService } from '@services/shared/dynamic-component/dynamic-component-outlet.service';
import { ReportListOptionsPanelComponent } from './report-list-options-panel/report-list-options-panel.component';
import { AuthorizedComponent } from '../../../shared/authorized/authorized.component';
import { ReportListExternalCommunicationService } from '@services/shared/report-list/report-list-external-communication.service';
import { ReportListTableComponent } from '@sharedPages/report-list/report-list-table/report-list-table.component';
import { ReportListPatientOverviewDialogComponent } from '@sharedPages/report-list/report-list-patient-overview-dialog/report-list-patient-overview-dialog.component';
import { ReportListState } from '@models/shared/report-list/report-list-state.model';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { ROLES } from '@models/shared/user/roles';
import { ReportListSignalRService } from '@services/shared/report-list/report-list-signalr.service';

@Component({
  selector: 'rr-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  moduleName: string;

  @ViewChild(ReportListTableComponent) reportListTable: ReportListTableComponent;

  parent: AuthorizedComponent;

  constructor(
    parent: AuthorizedComponent,
    private translate: TranslateService,
    private dynamicComponentService: DynamicComponentOutletService,
    private dialogService: DialogService,
    private externalCommunicationService: ReportListExternalCommunicationService,
    private userBasicDataService: UserBasicDataService,
    private reportListSignalRService: ReportListSignalRService
  ) {
    this.parent = parent;
    this.onChangeHeader('reportlist.titles.main');
  }

  ngOnInit(): void {
    this.loadOptionsPanel();
    this.addSubscriptions();
    if (this.parent.isAuthorized) {
      this.reportListSignalRService.initialize();
    }
  }

  onStateInitialized(state: ReportListState): void {
    this.externalCommunicationService.emitState(state);
  }

  onChangeHeader(translationKey: string): void {
    this.subscription.add(this.translate.stream(translationKey).subscribe((out: string) => (this.parent.header = out)));
  }

  onShowPatientOverview(patientId: string) {
    this.dialogService.open(ReportListPatientOverviewDialogComponent, this.getPatientOverviewDialogConfig(patientId));
  }

  onReportSearch(reportId: string): void {
    this.reportListTable.onFilterReports([reportId]);
  }

  isEditingUser(): boolean {
    return this.userBasicDataService.userData.getValue()?.role !== ROLES.VIEWER;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.dynamicComponentService.componentSource.next(null);
    this.externalCommunicationService.emitModuleName(null);
    this.reportListSignalRService.close();
  }

  private loadOptionsPanel() {
    this.dynamicComponentService.componentSource.next(ReportListOptionsPanelComponent);
  }

  private getPatientOverviewDialogConfig(patientId: string): DynamicDialogConfig {
    return {
      showHeader: false,
      width: '90%',
      dismissableMask: true,
      data: {
        patientId
      },
      styleClass: 'reportlist-patient-overview-dialog'
    };
  }

  private addSubscriptions() {
    this.subscription.add(this.externalCommunicationService.viewModeUpdateStream$.subscribe(() => this.reportListTable.onViewModeUpdate()));
    this.subscription.add(this.externalCommunicationService.cancelEditStream$.subscribe(() => this.reportListTable.onCancelEdit()));
    this.subscription.add(this.externalCommunicationService.fetchReportsStream$.subscribe(() => this.reportListTable.onFetchReports()));
    this.subscription.add(
      this.externalCommunicationService.moduleNameStream$.subscribe(moduleName => {
        this.moduleName = moduleName;
      })
    );
  }
}
