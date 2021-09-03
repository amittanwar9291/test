import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationComponent } from './localization.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';
import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { SpineSharedLocalizersModule } from '@sharedPages/spine/localizers/spine-shared-localizers.module';
import { PatientInformationModule } from '@commonTemplates/patient-data/patient-information.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    CommonImportsModule,
    PresetListModule,
    PatientInformationModule,
    SpineSharedLocalizersModule
  ],
  declarations: [LocalizationComponent]
})
export class LocalizationModule {}
