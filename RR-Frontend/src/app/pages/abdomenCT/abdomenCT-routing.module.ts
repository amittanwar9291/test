import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SlideComponent } from 'app/shared/layout';

import { ReportComponent } from '../shared/report/report.component';
import { AreaOfInvestigationComponent } from './slides/area-of-investigation/area-of-investigation.component';
import { MedicalHistoryComponent } from './slides/medical-history/medical-history.component';
import { TechnologyComponent } from './slides/technology/technology.component';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'area-of-investigation/:id', component: AreaOfInvestigationComponent },
      { path: 'medical-history/:id', component: MedicalHistoryComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'text-report/:id', component: ReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbdomenCTRoutingModule {}
