import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

import { CalendarInputModule } from '@controls/calendar-input/calendar-input.module';
import { ReportListHttpService } from '@services/shared/report-list/report-list-http.service';
import { ReportListComponent } from './report-list.component';
import { ReportListOptionsPanelComponent } from './report-list-options-panel/report-list-options-panel.component';
import { ReportListHeaderRowComponent } from './report-list-header-row/report-list-header-row.component';
import { ReportListEntryRowComponent } from '@sharedPages/report-list/report-list-entry-row/report-list-entry-row.component';
import { ReportListPaginationComponent } from './report-list-pagination/report-list-pagination.component';
import { ReportListHeaderCellComponent } from './report-list-header-cell/report-list-header-cell.component';
import { DevSearchBarComponent } from '@sharedPages/report-list/dev-search-bar/dev-search-bar.component';
import { ReportListEditRowComponent } from './report-list-edit-row/report-list-edit-row.component';
import { ReportListFilterSelectionComponent } from './report-list-filter-selection/report-list-filter-selection.component';
import { ReportListPatientOverviewDialogComponent } from './report-list-patient-overview-dialog/report-list-patient-overview-dialog.component';
import { ReportListTableComponent } from './report-list-table/report-list-table.component';
import { WarningReportDialogModule } from 'app/shared/dialogs/warning-report-dialog/warning-report-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ScrollPanelModule,
    DropdownModule,
    FormsModule,
    CalendarInputModule,
    InputTextModule,
    ButtonModule,
    AutoCompleteModule,
    TooltipModule,
    PaginatorModule,
    WarningReportDialogModule
  ],
  declarations: [
    ReportListComponent,
    ReportListOptionsPanelComponent,
    ReportListHeaderRowComponent,
    ReportListEntryRowComponent,
    ReportListPaginationComponent,
    ReportListHeaderCellComponent,
    DevSearchBarComponent,
    ReportListEditRowComponent,
    ReportListFilterSelectionComponent,
    ReportListPatientOverviewDialogComponent,
    ReportListTableComponent
  ],
  entryComponents: [ReportListOptionsPanelComponent],
  providers: [ReportListHttpService]
})
export class ReportListModule {}
