import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';

import { LocalizationComponent } from './localization.component';
import { PelvisLocalizersModule } from '../../shared/pelvis.localizers.module';
import { PatientInformationModule } from '@commonTemplates/patient-data/patient-information.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CheckboxModule,
    CommonImportsModule,
    PatientInformationModule,
    PelvisLocalizersModule
  ],
  declarations: [LocalizationComponent]
})
export class LocalizationModule {}
