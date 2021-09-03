import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

import { NumberInputModule } from '@controls/number-input/number-input.module';
import { CalendarInputModule } from '@controls/calendar-input/calendar-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { ResetButtonModule } from '@controls/reset-button/reset-button.module';

import { DynamicBaseModule } from '@abstractions/dynamic-base/dynamic-base.module';

import { TechnologyComponent } from './technology.component';
import { ResetDialogModule } from 'app/shared/dialogs/reset-dialog/reset-dialog.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { TechnologyCommonTemplatesModule } from 'app/shared/common-templates/technology/technology-common-templates.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    DropdownModule,
    RadioButtonModule,
    CheckboxModule,
    DynamicBaseModule,
    RadioButtonModule,
    CalendarInputModule,
    ResetDialogModule,
    FindingColumnModule,
    CommonImportsModule,
    NumberInputModule,
    TechnologyCommonTemplatesModule,
    ResetButtonModule
  ],
  declarations: [TechnologyComponent]
})
export class TechnologyModule {}
