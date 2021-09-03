import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { LayoutModule } from '@layout/layout.module';
import { PresetListModule } from '../shared/preset-list/preset-list.module';
import { ReportModule } from '../shared/report/report.module';
import { AngiographyCTRouting } from './angiographyCT-routing.module';
import {
  AbdomenModule,
  AnamnesisModule,
  AortaModule,
  CoronaryArteriesModule,
  LocalizationModule,
  PelvisLegArteriesModule,
  SoftTissueModule,
  SummaryModule,
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
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { AngiographyCtHttpListService } from '@services/angiographyCT/angiographyCT-http-list.service';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyCT/angiography-ct-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyCT/abdomen/angiography-ct-abdomen-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyCT/anamnesis/angiography-ct-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyCT/aorta/angiography-ct-aorta-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyCT/coronary-arteries/angiography-ct-coronary-arteries-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyCT/localization/angiography-ct-localization-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyCT/pelvis-leg-arteries/angiography-ct-pelvis-leg-arteries-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyCT/soft-tissue/angiography-ct-soft-tissue-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyCT/summary/angiography-ct-summary-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyCT/supraaotic-vessels/angiography-ct-supraaotic-vessels-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyCT/technology/angiography-ct-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/angiographyCT/upper-arteries/angiography-ct-upper-arteries-', suffix: '.json' },
    { prefix: './assets/i18n/shared/angiography/localizers/shared-angiography-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' },
    { prefix: './assets/i18n/shared/spine/localizers/shared-spine-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/shared/thorax/localizers/shared-thorax-localizers-', suffix: '.json' }
  ]);
}

@NgModule({
  declarations: [],
  imports: [
    AngiographyCTRouting,
    LayoutModule,
    CommonModule,
    AbdomenModule,
    AnamnesisModule,
    AortaModule,
    CoronaryArteriesModule,
    LocalizationModule,
    PelvisLegArteriesModule,
    SoftTissueModule,
    SummaryModule,
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
        AngiographyCtHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class AngiographyCTModule {}
