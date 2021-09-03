import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ReportListTableComponent } from '@sharedPages/report-list/report-list-table/report-list-table.component';

@Component({
  selector: 'rr-report-list-patient-overview-dialog',
  templateUrl: './report-list-patient-overview-dialog.component.html',
  styleUrls: ['./report-list-patient-overview-dialog.component.scss']
})
export class ReportListPatientOverviewDialogComponent implements AfterViewInit {
  @ViewChild(ReportListTableComponent) reportListTable: ReportListTableComponent;

  constructor(private ref: DynamicDialogRef, private config: DynamicDialogConfig) {}

  ngAfterViewInit(): void {
    this.fetchReports();
  }

  onOpenReport() {
    this.ref.close();
  }

  closeDialog() {
    this.ref.close();
  }

  private fetchReports(): void {
    this.reportListTable.state.isSearchActive = true;
    this.reportListTable.state.options.filter.patientOptions.patientId = this.config.data.patientId;
    this.reportListTable.onFetchReports();
  }
}
