import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@layout/layout.module';
import { ReportModule } from '@sharedPages/report/report.module';
import { PresetListModule } from '@sharedPages/preset-list/preset-list.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';
import { NavigationService } from '@services/shared';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { ReportSessionSignalRService } from '@services/shared/report-session/report-session-signal-r.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { HeadCTRoutingModule } from './headCT-routing.module';
import { ExaminationModule } from './slides/examination/examination.module';
import { AnamnesisModule } from './slides/anamnesis/anamnesis.module';
import { TechnologyModule } from './slides/technology/technology.module';
import { VesselsModule } from './slides/vessels/vessels.module';
import { HeadCTHttpListService } from '@services/headCT/headCT-http-list.service';
import { MeningesModule } from './slides/meninges/meninges.module';
import { CortexModule } from './slides/cortex/cortex.module';
import { BasalNucleiModule } from './slides/basal-nuclei/basal-nuclei.module';
import { BrainstemCranialNervesModule } from './slides/brainstem-cranial-nerves/brainstem-cranial-nerves.module';
import { CerebrospinalFluidSpaceModule } from './slides/cerebrospinal-fluid-space/cerebrospinal-fluid-space.module';
import { SellarRegionModule } from './slides/sellar-region/sellar-region.module';
import { FacialSkullModule } from './slides/facial-skull/facial-skull.module';
import { SummaryModule } from './slides/summary/summary.module';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/shared/head/head-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/shared/angiography/localizers/shared-angiography-localizers-', suffix: '.json' },

    { prefix: './assets/i18n/modules/headCT/head-ct-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headCT/examination/head-ct-examination-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headCT/anamnesis/head-ct-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headCT/technology/head-ct-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headCT/vessels/head-ct-vessels-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headCT/meninges/head-ct-meninges-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headCT/cortex/head-ct-cortex-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headCT/basal-nuclei/head-ct-basal-nuclei-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headCT/brainstem-cranial-nerves/head-ct-brainstem-cranial-nerves-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headCT/cerebrospinal-fluid-space/head-ct-cerebrospinal-fluid-space-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headCT/sellar-region/head-ct-sellar-region-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headCT/facial-skull/head-ct-facial-skull-', suffix: '.json' },
    { prefix: './assets/i18n/modules/headCT/summary/head-ct-summary-', suffix: '.json' },

    { prefix: './assets/i18n/shared/head/shared-head-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeadCTRoutingModule,
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
        HeadCTHttpListService,
        UserBasicDataService,
        ReportSessionSignalRService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class HeadCTModule {}
