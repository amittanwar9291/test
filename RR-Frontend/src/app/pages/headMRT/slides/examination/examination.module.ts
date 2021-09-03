import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationComponent } from './examination.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { CheckboxModule } from 'primeng/checkbox';
import { PatientInformationModule } from '@commonTemplates/patient-data/patient-information.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { DropdownModule } from 'primeng/dropdown';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    CheckboxModule,
    PatientInformationModule,
    FindingColumnModule,
    RadioButtonModule,
    NumberInputModule,
    DropdownModule,
    MonthYearInputModule
  ],
  declarations: [ExaminationComponent]
})
export class ExaminationModule {}
