import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DecimalPipe } from '@angular/common';

import { PageCorrelationComponent } from './page-correlation.component';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { NgxPaginationModule } from 'ngx-pagination';

import { TranslateModule } from '@ngx-translate/core';

import { DropdownModule } from 'primeng/dropdown';

import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommonImportsModule,
    NgxPaginationModule,
    TranslateModule,
    DropdownModule,
    DifferentialDiagnosisDropdownModule
  ],
  providers: [DecimalPipe],
  declarations: [PageCorrelationComponent],
  exports: [PageCorrelationComponent]
})
export class PageCorrelationModule {}
