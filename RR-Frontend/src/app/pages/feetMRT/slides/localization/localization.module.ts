import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';
import { LocalizationComponent } from './localization.component';
import { PatientInformationModule } from '../../../../shared/common-templates/patient-data/patient-information.module';
import { FeetLocalizersModule } from '../../shared/feet-localizers.module';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [LocalizationComponent],
  imports: [CommonModule, FormsModule, TranslateModule, CommonImportsModule, PatientInformationModule, FeetLocalizersModule, CheckboxModule]
})
export class LocalizationModule {}
