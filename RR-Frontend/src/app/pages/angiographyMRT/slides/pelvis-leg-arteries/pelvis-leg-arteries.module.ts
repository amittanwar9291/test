import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PelvisLegArteriesComponent } from './pelvis-leg-arteries.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { StandardVariantsComponent } from './standard-variants/standard-variants.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ArterioscleroticPavkComponent } from './arteriosclerotic-pavk/arteriosclerotic-pavk.component';
import { VascularStenosisComponent } from './arteriosclerotic-pavk/vascular-stenosis/vascular-stenosis.component';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { ChronicAortiliacComponent } from './arteriosclerotic-pavk/vascular-pathology/chronic-aortiliac/chronic-aortiliac.component';
import { ChronicFemoropoplitealComponent } from './arteriosclerotic-pavk/vascular-pathology/chronic-femoropopliteal/chronic-femoropopliteal.component';
import { ChronicCruropedalComponent } from './arteriosclerotic-pavk/vascular-pathology/chronic-cruropedal/chronic-cruropedal.component';
import { AneurysmComponent } from './aneurysm/aneurysm.component';
import { NonArterioscleroticPavkComponent } from './non-arteriosclerotic-pavk/non-arteriosclerotic-pavk.component';
import { AfterTherapyComponent } from './after-therapy/after-therapy.component';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

@NgModule({
  declarations: [
    PelvisLegArteriesComponent,
    StandardVariantsComponent,
    ArterioscleroticPavkComponent,
    VascularStenosisComponent,
    ChronicAortiliacComponent,
    ChronicFemoropoplitealComponent,
    ChronicCruropedalComponent,
    AneurysmComponent,
    NonArterioscleroticPavkComponent,
    AfterTherapyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    TranslateModule,
    CommonImportsModule,
    CheckboxModule,
    NumberInputModule,
    InfoIconModule,
    FindingColumnModule,
    DropdownModule
  ]
})
export class PelvisLegArteriesModule {}
