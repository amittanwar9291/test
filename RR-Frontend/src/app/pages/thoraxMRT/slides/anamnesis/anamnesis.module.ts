import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnamnesisComponent } from './anamnesis.component';
import { FormsModule } from '@angular/forms';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { TranslateModule } from '@ngx-translate/core';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

@NgModule({
  declarations: [AnamnesisComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommonImportsModule,
    TranslateModule,
    FindingColumnModule,
    CheckboxModule,
    MonthYearInputModule,
    RadioButtonModule,
    NumberInputModule
  ]
})
export class AnamnesisModule {}
