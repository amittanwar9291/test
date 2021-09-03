import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnamnesisComponent } from './anamnesis.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { CheckboxModule } from 'primeng/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

@NgModule({
  declarations: [AnamnesisComponent],
  imports: [
    CommonModule,
    CommonImportsModule,
    FormsModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    MonthYearInputModule,
    NumberInputModule,
    MonthYearInputModule,
    InfoIconModule,
    FindingColumnModule
  ]
})
export class AnamnesisModule {}
