import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { LayoutModule } from '@layout/layout.module';

import { ReportModule } from '../shared/report/report.module';

import { ShoulderMRTRoutingModule } from './shoulderMRT-routing.module';

import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';
import {
  AnamnesisModule,
  TechnologyModule,
  LocalizationModule,
  BonesModule,
  RotatorModule,
  LabrumAndRibbonsModule,
  JointModule,
  SoftPartsModule,
  SummaryModule
} from './slides';

import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';

import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { ShoulderHttpListService } from '@services/shoulderMRT/shoulder-http-list.service';
import { NavigationService } from '@services/shared';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/modules/shoulderMRT/shoulder-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/shoulderMRT/localization/shoulder-localization-', suffix: '.json' },
    { prefix: './assets/i18n/modules/shoulderMRT/anamnesis/shoulder-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/shoulderMRT/technology/shoulderMRT-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/shoulderMRT/bones/shoulder-bones-', suffix: '.json' },
    { prefix: './assets/i18n/modules/shoulderMRT/rotator/shoulder-rotator-', suffix: '.json' },
    { prefix: './assets/i18n/modules/shoulderMRT/labrum-and-ribbons/labrum-and-ribbons-', suffix: '.json' },
    { prefix: './assets/i18n/modules/shoulderMRT/joint/joint-', suffix: '.json' },
    { prefix: './assets/i18n/modules/shoulderMRT/soft-parts/shoulder-soft-parts-', suffix: '.json' },
    { prefix: './assets/i18n/modules/shoulderMRT/summary/shoulder-summary-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    ShoulderMRTRoutingModule,
    MultiValueDropdownModule,
    ReportModule,
    AnamnesisModule,
    TechnologyModule,
    JointModule,
    ReportModule,
    LocalizationModule,
    SoftPartsModule,
    BonesModule,
    RotatorModule,
    SummaryModule,
    LabrumAndRibbonsModule,
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
    ShoulderHttpListService,
    {
      provide: SlideRequestService,
      useFactory: SlideRequestFactory,
      deps: [
        NavigationService,
        NavigationReportDataService,
        NavigationRestoreService,
        ModuleLifecycleService,
        ShoulderHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class ShoulderMRTModule {}
