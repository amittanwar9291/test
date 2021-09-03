import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import {
  AnamnesisModule,
  BonesModule,
  LocalizationModule,
  TechnologyModule,
  CartilageLigamentsCapsuleModule,
  TendonsAndMusclesModule,
  SoftTissueModule,
  SummaryModule
} from './slides';

import { ElbowMRTRoutingModule } from './elbowMRT-routing.module';

import { LayoutModule } from '@layout/layout.module';

import { PresetListModule } from '../shared/preset-list/preset-list.module';
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
import { ElbowHttpListService } from '@services/elbowMRT/elbow-http-list.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/modules/elbowMRT/elbow-mrt-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/elbowMRT/localization/elbow-mrt-localization-', suffix: '.json' },
    { prefix: './assets/i18n/modules/elbowMRT/anamnesis/elbow-mrt-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/elbowMRT/technology/elbow-mrt-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/elbowMRT/bones/elbow-mrt-bones-', suffix: '.json' },
    { prefix: './assets/i18n/modules/elbowMRT/cartilage/elbow-mrt-cartilage-', suffix: '.json' },
    { prefix: './assets/i18n/modules/elbowMRT/tendons-and-muscles/elbow-mrt-tendons-and-muscles-', suffix: '.json' },
    { prefix: './assets/i18n/modules/elbowMRT/soft-tissue/elbow-mrt-soft-tissue-', suffix: '.json' },
    { prefix: './assets/i18n/modules/elbowMRT/summary/elbow-mrt-summary-', suffix: '.json' },
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
    ElbowMRTRoutingModule,
    TechnologyModule,
    BonesModule,
    CartilageLigamentsCapsuleModule,
    TendonsAndMusclesModule,
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
    ElbowHttpListService,
    {
      provide: SlideRequestService,
      useFactory: SlideRequestFactory,
      deps: [
        NavigationService,
        NavigationReportDataService,
        NavigationRestoreService,
        ModuleLifecycleService,
        ElbowHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class ElbowMRTModule {}
