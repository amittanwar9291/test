import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideComponent } from 'app/shared/layout';

import {
  StudyAreaComponent,
  AnamnesisComponent,
  TechnologyComponent,
  MediastinumComponent,
  LungParenchymaComponent,
  LungInterstitiumComponent,
  SoftPartsComponent,
  BonesComponent,
  SummaryComponent
} from './slides';
import { ReportComponent } from '../shared/report/report.component';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'study-area/:id', component: StudyAreaComponent },
      { path: 'anamnesis/:id', component: AnamnesisComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'mediastinum/:id', component: MediastinumComponent },
      { path: 'lung-parenchyma/:id', component: LungParenchymaComponent },
      { path: 'lung-interstitium/:id', component: LungInterstitiumComponent },
      { path: 'soft-parts/:id', component: SoftPartsComponent },
      { path: 'bones/:id', component: BonesComponent },
      { path: 'summary/:id', component: SummaryComponent },
      { path: 'text-report/:id', component: ReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThoraxCTRoutingModule {}
