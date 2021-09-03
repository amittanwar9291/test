import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideComponent } from 'app/shared/layout';
import { ReportComponent } from '../shared/report/report.component';

import {
  AnamnesisComponent,
  ConfigurationComponent,
  LocalizationComponent,
  TechnologyComponent,
  BonesComponent,
  MyelonComponent,
  SoftTissuesComponent,
  SacroiliacJointComponent,
  SummaryComponent
} from './slides';
import { IntervertebralDiscJointsComponent } from './slides/intervertebral-disc-joints/intervertebral-disc-joints.component';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'localization/:id', component: LocalizationComponent },
      { path: 'anamnesis/:id', component: AnamnesisComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'configuration/:id', component: ConfigurationComponent },
      { path: 'disc/:id', component: IntervertebralDiscJointsComponent },
      { path: 'bones/:id', component: BonesComponent },
      { path: 'myelon/:id', component: MyelonComponent },
      { path: 'soft-tissues/:id', component: SoftTissuesComponent },
      { path: 'sacroiliac-joint/:id', component: SacroiliacJointComponent },
      { path: 'summary/:id', component: SummaryComponent },
      { path: 'text-report/:id', component: ReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpineMRTRoutingModule {}
