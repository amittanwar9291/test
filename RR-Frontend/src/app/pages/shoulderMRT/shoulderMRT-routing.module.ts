import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideComponent } from 'app/shared/layout';
import { ReportComponent } from '../shared/report/report.component';

import {
  LocalizationComponent,
  TechnologyComponent,
  AnamnesisComponent,
  BonesComponent,
  RotatorComponent,
  LabrumAndRibbonsComponent,
  JointComponent,
  SoftPartsComponent
} from './slides';
import { SummaryComponent } from './slides/summary/summary.component';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'localization/:id', component: LocalizationComponent },
      { path: 'anamnesis/:id', component: AnamnesisComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'bones/:id', component: BonesComponent },
      { path: 'rotator/:id', component: RotatorComponent },
      { path: 'labrum-and-ribbons/:id', component: LabrumAndRibbonsComponent },
      { path: 'joint/:id', component: JointComponent },
      { path: 'soft-parts/:id', component: SoftPartsComponent },
      { path: 'summary/:id', component: SummaryComponent },
      { path: 'text-report/:id', component: ReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoulderMRTRoutingModule {}
