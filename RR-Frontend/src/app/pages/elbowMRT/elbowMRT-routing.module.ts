import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { SlideComponent } from '@layout/slide/slide.component';

import {
  TechnologyComponent,
  AnamnesisComponent,
  LocalizationComponent,
  BonesComponent,
  CartilageLigamentsCapsuleComponent,
  TendonsAndMusclesComponent,
  SoftTissueComponent,
  SummaryComponent
} from './slides';
import { ReportComponent } from '@sharedPages/report/report.component';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'localization/:id', component: LocalizationComponent },
      { path: 'anamnesis/:id', component: AnamnesisComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'bones/:id', component: BonesComponent },
      { path: 'cartilage-ligaments-capsule/:id', component: CartilageLigamentsCapsuleComponent },
      { path: 'tendons-and-muscles/:id', component: TendonsAndMusclesComponent },
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
export class ElbowMRTRoutingModule {}
