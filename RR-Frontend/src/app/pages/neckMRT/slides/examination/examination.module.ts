import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationComponent } from './examination.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { PatientInformationModule } from '@commonTemplates/patient-data/patient-information.module';
import { CommonImportsModule } from '../../../../shared/common-imports/common-imports.module';

@NgModule({
  declarations: [ExaminationComponent],
  imports: [CommonModule, FormsModule, TranslateModule, CheckboxModule, PatientInformationModule, CommonImportsModule]
})
export class ExaminationModule {}
