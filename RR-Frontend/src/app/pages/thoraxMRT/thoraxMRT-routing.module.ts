import { RouterModule, Routes } from '@angular/router';
import { SlideComponent } from '@layout/slide/slide.component';
import {
  AnamnesisComponent,
  BonesComponent,
  LungParenchymaComponent,
  MediastinumComponent,
  PleuraComponent,
  StudyAreaComponent,
  SummaryComponent,
  TechnologyComponent
} from './slides';
import { ReportComponent } from '@sharedPages/report/report.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'study-area/:id', component: StudyAreaComponent },
      { path: 'anamnesis/:id', component: AnamnesisComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'mediastinum/:id', component: MediastinumComponent },
      { path: 'lung-parenchyma/:id', component: LungParenchymaComponent },
      { path: 'pleura/:id', component: PleuraComponent },
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
export class ThoraxMRTRoutingModule {}
