import { TechnologyComponent } from './technology.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TechnologyCommonTemplatesModule } from '@commonTemplates/technology/technology-common-templates.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';
import { NumberInputModule } from '@controls/number-input/number-input.module';
import { ResetButtonModule } from '@controls/reset-button/reset-button.module';
import { TranslateModule } from '@ngx-translate/core';
import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [TechnologyComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    PresetListModule,
    RadioButtonModule,
    CheckboxModule,
    CommonImportsModule,
    DropdownModule,
    NumberInputModule,
    FindingColumnModule,
    TechnologyCommonTemplatesModule,
    ResetButtonModule
  ]
})
export class TechnologyModule {}
