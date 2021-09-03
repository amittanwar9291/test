import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingStatisticsComponent } from './tracking-statistics.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  imports: [CommonModule, ButtonModule, ScrollPanelModule, TranslateModule],
  declarations: [TrackingStatisticsComponent]
})
export class TrackingStatisticsModule {}
