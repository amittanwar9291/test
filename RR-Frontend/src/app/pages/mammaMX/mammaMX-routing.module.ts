import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideComponent } from '@layout/slide/slide.component';

import { ReportComponent } from '@sharedPages/report/report.component';

import { MedicalHistoryComponent } from './slides/medical-history/medical-history.component';
import { TechnologyComponent } from './slides/technology/technology.component';
import { MammographyParenchymaAnatomyComponent } from './slides/mammography-parenchyma-anatomy/mammography-parenchyma-anatomy.component';
import { PatientIndicationComponent } from './slides/patient-indication/patient-indication.component';
import { MammographyFindingComponent } from './slides/mammography-finding/mammography-finding.component';
import { UltrasoundMammaryGlandsComponent } from './slides/ultrasound-mammary-glands/ultrasound-mammary-glands.component';
import { UltrasoundFindingComponent } from './slides/ultrasound-finding/ultrasound-finding.component';
import { LymphNodesComponent } from './slides/lymph-nodes/lymph-nodes.component';
import { SummaryComponent } from './slides/summary/summary.component';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'patient-indication/:id', component: PatientIndicationComponent },
      { path: 'medical-history/:id', component: MedicalHistoryComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'mammography-parenchyma-anatomy/:id', component: MammographyParenchymaAnatomyComponent },
      { path: 'mammography-finding/:id', component: MammographyFindingComponent },
      { path: 'ultrasound-mammary-glands/:id', component: UltrasoundMammaryGlandsComponent },
      { path: 'ultrasound-finding/:id', component: UltrasoundFindingComponent },
      { path: 'lymph-nodes/:id', component: LymphNodesComponent },
      { path: 'summary/:id', component: SummaryComponent },
      { path: 'text-report/:id', component: ReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MammaMXRoutingModule {}
