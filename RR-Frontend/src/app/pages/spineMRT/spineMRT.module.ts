import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { LayoutModule } from '@layout/layout.module';

import { ReportModule } from '../shared/report/report.module';

import { SpineMRTRoutingModule } from './spineMRT-routing.module';

import {
  LocalizationModule,
  AnamnesisModule,
  TechnologyModule,
  ConfigurationModule,
  BonesModule,
  MyelonModule,
  SoftTissuesModule,
  SacroiliacJointModule,
  SummaryModule
} from './slides';

import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { SpineHttpListService } from '@services/spineMRT/spine-http-list.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { IntervertebralDiscJointsModule } from './slides/intervertebral-disc-joints/intervertebral-disc-joints.module';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/shared/spine/localizers/shared-spine-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/shared/spine/disc/shared-spine-disc-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineMRT/localization/spine-mrt-localization-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineMRT/anamnesis/spine-mrt-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineMRT/technology/spine-mrt-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineMRT/configuration/spine-mrt-configuration-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineMRT/intervertebral-disc-joints/spine-mrt-intervertebral-disc-joints-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineMRT/bones/spine-mrt-bones-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineMRT/myelon/spine-mrt-myelon-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineMRT/soft-tissues/spine-mrt-soft-tissues-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineMRT/sacroiliac-joint/spine-mrt-sacroiliac-joint-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineMRT/summary/spine-mrt-summary-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}
@NgModule({
  imports: [
    CommonModule,
    SpineMRTRoutingModule,
    LayoutModule,
    MultiValueDropdownModule,
    ReportModule,
    LocalizationModule,
    AnamnesisModule,
    TechnologyModule,
    ConfigurationModule,
    IntervertebralDiscJointsModule,
    BonesModule,
    MyelonModule,
    SoftTissuesModule,
    SacroiliacJointModule,
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
        SpineHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ],
  declarations: []
})
export class SpineMRTModule {}
