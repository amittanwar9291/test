import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideComponent } from 'app/shared/layout';

import { ReportComponent } from '../shared/report/report.component';
import {
  AnamnesisComponent,
  BasalNucleiComponent,
  CortexComponent,
  CerebrospinalFluidSpaceComponent,
  BrainstemCranialNervesComponent,
  ExaminationComponent,
  MeningesComponent,
  SellarRegionComponent,
  SummaryComponent,
  TechnologyComponent,
  VesselsComponent,
  FacialSkullComponent
} from './slides';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'examination/:id', component: ExaminationComponent },
      { path: 'anamnesis/:id', component: AnamnesisComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'vessels/:id', component: VesselsComponent },
      { path: 'meninges/:id', component: MeningesComponent },
      { path: 'cortex/:id', component: CortexComponent },
      { path: 'basal-nuclei/:id', component: BasalNucleiComponent },
      { path: 'brainstem-cranial-nerves/:id', component: BrainstemCranialNervesComponent },
      { path: 'cerebrospinal-fluid/:id', component: CerebrospinalFluidSpaceComponent },
      { path: 'sellar-region/:id', component: SellarRegionComponent },
      { path: 'facial-skull/:id', component: FacialSkullComponent },
      { path: 'summary/:id', component: SummaryComponent },
      { path: 'text-report/:id', component: ReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadMRTRoutingModule {}
