import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import * as spineCTContent from './slides';
import { ReportModule } from '../shared/report/report.module';
import { LayoutModule } from '@layout/layout.module';
import { SpineCTRoutingModule } from './spineCT-routing.module';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { SpineHttpListService } from '@services/spineCT/spine-http-list.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/shared/spine/localizers/shared-spine-localizers-', suffix: '.json' },
    { prefix: './assets/i18n/shared/spine/disc/shared-spine-disc-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineCT/spine-ct-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineCT/localization/spine-ct-localization-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineCT/anamnesis/spine-ct-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineCT/technology/spine-ct-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineCT/configuration/spine-ct-configuration-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineCT/disc/spine-ct-disc-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineCT/bones/spine-ct-bones-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineCT/myelon/spine-ct-myelon-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineCT/soft-tissues/spine-ct-soft-tissues-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineCT/sacroiliac-joint/spine-ct-sacroiliac-joint-', suffix: '.json' },
    { prefix: './assets/i18n/modules/spineCT/summary/spine-ct-summary-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    SpineCTRoutingModule,
    spineCTContent.BonesModule,
    spineCTContent.AnamnesisModule,
    spineCTContent.ConfigurationModule,
    spineCTContent.DiscModule,
    spineCTContent.SacroiliacJointModule,
    spineCTContent.LocalizationModule,
    spineCTContent.MyelonModule,
    spineCTContent.SoftTissuesModule,
    spineCTContent.TechnologyModule,
    spineCTContent.SummaryModule,
    LayoutModule,
    ReportModule,
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
    SpineHttpListService,
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
  ]
})
export class SpineCTModule {}
