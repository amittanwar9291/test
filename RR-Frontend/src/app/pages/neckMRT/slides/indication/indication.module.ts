import { IndicationFidingComponent } from './indication-fiding/indication-fiding.component';
import { IndicationComponent } from './indication.component';
import { PreviousTherapiesComponent } from './previous-therapies/previous-therapies.component';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [IndicationComponent, IndicationFidingComponent, PreviousTherapiesComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommonImportsModule,
    TranslateModule,
    FindingColumnModule,
    CheckboxModule,
    MonthYearInputModule,
    RadioButtonModule,
    NumberInputModule,
    DropdownModule
  ]
})
export class IndicationModule {}
