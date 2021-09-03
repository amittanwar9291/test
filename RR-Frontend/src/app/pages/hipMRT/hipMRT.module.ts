import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HipMRTRoutingModule } from './hipMRT-routing.module';
import {
  LocalizationModule,
  AnamnesisModule,
  TechnologyModule,
  BonesModule,
  CartilageAndLabrumModule,
  CapsuleAndLigamentsModule,
  MusclesAndTendonsModule,
  SoftTissueModule,
  SummaryModule
} from './slides';
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
import { HipHttpListService } from '@services/hipMRT/hip-http-list.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/modules/hipMRT/hip-mrt-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/hipMRT/localization/hip-mrt-localization-', suffix: '.json' },
    { prefix: './assets/i18n/modules/hipMRT/anamnesis/hip-mrt-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/hipMRT/technology/hip-mrt-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/hipMRT/bones/hip-mrt-bones-', suffix: '.json' },
    { prefix: './assets/i18n/modules/hipMRT/capsule-and-ligaments/hip-mrt-capsule-and-ligaments-', suffix: '.json' },
    { prefix: './assets/i18n/modules/hipMRT/cartilage-and-labrum/hip-mrt-cartilage-and-labrum-', suffix: '.json' },
    { prefix: './assets/i18n/modules/hipMRT/summary/hip-mrt-summary-', suffix: '.json' },
    { prefix: './assets/i18n/modules/hipMRT/muscles-and-tendons/hip-mrt-muscles-and-tendons-', suffix: '.json' },
    { prefix: './assets/i18n/modules/hipMRT/soft-tissues/hip-mrt-soft-tissues-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HipMRTRoutingModule,
    LocalizationModule,
    AnamnesisModule,
    TechnologyModule,
    BonesModule,
    CartilageAndLabrumModule,
    CapsuleAndLigamentsModule,
    MusclesAndTendonsModule,
    SoftTissueModule,
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
        HipHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class HipMRTModule {}
