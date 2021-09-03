import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { LayoutModule } from '@layout/layout.module';

import { PelvisRoutingModule } from './pelvisMRT-routing.module';
import { PresetListModule } from '../shared/preset-list/preset-list.module';
import { ReportModule } from '../shared/report/report.module';

import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';

import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { PelvisHttpListService } from '@services/pelvisMRT/pelvis-http-list.service';

import {
  AnamnesisModule,
  LocalizationModule,
  ProstateModule,
  TechnologyModule,
  MaleSexModule,
  FemaleSexModule,
  PelvicFloorModule,
  RectumModule,
  BladderModule,
  BonesModule,
  LymphNodesModule,
  SummaryModule
} from './slides';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: 'assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: 'assets/i18n/modules/pelvisMRT/pelvis-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/pelvisMRT/localization/pelvis-localization-', suffix: '.json' },
    { prefix: './assets/i18n/modules/pelvisMRT/anamnesis/pelvis-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/pelvisMRT/technology/pelvis-mrt-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/pelvisMRT/bladder/pelvis-bladder-', suffix: '.json' },
    { prefix: './assets/i18n/modules/pelvisMRT/bones/pelvis-bones-', suffix: '.json' },
    { prefix: './assets/i18n/modules/pelvisMRT/female-sex/pelvis-female-sex-', suffix: '.json' },
    { prefix: './assets/i18n/modules/pelvisMRT/pelvic-floor/pelvis-pelvic-floor-', suffix: '.json' },
    { prefix: './assets/i18n/modules/pelvisMRT/male-sex/pelvis-male-sex-', suffix: '.json' },
    { prefix: './assets/i18n/modules/pelvisMRT/prostate/pelvis-prostate-', suffix: '.json' },
    { prefix: './assets/i18n/modules/pelvisMRT/rectum/pelvis-rectum-', suffix: '.json' },
    { prefix: './assets/i18n/modules/pelvisMRT/lymph-nodes/pelvis-lymph-nodes-', suffix: '.json' },
    { prefix: './assets/i18n/modules/pelvisMRT/summary/summary-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    PelvisRoutingModule,
    LocalizationModule,
    AnamnesisModule,
    TechnologyModule,
    ProstateModule,
    MaleSexModule,
    FemaleSexModule,
    PelvicFloorModule,
    RectumModule,
    BladderModule,
    BonesModule,
    PresetListModule,
    ReportModule,
    LymphNodesModule,
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
    PelvisHttpListService,
    {
      provide: SlideRequestService,
      useFactory: SlideRequestFactory,
      deps: [
        NavigationService,
        NavigationReportDataService,
        NavigationRestoreService,
        ModuleLifecycleService,
        PelvisHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class PelvisMRTModule {}
