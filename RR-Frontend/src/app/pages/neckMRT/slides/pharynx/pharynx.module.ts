import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';
import { ReferencePictureModule } from '@controls/reference-picture/reference-picture.module';
import { SignalSliderModule } from '@controls/signal-slider/signal-slider.module';
import { DropdownModule } from 'primeng/dropdown';
import { PharynxComponent } from './pharynx.component';
import { AnatomicVariantComponent } from './anatomic-variant/anatomic-variant.component';
import { MassComponent } from './mass/mass.component';
import { CharacterizationOneComponent } from './mass/characterization-one/characterization-one.component';
import { CharacterizationTwoComponent } from './mass/characterization-two/characterization-two.component';
import { CharacterizationThreeComponent } from './mass/characterization-three/characterization-three.component';
import { DifferentialDiagnosisComponent } from './mass/differential-diagnosis/differential-diagnosis.component';
@NgModule({
  declarations: [
    PharynxComponent,
    AnatomicVariantComponent,
    MassComponent,
    CharacterizationOneComponent,
    CharacterizationTwoComponent,
    CharacterizationThreeComponent,
    DifferentialDiagnosisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    CommonImportsModule,
    FindingColumnModule,
    CheckboxModule,
    TranslateModule,
    TabViewModule,
    DifferentialDiagnosisDropdownModule,
    NumberInputModule,
    SliderNumberTripleInputModule,
    ReferencePictureModule,
    DropdownModule,
    SignalSliderModule
  ]
})
export class PharynxModule {}
