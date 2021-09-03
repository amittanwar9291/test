import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { LayoutModule } from '@layout/layout.module';
import { CardioMRTRoutingModule } from './cardioMRT-routing.module';
import {
  AreaOfExaminationModule,
  AnamnesisModule,
  TechnologyModule,
  FlapsModule,
  FindingsVentriclesModule,
  LeftVentricleModule,
  RightVentricleModule,
  SpatialRequirementModule,
  SummaryModule
} from './slides';
import { ReportModule } from '../shared/report/report.module';
import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';
import { PericardiumVesselsModule } from './slides/pericardium-vessels/pericardium-vessels.module';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { CardioHttpListService } from '@services/cardioMRT/cardio-http-list.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/modules/cardioMRT/area-of-examination/cardio-mrt-area-of-examination-', suffix: '.json' },
    { prefix: './assets/i18n/modules/cardioMRT/anamnesis/cardio-mrt-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/cardioMRT/technology/cardio-mrt-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/cardioMRT/flaps/cardio-mrt-flaps-', suffix: '.json' },
    { prefix: './assets/i18n/modules/cardioMRT/findings-ventricles/cardio-mrt-findings-ventricles-', suffix: '.json' },
    { prefix: './assets/i18n/modules/cardioMRT/left-ventricle/cardio-mrt-left-ventricle-', suffix: '.json' },
    { prefix: './assets/i18n/modules/cardioMRT/right-ventricle/cardio-mrt-right-ventricle-', suffix: '.json' },
    { prefix: './assets/i18n/modules/cardioMRT/spatial-requirement/cardio-mrt-spatial-requirement-', suffix: '.json' },
    { prefix: './assets/i18n/modules/cardioMRT/pericardium-vessels/cardio-mrt-pericardium-vessels-', suffix: '.json' },
    { prefix: './assets/i18n/modules/cardioMRT/summary/cardio-mrt-summary-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    CardioMRTRoutingModule,
    AreaOfExaminationModule,
    AnamnesisModule,
    TechnologyModule,
    FlapsModule,
    FindingsVentriclesModule,
    LeftVentricleModule,
    SpatialRequirementModule,
    ReportModule,
    MultiValueDropdownModule,
    RightVentricleModule,
    PericardiumVesselsModule,
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
        CardioHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class CardioMRTModule {}
