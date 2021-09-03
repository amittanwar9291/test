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
  AbdomenComponent,
  SoftTissueComponent,
  CoronaryArteriesComponent
} from './slides';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'localization/:id', component: LocalizationComponent },
      { path: 'anamnesis/:id', component: AnamnesisComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'coronary-arteries/:id', component: CoronaryArteriesComponent },
      { path: 'supraaortic-vessels/:id', component: SupraaorticVesselsComponent },
      { path: 'upper-arteries/:id', component: UpperArteriesComponent },
      { path: 'aorta/:id', component: AortaComponent },
      { path: 'abdomen/:id', component: AbdomenComponent },
      { path: 'pelvis-leg-arteries/:id', component: PelvisLegArteriesComponent },
      { path: 'soft-tisue/:id', component: SoftTissueComponent },
      { path: 'summary/:id', component: SummaryComponent },
      { path: 'text-report/:id', component: ReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngiographyCTRouting {}
