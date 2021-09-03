import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SlideComponent } from 'app/shared/layout';

import { ReportComponent } from '../shared/report/report.component';
import {
  UpperArteriesComponent,
  TechnologyComponent,
  PelvisLegArteriesComponent,
  SupraaorticVesselsComponent,
  LocalizationComponent,
  SummaryComponent,
  AortaComponent,
  AnamnesisComponent,
  AbdomenComponent
} from './slides';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'abdomen/:id', component: AbdomenComponent },
      { path: 'anamnesis/:id', component: AnamnesisComponent },
      { path: 'aorta/:id', component: AortaComponent },
      { path: 'summary/:id', component: SummaryComponent },
      { path: 'localization/:id', component: LocalizationComponent },
      { path: 'pelvis-leg-arteries/:id', component: PelvisLegArteriesComponent },
      { path: 'supraaortic-vessels/:id', component: SupraaorticVesselsComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'upper-arteries/:id', component: UpperArteriesComponent },
      { path: 'text-report/:id', component: ReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngiographyMRTRouting {}
