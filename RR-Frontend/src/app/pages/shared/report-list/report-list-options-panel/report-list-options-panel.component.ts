import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ReportListViewMode } from '@enums/shared/report-list-view-mode.enum';
import { ReportListFilterColumn } from '@enums/shared/report-list-filter-column.enum';
import { ReportListService } from '@services/shared/report-list/report-list.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { ReportListExternalCommunicationService } from '@services/shared/report-list/report-list-external-communication.service';
import { ReportListState } from '@models/shared/report-list/report-list-state.model';
import { ReportListOptionsUiModel } from '@models/shared/report-list/report-list-options-ui.model';
import { ReportStatus } from '@enums/shared/report-status.enum';
import { ROLES } from '@models/shared/user/roles';

@Component({
  selector: 'rr-report-list-options-panel',
  templateUrl: './report-list-options-panel.component.html',
  styleUrls: ['./report-list-options-panel.component.scss']
})
export class ReportListOptionsPanelComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  private userId: string;

  state = new ReportListState();
  filterSelections = new Map<ReportListFilterColumn, string[]>();
  statuses: DropdownModel[];
  examinations: DropdownModel[];
  users: DropdownModel[];

  filterColumns = ReportListFilterColumn;
  viewModes = ReportListViewMode;

  constructor(
    private translate: TranslateService,
    private externalCommunicationService: ReportListExternalCommunicationService,
    private reportListService: ReportListService,
    private userBasicDataService: UserBasicDataService
  ) {
    this.filterSelections[ReportListFilterColumn.Status] = [];
    this.filterSelections[ReportListFilterColumn.Examination] = [];
    this.filterSelections[ReportListFilterColumn.User] = [];
  }

  ngOnInit(): void {
    this.addSubscriptions();
    this.userId = this.userBasicDataService.userData.getValue()?.userId;
    if (this.isList()) {
      this.setDefaultFilter();
    }
  }

  handleCreateReport(): void {
    if (this.isList()) {
      this.state.viewMode = ReportListViewMode.New;
      this.externalCommunicationService.emitViewModeUpdate();
    } else {
      if (this.state.isPatientLock) {
        this.releasePatientLock();
      } else {
        this.externalCommunicationService.emitCancelEdit();
        this.state.viewMode = ReportListViewMode.List;
        this.externalCommunicationService.emitViewModeUpdate();
      }
    }
  }

  handleSearchReport(): void {
    if (this.isSearch()) {
      if (this.state.isPatientLock) {
        this.releasePatientLock();
      } else {
        this.state.viewMode = ReportListViewMode.List;
        this.externalCommunicationService.emitViewModeUpdate();
      }
    } else {
      if (this.isSearchActive()) {
        this.clearOptions();
      } else {
        this.state.viewMode = ReportListViewMode.Search;
        this.externalCommunicationService.emitViewModeUpdate();
      }
    }
  }

  isEnablingMode(...enablingModes: ReportListViewMode[]): boolean {
    return enablingModes.includes(this.state.viewMode);
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

  isNewOrClone(): boolean {
    return this.isNew() || this.isClone();
  }

  isSearch(): boolean {
    return this.state.viewMode === ReportListViewMode.Search;
  }

  isSearchActive(): boolean {
    return this.state.isSearchActive;
  }

  isSearchOrSearchActive(): boolean {
    return this.isSearch() || this.isSearchActive();
  }

  onFilterValueSelected(): void {
    this.updateState();
    this.externalCommunicationService.emitFetchReports();
  }

  toggleCurrentUserFilter(): void {
    if (this.isCurrentUserFilter()) {
      this.state.options.filter.reportOptions.userIds = [];
    } else {
      this.state.options.filter.reportOptions.userIds = [this.userId];
    }
    this.updateFilterSelections();
    this.externalCommunicationService.emitFetchReports();
  }

  refreshList(): void {
    this.externalCommunicationService.emitFetchReports();
  }

  clearOptions(): void {
    const options = new ReportListOptionsUiModel();
    this.state.isPatientLock = false;
    this.state.isSearchActive = false;
    this.reportListService.applyOptions(options, this.state.options);
    this.updateFilterSelections();
    this.externalCommunicationService.emitFetchReports();
  }

  isCurrentUserFilter(): boolean {
    return (
      this.state.options.filter.reportOptions.userIds.length === 1 && this.state.options.filter.reportOptions.userIds.includes(this.userId)
    );
  }

  isEditingUser(): boolean {
    return this.userBasicDataService.userData.getValue()?.role !== ROLES.VIEWER;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setDefaultFilter(): void {
    if (this.userId) {
      this.state.options.filter.reportOptions.userIds = [this.userId];
    }
    this.state.options.filter.reportOptions.reportStatuses = [ReportStatus.Open, ReportStatus.InProgress];
    this.updateFilterSelections();
    this.externalCommunicationService.emitFetchReports();
  }

  private releasePatientLock(): void {
    this.state.isPatientLock = false;
    this.externalCommunicationService.emitLockPatientUpdate();
  }

  private addSubscriptions(): void {
    this.subscription.add(
      this.externalCommunicationService.stateStream$.subscribe(state => {
        this.state = state;
        this.updateFilterSelections();
      })
    );
    this.subscription.add(this.externalCommunicationService.editingUsersStream$.subscribe(users => (this.users = users)));
    this.subscription.add(
      this.translate.stream('reportlist.statuses').subscribe(out => (this.statuses = this.reportListService.mapToDropdownList(out)))
    );
    this.subscription.add(
      this.translate.stream('reportlist.examinations').subscribe(out => (this.examinations = this.reportListService.mapToDropdownList(out)))
    );
  }

  private updateFilterSelections(): void {
    this.filterSelections[ReportListFilterColumn.Status] = this.state.options.filter.reportOptions.reportStatuses;
    this.filterSelections[ReportListFilterColumn.Examination] = this.state.options.filter.reportOptions.examinations;
    this.filterSelections[ReportListFilterColumn.User] = this.state.options.filter.reportOptions.userIds;
  }

  private updateState(): void {
    this.state.options.filter.reportOptions.reportStatuses = this.filterSelections[ReportListFilterColumn.Status];
    this.state.options.filter.reportOptions.examinations = this.filterSelections[ReportListFilterColumn.Examination];
    this.state.options.filter.reportOptions.userIds = this.filterSelections[ReportListFilterColumn.User];
  }
}
