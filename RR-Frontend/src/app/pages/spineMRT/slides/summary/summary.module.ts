import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { SummaryComponent } from './summary.component';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

@NgModule({
  imports: [CommonModule, FormsModule, PresetListModule, TranslateModule, CheckboxModule, RadioButtonModule, CommonImportsModule],
  declarations: [SummaryComponent]
})
export class SummaryModule {}
