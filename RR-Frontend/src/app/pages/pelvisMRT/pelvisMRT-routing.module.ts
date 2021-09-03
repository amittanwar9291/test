import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideComponent } from 'app/shared/layout';
import { LocalizationComponent } from './slides/localization/localization.component';
import { AnamnesisComponent } from './slides/anamnesis/anamnesis.component';
import { TechnologyComponent } from './slides/technology/technology.component';
import { ProstateComponent } from './slides/prostate/prostate.component';
import { MaleSexComponent } from './slides/male-sex/male-sex.component';
import { FemaleSexComponent } from './slides/female-sex/female-sex.component';
import { PelvicFloorComponent } from './slides/pelvic-floor/pelvic-floor.component';
import { RectumComponent } from './slides/rectum/rectum.component';
import { BladderComponent } from './slides/bladder/bladder.component';
import { BonesComponent } from './slides/bones/bones.component';
import { LymphNodesComponent } from './slides/lymph-nodes/lymph-nodes.component';
import { SummaryComponent } from './slides/summary/summary.component';
import { ReportComponent } from '@sharedPages/report/report.component';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'localization/:id', component: LocalizationComponent },
      { path: 'anamnesis/:id', component: AnamnesisComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'prostate/:id', component: ProstateComponent },
      { path: 'male-sex/:id', component: MaleSexComponent },
      { path: 'female-sex/:id', component: FemaleSexComponent },
      { path: 'pelvic-floor/:id', component: PelvicFloorComponent },
      { path: 'rectum/:id', component: RectumComponent },
      { path: 'bladder/:id', component: BladderComponent },
      { path: 'bones/:id', component: BonesComponent },
      { path: 'lymph-nodes/:id', component: LymphNodesComponent },
      { path: 'summary/:id', component: SummaryComponent },
      { path: 'text-report/:id', component: ReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PelvisRoutingModule {}
