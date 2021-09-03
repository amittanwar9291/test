import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { AnamnesisComponent } from './anamnesis.component';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FeetLocalizersModule } from '../../shared/feet-localizers.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

@NgModule({
  declarations: [AnamnesisComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    MonthYearInputModule,
    CheckboxModule,
    RadioButtonModule,
    FeetLocalizersModule,
    FindingColumnModule
  ]
})
export class AnamnesisModule {}
