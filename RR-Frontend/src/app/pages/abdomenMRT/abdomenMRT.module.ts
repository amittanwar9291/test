import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
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
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { AbdomenMRTRoutingModule } from './abdomenMRT-routing.module';
import { AbdomenMrtHttpListService } from '@services/abdomenMRT/abdomen-mrt-http-list.service';

import { ExaminationRegionModule } from './slides/examination-region/examination-region.module';
import { AdrenalGlandsModule } from './slides/adrenal-glands/adrenal-glands.module';
import { AnamnesisModule } from './slides/anamnesis/anamnesis.module';
import { GastrointestinalTractModule } from './slides/gastrointestinal-tract/gastrointestinal-tract.module';
import { KidneysModule } from './slides/kidneys/kidneys.module';
import { LiverModule } from './slides/liver/liver.module';
import { LymphaticSystemModule } from './slides/lymphatic-system/lymphatic-system.module';
import { PeritonealCavityModule } from './slides/peritoneal-cavity/peritoneal-cavity.module';
import { PancreasModule } from './slides/pancreas/pancreas.module';
import { SpleenModule } from './slides/spleen/spleen.module';
import { SummaryModule } from './slides/summary/summary.module';
import { TechnologyModule } from './slides/technology/technology.module';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/modules/abdomenMRT/abdomen-mrt-shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/spine/localizers/shared-spine-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/modules/abdomenMRT/examination-region/abdomen-mrt-examination-region-', suffix: '.json' },
    { prefix: './assets/i18n/modules/abdomenMRT/anamnesis/abdomen-mrt-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/abdomenMRT/technology/abdomen-mrt-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/abdomenMRT/liver/abdomen-mrt-liver-', suffix: '.json' },
    { prefix: './assets/i18n/modules/abdomenMRT/spleen/abdomen-mrt-spleen-', suffix: '.json' },
    { prefix: './assets/i18n/modules/abdomenMRT/pancreas/abdomen-mrt-pancreas-', suffix: '.json' },
    { prefix: './assets/i18n/modules/abdomenMRT/kidneys/abdomen-mrt-kidneys-', suffix: '.json' },
    { prefix: './assets/i18n/modules/abdomenMRT/adrenal-glands/abdomen-mrt-adrenal-glands-', suffix: '.json' },
    { prefix: './assets/i18n/modules/abdomenMRT/gastrointestinal-tract/abdomen-mrt-gastrointestinal-tract-', suffix: '.json' },
    { prefix: './assets/i18n/modules/abdomenMRT/peritoneal-cavity/abdomen-mrt-peritoneal-cavity-', suffix: '.json' },
    { prefix: './assets/i18n/modules/abdomenMRT/lymphatic-system/abdomen-mrt-lymphatic-system-', suffix: '.json' },
    { prefix: './assets/i18n/modules/abdomenMRT/summary/abdomen-mrt-summary-', suffix: '.json' },

    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    AbdomenMRTRoutingModule,
    LayoutModule,
    CommonModule,
    ReportModule,
    PresetListModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    }),
    ExaminationRegionModule,
    AdrenalGlandsModule,
    AnamnesisModule,
    GastrointestinalTractModule,
    KidneysModule,
    LiverModule,
    LymphaticSystemModule,
    PancreasModule,
    PeritonealCavityModule,
    SpleenModule,
    SummaryModule,
    TechnologyModule
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
        AbdomenMrtHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ],
  declarations: []
})
export class AbdomenMRTModule {}
