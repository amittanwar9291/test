import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SlideComponent } from 'app/shared/layout';

import { ReportComponent } from '../shared/report/report.component';
import { ExaminationRegionComponent } from './slides/examination-region/examination-region.component';
import { AnamnesisComponent } from './slides/anamnesis/anamnesis.component';
import { TechnologyComponent } from './slides/technology/technology.component';
import { LiverComponent } from './slides/liver/liver.component';
import { SpleenComponent } from './slides/spleen/spleen.component';
import { PancreasComponent } from './slides/pancreas/pancreas.component';
import { KidneysComponent } from './slides/kidneys/kidneys.component';
import { AdrenalGlandsComponent } from './slides/adrenal-glands/adrenal-glands.component';
import { GastrointestinalTractComponent } from './slides/gastrointestinal-tract/gastrointestinal-tract.component';
import { PeritonealCavityComponent } from './slides/peritoneal-cavity/peritoneal-cavity.component';
import { LymphaticSystemComponent } from './slides/lymphatic-system/lymphatic-system.component';
import { SummaryComponent } from './slides/summary/summary.component';

const routes: Routes = [
  {
    path: 'report',
    component: SlideComponent,
    children: [
      { path: 'examination-region/:id', component: ExaminationRegionComponent },
      { path: 'anamnesis/:id', component: AnamnesisComponent },
      { path: 'technology/:id', component: TechnologyComponent },
      { path: 'liver/:id', component: LiverComponent },
      { path: 'spleen/:id', component: SpleenComponent },
      { path: 'pancreas/:id', component: PancreasComponent },
      { path: 'kidneys/:id', component: KidneysComponent },
      { path: 'adrenal-glands/:id', component: AdrenalGlandsComponent },
      { path: 'gastrointestinal-tract/:id', component: GastrointestinalTractComponent },
      { path: 'peritoneal-cavity/:id', component: PeritonealCavityComponent },
      { path: 'lymphatic-system/:id', component: LymphaticSystemComponent },
      { path: 'summary/:id', component: SummaryComponent },
      { path: 'text-report/:id', component: ReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbdomenMRTRoutingModule {}
