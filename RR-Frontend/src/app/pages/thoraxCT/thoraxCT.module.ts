import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { LayoutModule } from '@layout/layout.module';
import { ThoraxCTRoutingModule } from './thoraxCT-routing.module';
import {
  StudyAreaModule,
  AnamnesisModule,
  TechnologyModule,
  MediastinumModule,
  LungParenchymaModule,
  LungInterstitiumModule,
  SoftPartsModule,
  BonesModule,
  SummaryModule
} from './slides';
import { ReportModule } from '../shared/report/report.module';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';
import { NavigationService } from '@services/shared';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { ThoraxHttpListService } from '@services/thoraxCT/thorax-http-list.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/shared/spine/localizers/shared-spine-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/shared/thorax/mediastinum/shared-thorax-mediastinum-', suffix: '.json' },
    { prefix: './assets/i18n/shared/thorax/localizers/shared-thorax-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/shared/mamma/breast/shared-mamma-breast-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxCT/thorax-ct-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxCT/study-area/thorax-ct-study-area-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxCT/anamnesis/thorax-ct-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxCT/technology/thorax-ct-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxCT/mediastinum/thorax-ct-mediastinum-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxCT/lung-parenchyma-fokal/thorax-ct-lung-parenchyma-fokal-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxCT/lung-interstitium/thorax-ct-lung-interstitium-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxCT/soft-parts/thorax-ct-soft-parts-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxCT/bones/thorax-ct-bones-', suffix: '.json' },
    { prefix: './assets/i18n/modules/thoraxCT/summary/thorax-ct-summary-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ThoraxCTRoutingModule,
    StudyAreaModule,
    AnamnesisModule,
    TechnologyModule,
    MediastinumModule,
    LungParenchymaModule,
    LungInterstitiumModule,
    SoftPartsModule,
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
    ThoraxHttpListService,
    SlideRequestService,
    {
      provide: SlideRequestService,
      useFactory: SlideRequestFactory,
      deps: [
        NavigationService,
        NavigationReportDataService,
        NavigationRestoreService,
        ModuleLifecycleService,
        ThoraxHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class ThoraxCTModule {}
