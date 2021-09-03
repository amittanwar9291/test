import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { LayoutModule } from '@layout/layout.module';
import { PresetListModule } from '../shared/preset-list/preset-list.module';
import { ReportModule } from '../shared/report/report.module';

import { AngiographyMRTRouting } from './angiographyMRT-routing.module';
import {
  AbdomenModule,
  AnamnesisModule,
  AortaModule,
  SummaryModule,
  LocalizationModule,
  PelvisLegArteriesModule,
  SupraaorticVesselsModule,
  TechnologyModule,
  UpperArteriesModule
} from './slides';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';
import { NavigationService } from '@services/shared';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { AngiographyHttpListService } from '@services/angiography/angiography-http-list.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyMRT/angiography-mrt-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyMRT/abdomen/angiography-mrt-abdomen-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyMRT/anamnesis/angiography-mrt-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyMRT/aorta/angiography-mrt-aorta-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyMRT/summary/angiography-mrt-summary-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyMRT/localization/angiography-mrt-localization-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyMRT/pelvis-leg-arteries/angiography-mrt-pelvis-leg-arteries-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyMRT/supraaortic-vessels/angiography-mrt-supraaortic-vessels-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyMRT/technology/angiography-mrt-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyMRT/upper-arteries/angiography-mrt-upper-arteries-', suffix: '.json' },
    { prefix: './assets/i18n/shared/angiography/localizers/shared-angiography-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  declarations: [],
  imports: [
    AngiographyMRTRouting,
    LayoutModule,
    CommonModule,
    AbdomenModule,
    AnamnesisModule,
    AortaModule,
    SummaryModule,
    LocalizationModule,
    PelvisLegArteriesModule,
    SupraaorticVesselsModule,
    TechnologyModule,
    UpperArteriesModule,
    ReportModule,
    PresetListModule,
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
        AngiographyHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class AngiographyMRTModule {}
