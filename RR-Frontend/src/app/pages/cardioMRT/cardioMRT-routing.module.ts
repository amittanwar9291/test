import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideComponent } from 'app/shared/layout';

import {
  AreaOfExaminationComponent,
  AnamnesisComponent,
  TechnologyComponent,
  FlapsComponent,
  FindingsVentriclesComponent,
  LeftVentricleComponent,
  RightVentricleComponent,
  SpatialRequirementComponent,
  SummaryComponent
} from './slides';
import { ReportComponent } from '../shared/report/report.component';
import { PericardiumVesselsComponent } from './slides/pericardium-vessels/pericardium-vessels.component';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'area-of-examination/:id', component: AreaOfExaminationComponent },
      { path: 'anamnesis/:id', component: AnamnesisComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'flaps/:id', component: FlapsComponent },
      { path: 'findings-ventricles/:id', component: FindingsVentriclesComponent },
      { path: 'left-ventricle/:id', component: LeftVentricleComponent },
      { path: 'right-ventricle/:id', component: RightVentricleComponent },
      { path: 'text-report/:id', component: ReportComponent },
      { path: 'spatial-requirement/:id', component: SpatialRequirementComponent },
      { path: 'pericardium-vessels/:id', component: PericardiumVesselsComponent },
      { path: 'summary/:id', component: SummaryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardioMRTRoutingModule {}
