import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { LayoutModule } from '@layout/layout.module';

import { ReportModule } from '../shared/report/report.module';

import { KneeMRTRoutingModule } from './kneeMRT-routing.module';
import { BmiCalculatorModule } from '@controls/bmi-calculator/bmi-calculator.module';

import {
  LocalizationModule,
  AnamnesisModule,
  TechnologyModule,
  BonesModule,
  RibbonsModule,
  OsteochondralInterfaceModule,
  PatellaModule,
  SoftPartsModule,
  SummaryModule
} from './slides';

import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { NavigationService } from '@services/shared';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { KneeHttpListService } from '@services/kneeMRT/knee-http-list.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/modules/kneeMRT/knee-mrt-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/kneeMRT/localization/knee-mrt-localization-', suffix: '.json' },
    { prefix: './assets/i18n/modules/kneeMRT/anamnesis/knee-mrt-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/kneeMRT/technology/knee-mrt-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/kneeMRT/bones/knee-mrt-bones-', suffix: '.json' },
    { prefix: './assets/i18n/modules/kneeMRT/ribbons/knee-mrt-ribbons-', suffix: '.json' },
    { prefix: './assets/i18n/modules/kneeMRT/osteochondral-interface/knee-mrt-osteochondral-interface-', suffix: '.json' },
    { prefix: './assets/i18n/modules/kneeMRT/patella/knee-mrt-patella-', suffix: '.json' },
    { prefix: './assets/i18n/modules/kneeMRT/soft-parts/knee-mrt-soft-parts-', suffix: '.json' },
    { prefix: './assets/i18n/modules/kneeMRT/summary/knee-mrt-summary-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    KneeMRTRoutingModule,
    LayoutModule,
    MultiValueDropdownModule,
    ReportModule,
    LocalizationModule,
    AnamnesisModule,
    TechnologyModule,
    BonesModule,
    RibbonsModule,
    OsteochondralInterfaceModule,
    PatellaModule,
    SoftPartsModule,
    SummaryModule,
    BmiCalculatorModule,
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
        KneeHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class KneeMRTModule {}
