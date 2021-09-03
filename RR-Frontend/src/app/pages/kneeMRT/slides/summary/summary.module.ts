import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SummaryComponent } from './summary.component';

import { PresetListModule } from 'app/pages/shared/preset-list/preset-list.module';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

@NgModule({
  imports: [CommonModule, FormsModule, PresetListModule, TranslateModule, RadioButtonModule, CommonImportsModule, CheckboxModule],
  declarations: [SummaryComponent]
})
export class SummaryModule {}
