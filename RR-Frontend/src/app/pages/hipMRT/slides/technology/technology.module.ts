import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { TechnologyComponent } from './technology.component';

import { NumberInputModule } from '@controls/number-input/number-input.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { ResetButtonModule } from '@controls/reset-button/reset-button.module';

import { SequencesModule } from '@commonTemplates/technology/sequences/sequences.module';
import { TechnologyCommonTemplatesModule } from '@commonTemplates/technology/technology-common-templates.module';

@NgModule({
  declarations: [TechnologyComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    NumberInputModule,
    FindingColumnModule,
    ResetButtonModule,
    SequencesModule,
    TechnologyCommonTemplatesModule
  ]
})
export class TechnologyModule {}
