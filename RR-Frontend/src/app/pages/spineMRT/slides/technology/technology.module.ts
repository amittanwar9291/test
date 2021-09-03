import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { MultiValueDropdownModule } from '@controls/multi-value-dropdown/multi-value-dropdown.module';

import { TranslateModule } from '@ngx-translate/core';

import { TechnologyComponent } from './technology.component';

import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarInputModule } from '@controls/calendar-input/calendar-input.module';
import { ResetDialogModule } from 'app/shared/dialogs/reset-dialog/reset-dialog.module';
import { ResetDialogComponent } from 'app/shared/dialogs/reset-dialog/reset-dialog.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { DynamicComponentWrapperModule } from '@controls/dynamic-component-wrapper/dynamic-component-wrapper.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { TechnologyCommonTemplatesModule } from 'app/shared/common-templates/technology/technology-common-templates.module';
import { ResetButtonModule } from '@controls/reset-button/reset-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    DropdownModule,
    RadioButtonModule,
    CheckboxModule,
    RadioButtonModule,
    CalendarInputModule,
    DynamicComponentWrapperModule,
    ResetDialogModule,
    CommonImportsModule,
    NumberInputModule,
    FindingColumnModule,
    MultiValueDropdownModule,
    TechnologyCommonTemplatesModule,
    ResetButtonModule
  ],
  declarations: [TechnologyComponent],
  entryComponents: [ResetDialogComponent]
})
export class TechnologyModule {}
