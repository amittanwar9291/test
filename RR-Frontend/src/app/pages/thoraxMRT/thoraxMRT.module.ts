import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { LayoutModule } from '@layout/layout.module';
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
import { ThoraxMRTRoutingModule } from './thoraxMRT-routing.module';
import {
  AnamnesisModule,
  BonesModule,
  LungParenchymaModule,
  MediastinumModule,
  PleuraModule,
  StudyAreaModule,
  SummaryModule,
  TechnologyModule
} from './slides';
import { ReportModule } from '@sharedPages/report/report.module';
import { ThoraxMrtHttpListService } from '@services/thoraxMRT/thorax-mrt-http-list.service';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/shared/mamma/breast/shared-mamma-breast-', suffix: '.json' },
    { prefix: './assets/i18n/shared/spine/localizers/shared-spine-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/shared/thorax/mediastinum/shared-thorax-mediastinum-', suffix: '.json' },
    { prefix: './assets/i18n/shared/thorax/localizers/shared-thorax-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyMRT/angiography-mrt-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxMRT/thorax-mrt-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxMRT/study-area/thorax-mrt-study-area-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxMRT/anamnesis/thorax-mrt-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxMRT/technology/thorax-mrt-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxMRT/mediastinum/thorax-mrt-mediastinum-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxMRT/lung-parenchyma-fokal/thorax-mrt-lung-parenchyma-fokal-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxMRT/pleura/thorax-mrt-pleura-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxMRT/bones/thorax-mrt-bones-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxMRT/summary/thorax-mrt-summary-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ThoraxMRTRoutingModule,
    StudyAreaModule,
    AnamnesisModule,
    TechnologyModule,
    MediastinumModule,
    LungParenchymaModule,
    PleuraModule,
    BonesModule,
    ReportModule,
    SummaryModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  providers: [
    ThoraxMrtHttpListService,
    SlideRequestService,
    {
      provide: SlideRequestService,
      useFactory: SlideRequestFactory,
      deps: [
        NavigationService,
        NavigationReportDataService,
        NavigationRestoreService,
        ModuleLifecycleService,
        ThoraxMrtHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class ThoraxMRTModule {}
