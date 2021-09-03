import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { LayoutModule } from '@layout/layout.module';
import { ReportModule } from '@sharedPages/report/report.module';
import { PresetListModule } from '@sharedPages/preset-list/preset-list.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';
import { NavigationService } from '@services/shared';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { AbdomenCtHttpListService } from '@services/abdomenCT/abdomen-ct-http-list.service';
import { AbdomenCTRoutingModule } from './abdomenCT-routing.module';
import { AreaOfInvestigationModule } from './slides/area-of-investigation/area-of-investigation.module';
import { MedicalHistoryModule } from './slides/medical-history/medical-history.module';
import { TechnologyModule } from './slides/technology/technology.module';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },

    { prefix: './assets/i18n/modules/abdomenCT/abdomen-ct-shared-', suffix: '.json' },

    { prefix: './assets/i18n/modules/abdomenCT/area-of-investigation/abdomen-ct-area-of-investigation-', suffix: '.json' },
    { prefix: './assets/i18n/modules/abdomenCT/medical-history/abdomen-ct-medical-history-', suffix: '.json' },
    { prefix: './assets/i18n/modules/abdomenCT/technology/abdomen-ct-technology-', suffix: '.json' },

    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    AbdomenCTRoutingModule,
    LayoutModule,
    CommonModule,
    ReportModule,
    PresetListModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    }),
    AreaOfInvestigationModule,
    MedicalHistoryModule,
    TechnologyModule
  ],
  providers: [
    SlideRequestService,
    {
      provide: SlideRequestService,
      useFactory: SlideRequestFactory,
      deps: [
        NavigationService,
        NavigationReportDataService,
        NavigationRestoreService,
        ModuleLifecycleService,
        AbdomenCtHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ],
  declarations: []
})
export class AbdomenCTModule {}
