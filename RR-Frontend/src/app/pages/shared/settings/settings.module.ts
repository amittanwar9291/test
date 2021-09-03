import { SettingsComponent } from './settings.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { LayoutModule } from '@layout/layout.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { CenterspecificPreferencesModule } from '@sharedPages/centerspecific-preferences/centerspecific-preferences.module';
import { DynamicContainerBaseComponent } from '@abstractions/dynamic-base/dynamic-container-base.component';
import { DynamicBaseComponent } from '@abstractions/dynamic-base/dynamic-base.component';
import { CardsNavigationModule } from '@commonTemplates/technology/cards-navigation/cards-navigation.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { ResetDialogModule } from 'app/shared/dialogs/reset-dialog/reset-dialog.module';
import { CheckboxModule } from 'primeng/checkbox';
import { ImageCropperModule } from 'ngx-image-cropper';
import { PipeModule } from '@pipes/pipe.module';
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { InstituteSettingsComponent } from './institute-settings/institute-settings.component';
import { LicenseSettingsComponent } from './license-settings/license-settings.component';
import { ReportSessionsComponent } from './report-sessions/report-sessions.component';
import { ExportSettingsComponent } from './export-settings/export-settings.component';
import { ImportSettingsComponent } from './import-settings/import-settings.component';
import { DicomMapSettingsComponent } from './dicom-map-settings/dicom-map-settings.component';
import { HtmlReportComponent } from './html-report/html-report.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PanelMenuModule } from 'primeng/panelmenu';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserModule } from '@angular/platform-browser';
import { SettingsDialogsModule } from '../../../shared/dialogs/settings/settings-dialogs.module';
import { ImportLogoDialogComponent } from '../../../shared/dialogs/settings/import-logo-dialog/import-logo-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddOrEditDicomMapEntryDialogComponent } from '../../../shared/dialogs/settings/add-or-edit-dicom-map-entry-dialog/add-or-edit-dicom-map-entry-dialog.component';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/settings-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    SettingsDialogsModule,
    BrowserModule,
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    CheckboxModule,
    CommonImportsModule,
    CenterspecificPreferencesModule,
    CardsNavigationModule,
    NumberInputModule,
    FindingColumnModule,
    ScrollPanelModule,
    ResetDialogModule,
    FileUploadModule,
    HttpClientModule,
    ImageCropperModule,
    PipeModule,
    TabViewModule,
    InputTextareaModule,
    AngularEditorModule,
    ToolbarModule,
    PanelMenuModule,
    TableModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    }),
    NgCircleProgressModule.forRoot({
      outerStrokeWidth: 8,
      innerStrokeWidth: 8,
      radius: 75,
      unitsFontSize: '32',
      unitsFontWeight: '300',
      titleFontSize: '32',
      titleFontWeight: '300',
      space: -8,
      outerStrokeLinecap: 'square',
      showSubtitle: false,
      showZeroOuterStroke: false,
      showBackground: false,
      outerStrokeColor: '#ffffff'
    }),
    NgxPaginationModule
  ],
  declarations: [
    SettingsComponent,
    InstituteSettingsComponent,
    LicenseSettingsComponent,
    ReportSessionsComponent,
    ExportSettingsComponent,
    ImportSettingsComponent,
    DicomMapSettingsComponent,
    HtmlReportComponent
  ],
  entryComponents: [DynamicContainerBaseComponent, DynamicBaseComponent, ImportLogoDialogComponent, AddOrEditDicomMapEntryDialogComponent],
  providers: [DecimalPipe]
})
export class SettingsModule {}
