import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ScrollPanel } from 'primeng/scrollpanel';

import { IOpenReportData } from '@interfaces/report-list/open-report-data.interface';
import { ReportPatientUiModel } from '@models/shared/report/report-patient-ui.model';
import { ReportListViewMode } from '@enums/shared/report-list-view-mode.enum';
import { ReportListItemUiModel } from '@models/shared/report/report-list-item-ui.model';
import { ReportUiModel } from '@models/shared/report';
import { Guid } from '@models/shared/guid/guid';
import { PatientUiModel } from '@models/shared/patient/patient-ui.model';
import { ReportStatus } from '@enums/shared/report-status.enum';
import { TranslateService } from '@ngx-translate/core';
import { ReportListService } from '@services/shared/report-list/report-list.service';
import { ReportListHttpService } from '@services/shared/report-list/report-list-http.service';
import { ReportHttpService } from '@services/shared/navigation/report-http.service';
import { PatientDataHttpService } from '@services/shared/patient-data/patient-data-http.service';
import { LoggingService, NavigationService } from '@services/shared';
import { ReportListInternalCommunicationService } from '@services/shared/report-list/report-list-internal-communication.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ReportListExternalCommunicationService } from '@services/shared/report-list/report-list-external-communication.service';
import { ReportListState } from '@models/shared/report-list/report-list-state.model';
import { UpdateListEntryData } from '@models/shared/report-list/update-list-entry-data.model';

