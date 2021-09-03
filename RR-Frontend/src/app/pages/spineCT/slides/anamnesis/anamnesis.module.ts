import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';

import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { MonthYearInputModule } from '@controls/month-year-input/month-year-input.module';

import { AnamnesisComponent } from './anamnesis.component';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { SpineSharedLocalizersModule } from '@sharedPages/spine/localizers/spine-shared-localizers.module';
import { AnamnesisIndicationsComponent } from './anamnesis-indications/anamnesis-indications.component';
import { PreviousInterventionsComponent } from './previous-interventions/previous-interventions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    CommonImportsModule,
    PresetListModule,
    DynamicComponentWrapperModule,
    MonthYearInputModule,
    SpineSharedLocalizersModule,
    FindingColumnModule,
    InfoIconModule
  ],
  declarations: [AnamnesisComponent, AnamnesisIndicationsComponent, PreviousInterventionsComponent]
})
export class AnamnesisModule {}
