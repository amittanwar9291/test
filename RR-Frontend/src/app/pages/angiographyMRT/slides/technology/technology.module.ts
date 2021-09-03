import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';
import { CalendarInputModule } from '@controls/calendar-input/calendar-input.module';
import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { ResetButtonModule } from '@controls/reset-button/reset-button.module';

import { DynamicBaseModule } from '@abstractions/dynamic-base/dynamic-base.module';

import { TechnologyComponent } from './technology.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { ResetDialogModule } from 'app/shared/dialogs/reset-dialog/reset-dialog.module';
import { TechnologyCommonTemplatesModule } from '@commonTemplates/technology/technology-common-templates.module';
import { ResetDialogComponent } from 'app/shared/dialogs/reset-dialog/reset-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    DropdownModule,
    RadioButtonModule,
    CheckboxModule,
    MultiValueDropdownModule,
    DynamicBaseModule,
    RadioButtonModule,
    CalendarInputModule,
    ResetDialogModule,
    CommonImportsModule,
    DynamicComponentWrapperModule,
    NumberInputModule,
    TechnologyCommonTemplatesModule,
    ResetButtonModule
  ],
  declarations: [TechnologyComponent],
  entryComponents: [ResetDialogComponent]
})
export class TechnologyModule {}
