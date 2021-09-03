import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

import { InfoIconModule } from '@controls/info-icon/info-icon.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';

import { CommonImportsModule } from 'app/pages/thoraxCT/slides/soft-parts';

import { TechnologyComponent } from './technology.component';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { TechnologyCommonTemplatesModule } from '@commonTemplates/technology/technology-common-templates.module';
import { ResetButtonModule } from '@controls/reset-button/reset-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CommonImportsModule,
    RadioButtonModule,
    DropdownModule,
    CheckboxModule,
    InfoIconModule,
    NumberInputModule,
    FindingColumnModule,
    TechnologyCommonTemplatesModule,
    ResetButtonModule
  ],
  declarations: [TechnologyComponent]
})
export class TechnologyModule {}
