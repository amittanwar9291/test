import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideComponent } from 'app/shared/layout';

import { ReportComponent } from '../shared/report/report.component';
import {
  LocalizationComponent,
  AnamnesisComponent,
  TechnologyComponent,
  BonesComponent,
  RibbonsComponent,
  OsteochondralInterfaceComponent,
  PatellaComponent,
  SoftPartsComponent,
  SummaryComponent
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
      { path: 'ribbons/:id', component: RibbonsComponent },
      { path: 'osteochondral-interface/:id', component: OsteochondralInterfaceComponent },
      { path: 'patella/:id', component: PatellaComponent },
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
export class KneeMRTRoutingModule {}
