import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideComponent } from 'app/shared/layout';
import {
  AnatomyComponent,
  AnatomyEnhancementComponent,
  PatientIndicationComponent,
  AnamnesisComponent,
  LymphNodeComponent,
  BonesComponent,
  RatingComponent,
  DiagnosisComponent,
  TechnologyComponent
} from './slides';
import { ReportComponent } from '../shared/report/report.component';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'patient-indication/:id', component: PatientIndicationComponent },
      { path: 'anamnesis/:id', component: AnamnesisComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'anatomy/:id', component: AnatomyComponent },
      { path: 'anatomy-enhancement/:id', component: AnatomyEnhancementComponent },
      { path: 'diagnosis/:id', component: DiagnosisComponent },
      { path: 'lymph-node/:id', component: LymphNodeComponent },
      { path: 'bone/:id', component: BonesComponent },
      { path: 'rating/:id', component: RatingComponent },
      { path: 'text-report/:id', component: ReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MammaRoutingModule {}
