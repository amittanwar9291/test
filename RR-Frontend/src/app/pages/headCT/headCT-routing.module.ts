import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideComponent } from 'app/shared/layout';

import { ReportComponent } from '../shared/report/report.component';
import { ExaminationComponent } from './slides/examination/examination.component';
import { AnamnesisComponent } from './slides/anamnesis/anamnesis.component';
import { TechnologyComponent } from './slides/technology/technology.component';
import { VesselsComponent } from './slides/vessels/vessels.component';
import { MeningesComponent } from './slides/meninges/meninges.component';
import { CortexComponent } from './slides/cortex/cortex.component';
import { BasalNucleiComponent } from './slides/basal-nuclei/basal-nuclei.component';
import { BrainstemCranialNervesComponent } from './slides/brainstem-cranial-nerves/brainstem-cranial-nerves.component';
import { CerebrospinalFluidSpaceComponent } from './slides/cerebrospinal-fluid-space/cerebrospinal-fluid-space.component';
import { SellarRegionComponent } from './slides/sellar-region/sellar-region.component';
import { FacialSkullComponent } from './slides/facial-skull/facial-skull.component';
import { SummaryComponent } from './slides/summary/summary.component';

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
      { path: 'cerebrospinal-fluid-space/:id', component: CerebrospinalFluidSpaceComponent },
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
export class HeadCTRoutingModule {}
