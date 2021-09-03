import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PelvisLegArteriesComponent } from './pelvis-leg-arteries.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { DropdownModule } from 'primeng/dropdown';
import { ChronicCruropedalComponent } from './arteriosclerotic-pavk/vascular-pathology/chronic-cruropedal/chronic-cruropedal.component';
import { StandardVariantsComponent } from './standard-variants/standard-variants.component';
import { AfterTherapyComponent } from './after-therapy/after-therapy.component';
import { ArterioscleroticPavkComponent } from './arteriosclerotic-pavk/arteriosclerotic-pavk.component';
import { LocalizationDetailsComponent } from './arteriosclerotic-pavk/localization-details/localization-details';
import { ChronicAortiliacComponent } from './arteriosclerotic-pavk/vascular-pathology/chronic-aortiliac/chronic-aortiliac.component';
import { ChronicFemoropoplitealComponent } from './arteriosclerotic-pavk/vascular-pathology/chronic-femoropopliteal/chronic-femoropopliteal.component';
import { VascularDilatationComponent } from './vascular-dilatation/vascular-dilatation.component';
import { NonArterioscleroticPavkComponent } from './non-arteriosclerotic-pavk/non-arteriosclerotic-pavk.component';
import { DistalRefillingComponent } from './arteriosclerotic-pavk/distal-refilling/distal-refilling.component';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    TranslateModule,
    CommonImportsModule,
    CheckboxModule,
    TabViewModule,
    NumberInputModule,
    InfoIconModule,
    FindingColumnModule,
    DropdownModule
  ],
  declarations: [
    PelvisLegArteriesComponent,
    StandardVariantsComponent,
    ArterioscleroticPavkComponent,
    LocalizationDetailsComponent,
    ChronicAortiliacComponent,
    ChronicFemoropoplitealComponent,
    ChronicCruropedalComponent,
    VascularDilatationComponent,
    NonArterioscleroticPavkComponent,
    DistalRefillingComponent,
    AfterTherapyComponent
  ]
})
export class PelvisLegArteriesModule {}
