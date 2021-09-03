import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { SlideComponent } from '@layout/slide/slide.component';

import {
  ExaminationComponent,
  LarynxComponent,
  IndicationComponent,
  TechnologyComponent,
  PharynxComponent,
  SoftTissuesComponent,
  ThyroidComponent,
  LymphNodesComponent,
  VesselsComponent,
  BonesComponent,
  SummaryComponent
} from './slides';
import { ReportComponent } from '@sharedPages/report/report.component';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'examination/:id', component: ExaminationComponent },
      { path: 'indication/:id', component: IndicationComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'pharynx/:id', component: PharynxComponent },
      { path: 'larynx/:id', component: LarynxComponent },
      { path: 'soft-tissues/:id', component: SoftTissuesComponent },
      { path: 'thyroid/:id', component: ThyroidComponent },
      { path: 'lymph-nodes/:id', component: LymphNodesComponent },
      { path: 'vessels/:id', component: VesselsComponent },
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
export class NeckMRTRoutingModule {}
