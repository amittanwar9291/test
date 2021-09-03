import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { ReportModule } from '@sharedPages/report/report.module';
import { PresetListModule } from '@sharedPages/preset-list/preset-list.module';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { LayoutModule } from '@layout/layout.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { SlideRequestFactory } from '@abstractions/factories/slide-request.service.factory';

import { PatientIndicationModule } from './slides/patient-indication/patient-indication.module';
import { MedicalHistoryModule } from './slides/medical-history/medical-history.module';
import { TechnologyModule } from './slides/technology/technology.module';
import { MammographyParenchymaAnatomyModule } from './slides/mammography-parenchyma-anatomy/mammography-parenchyma-anatomy.module';
import { MammographyFindingModule } from './slides/mammography-finding/mammography-finding.module';
import { UltrasoundMammaryGlandsModule } from './slides/ultrasound-mammary-glands/ultrasound-mammary-glands.module';
import { UltrasoundFindingModule } from './slides/ultrasound-finding/ultrasound-finding.module';
import { LymphNodesModule } from './slides/lymph-nodes/lymph-nodes.module';
import { SummaryModule } from './slides/summary/summary.module';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { MammaMXHttpListService } from '@services/mammaMX/mammaMX-http-list.service';
import { MammaMXRoutingModule } from './mammaMX-routing.module';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/shared/shared-', suffix: '.json' },
    { prefix: './assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' },
    { prefix: './assets/i18n/shared/mamma/breast/shared-mamma-breast-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMX/mamma-mx-shared-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMX/patient-indication/mamma-mx-patient-indication-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMX/medical-history/mamma-mx-medical-history-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMX/technology/mamma-mx-technology-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMX/mammography-parenchyma-anatomy/mamma-mx-mammography-parenchyma-anatomy-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMX/mammography-finding/mamma-mx-mammography-finding-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMX/ultrasound-mammary-glands/mamma-mx-ultrasound-mammary-glands-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMX/ultrasound-finding/mamma-mx-ultrasound-finding-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMX/lymph-nodes/mamma-mx-lymph-nodes-', suffix: '.json' },
    { prefix: './assets/i18n/modules/mammaMX/summary/mamma-mx-summary-', suffix: '.json' },
    { prefix: './assets/i18n/modules/report/report-', suffix: '.json' },
    { prefix: './assets/i18n/shared/routing/routing-', suffix: '.json' }
  ]);
}

@NgModule({
  declarations: [],
  imports: [
    LayoutModule,
    CommonModule,
    ReportModule,
    PresetListModule,
    PatientIndicationModule,
    MedicalHistoryModule,
    TechnologyModule,
    MammographyParenchymaAnatomyModule,
    MammographyFindingModule,
    UltrasoundMammaryGlandsModule,
    UltrasoundFindingModule,
    LymphNodesModule,
    SummaryModule,
    MammaMXRoutingModule,
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
        MammaMXHttpListService,
        UserBasicDataService
      ]
    },
    ChangeDetectionService,
    NavigationSafeRerouteService,
    SlideCommonService
  ]
})
export class MammaMXModule {}
