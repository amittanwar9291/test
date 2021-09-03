import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

import { CommonImportsModule } from 'app/shared/common-imports/common-imports.module';

import { SummaryComponent } from './summary.component';

@NgModule({
  declarations: [SummaryComponent],
  imports: [CommonModule, FormsModule, TranslateModule, CheckboxModule, RadioButtonModule, CommonImportsModule]
})
export class SummaryModule {}
