import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportModule } from '../shared/report/report.module';
import { LayoutModule } from '@layout/layout.module';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { PresetListModule } from '../shared/preset-list/preset-list.module';
import { FormsModule } from '@angular/forms';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { ReportSessionSignalRService } from '@services/shared/report-session/report-session-signal-r.service';
import { HeadMRTRoutingModule } from './headMRT-routing.module';
import {
  VesselsModule,
  MeningesModule,
  CortexModule,
  BasalNucleiModule,
  BrainstemCranialNervesModule,
  CerebrospinalFluidSpaceModule,
  SellarRegionModule,
  FacialSkullModule,
  AnamnesisModule,
  TechnologyModule,
  SummaryModule,
  ExaminationModule
} from './slides';
import { HeadHttpListService } from '@services/headMRT/head-http-list.service';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/shared/head/head-localizers-', suffix: '.json' },

    { prefix: './assets/i18n/modules/headMRT/head-mrt-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headMRT/anamnesis/head-mrt-anamnesis-', suffix: '.json' },

    { prefix: './assets/i18n/modules/headMRT/cortex/head-mrt-cortex-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headMRT/basal-nuclei/head-mrt-basal-nuclei-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headMRT/cerebrospinal-fluid/head-mrt-cerebrospinal-fluid-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headMRT/brainstem-cranial-nerves/head-mrt-brainstem-cranial-nerves-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headMRT/examination/head-mrt-examination-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headMRT/meninges/head-mrt-meninges-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headMRT/sellar-region/head-mrt-sellar-region-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headMRT/summary/head-mrt-summary-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headMRT/technology/head-mrt-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headMRT/vessels/head-mrt-vessels-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headMRT/facial-skull/head-mrt-facial-skull-', suffix: '.json' },

    { prefix: './assets/i18n/shared/head/shared-head-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/shared/angiography/localizers/shared-angiography-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeadMRTRoutingModule,
    ExaminationModule,
    AnamnesisModule,
    TechnologyModule,
    VesselsModule,
    MeningesModule,
    CortexModule,
    BasalNucleiModule,
    BrainstemCranialNervesModule,
    CerebrospinalFluidSpaceModule,
    SellarRegionModule,
    FacialSkullModule,
    SummaryModule,
    LayoutModule,
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
        HeadHttpListService,
        UserBasicDataService,
        ReportSessionSignalRService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class HeadMRTModule {}
