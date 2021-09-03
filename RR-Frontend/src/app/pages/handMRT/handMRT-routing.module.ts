import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { PresetListComponent } from '../shared/preset-list/preset-list.component';
import { ContainerComponent } from '@layout/container/container.component';
import { SlideComponent } from '@layout/slide/slide.component';
import {
  TechnologyComponent,
  AnamnesisComponent,
  LocalizationComponent,
  BonesComponent,
  CapsuleAndRibbonsComponent,
  TendinopathyComponent,
  NerveCompressionComponent,
  SoftTissueComponent,
  EvaluationComponent
} from './slides';
import { ReportComponent } from '@sharedPages/report/report.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [{ path: 'presets', component: PresetListComponent }]
  },
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'localization/:id', component: LocalizationComponent },
      { path: 'anamnesis/:id', component: AnamnesisComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'bones/:id', component: BonesComponent },
      { path: 'capsule-and-ribbons/:id', component: CapsuleAndRibbonsComponent },
      { path: 'tendinopathy/:id', component: TendinopathyComponent },
      { path: 'nerve-compression/:id', component: NerveCompressionComponent },
      { path: 'soft-tissue/:id', component: SoftTissueComponent },
      { path: 'evaluation/:id', component: EvaluationComponent },
      { path: 'text-report/:id', component: ReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HandMRTRoutingModule {}
