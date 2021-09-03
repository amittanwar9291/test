import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';

import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { MonthYearInputComponent } from './month-year-input.component';

@NgModule({
  imports: [CommonModule, DropdownModule, FormsModule, TranslateModule, CommonImportsModule],
  declarations: [MonthYearInputComponent],
  exports: [MonthYearInputComponent]
})
export class MonthYearInputModule {}
