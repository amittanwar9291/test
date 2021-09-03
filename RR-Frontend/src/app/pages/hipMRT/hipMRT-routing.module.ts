import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideComponent } from 'app/shared/layout';

import { ReportComponent } from '../shared/report/report.component';
import {
  AnamnesisComponent,
  TechnologyComponent,
  BonesComponent,
  LocalizationComponent,
  SummaryComponent,
  SoftTissueComponent,
  MusclesAndTendonsComponent,
  CapsuleAndLigamentsComponent,
  CartilageAndLabrumComponent
} from './slides';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'localization/:id', component: LocalizationComponent },
      { path: 'anamnesis/:id', component: AnamnesisComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'bones/:id', component: BonesComponent },
      { path: 'cartilage-and-labrum/:id', component: CartilageAndLabrumComponent },
      { path: 'capsule-and-ligaments/:id', component: CapsuleAndLigamentsComponent },
      { path: 'muscles-and-tendons/:id', component: MusclesAndTendonsComponent },
      { path: 'soft-tissue/:id', component: SoftTissueComponent },
      { path: 'summary/:id', component: SummaryComponent },
      { path: 'text-report/:id', component: ReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HipMRTRoutingModule {}
