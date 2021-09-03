import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TechnologyModule, AnamnesisModule, LocalizationModule, BonesModule, SoftTissueModule, EvaluationModule } from './slides';
import { HandMRTRoutingModule } from './handMRT-routing.module';
import { LayoutModule } from '@layout/layout.module';
import { PresetListModule } from '../shared/preset-list/preset-list.module';
import { ReportModule } from '../shared/report/report.module';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { HandHttpListService } from '@services/handMRT/hand-http-list.service';
import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/modules/handMRT/hand-mrt-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/handMRT/localization/hand-mrt-localization-', suffix: '.json' },
    { prefix: './assets/i18n/modules/handMRT/anamnesis/hand-mrt-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/handMRT/technology/hand-mrt-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/handMRT/bones/hand-mrt-bones-', suffix: '.json' },
    { prefix: './assets/i18n/modules/handMRT/capsule-and-ribbons/hand-mrt-capsule-and-ribbons-', suffix: '.json' },
    { prefix: './assets/i18n/modules/handMRT/tendinopathy/hand-mrt-tendinopathy-', suffix: '.json' },
    { prefix: './assets/i18n/modules/handMRT/nerve-compression/hand-mrt-nerve-compression-', suffix: '.json' },
    { prefix: './assets/i18n/modules/handMRT/soft-tissue/hand-mrt-soft-tissue-', suffix: '.json' },
    { prefix: './assets/i18n/modules/handMRT/evaluation/hand-mrt-evaluation-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ReportModule,
    PresetListModule,
    LocalizationModule,
    AnamnesisModule,
    HandMRTRoutingModule,
    TechnologyModule,
    SoftTissueModule,
    EvaluationModule,
    BonesModule,
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
    HandHttpListService,
    {
      provide: SlideRequestService,
      useFactory: SlideRequestFactory,
      deps: [
        NavigationService,
        NavigationReportDataService,
        NavigationRestoreService,
        ModuleLifecycleService,
        HandHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class HandMRTModule {}
