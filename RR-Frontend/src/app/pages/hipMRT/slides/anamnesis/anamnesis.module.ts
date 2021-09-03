import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { AnamnesisComponent } from './anamnesis.component';
import { IndicationFindingsComponent } from './indication-findings/indication-findings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    CheckboxModule,
    NumberInputModule,
    MonthYearInputModule,
    TranslateModule,
    CommonImportsModule,
    FindingColumnModule
  ],
  declarations: [AnamnesisComponent, IndicationFindingsComponent]
})
export class AnamnesisModule {}
