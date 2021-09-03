import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';

import { LocalizationComponent } from './localization.component';

import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { PatientInformationModule } from '../../../../shared/common-templates/patient-data/patient-information.module';
import { ElbowLocalizersModule } from '../../shared/elbow-localizers.module';

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
    PatientInformationModule,
    ElbowLocalizersModule
  ],
  declarations: [LocalizationComponent]
})
export class LocalizationModule {}
