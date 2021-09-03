import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NumberInputModule } from '@controls/number-input/number-input.module';
import { ResetButtonModule } from '@controls/reset-button/reset-button.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

import { TranslateModule } from '@ngx-translate/core';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';

import { TechnologyCommonTemplatesModule } from '@commonTemplates/technology/technology-common-templates.module';

import { TechnologyComponent } from './technology.component';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { SliderNumberInputModule } from '@controls/slider-number-input/slider-number-input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RadioButtonModule,
    CommonImportsModule,
    CheckboxModule,
    NumberInputModule,
    TechnologyCommonTemplatesModule,
    DropdownModule,
    ResetButtonModule,
    FindingColumnModule,
    SliderNumberInputModule
  ],
  declarations: [TechnologyComponent]
})
export class TechnologyModule {}
