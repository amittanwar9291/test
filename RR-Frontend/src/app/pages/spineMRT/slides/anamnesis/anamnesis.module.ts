import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { DynamicBaseModule } from '@abstractions/dynamic-base/dynamic-base.module';

import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';

import { AnamnesisComponent } from './anamnesis.component';
import { SpineLocalizersModule } from '../../shared/spine-localizers.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CheckboxModule,
    RadioButtonModule,
    MultiValueDropdownModule,
    DynamicBaseModule,
    SpineLocalizersModule,
    CommonImportsModule,
    DynamicComponentWrapperModule,
    FindingColumnModule
  ],
  declarations: [AnamnesisComponent]
})
export class AnamnesisModule {}
