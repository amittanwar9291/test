import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'rr-warning-report-dialog',
  templateUrl: './warning-report-dialog.component.html',
  styleUrls: ['./warning-report-dialog.component.scss']
})
export class WarningReportDialogComponent implements OnInit {
  constructor(private ref: DynamicDialogRef, public translate: TranslateService) {}

  ngOnInit() {}

  close() {
    this.ref.close();
  }
}
