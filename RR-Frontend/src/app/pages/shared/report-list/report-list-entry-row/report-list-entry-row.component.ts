import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ReportStatus } from '@enums/shared/report-status.enum';
import { IOpenReportData } from '@interfaces/report-list/open-report-data.interface';
import { ReportPatientUiModel } from '@models/shared/report/report-patient-ui.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ReportListService } from '@services/shared/report-list/report-list.service';
import { ReportListViewMode } from '@enums/shared/report-list-view-mode.enum';
import { ReportListState } from '@models/shared/report-list/report-list-state.model';
import { mapValues } from 'lodash';
import { DialogService } from 'primeng/dynamicdialog';
import { WarningReportDialogComponent } from 'app/shared/dialogs/warning-report-dialog/warning-report-dialog.component';

@Component({
  selector: 'rr-report-list-entry-row',
  templateUrl: './report-list-entry-row.component.html',
  styleUrls: ['./report-list-entry-row.component.scss']
})
export class ReportListEntryRowComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  @Input() state = new ReportListState();
  @Input() report: ReportPatientUiModel;
  @Input() isCloneable;
  @Input() isDialog: boolean;
  @Output() cloneReport = new EventEmitter<ReportPatientUiModel>();
  @Output() openReport = new EventEmitter<IOpenReportData>();
  @Output() showPatientOverview = new EventEmitter();
  dateFormat: string;

  reportStatuses = ReportStatus;
  viewModes = ReportListViewMode;
  moduleNames: object;
  statusTranslations: any;

  constructor(private translate: TranslateService, private reportListService: ReportListService, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.addSubscriptions();
  }

  getPatientName(): string {
    return this.reportListService.getPatientName(this.report.patient);
  }

  isList(): boolean {
    return this.state.viewMode === ReportListViewMode.List;
  }

  emitCloneReport(): void {
    if (this.isCloneable) {
      this.cloneReport.emit(this.report);
    }
  }

  emitOpenReport(): void {
    const data: IOpenReportData = {
      reportId: this.report.report.id,
      moduleType: this.report.report.examinationType,
      reportStatus: this.report.report.status
    };
    if (
      this.report.report.status === ReportStatus.Approved ||
      this.report.report.status === ReportStatus.Completed ||
      this.report.report.status === ReportStatus.Exported
    ) {
      this.dialogService
        .open(WarningReportDialogComponent, {
          showHeader: false
        })
        .onClose.subscribe(() => {
          this.openReport.emit(data);
        });
    } else {
      this.openReport.emit(data);
    }
  }

  emitShowPatientOverview() {
    if (!this.isDialog) {
      this.showPatientOverview.emit();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  getModuleNameTranslation(module: string) {
    return this.moduleNames ? this.moduleNames[module] : '';
  }

  getStatusTranslation(key: string) {
    return this.statusTranslations ? this.statusTranslations[key] || '' : '';
  }

  private addSubscriptions() {
    this.subscriptions.push(this.translate.stream('reportlist.dateFormat').subscribe(format => (this.dateFormat = format)));
    this.subscriptions.push(
      this.translate.stream('routing.modules').subscribe(out => {
        this.moduleNames = mapValues(out, elem => elem.replace('\n', ''));
      })
    );
    this.subscriptions.push(this.translate.stream('reportlist.statusEnum').subscribe(out => (this.statusTranslations = out)));
  }
}
