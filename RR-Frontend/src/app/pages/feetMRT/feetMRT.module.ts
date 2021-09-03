import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import {
  AnamnesisModule,
  BonesModule,
  LocalizationModule,
  LigamentsAndTendonsModule,
  SoftTissueModule,
  SummaryModule,
  TechnologyModule
} from './slides';

import { LayoutModule } from '@layout/layout.module';
import { ReportModule } from '../shared/report/report.module';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';
import { NavigationService } from '@services/shared';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { FeetHttpListService } from '@services/feetMRT/feet-http-list.service';
import { FeetMRTRoutingModule } from './feetMRT-routing.module';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/modules/feetMRT/feet-mrt-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/feetMRT/localization/feet-mrt-localization-', suffix: '.json' },
    { prefix: './assets/i18n/modules/feetMRT/anamnesis/feet-mrt-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/feetMRT/technology/feet-mrt-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/feetMRT/bones/feet-mrt-bones-', suffix: '.json' },
    { prefix: './assets/i18n/modules/feetMRT/ligaments-and-tendons/feet-mrt-ligaments-and-tendons-', suffix: '.json' },
    { prefix: './assets/i18n/modules/feetMRT/soft-tissue/feet-mrt-soft-tissue-', suffix: '.json' },
    { prefix: './assets/i18n/modules/feetMRT/summary/feet-mrt-summary-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    FeetMRTRoutingModule,
    ReportModule,
    LocalizationModule,
    AnamnesisModule,
    TechnologyModule,
    BonesModule,
    LigamentsAndTendonsModule,
    SoftTissueModule,
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
    {
      provide: SlideRequestService,
      useFactory: SlideRequestFactory,
      deps: [
        NavigationService,
        NavigationReportDataService,
        NavigationRestoreService,
        ModuleLifecycleService,
        FeetHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class FeetMRTModule {}
