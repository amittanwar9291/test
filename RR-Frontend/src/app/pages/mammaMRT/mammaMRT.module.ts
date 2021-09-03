import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import {
  PatientIndicationModule,
  AnamnesisModule,
  AnatomyModule,
  AnatomyEnhancementModule,
  LymphNodeModule,
  BonesModule,
  RatingModule,
  DiagnosisModule,
  TechnologyModule
} from './slides';

import { LayoutModule } from '@layout/layout.module';

import { BmiCalculatorModule } from '@controls/bmi-calculator/bmi-calculator.module';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';

import { PresetListModule } from '../shared/preset-list/preset-list.module';
import { MammaRoutingModule } from './mammaMRT-routing.module';
import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';
import { ReportModule } from '../shared/report/report.module';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { MammaHttpListService } from '@services/mammaMRT/mamma-http-list.service';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/shared/mamma/breast/shared-mamma-breast-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMRT/mamma-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMRT/patient-indication/mamma-mrt-patient-indication-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMRT/anamnesis/mamma-anamnesis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMRT/anatomy/mamma-anatomy-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMRT/rating/mamma-rating-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMRT/anatomy-enhancement/mamma-anatomy-enhancement-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMRT/bone/mamma-bone-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMRT/lymph-node/mamma-lymph-node-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMRT/diagnosis/mamma-diagnosis-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMRT/technology/mamma-mrt-technology-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MammaRoutingModule,
    PatientIndicationModule,
    AnamnesisModule,
    TechnologyModule,
    AnatomyModule,
    AnatomyEnhancementModule,
    LymphNodeModule,
    BonesModule,
    RatingModule,
    DiagnosisModule,
    MonthYearInputModule,
    MultiValueDropdownModule,
    PresetListModule,
    BmiCalculatorModule,
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
    SlideRequestService,
    MammaHttpListService,
    {
      provide: SlideRequestService,
      useFactory: SlideRequestFactory,
      deps: [
        NavigationService,
        NavigationReportDataService,
        NavigationRestoreService,
        ModuleLifecycleService,
        MammaHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class MammaMRTModule {}
