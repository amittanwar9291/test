import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TendinopathyComponent } from './tendinopathy.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { ExtensorTendonsComponent } from './extensor-tendons/extensor-tendons.component';
import { FlexorTendonsComponent } from './flexor-tendons/flexor-tendons.component';
import { DifferentialDiagnosisDropdownModule } from '@controls/differential-diagnosis-dropdown/differential-diagnosis-dropdown.module';
import { GanglionComponent } from './ganglion/ganglion.component';
import { SliderNumberTripleInputModule } from '@controls/slider-number-triple-input/slider-number-triple-input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    DropdownModule,
    CheckboxModule,
    InfoIconModule,
    NumberInputModule,
    FindingColumnModule,
    DifferentialDiagnosisDropdownModule,
    SliderNumberTripleInputModule
  ],
  declarations: [TendinopathyComponent, FlexorTendonsComponent, ExtensorTendonsComponent, GanglionComponent]
})
export class TendinopathyModule {}
