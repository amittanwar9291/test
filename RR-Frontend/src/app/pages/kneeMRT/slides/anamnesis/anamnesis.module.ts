import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { AnamnesisComponent } from './anamnesis.component';
import { KneeLocalizersModule } from '../../shared/knee-localizers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PresetListModule,
    TranslateModule,
    CheckboxModule,
    MonthYearInputModule,
    RadioButtonModule,
    KneeLocalizersModule,
    CommonImportsModule
  ],
  declarations: [AnamnesisComponent]
})
export class AnamnesisModule {}
