import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER, ErrorHandler, LOCALE_ID, Injector } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DialogService } from 'primeng/dynamicdialog';
import { UserButtonCommunicationService } from '@services/shared/user/user-button-communication.service';
import { LoadingScreenComponent } from '@layout/loading-screen/loading-screen.component';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { NgxElectronModule } from 'ngx-electron';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { GlobalErrorHandler } from '@abstractions/global-error-handler/global-error-handler';

import 'automapper-ts';
import { NavigationStreamService } from '@services/shared/navigation/navigation-stream.service';
import { AbstractNavigationStreamService } from '@abstractions/abstract-classes/navigation/navigation-stream';
import { AbstractNavigationReportDataService } from '@abstractions/abstract-classes/navigation/navigation-report-data';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { AbstractNavigationRestore } from '@abstractions/abstract-classes/navigation/navigation-restore';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { UnauthorizedModule } from './shared/unauthorized/unauthorized.module';
import { AuthorizedModule } from './shared/authorized/authorized.module';
import { AuthorizedComponent } from './shared/authorized/authorized.component';
import { ImportReportStudySelectionDialogModule } from './shared/dialogs/import-report-study-selection-dialog/import-report-study-selection-dialog.module';
import { ImportReportModuleSelectionDialogModule } from './shared/dialogs/import-report-module-selection-dialog/import-report-module-selection-dialog.module';
import { ReportRequiredFieldsDialogModule } from './shared/dialogs/report-required-fields-dialog/report-required-fields-dialog.module';
import { ToastrModule } from 'ngx-toastr';
import { RequestInterceptor } from './core/interceptors/request.interceptor';

import { LoadingScreenInterceptor } from './core/interceptors/loading.interceptor';
import { LocaleHelper } from '@abstractions/abstract-classes/locale-helper-service';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeFr from '@angular/common/locales/fr';
import { moduleRoutesDictionaries } from '@environments/pages-routes';
import { MissingTranslationHandlerRR } from '@abstractions/missing-translation-handler-rr/missing-translation-handler-rr';
import { ReportListService } from '@services/shared/report-list/report-list.service';
import { ServiceLocator } from '@services/shared/service-locator/service-locator';

registerLocaleData(localeDe);
registerLocaleData(localeFr);

export function appTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: 'assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: 'assets/i18n/shared/routing/routing-', suffix: '.json' },
    { prefix: 'assets/i18n/shared/report-list/report-list-', suffix: '.json' },
    { prefix: 'assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: 'assets/i18n/modules/user-management/user-management-', suffix: '.json' },
    { prefix: 'assets/i18n/modules/centerspecific-preferences/centerspecific-preferences-', suffix: '.json' },
    { prefix: 'assets/i18n/shared/settings/settings-', suffix: '.json' },
    { prefix: 'assets/i18n/shared/tracking-statistics/tracking-statistics-', suffix: '.json' },
    { prefix: 'assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' } // TODO should be moved to CenterspecificPreferencesModule
  ]);
}

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [AppComponent, LoadingScreenComponent],
  imports: [
    UnauthorizedModule,
    AuthorizedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxElectronModule,
    ImportReportStudySelectionDialogModule,
    ImportReportModuleSelectionDialogModule,
    ReportRequiredFieldsDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: appTranslateLoader,
        deps: [HttpClient]
      },
      isolate: false,
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MissingTranslationHandlerRR }
    }),
    ToastrModule.forRoot({
      timeOut: 10000,
      progressBar: false,
      preventDuplicates: true
    })
  ],
  providers: [
    AppConfig,
    UserButtonCommunicationService,
    NavigationStreamService,
    NavigationReportDataService,
    NavigationRestoreService,
    DialogService,
    AuthorizedComponent,
    ReportListService,
    {
      provide: LOCALE_ID,
      useFactory: () => LocaleHelper.getCurrentLocale()
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: AbstractNavigationStreamService,
      useExisting: NavigationStreamService
    },
    {
      provide: AbstractNavigationReportDataService,
      useExisting: NavigationReportDataService
    },
    {
      provide: AbstractNavigationRestore,
      useExisting: NavigationRestoreService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: 'moduleRoutes',
      useValue: moduleRoutesDictionaries
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   * The below code creates a global services injector that can be used to inject dependencies outside a class's constructor.
   * This can be cumbersome when e.g. every child class must pass the same parameters for a base class that needs this dependency.
   * You can see example of such application in the DynamicComponentHandlerClass.
   * More details: https://stackoverflow.com/a/42462579
   */
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}
