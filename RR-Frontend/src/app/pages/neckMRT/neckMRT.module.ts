import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { LayoutModule } from '@layout/layout.module';
import { ReportModule } from '../shared/report/report.module';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { NeckMrtHttpListService } from '@services/neckMRT/neck-mrt-http-list.service';
import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { NeckMRTRoutingModule } from './neckMRT-routing.module';

import {
  ExaminationModule,
  LarynxModule,
  IndicationModule,
  TechnologyModule,
  PharynxModule,
  SoftTissuesModule,
  ThyroidModule,
  VesselsModule,
  LymphNodesModule,
  BonesModule,
  SummaryModule
} from './slides';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/shared/spine/localizers/shared-spine-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/modules/neckMRT/neck-mrt-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/neckMRT/bones/neck-mrt-bones-', suffix: '.json' },
    { prefix: './assets/i18n/modules/neckMRT/vessels/neck-mrt-vessels-', suffix: '.json' },
    { prefix: './assets/i18n/modules/neckMRT/examination/neck-mrt-examination-', suffix: '.json' },
    { prefix: './assets/i18n/modules/neckMRT/indication/neck-mrt-indication-', suffix: '.json' },
    { prefix: './assets/i18n/modules/neckMRT/larynx/neck-mrt-larynx-', suffix: '.json' },
    { prefix: './assets/i18n/modules/neckMRT/lymph-nodes/neck-mrt-lymph-nodes-', suffix: '.json' },
    { prefix: './assets/i18n/modules/neckMRT/pharynx/neck-mrt-pharynx-', suffix: '.json' },
    { prefix: './assets/i18n/modules/neckMRT/soft-tissues/neck-mrt-soft-tissues-', suffix: '.json' },
    { prefix: './assets/i18n/modules/neckMRT/summary/neck-mrt-summary-', suffix: '.json' },
    { prefix: './assets/i18n/modules/neckMRT/technology/neck-mrt-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/neckMRT/thyroid/neck-mrt-thyroid-', suffix: '.json' },
    { prefix: './assets/i18n/shared/angiography/localizers/shared-angiography-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    NeckMRTRoutingModule,
    CommonModule,
    LayoutModule,
    ReportModule,
    ExaminationModule,
    LarynxModule,
    IndicationModule,
    TechnologyModule,
    PharynxModule,
    SoftTissuesModule,
    ThyroidModule,
    LymphNodesModule,
    VesselsModule,
    BonesModule,
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
    SlideRequestService,
    NeckMrtHttpListService,
    {
      provide: SlideRequestService,
      useFactory: SlideRequestFactory,
      deps: [
        NavigationService,
        NavigationReportDataService,
        NavigationRestoreService,
        ModuleLifecycleService,
        NeckMrtHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class NeckMRTModule {}
