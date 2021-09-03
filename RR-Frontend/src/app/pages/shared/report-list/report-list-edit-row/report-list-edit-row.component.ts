import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { cloneDeep } from 'lodash';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { ReportListViewMode } from '@enums/shared/report-list-view-mode.enum';
import { ReportListService } from '@services/shared/report-list/report-list.service';
import { ReportStatus } from '@enums/shared/report-status.enum';
import { ReportListItemUiModel } from '@models/shared/report/report-list-item-ui.model';
import { PatientDataHttpService } from '@services/shared/patient-data/patient-data-http.service';
import { PatientUiModel } from '@models/shared/patient/patient-ui.model';
import { IReportListPatientSuggestion } from '@interfaces/report-list/report-list-patient-suggestion.interface';
import { nameof } from 'ts-simple-nameof';
import { Guid } from '@models/shared/guid/guid';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { ReportListExternalCommunicationService } from '@services/shared/report-list/report-list-external-communication.service';
import { ReportListState } from '@models/shared/report-list/report-list-state.model';

@Component({
  selector: 'rr-report-list-edit-row',
  templateUrl: './report-list-edit-row.component.html',
  styleUrls: ['./report-list-edit-row.component.scss']
})
export class ReportListEditRowComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  @Input() state = new ReportListState();
  @Input() editModel: ReportListItemUiModel;
  @Output() finishEditing = new EventEmitter<ReportListItemUiModel>();
  dateFormat: string;
  dateFormatPlaceholder: string;
  calendarDateFormat: string;
  birthDateMaxDate = new Date();
  examinations: DropdownModel[];
  genders: DropdownModel[];
  statuses: DropdownModel[];
  users: DropdownModel[];
  patientSuggestions: IReportListPatientSuggestion[];
  autocompleteMinLength = 2;

  viewModes = ReportListViewMode;
  reportStatuses = ReportStatus;

  constructor(
    private translate: TranslateService,
    private reportListService: ReportListService,
    private externalCommunicationService: ReportListExternalCommunicationService,
    private patientDataHttpService: PatientDataHttpService
  ) {}

  ngOnInit(): void {
    this.addSubscriptions();
  }

  isModelValid(): boolean {
    switch (this.state.viewMode) {
      case ReportListViewMode.New:
      case ReportListViewMode.Clone:
        return this.isValidForCreation();
      case ReportListViewMode.Search:
        return this.isValidForSearch();
      default:
        return false;
    }
  }

  isPatientEditable(): boolean {
    return (this.isNew() || this.isSearch()) && Guid.isEmpty(this.editModel.patientId);
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

  onFinishEdit(): void {
    if (this.isModelValid()) {
      this.setPatientName();
      this.finishEditing.emit(this.editModel);
    }
  }

  setPatientAge(): void {
    this.editModel.patientAge = this.reportListService.calculateAge(this.editModel.patientBirthDate);
  }

  searchFirstNameBySubString({ query: inputString }: any): void {
    this.patientDataHttpService.getBySubStringOfFirstName(inputString).subscribe(patients => {
      this.patientSuggestions = patients.map<IReportListPatientSuggestion>(patient => {
        return { display: this.getPatientSuggestionString(patient), patient };
      });
    });
  }

  searchLastNameBySubString({ query: inputString }: any): void {
    this.patientDataHttpService.getBySubStringOfLastName(inputString).subscribe(patients => {
      this.patientSuggestions = patients.map<IReportListPatientSuggestion>(patient => {
        return { display: this.getPatientSuggestionString(patient), patient };
      });
    });
  }

  selectPatientSuggestion(suggestion: IReportListPatientSuggestion): void {
    this.editModel.patientId = suggestion.patient.id;
    this.editModel.patientFirstName = suggestion.patient.firstName;
    this.editModel.patientLastName = suggestion.patient.lastName;
    this.editModel.patientBirthDate = suggestion.patient.birthDate;
    this.editModel.patientGender = suggestion.patient.gender;
    this.setPatientName();
    this.setPatientAge();
    this.state.isPatientLock = true;
    this.externalCommunicationService.emitLockPatientUpdate();
  }

  onLockPatientUpdate(): void {
    if (!this.state.isPatientLock) {
      this.resetPatientData();
    }
  }

  getDropdownPlaceholder(translateKey: string): string {
    return this.isSearch() ? '-' : this.translate.instant(translateKey);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private addSubscriptions(): void {
    this.subscription.add(this.translate.stream('reportlist.dateFormat').subscribe(format => (this.dateFormat = format)));
    this.subscription.add(
      this.translate.stream('reportlist.dateFormatPlaceholder').subscribe(format => (this.dateFormatPlaceholder = format))
    );
    this.subscription.add(this.translate.stream('reportlist.calendarDateFormat').subscribe(format => (this.calendarDateFormat = format)));
    this.subscription.add(
      this.translate
        .stream('reportlist.examinations')
        .subscribe(out => (this.examinations = this.reportListService.mapToEditExaminationDropdownList(out)))
    );
    this.subscription.add(
      this.translate.stream('reportlist.genders').subscribe(out => (this.genders = this.reportListService.mapToDropdownList(out)))
    );
    this.subscription.add(
      this.translate.stream('reportlist.statuses').subscribe(out => {
        this.statuses = this.reportListService.mapToDropdownList(out);
        this.statuses = this.statuses.filter(m => m.value !== ReportStatus.Unknown);
      })
    );
    this.subscription.add(
      this.externalCommunicationService.editingUsersStream$.subscribe(users => {
        this.users = cloneDeep(users);
        this.users = this.users.filter(m => m.value !== 'None');
      })
    );
    this.subscription.add(this.externalCommunicationService.lockPatientUpdateStream$.subscribe(() => this.onLockPatientUpdate()));
  }

  private getPatientSuggestionString(patient: PatientUiModel): string {
    return `${patient.firstName} ${patient.lastName}`;
  }

  private resetPatientData(): void {
    this.editModel.patientId = Guid.createEmpty();
    this.editModel.patientFirstName = '';
    this.editModel.patientLastName = '';
    this.editModel.patientName = '';
    this.editModel.patientGender = GenderTypeEnum.None;
    this.editModel.patientBirthDate = null;
    this.editModel.patientAge = 0;
  }

  private isValidForCreation(): boolean {
    return (
      this.getCreationRequiredFields().every(k => this.editModel[k]) &&
      this.editModel.status !== ReportStatus.Unknown &&
      this.editModel.patientGender !== GenderTypeEnum.None &&
      this.editModel.patientAge >= 0
    );
  }

  private isValidForSearch(): boolean {
    return (
      this.getSearchEnablingFields().some(k => this.editModel[k]) ||
      !Guid.isEmpty(this.editModel.userId) ||
      !Guid.isEmpty(this.editModel.patientId) ||
      this.editModel.status !== ReportStatus.Unknown ||
      this.editModel.patientGender !== GenderTypeEnum.None ||
      (this.editModel.patientAge && this.editModel.patientAge >= 0)
    );
  }

  private getCreationRequiredFields(): string[] {
    return [
      nameof<ReportListItemUiModel>(m => m.patientFirstName),
      nameof<ReportListItemUiModel>(m => m.patientLastName),
      nameof<ReportListItemUiModel>(m => m.patientGender),
      nameof<ReportListItemUiModel>(m => m.patientBirthDate),
      nameof<ReportListItemUiModel>(m => m.status),
      nameof<ReportListItemUiModel>(m => m.findingsDate),
      nameof<ReportListItemUiModel>(m => m.examinationType),
      nameof<ReportListItemUiModel>(m => m.examinationDate)
    ];
  }

  private getSearchEnablingFields(): string[] {
    return [
      nameof<ReportListItemUiModel>(m => m.patientFirstName),
      nameof<ReportListItemUiModel>(m => m.patientLastName),
      nameof<ReportListItemUiModel>(m => m.patientBirthDate),
      nameof<ReportListItemUiModel>(m => m.findingsDate),
      nameof<ReportListItemUiModel>(m => m.examinationType),
      nameof<ReportListItemUiModel>(m => m.examinationDate)
    ];
  }

  private setPatientName(): void {
    this.editModel.patientName = `${this.editModel.patientLastName}, ${this.editModel.patientFirstName}`;
  }
}
