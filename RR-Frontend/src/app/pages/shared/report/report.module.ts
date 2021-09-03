import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

import { ExportDialogModule } from '../../../shared/dialogs/export-dialog/export-dialog.module';
import { DisclaimerDialogModule } from '../../../shared/dialogs/disclaimer-dialog/disclaimer-dialog.module';
import { CancelReportDialogModule } from '../../../shared/dialogs/cancel-report-dialog/cancel-report-dialog.module';
import { ExportDialogComponent } from '../../../shared/dialogs/export-dialog/export-dialog.component';
import { ReportComponent } from './report.component';
import { DisclaimerDialogComponent } from '../../../shared/dialogs/disclaimer-dialog/disclaimer-dialog.component';

import { LoaderModule } from '@controls/loader/loader.module';

import { ReportRouteDirective } from '@directives/report-route.directive';

import { CommonImportsModule } from '../../../shared/common-imports/common-imports.module';
import { PipeModule } from '@pipes/pipe.module';
import { ReportSummaryEditComponent } from '../../../shared/dialogs/report-summary-edit/report-summary-edit.component';
import { ReportSummaryEditModule } from '../../../shared/dialogs/report-summary-edit/report-summary-edit.module';

@NgModule({
  imports: [
    CommonModule,
    CheckboxModule,
    InputTextareaModule,
    TranslateModule,
    TabViewModule,
    ScrollPanelModule,
    DropdownModule,
    FormsModule,
    LoaderModule,
    DynamicDialogModule,
    ExportDialogModule,
    RouterModule,
    CommonImportsModule,
    DisclaimerDialogModule,
    PipeModule,
    CancelReportDialogModule,
    ReportSummaryEditModule
  ],
  declarations: [ReportComponent, ReportRouteDirective],
  entryComponents: [ExportDialogComponent, DisclaimerDialogComponent, ReportSummaryEditComponent]
})
export class ReportModule {}
