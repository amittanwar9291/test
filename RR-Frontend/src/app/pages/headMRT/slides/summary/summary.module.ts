import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { DiagnoseTabComponent } from './diagnose-tab/diagnose-tab.component';
import { ProcedureOrCourseTabComponent } from './procedure-or-course-tab/procedure-or-course-tab.component';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { MultipleSclerosisComponent } from './diagnose-tab/multiple-sclerosis/multiple-sclerosis.component';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { SignsOfIntracranialPressureComponent } from './diagnose-tab/signs-of-intracranial-pressure/signs-of-intracranial-pressure.component';
import { HemorrhageComponent } from './diagnose-tab/hemorrhage/hemorrhage.component';
import { NeurodegenerationComponent } from './diagnose-tab/neurodegeneration/neurodegeneration.component';
import { SeizureComponent } from './diagnose-tab/seizure/seizure.component';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    CheckboxModule,
    TabViewModule,
    FindingColumnModule,
    NumberInputModule,
    DifferentialDiagnosisDropdownModule,
    MonthYearInputModule,
    DropdownModule
  ],
  declarations: [
    SummaryComponent,
    DiagnoseTabComponent,
    ProcedureOrCourseTabComponent,
    MultipleSclerosisComponent,
    SignsOfIntracranialPressureComponent,
    HemorrhageComponent,
    NeurodegenerationComponent,
    SeizureComponent
  ]
})
export class SummaryModule {}