@Component({
  selector: 'rr-report-list-table',
  templateUrl: './report-list-table.component.html',
  styleUrls: ['./report-list-table.component.scss'],
  providers: [ReportListInternalCommunicationService]
})
export class ReportListTableComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  @ViewChild('scrollPanel') scrollPanel: ScrollPanel;
  @Input() isCreational: boolean;
  @Input() isCloneable: boolean;
  @Input() isSearchable: boolean;
  @Input() isDialog: boolean;
  @Input() moduleName?: string;
  @Output() changeHeader = new EventEmitter<string>();
  @Output() openReport = new EventEmitter();
  @Output() showPatientOverview = new EventEmitter<string>();
  @Output() stateInitialized = new EventEmitter<ReportListState>();
  state = new ReportListState();
  reports: ReportPatientUiModel[];
  clonedModel: ReportPatientUiModel;
  editModel = new ReportListItemUiModel();

  viewModes = ReportListViewMode;

  constructor(
    private translate: TranslateService,
    private reportListService: ReportListService,
    private reportListHttpService: ReportListHttpService,
    private reportHttpService: ReportHttpService,
    private patientDataHttpService: PatientDataHttpService,
    private navigationService: NavigationService,
    private internalCommunicationService: ReportListInternalCommunicationService,
    private externalCommunicationService: ReportListExternalCommunicationService,
    private userBasicDataService: UserBasicDataService,
    private toastMessageService: ToastMessageService,
    private logger: LoggingService
  ) {
    automapper.createMap('ReportListItemUiModel', 'ReportUiModel').convertToType(ReportUiModel);
  }

  ngOnInit(): void {
    if (this.moduleName) {
      this.state.viewMode = ReportListViewMode.New;
      this.initiateEditModelWithModuleName();
    }
    this.stateInitialized.emit(this.state);
    this.addSubscriptions();
    if (this.userBasicDataService.userData.getValue()) {
      this.externalCommunicationService.fetchEditingUsers();
    }
  }

  onOpenReport(data: IOpenReportData): void {
    this.navigationService.navigateToLastSaved(data.reportId, data.moduleType).then(() => {
      if (data.reportStatus === ReportStatus.Open) {
        this.reportHttpService.updateStatus(data.reportId, data.moduleType, ReportStatus.InProgress).subscribe(
          report => this.logger.info('REPORT_LIST', `Status of report ${report.id} updated to ${ReportStatus.InProgress}`),
          error => this.logger.error('REPORT_LIST', `Update status of report ${data.reportId} failed | ${error.message}`)
        );
      }
    });
    this.openReport.emit();
  }

  onCloneReport(report: ReportPatientUiModel): void {
    this.state.viewMode = ReportListViewMode.Clone;
    this.initiateCloningModels(report);
  }

  onFinishEditing(editModel: ReportListItemUiModel): void {
    switch (this.state.viewMode) {
      case ReportListViewMode.New:
      case ReportListViewMode.Clone:
        this.createReport(editModel);
        break;
      case ReportListViewMode.Search:
        this.setSearchOptions(editModel);
        this.onFetchReports();
        break;
    }
  }

  onShowPatientOverview(report: ReportPatientUiModel): void {
    this.showPatientOverview.emit(report.patient.id);
  }

  onCancelEdit(): void {
    this.editModel = new ReportListItemUiModel();
  }

  onViewModeUpdate(): void {
    switch (this.state.viewMode) {
      case ReportListViewMode.List:
        this.changeHeader.emit('reportlist.titles.main');
        this.onFetchReports();
        break;
      case ReportListViewMode.Clone:
        this.changeHeader.emit('reportlist.titles.new');
        break;
      case ReportListViewMode.New:
        this.changeHeader.emit('reportlist.titles.new');
        this.initiateEditModelForNew();
        break;
      case ReportListViewMode.Search:
        this.changeHeader.emit('reportlist.titles.search');
        this.initiateEditModelForSearch();
        break;
    }
  }

  onFetchReports(): void {
    this.subscription.add(
      this.reportListHttpService.getReportsWithPatient(this.state.options).subscribe(
        response => {
          this.reports = response.reportPatientList;
          this.reportListService.applyOptions(response.reportListOptions, this.state.options);
          this.state.viewMode = ReportListViewMode.List;
          this.internalCommunicationService.emitOptionsUpdate();
          this.scrollPanel.scrollTop(0);
        },
        error => {
          this.logger.error('REPORT_LIST', error.message);
          this.toastMessageService.showErrorToast(this.translate.instant('reportlist.messages.loadReportsFailed'));
        }
      )
    );
  }

  onFilterReports(reportIds: string[]): void {
    this.reports = this.reports.filter(report => reportIds.includes(report.report.id));
  }

  isList(): boolean {
    return this.state.viewMode === ReportListViewMode.List;
  }

  isNew(): boolean {
    return this.state.viewMode === ReportListViewMode.New;
  }

  isClone(): boolean {
    return this.state.viewMode === ReportListViewMode.Clone;
  }

  isSearch(): boolean {
    return this.state.viewMode === ReportListViewMode.Search;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private addSubscriptions(): void {
    this.subscription.add(this.internalCommunicationService.viewModeUpdateStream$.subscribe(() => this.onViewModeUpdate()));
    this.subscription.add(this.internalCommunicationService.fetchReportsStream$.subscribe(() => this.onFetchReports()));
    this.subscription.add(
      this.externalCommunicationService.updateReportStream$.subscribe((data: UpdateListEntryData) => this.updateReportIfInList(data))
    );
  }

  private createReport(editModel: ReportListItemUiModel): void {
    const creationObservable: Observable<ReportUiModel> = Guid.isEmpty(editModel.patientId)
      ? this.createPatientAndReportObservable(editModel)
      : this.createReportObservable(editModel);
    creationObservable.subscribe(
      report => {
        const openData: IOpenReportData = { reportId: report.id, moduleType: report.examinationType, reportStatus: report.status };
        this.onOpenReport(openData);
      },
      error => {
        this.logger.error('REPORT_LIST', error.message);
        this.toastMessageService.showErrorToast(this.translate.instant('reportlist.messages.createReportFailed'));
      }
    );
  }

  private createPatientAndReportObservable(editModel: ReportListItemUiModel): Observable<ReportUiModel> {
    const patientModel = new PatientUiModel();
    this.reportListService.mapListItemToPatient(editModel, patientModel);

    return this.patientDataHttpService.post(patientModel).pipe(
      switchMap(patient => {
        editModel.patientId = patient.id;

        return this.createReportObservable(editModel);
      })
    );
  }

  private createReportObservable(editModel: ReportListItemUiModel): Observable<ReportUiModel> {
    const reportModel: ReportUiModel = automapper.map('ReportListItemUiModel', 'ReportUiModel', editModel);

    return this.reportHttpService.createReport(reportModel);
  }

  private setSearchOptions(editModel: ReportListItemUiModel) {
    this.state.isSearchActive = true;
    this.reportListService.mapListItemToFilterOptions(editModel, this.state.options.filter);
  }

  private initiateCloningModels(report: ReportPatientUiModel): void {
    this.clonedModel = report;
    this.initiateEditModelForClone(report);
  }

  private initiateEditModelForClone(report: ReportPatientUiModel): void {
    this.editModel = new ReportListItemUiModel();
    this.editModel.status = ReportStatus.Open;
    this.editModel.findingsDate = new Date();
    this.reportListService.mapReportPatientToListItem(report, this.editModel);
  }

  private initiateEditModelForNew(): void {
    this.editModel = new ReportListItemUiModel();
    this.editModel.status = ReportStatus.Open;
    this.editModel.findingsDate = new Date();
    this.editModel.userLabel = this.userBasicDataService.userData.getValue().initial;
  }

  private initiateEditModelForSearch(): void {
    this.editModel = new ReportListItemUiModel();
  }

  private initiateEditModelWithModuleName(): void {
    this.initiateEditModelForNew();
    this.editModel.examinationType = this.moduleName;
  }

  private updateReportIfInList(data: UpdateListEntryData): void {
    const report = this.reports?.find(r => r.report.id === data.reportId);
    if (report) {
      report.report.status = data.status;
      report.report.isLocked = data.isLocked;
    }
  }
}
