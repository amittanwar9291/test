import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PipeModule } from '@pipes/pipe.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { StatisticsComponent } from './statistics.component';
import { DropdownModule } from 'primeng/dropdown';
import { DotsToCommasPipe } from '@pipes/dots-to-commas.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PipeModule,
    CommonImportsModule,
    TranslateModule,
    HttpClientModule,
    DropdownModule
  ],
  declarations: [StatisticsComponent, DotsToCommasPipe],
  exports: [StatisticsComponent]
})
export class StatisticsModule {}
