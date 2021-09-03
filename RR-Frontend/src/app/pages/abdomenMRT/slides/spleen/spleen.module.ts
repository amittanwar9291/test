import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { SpleenComponent } from './spleen.component';
import { StandardVariantsComponent } from './standard-variants/standard-variants.component';
import { SplenomegalyComponent } from './splenomegaly/splenomegaly.component';
import { MassComponent } from './mass/mass.component';
import { CharacterizationOneComponent } from './mass/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './mass/characterization-two/characterization-two.component';
import { SplenicInfarctionComponent } from './splenic-infarction/splenic-infarction.component';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';

@NgModule({
  declarations: [
    SpleenComponent,
    StandardVariantsComponent,
    SplenomegalyComponent,
    MassComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    SplenicInfarctionComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RadioButtonModule,
    CheckboxModule,
    TabViewModule,
    DropdownModule,
    FormsModule,
    FindingColumnModule,
    CommonImportsModule,
    NumberInputModule,
    SliderNumberTripleInputModule,
    DifferentialDiagnosisDropdownModule,
    ReferencePictureModule
  ]
})
export class SpleenModule {}
